using FluentValidation;
using ParkCinema.Business.DTOs.Genre;

namespace ParkCinema.Business.Validators.Genre;

public class GenreCreateDTO_Validator : AbstractValidator<GenreCreateDTO>
{
	public GenreCreateDTO_Validator()
	{
		RuleFor(p => p.Name).NotNull().NotEmpty().WithMessage("Genre name is requried")
			.MaximumLength(100).WithMessage("Genre name must be less than 100 character");

    }
}
