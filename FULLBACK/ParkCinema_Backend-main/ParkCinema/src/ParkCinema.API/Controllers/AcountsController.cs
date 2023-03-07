using Microsoft.AspNetCore.Mvc;
using ParkCinema.Business.DTOs.Auth;
using ParkCinema.Business.Services.Interfaces;

namespace ParkCinema.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AcountsController : ControllerBase
{
    private readonly IAuthService _service;

    public AcountsController(IAuthService service)
    {
        _service = service;
    }

    [HttpPost("[action]")]
    public async Task<IActionResult> Login(LoginDTO loginDTO)
    {
            var responseToken = await _service.LoginAsync(loginDTO);
            return Ok(responseToken);
    }

}