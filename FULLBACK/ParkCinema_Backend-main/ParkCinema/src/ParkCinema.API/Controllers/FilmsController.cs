using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using ParkCinema.Business.DTOs.Film;
using ParkCinema.Business.Services.Interfaces;
using System.Net;

namespace ParkCinema.API.Controllers;

[Route("api/[controller]")]
[ApiController]
[EnableCors("AllowOrigin")]
public class FilmsController : ControllerBase
{

    private readonly IFilmService _filmService;

    public FilmsController(IFilmService filmService)
    {
        _filmService = filmService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll(bool isNew=false)
    {
        var films = await _filmService.FindAllAsync(isNew);
        return Ok(films);
    }

    [HttpPost]
    public async Task<IActionResult> Post([FromForm] FilmCreateDTO filmCreateDTO)
    {
        if (!ModelState.IsValid)
        {
            return StatusCode(StatusCodes.Status400BadRequest, ModelState);
        }
        await _filmService.CreateAsync(filmCreateDTO);
        return StatusCode((int)HttpStatusCode.Created);


    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetFilmById([FromRoute] int id)
    {
        var film = await _filmService.FindByIdAsync(id);
        return Ok(film);
    }


    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        await _filmService.DeleteAsync(id);
        return Ok();
    }
    //? I WILL FIX THIS CONTROLLER AND SERVICE
    [HttpPut]
    public async Task<IActionResult> Update(int id, [FromForm] FilmUpdateDTO filmUpdateDTO)
    {

        await _filmService.UpdateAsync(id, filmUpdateDTO);
        return Ok();
    }

}
