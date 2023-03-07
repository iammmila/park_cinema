using AutoMapper;
using ParkCinema.Business.DTOs.FilmGenre;
using ParkCinema.Business.DTOs.Genre;
using ParkCinema.Core.Entities;

namespace ParkCinema.Business.Mappers;

public class FilmGenreMapper : Profile
{
    public FilmGenreMapper()
    {
        CreateMap<Film_Genre,FilmGenreDTO >().ReverseMap();
        CreateMap<FilmGenreUpdateDTO, Film_Genre>().ReverseMap(); 
    }
}
