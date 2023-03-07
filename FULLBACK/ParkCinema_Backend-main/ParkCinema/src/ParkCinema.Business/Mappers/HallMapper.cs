using AutoMapper;
using ParkCinema.Business.DTOs.Hall;
using ParkCinema.Core.Entities;

namespace ParkCinema.Business.Mappers;

public class HallMapper:Profile
{
	public HallMapper()
	{
        CreateMap<Hall, HallDTO>().ReverseMap();
    }
}
