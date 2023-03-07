using AutoMapper;
using ParkCinema.Business.DTOs.Format;
using ParkCinema.Core.Entities;

namespace ParkCinema.Business.Mappers;

public class FormatMapper:Profile
{
    public FormatMapper()
    {
        CreateMap<FormatCreateDTO, Format>().ReverseMap();
        CreateMap<Format, FormatDTO>().ReverseMap();
    }
}
