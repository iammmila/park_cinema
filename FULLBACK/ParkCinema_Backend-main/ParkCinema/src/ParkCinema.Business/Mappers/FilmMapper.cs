using AutoMapper;
using ParkCinema.Business.DTOs.Film;
using ParkCinema.Business.DTOs.Format;
using ParkCinema.Business.DTOs.Genre;
using ParkCinema.Business.DTOs.Language;
using ParkCinema.Business.DTOs.Subtitle;
using ParkCinema.Core.Entities;

namespace ParkCinema.Business.Mappers;

public class FilmMapper : Profile
{
    public FilmMapper()
    {
        CreateMap<Film, FilmDTO>()
            .ForMember(x => x.Genres, opt => opt.MapFrom(s => s.Film_Genres
                .Select(g => new GenreDTO { GenreId = g.Genre_Id,Name=g.Genre.Name})
            ))
            .ForMember(x => x.Subtitles, opt => opt.MapFrom(s => s.Film_Subtitles
                .Select(g => new SubtitleDTO { Id = g.Subtitle_Id, Name = g.Subtitle.Name})
            ))
            .ForMember(x => x.Languages, opt => opt.MapFrom(s => s.Film_Languages
                .Select(g => new LanguageDTO { Id = g.Language_Id, Name = g.Language.Name })
            ))
            .ForMember(x => x.Formats, opt => opt.MapFrom(s => s.Film_Formats
                .Select(g => new FormatDTO { Id = g.Format_Id, Name = g.Format.Name })
            ))
            .ReverseMap();

        CreateMap<FilmCreateDTO, Film>().ReverseMap();
        CreateMap<FilmUpdateDTO, Film>().ReverseMap();


     


    }
}
