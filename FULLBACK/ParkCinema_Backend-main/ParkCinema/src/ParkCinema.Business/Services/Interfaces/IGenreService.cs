using ParkCinema.Business.DTOs.Genre;

namespace ParkCinema.Business.Services.Interfaces;

public interface IGenreService
{
    Task<List<GenreDTO>> FindAllAsync();
    Task<GenreDTO> FindByIdAsync(int id);
    Task CreateAsync(GenreCreateDTO createGnreDTO);
    Task DeleteAsync(int id);
}
