using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using ParkCinema.Business.DTOs.Subtitle;
using ParkCinema.Business.Services.Interfaces;
using System.Net;

namespace ParkCinema.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowOrigin")]
    public class SubtitlesController : ControllerBase
    {
        private readonly ISubtitleService _subtitleService;

        public SubtitlesController(ISubtitleService subtitleService)
        {
            _subtitleService = subtitleService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var subtitles = await _subtitleService.FindAllAsync();
            return Ok(subtitles);
        }

        [HttpPost]
        public async Task<IActionResult> Post(SubtitleCreateDTO subtitleCreateDTO)
        {
            if (!ModelState.IsValid)
            {
                return StatusCode(StatusCodes.Status400BadRequest, ModelState);
            }

            await _subtitleService.CreateAsync(subtitleCreateDTO);
            return StatusCode((int)HttpStatusCode.Created);

        }


        [HttpGet("{id}")]
        public async Task<IActionResult> GetSubtitleById([FromRoute] int id)
        {

            var subtitle = await _subtitleService.FindByIdAsync(id);
            return Ok(subtitle);

        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _subtitleService.DeleteAsync(id);
            return Ok();
        }

    }
}
