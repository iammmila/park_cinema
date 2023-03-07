using AutoMapper;
using ParkCinema.Business.DTOs.Cinema;
using ParkCinema.Business.Services.Interfaces;
using ParkCinema.DataAccess.Interfaces;

namespace ParkCinema.Business.Services.Implementations;

public class CinemaService : ICinemaService
{

    private readonly ICinemaRepository _cinemaRepository;
    private readonly IMapper _mapper;
    
    public CinemaService(ICinemaRepository cinemaRepository, IMapper mapper)
    {
        _cinemaRepository = cinemaRepository;
        _mapper = mapper;
    }

    public Task CreateAsync(CinemaCreateDTO cinemaCreateDTO)
    {
        throw new NotImplementedException();
    }

    public Task DeleteAsync(int id)
    {
        throw new NotImplementedException();
    }

    public Task<List<CinemaDTO>> FindAllAsync()
    {
        throw new NotImplementedException();
    }

    public Task<CinemaDTO> FindByIdAsync(int id)
    {
        throw new NotImplementedException();
    }

    public Task UpdateAsync(int id, CinemaUpdateDTO cinemaUpdateDTO)
    {
        throw new NotImplementedException();
    }
}
