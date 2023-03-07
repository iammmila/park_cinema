using Microsoft.Extensions.DependencyInjection;
using ParkCinema.DataAccess.Interfaces;
using ParkCinema.DataAccess.Repositories;

namespace ParkCinema.DataAccess;

public static class ServiceRegistration
{
    public static void AddRepositoryServices(this IServiceCollection services)
    {
        services.AddScoped<IFilmRepository, FilmRepository>();
        services.AddScoped<IFilm_GenreRepository, Film_GenreRepository>();
        services.AddScoped<IFilm_LanguageRepository, Film_LanguageRepository>();
        services.AddScoped<IFilm_FormatRepository, Film_FormatRepository>();
        services.AddScoped<IFilm_SubtitleRepository, Film_SubtitleRepository>();
        services.AddScoped<ISubtitleRepository, SubtitleRepository>();
        services.AddScoped<IFormatRepository, FormatRepository>();
        services.AddScoped<IGenreRepository, GenreRepository>();
        services.AddScoped<ILanguageRepository, LanguageRepository>();
        services.AddScoped<ICinemaRepository, CinemaRepository>();
        services.AddScoped<ICinema_ImageRepository, Cinema_ImageRepository>();
        services.AddScoped<ISessionRepository, SessionRepository>();
        services.AddScoped<IHallRepository, HallRepository>();
        

    }

}
