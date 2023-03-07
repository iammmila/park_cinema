using ParkCinema.API.Middlewares.CustomExceptionMiddleware;

namespace ParkCinema.API.Extensions;

public static class ExceptionHandlerExtension
{
    public static void ConfigureCustomExceptionMiddleware(this WebApplication app)
    {
        app.UseMiddleware<ExceptionMiddleware>();
    }

}
