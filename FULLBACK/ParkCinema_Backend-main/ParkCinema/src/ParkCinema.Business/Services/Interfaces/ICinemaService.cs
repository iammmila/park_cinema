using ParkCinema.Business.DTOs.Cinema;

namespace ParkCinema.Business.Services.Interfaces;

public interface ICinemaService
{
    Task<List<CinemaDTO>> FindAllAsync();
    Task CreateAsync(CinemaCreateDTO cinemaCreateDTO);
    Task<CinemaDTO> FindByIdAsync(int id);
    Task DeleteAsync(int id);
    Task UpdateAsync(int id, CinemaUpdateDTO cinemaUpdateDTO);
}
