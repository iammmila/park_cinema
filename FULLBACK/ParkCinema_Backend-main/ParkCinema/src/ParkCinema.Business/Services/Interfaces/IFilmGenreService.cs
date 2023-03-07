using ParkCinema.Business.DTOs.Film;
using ParkCinema.Business.DTOs.FilmGenre;

namespace ParkCinema.Business.Services.Interfaces;

public interface IFilmGenreService
{
    Task<List<FilmGenreDTO>> FindAllAsync();
    Task CreateAsync(FilmGenreCreateDTO filmGenreCreateDTO);
    Task DeleteAsync(int film_Id,List<int> Genres_Id);
    Task UpdateAsync(int film_Id, int genres_Id, FilmGenreUpdateDTO filmGenreUpdateDTO);

}
