using ParkCinema.Business.DTOs.Cinema;
using ParkCinema.Business.DTOs.CinemaImage;
using ParkCinema.Business.Services.Interfaces;

namespace ParkCinema.Business.Services.Implementations;

public class CinemaImageService : ICinemaImageService
{
    public Task CreateAsync(CinemaImageCreateDTO cinemaImageCreateDTO)
    {
        throw new NotImplementedException();
    }

    public Task DeleteAsync(int id)
    {
        throw new NotImplementedException();
    }

    public Task<List<CinemaImageDTO>> FindAllAsync()
    {
        throw new NotImplementedException();
    }

    public Task<CinemaDTO> FindByIdAsync(int id)
    {
        throw new NotImplementedException();
    }

    public Task UpdateAsync(int id, CinemaImageUpdateDTO cinemaImageUpdateDTO)
    {
        throw new NotImplementedException();
    }
}
