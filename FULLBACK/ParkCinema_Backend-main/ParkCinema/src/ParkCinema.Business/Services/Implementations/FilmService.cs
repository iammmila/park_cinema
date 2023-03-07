using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using ParkCinema.Application.Abstraction.Storage;
using ParkCinema.Business.DTOs.Film;
using ParkCinema.Business.Services.Interfaces;
using ParkCinema.Business.Utilities.Exceptions;
using ParkCinema.Core.Entities;
using ParkCinema.DataAccess.Interfaces;

namespace ParkCinema.Business.Services.Implementations;

public class FilmService : IFilmService
{
    private readonly IFilmRepository _filmRepository;
    private readonly IFilm_GenreRepository _film_GenreRepository;
    private readonly IFilm_FormatRepository _film_FormatRepository;
    private readonly IFilm_LanguageRepository _film_LanguageRepository;
    private readonly IFilm_SubtitleRepository _film_SubtitleRepository;
    private readonly IGenreRepository _genreRepository;
    private readonly IFormatRepository _formatRepository;
    private readonly ILanguageRepository _languageRepository;
    private readonly ISubtitleRepository _subtitleRepository;
    private readonly IMapper _mapper;
    private readonly IStorageService _storageService;
    private readonly IConfiguration _configuration;
    public FilmService(IFilmRepository filmRepository,
                       IFilm_GenreRepository film_GenreRepository,
                       IFilm_FormatRepository film_FormatRepository,
                       IFilm_LanguageRepository film_LanguageRepository,
                       IFilm_SubtitleRepository film_SubtitleRepository,
                       IGenreRepository genreRepository,
                       IFormatRepository formatRepository,
                       ILanguageRepository languageRepository,
                       ISubtitleRepository subtitleRepository,
                       IMapper mapper,
                       IStorageService storageService,
                       IConfiguration configuration
        )
    {
        _filmRepository = filmRepository;
        _film_GenreRepository = film_GenreRepository;
        _film_LanguageRepository = film_LanguageRepository;
        _film_SubtitleRepository = film_SubtitleRepository;
        _film_FormatRepository = film_FormatRepository;
        _formatRepository = formatRepository;
        _languageRepository = languageRepository;
        _subtitleRepository = subtitleRepository;
        _genreRepository = genreRepository;

        _mapper = mapper;

        _storageService = storageService;

        _configuration = configuration;
    }


    //? Fix the bug in the update 
    //? Update and Delete images from container


