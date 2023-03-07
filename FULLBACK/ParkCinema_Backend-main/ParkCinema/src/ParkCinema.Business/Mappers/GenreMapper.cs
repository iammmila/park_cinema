using AutoMapper;
using ParkCinema.Business.DTOs.Genre;
using ParkCinema.Core.Entities;

namespace ParkCinema.Business.Mappers;

public class GenreMapper : Profile
{
	public GenreMapper()
	{
		CreateMap<Genre, GenreDTO>()
			.ForMember(x => x.GenreId, y => y.MapFrom(y => y.Id))
			.ReverseMap();

		CreateMap<GenreCreateDTO,Genre>().ReverseMap();
			
	}
}
