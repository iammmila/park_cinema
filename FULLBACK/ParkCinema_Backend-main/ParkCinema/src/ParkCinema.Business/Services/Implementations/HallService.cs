using AutoMapper;
using ParkCinema.Business.DTOs.Hall;
using ParkCinema.Business.Services.Interfaces;
using ParkCinema.DataAccess.Interfaces;

namespace ParkCinema.Business.Services.Implementations;



public class HallService : IHallService
{
    private readonly IHallRepository _hallRepository;
    private readonly IMapper _mapper;
    public HallService(IHallRepository hallRepository,
                       IMapper mapper)
    {
        _hallRepository = hallRepository;
        _mapper = mapper;
    }

    public async Task<List<HallDTO>> FindAllAsync()
    {
        var hall = _hallRepository.FindAll();
        var hallDto = _mapper.Map<List<HallDTO>>(hall);
        return hallDto;
    }
}
