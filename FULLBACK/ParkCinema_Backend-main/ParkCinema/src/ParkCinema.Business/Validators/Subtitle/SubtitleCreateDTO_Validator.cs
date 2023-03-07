using FluentValidation;
using ParkCinema.Business.DTOs.Subtitle;

namespace ParkCinema.Business.Validators.Subtitle;

public class SubtitleCreateDTO_Validator:AbstractValidator<SubtitleCreateDTO>
{
	public SubtitleCreateDTO_Validator()
	{

        RuleFor(p => p.Name).NotNull().NotEmpty().WithMessage("Language name is requried")
                            .MaximumLength(4).WithMessage("Subtitle language should be less than 4 character");
    }
}
