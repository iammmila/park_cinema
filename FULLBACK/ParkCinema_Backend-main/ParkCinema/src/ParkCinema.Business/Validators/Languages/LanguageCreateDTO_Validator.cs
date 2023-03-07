using FluentValidation;
using ParkCinema.Business.DTOs.Language;

namespace ParkCinema.Business.Validators.Languages;

public class LanguageCreateDTO_Validator:AbstractValidator<LanguageCreateDTO>
{
	public LanguageCreateDTO_Validator()
	{
        RuleFor(p => p.Name).NotNull().NotEmpty().WithMessage("Language name is requried")
                            .MaximumLength(100).WithMessage("Language name must be less than 100 character");
    }
}
