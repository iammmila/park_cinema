using Microsoft.AspNetCore.Mvc;
using ParkCinema.Business.DTOs.Genre;
using ParkCinema.Business.Services.Interfaces;
using System.Net;

namespace ParkCinema.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class GenresController : ControllerBase
{
    private readonly IGenreService _genreService;

    public GenresController(IGenreService genreService)
    {
        _genreService = genreService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var genres = await _genreService.FindAllAsync();
        return Ok(genres);
    }

    [HttpPost]
    public async Task<IActionResult> Post(GenreCreateDTO genreCreateDTO)
    {
        if (!ModelState.IsValid)
        {
            return StatusCode(StatusCodes.Status400BadRequest, ModelState);
        }

        await _genreService.CreateAsync(genreCreateDTO);
        return StatusCode((int)HttpStatusCode.Created);

    }


    [HttpGet("{id}")]
    public async Task<IActionResult> GetGenreById([FromRoute] int id)
    {

        var genre = await _genreService.FindByIdAsync(id);
        return Ok(genre);

    }


    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        await _genreService.DeleteAsync(id);
        return Ok();
    }




}
