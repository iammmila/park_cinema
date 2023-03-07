using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using ParkCinema.Business.DTOs.Format;
using ParkCinema.Business.Services.Interfaces;
using System.Net;

namespace ParkCinema.API.Controllers;

[Route("api/[controller]")]
[ApiController]
[EnableCors("AllowOrigin")]
public class FormatsController : ControllerBase
{
    private readonly IFormatService _formatService;

    public FormatsController(IFormatService formatService)
    {
        _formatService = formatService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var formats = await _formatService.FindAllAsync();
        return Ok(formats);
    }

    [HttpPost]
    public async Task<IActionResult> Post(FormatCreateDTO formatCreateDTO)
    {
        if (!ModelState.IsValid)
        {
            return StatusCode(StatusCodes.Status400BadRequest, ModelState);
        }
        await _formatService.CreateAsync(formatCreateDTO);
        return StatusCode((int)HttpStatusCode.Created);
    }


    [HttpGet("{id}")]
    public async Task<IActionResult> GetGenreById([FromRoute] int id)
    {

        var format = await _formatService.FindByIdAsync(id);
        return Ok(format);
    }


    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        await _formatService.DeleteAsync(id);
        return Ok();
    }


}
