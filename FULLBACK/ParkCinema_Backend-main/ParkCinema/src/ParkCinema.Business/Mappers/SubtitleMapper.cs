using AutoMapper;
using ParkCinema.Business.DTOs.Subtitle;
using ParkCinema.Core.Entities;

namespace ParkCinema.Business.Mappers;

public class SubtitleMapper:Profile
{
	public SubtitleMapper()
	{
		CreateMap<SubtitleCreateDTO, Subtitle>().ReverseMap();
		CreateMap<Subtitle,SubtitleDTO>().ReverseMap();	
	}
}
