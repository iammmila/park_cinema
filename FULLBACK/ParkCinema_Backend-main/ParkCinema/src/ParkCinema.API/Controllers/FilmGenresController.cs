using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ParkCinema.Business.DTOs.FilmGenre;
using ParkCinema.Business.Services.Interfaces;
using System.Net;

namespace ParkCinema.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class FilmGenresController : ControllerBase
{

    private readonly IFilmGenreService _filmGenreService;

    public FilmGenresController(IFilmGenreService filmGenreService)
    {
        _filmGenreService = filmGenreService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var film_genres = await _filmGenreService.FindAllAsync();
        return Ok(film_genres);
    }

    [HttpPost]
    public async Task<IActionResult> Post(FilmGenreCreateDTO filmGenreCreateDTO)
    {
        await _filmGenreService.CreateAsync(filmGenreCreateDTO);
        return StatusCode((int)HttpStatusCode.Created);
    }


    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id,List<int> Genres_Id)
    {
        await _filmGenreService.DeleteAsync(id,Genres_Id);
        return Ok();
    }


    [HttpPut("{filmId:int}/genres/{genreId:int}")]
    public async Task<IActionResult> UpdateFilmGenre(int filmId, int genreId, [FromBody] FilmGenreUpdateDTO filmGenreupdataeDto)
    {
        await _filmGenreService.UpdateAsync(filmId, genreId, filmGenreupdataeDto);
        return Ok();
    }

}
