using AutoMapper;
using Microsoft.EntityFrameworkCore;
using ParkCinema.Business.DTOs.FilmGenre;
using ParkCinema.Business.Services.Interfaces;
using ParkCinema.Business.Utilities.Exceptions;
using ParkCinema.Core.Entities;
using ParkCinema.DataAccess.Interfaces;

namespace ParkCinema.Business.Services.Implementations;

public class FilmGenreService : IFilmGenreService
{
    private readonly IFilm_GenreRepository _film_GenreRepository;
    private readonly IMapper _mapper;
    private readonly IGenreService _genreService;
    private readonly IFilmService _filmService;

    public FilmGenreService(IFilm_GenreRepository film_GenreRepository,
                            IMapper mapper,
                            IGenreService genreService,
                            IFilmService filmService)

    {
        _film_GenreRepository = film_GenreRepository;
        _mapper = mapper;
        _genreService = genreService;
        _filmService = filmService;
    }

    public async Task CreateAsync(FilmGenreCreateDTO filmGenreCreateDTO)
    {
        if (filmGenreCreateDTO is null) throw new NullReferenceException("FilmGenre could not be null");
        var film = await _filmService.FindByIdAsync(filmGenreCreateDTO.Film_Id);
        if (film is null) throw new NotFoundException("Film Not Found");

        foreach (var genre_ID in filmGenreCreateDTO.Genres_Id)
        {
            var genre = await _genreService.FindByIdAsync(genre_ID);
            if (genre is null) throw new NotFoundException("Genre Not Found");
            Film_Genre film_Genre = new Film_Genre
            {
                Film_Id = filmGenreCreateDTO.Film_Id,
                Genre_Id = genre_ID
            };
            var query = _film_GenreRepository.FindByCondition(con => con.Film_Id == filmGenreCreateDTO.Film_Id && con.Genre_Id == genre_ID);
            if (query.ToList().Count != 0)
            {
                throw new BadRequestException("Film is exsist in this genre");
            }

            await _film_GenreRepository.CreateAsync(film_Genre);
        }

        await _film_GenreRepository.SaveChangesAsync();
    }

    public async Task DeleteAsync(int film_Id, List<int> Genres_Id)
    {
        if (Genres_Id is null) throw new NullReferenceException("Genres could not be null");
        var film = await _filmService.FindByIdAsync(film_Id);
        if (film is null) throw new NotFoundException("Film Not Found");


        foreach (var genre_ID in Genres_Id)
        {
            var genre = await _genreService.FindByIdAsync(genre_ID);
            if (genre is null) throw new NotFoundException("Genre Not Found");

            var query = _film_GenreRepository.FindByCondition(con => con.Film_Id == film_Id && con.Genre_Id == genre_ID);
            if (query.ToList().Count == 0)
            {
                throw new BadRequestException("Film is not exsist in this genre");
            }
            var film_Genre = query.Single();
            _film_GenreRepository.Delete(film_Genre);
        }
        await _film_GenreRepository.SaveChangesAsync();
    }

    public async Task<List<FilmGenreDTO>> FindAllAsync()
    {
        var film_genres = await _film_GenreRepository.FindAll().ToListAsync();

        List<FilmGenreDTO> filmGenreDTO = _mapper.Map<List<FilmGenreDTO>>(film_genres);

        return filmGenreDTO;
    }


    //? I WILL FIX
    public async Task UpdateAsync(int film_Id, int genre_Id, FilmGenreUpdateDTO filmGenreUpdateDTO)
    {
        if (filmGenreUpdateDTO is null) throw new BadRequestException("Genres could not be null");
        var film = await _filmService.FindByIdAsync(film_Id);
        if (film is null) throw new NotFoundException("Film Not Found");


        var genre = await _genreService.FindByIdAsync(filmGenreUpdateDTO.Genre_Id);
        if (genre is null) throw new NotFoundException("Genre Not Found");

        var film_Genres = _film_GenreRepository.FindByCondition(con => con.Film_Id == film_Id && con.Genre_Id == genre_Id);
        if (film_Genres == null) throw new NotFoundException("Not found film in this genre");


        var updatedFilm_Genre = _mapper.Map<Film_Genre>(filmGenreUpdateDTO);
        
        
        _film_GenreRepository.Update(updatedFilm_Genre);
        await _film_GenreRepository.SaveChangesAsync();


    }
}