    public async Task<List<FilmDTO>> FindAllAsync(bool IsNew)
    {

        //! Take Join tables
        var films = await _filmRepository.FindByCondition(con => con.IsNew == IsNew)
            .Include(fg => fg.Film_Genres).ThenInclude(g => g.Genre)
            .Include(fl => fl.Film_Languages).ThenInclude(fl => fl.Language)
            .Include(ff => ff.Film_Formats).ThenInclude(ff => ff.Format)
            .Include(fs => fs.Film_Subtitles).ThenInclude(fs => fs.Subtitle)
            .ToListAsync();


        //! Mapping film to filmDto
        List<FilmDTO> filmDTO = _mapper.Map<List<FilmDTO>>(films);

        return filmDTO;
    }
    public async Task CreateAsync(FilmCreateDTO filmCreateDTO)
    {
      
        if (filmCreateDTO is null)
        {
            throw new NullReferenceException("Film is null");
        }

        //! Maybe there is not genre,lang,subtitle,format in this id,check all of them
        foreach (var id in filmCreateDTO.Genres_Id)
        {
            var genre = await _genreRepository.FindByIdAsync(id);
            if (genre is null)
            {
                throw new NotFoundException("Not found genre");
            }
        }
        foreach (var id in filmCreateDTO.Languages_Id)
        {
            var language = await _languageRepository.FindByIdAsync(id);
            if (language is null)
            {
                throw new NotFoundException("Not found language");
            }
        }
        foreach (var id in filmCreateDTO.Subtitles_Id)
        {
            var subtitle = await _subtitleRepository.FindByIdAsync(id);
            if (subtitle is null)
            {
                throw new NotFoundException("Not found subtitle");
            }
        }
        foreach (var id in filmCreateDTO.Formats_Id)
        {
            var format = await _formatRepository.FindByIdAsync(id);
            if (format is null)
            {
                throw new NotFoundException("Not found format");
            }
        }

        //! Check image may be null here
        if (filmCreateDTO.Image is null)
        {
            throw new NullReferenceException("Image is null");
        }

        //! Uploud image to Azure storage
        (string fileName, string pathOrContainerName) datas = await _storageService.UploadAsync("filmposters", filmCreateDTO.Image);

        //!Create image uri
        string uri = _configuration["Storage:AzureFilePath"] + @$"{datas.pathOrContainerName}/{datas.fileName}";


        //! Mapping film creatDto to film
        var film = _mapper.Map<Film>(filmCreateDTO);
        film.PosterPathOrContainerName = datas.pathOrContainerName;
        film.Poster = datas.fileName;
        film.Uri = uri;

        //! Add film to film table in db
        await _filmRepository.CreateAsync(film);
        await _filmRepository.SaveChangesAsync();

        //!ADD GENRE
        foreach (var id in filmCreateDTO.Genres_Id)
        {
            Film_Genre film_genre = new()
            {
                Genre_Id = id,
                Film_Id = film.Id
            };
            await _film_GenreRepository.CreateAsync(film_genre);
        }

        //!ADD LANGUAGE
        foreach (var id in filmCreateDTO.Languages_Id)
        {
            Film_Language film_language = new()
            {
                Language_Id = id,
                Film_Id = film.Id
            };
            await _film_LanguageRepository.CreateAsync(film_language);
        }

        //!ADD FORMAT
        foreach (var id in filmCreateDTO.Formats_Id)
        {
            Film_Format film_format = new()
            {
                Format_Id = id,
                Film_Id = film.Id
            };
            await _film_FormatRepository.CreateAsync(film_format);

        }

        //!ADD SUBTITTLE
        foreach (var id in filmCreateDTO.Subtitles_Id)
        {
            Film_Subtitle film_subtitle = new()
            {
                Subtitle_Id = id,
                Film_Id = film.Id
            };
            await _film_SubtitleRepository.CreateAsync(film_subtitle);
        }

        //! Save all changes in join tables
        await _film_GenreRepository.SaveChangesAsync();
        await _film_LanguageRepository.SaveChangesAsync();
        await _film_FormatRepository.SaveChangesAsync();
        await _film_SubtitleRepository.SaveChangesAsync();
    }

    public async Task<FilmDTO> FindByIdAsync(int id)
    {

        //! Take Join tables
        var query = _filmRepository.FindByCondition(con =>  con.Id == id);
        if (query.ToList().Count==0) throw new NotFoundException("Film not found");

        var film = query.Include(fg => fg.Film_Genres).ThenInclude(g => g.Genre)
         .Include(fl => fl.Film_Languages).ThenInclude(fl => fl.Language)
         .Include(ff => ff.Film_Formats).ThenInclude(ff => ff.Format)
         .Include(fs => fs.Film_Subtitles).ThenInclude(fs => fs.Subtitle)
         .Single();


        //! Mapping film to filmDto

        FilmDTO filmDTO = _mapper.Map<FilmDTO>(film);
        return filmDTO;
    }

    public async Task DeleteAsync(int id)
    {
        var film = await _filmRepository.FindByIdAsync(id);
        if (film is null)
        {
            throw new NotFoundException("Film is not found");
        }

        if (film.Poster is null || film.PosterPathOrContainerName is null)
        {
            throw new NotFoundException("Film poster not found");
        }
        //Cehchk and delete from storage
        bool isExsist = _storageService.HasFile(film.PosterPathOrContainerName, film.Poster);
        if (!isExsist) throw new NotFoundException("Film poster couldnot find in this path or contanier.");
        _storageService.Delete(film.PosterPathOrContainerName, film.Poster);
        //Delete from database
        _filmRepository.Delete(film);
        await _filmRepository.SaveChangesAsync();
    }

    public async Task UpdateAsync(int id, FilmUpdateDTO filmUpdateDto)
    {
        if (id != filmUpdateDto.Id)
        {
            throw new BadRequestException("enter valid id");
        }

        var film = await _filmRepository.FindByCondition(con => con.Id == filmUpdateDto.Id).SingleAsync();

        if (film is null)
        {
            throw new NullReferenceException("Film is null");
        }
        var newFilm = _mapper.Map<Film>(filmUpdateDto);

        _filmRepository.Update(newFilm);
        await _filmRepository.SaveChangesAsync();

    }
}
