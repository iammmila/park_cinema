using FluentValidation;
using ParkCinema.Business.DTOs.Format;

namespace ParkCinema.Business.Validators.Format;

public class FormatCreateDTO_Validator:AbstractValidator<FormatCreateDTO>
{
    public FormatCreateDTO_Validator()
    {
        RuleFor(p => p.Name).NotNull().NotEmpty().WithMessage("Format name is requried")
            .MaximumLength(10).WithMessage("Format name must be less than 10 character");

    }

}
