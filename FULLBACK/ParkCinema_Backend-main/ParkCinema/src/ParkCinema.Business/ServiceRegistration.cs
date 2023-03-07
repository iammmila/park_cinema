using Microsoft.Extensions.DependencyInjection;
using ParkCinema.Business.Services.Implementations;
using ParkCinema.Business.Services.Interfaces;

namespace ParkCinema.Business;

public static class ServiceRegistration
{
    public static void AddBusinessServices(this IServiceCollection services)
    {
        services.AddScoped<IFilmService, FilmService>();
        services.AddScoped<IGenreService, GenreService>();
        services.AddScoped<ILanguageService, LanguageService>();
        services.AddScoped<ISubtitleService, SubtitleService>();
        services.AddScoped<IFormatService, FormatService>();
        services.AddScoped<IFilmGenreService, FilmGenreService>();
        services.AddScoped<IBookingService, BookingService>();
        services.AddScoped<IUserService, UserService>();
        services.AddScoped<IAuthService, AuthService>();
        services.AddScoped<IHallService, HallService>();
        services.AddScoped<ISessionService, SessionService>();

    }

}
