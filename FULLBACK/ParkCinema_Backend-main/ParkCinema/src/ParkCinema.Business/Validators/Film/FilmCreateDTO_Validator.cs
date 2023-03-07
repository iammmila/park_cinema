using FluentValidation;
using ParkCinema.Business.DTOs.Film;

namespace ParkCinema.Business.Validators.Film;

public class FilmCreateDTO_Validator : AbstractValidator<FilmCreateDTO>
{
    public FilmCreateDTO_Validator()
    {
        RuleFor(filmDto => filmDto.Name).NotNull().NotEmpty().WithMessage("Film name is requried")
                                        .Length(1, 100).WithMessage("Film name must be between 1 and 100 character ");
        RuleFor(filmDto => filmDto.AgeLimit).InclusiveBetween(2, 30).WithMessage("Age range must be between 2 and 30");
        RuleFor(filmDto => filmDto.DurationMinute).InclusiveBetween(2, 360).WithMessage("Duration range must be between 2 minutes and 360 minutes");
        RuleFor(filmDto => filmDto.Country).NotNull().NotEmpty().WithMessage("Country name is requried")
                                        .Length(1, 100).WithMessage("Country name must be less than 100 character ");
        RuleFor(filmDto => filmDto.Director).NotNull().NotEmpty().WithMessage("Director name is requried")
                                        .Length(1, 100).WithMessage("Director name must be less than 100 character ");
        RuleFor(filmDto => filmDto.Director).NotNull().NotEmpty().WithMessage("Director name is requried")
                                        .Length(3, 300).WithMessage("The range of charecters must be between 3 and 300");
        RuleFor(filmDto => filmDto.Trailer).NotNull().NotEmpty().WithMessage("Trailer is requried");
        RuleFor(filmDto => filmDto.Image).NotNull().NotEmpty().WithMessage("Image is requried");
        RuleFor(filmdDto=>filmdDto.Actors).NotNull().NotEmpty().WithMessage("Actors name is requried");
        RuleFor(filmdDto=>filmdDto.IsNew).NotNull().WithMessage("This field is requried");

    }
}
