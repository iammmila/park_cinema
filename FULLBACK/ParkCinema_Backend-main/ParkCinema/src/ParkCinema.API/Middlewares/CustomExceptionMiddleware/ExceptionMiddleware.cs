using ParkCinema.Business.Utilities.Exceptions;
using System.Net;
using System.Net.Mime;
using System.Text.Json;

namespace ParkCinema.API.Middlewares.CustomExceptionMiddleware;

public class ExceptionMiddleware
{
    private readonly RequestDelegate _next;

    public ExceptionMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        try
        {
            await _next(context);
        }
        catch (NotFoundException ex)
        {
            await HandleNotFoundExceptionAsync(context, ex);
        }catch(BadRequestException ex)
        {
            await HandleBadRequestExceptionAsync(context, ex);
        }
        catch (Exception ex)
        {
            await HandleExceptionAsync(context, ex);
        }
    }

    private async Task HandleExceptionAsync(HttpContext context, Exception ex)
    {

        // Set the response status code
        context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;

        // Set the response content type
        context.Response.ContentType = MediaTypeNames.Application.Json;

        // Create the response object
        var response = new
        {
            error = ex.Message,
            StatusCode = context.Response.StatusCode
        };

        // Serialize the response object to JSON
        var json = JsonSerializer.Serialize(response);

        // Write the JSON to the response
        await context.Response.WriteAsync(json);
    }

    private async Task HandleNotFoundExceptionAsync(HttpContext context, NotFoundException ex)
    {

        // Set the response status code
        context.Response.StatusCode = (int)HttpStatusCode.NotFound;

        // Set the response content type
        context.Response.ContentType = MediaTypeNames.Application.Json;

        // Create the response object
        var response = new
        {
            error = ex.Message,
            StatusCode = context.Response.StatusCode
        };

        // Serialize the response object to JSON
        var json = JsonSerializer.Serialize(response);

        // Write the JSON to the response
        await context.Response.WriteAsync(json);
    }


    private async Task HandleBadRequestExceptionAsync(HttpContext context, BadRequestException ex)
    {

        // Set the response status code
        context.Response.StatusCode = (int)HttpStatusCode.BadRequest;

        // Set the response content type
        context.Response.ContentType = MediaTypeNames.Application.Json;

        // Create the response object
        var response = new
        {
            error = ex.Message,
            StatusCode = context.Response.StatusCode
        };

        // Serialize the response object to JSON
        var json = JsonSerializer.Serialize(response);

        // Write the JSON to the response
        await context.Response.WriteAsync(json);
    }

}
