using Microsoft.AspNetCore.Mvc;
using ParkCinema.Business.DTOs.Genre;
using ParkCinema.Business.DTOs.Language;
using ParkCinema.Business.Services.Interfaces;
using System.Net;

namespace ParkCinema.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class LanguagesController : ControllerBase
{
    private readonly ILanguageService _languageService;

    public LanguagesController(ILanguageService languageService)
    {
        _languageService = languageService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var languages = await _languageService.FindAllAsync();
        return Ok(languages);
    }

    [HttpPost]
    public async Task<IActionResult> Post(LanguageCreateDTO languageCreateDTO)
    {
        if (!ModelState.IsValid)
        {
            return StatusCode(StatusCodes.Status400BadRequest, ModelState);
        }

        await _languageService.CreateAsync(languageCreateDTO);
        return StatusCode((int)HttpStatusCode.Created);

    }


    [HttpGet("{id}")]
    public async Task<IActionResult> GetGenreById([FromRoute] int id)
    {

        var language = await _languageService.FindByIdAsync(id);
        return Ok(language);

    }


    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        await _languageService.DeleteAsync(id);
        return Ok();
    }

}
