using ParkCinema.Business.DTOs.Film;

namespace ParkCinema.Business.Services.Interfaces;

public interface IFilmService
{
    Task<List<FilmDTO>> FindAllAsync(bool IsNew = false);
    Task CreateAsync(FilmCreateDTO filmDTO);
    Task<FilmDTO> FindByIdAsync(int id);
    Task DeleteAsync(int id);
    Task UpdateAsync(int id, FilmUpdateDTO courseUpdateDto);

    //Task<List<FilmDTO>> FindByConditionAsync(Expression<Func<Film, bool>> expression);

}
 