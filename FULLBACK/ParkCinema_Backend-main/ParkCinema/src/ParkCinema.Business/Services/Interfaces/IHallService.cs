using ParkCinema.Business.DTOs.Hall;

namespace ParkCinema.Business.Services.Interfaces;

public interface IHallService
{

    Task<List<HallDTO>> FindAllAsync();


}
