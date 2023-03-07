using AutoMapper;
using ParkCinema.Business.DTOs.Language;
using ParkCinema.Core.Entities;

namespace ParkCinema.Business.Mappers;

public class LanguageMapper:Profile
{
	public LanguageMapper()
	{
		CreateMap<Language, LanguageDTO>().ReverseMap();
		CreateMap<LanguageCreateDTO, Language>().ReverseMap();
	}
}
