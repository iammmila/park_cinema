using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ParkCinema.Business.DTOs.Film;
using ParkCinema.Core.Entities;
using System.Net;

namespace ParkCinema.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubscribersController : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            return Ok();
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromForm] Subscriber sub)
        {
        
            return StatusCode((int)HttpStatusCode.Created);


        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetFilmById([FromRoute] int id)
        {
            
            return Ok();
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
          
            return Ok();
        }
        [HttpPut]
        public async Task<IActionResult> Update(int id, [FromForm] FilmUpdateDTO filmUpdateDTO)
        {

            return Ok();
        }
    }
}
