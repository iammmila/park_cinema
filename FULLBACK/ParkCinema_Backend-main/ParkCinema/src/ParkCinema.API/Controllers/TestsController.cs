using Microsoft.AspNetCore.Mvc;
using ParkCinema.Application.Abstraction.Services;
using ParkCinema.Business.Services.Interfaces;
using ParkCinema.Core.Entities;
using ParkCinema.DataAccess.Interfaces;
using ParkCinema.DataAccess.Migrations;
using System.Text.Json;

namespace ParkCinema.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController] 
    public class TestsController : ControllerBase
    {
        private readonly IQRCodeService _qRCodeService;
        private readonly ISessionService _hallService;
        public TestsController(IQRCodeService qRCodeService, ISessionService hallService)
        {
            _qRCodeService = qRCodeService;
            _hallService = hallService;
        }

        //[HttpGet]
        //public async Task<IActionResult> GetAll(bool isNew = false)
        //{
        //    Film film= new Film();
        //    film.Name = "Avatar";
        //    film.AgeLimit = 10;
        //    film.Country = "osirdfhrsuad";
        //    film.Director = "oauiefhuisaedfh";


        //    string json = JsonSerializer.Serialize(film);
        //     var res=_qRCodeService.GenerateQRCode(json);
        //    return File(res,"image/png");
        //}

        [HttpGet]
        public async Task<IActionResult> GetAllHalls()
        {
          var halls= await _hallService.FindAllAsync();
            return Ok(halls);
        }

    }
}
