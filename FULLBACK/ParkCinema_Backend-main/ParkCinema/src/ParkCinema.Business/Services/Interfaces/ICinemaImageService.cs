using ParkCinema.Business.DTOs.Cinema;
using ParkCinema.Business.DTOs.CinemaImage;

namespace ParkCinema.Business.Services.Interfaces;

public interface ICinemaImageService
{
    Task<List<CinemaImageDTO>> FindAllAsync();
    Task CreateAsync(CinemaImageCreateDTO cinemaImageCreateDTO);
    Task<CinemaDTO> FindByIdAsync(int id);
    Task DeleteAsync(int id);
    Task UpdateAsync(int id, CinemaImageUpdateDTO cinemaImageUpdateDTO);
}
