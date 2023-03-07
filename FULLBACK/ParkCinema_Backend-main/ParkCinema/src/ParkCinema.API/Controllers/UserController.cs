using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ParkCinema.Business.DTOs.AppUser;
using ParkCinema.Business.Services.Interfaces;
using ParkCinema.Core.Enums;
using System.Net;

namespace ParkCinema.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class UserController : ControllerBase
{
    private readonly IUserService _userService;

    public UserController(IUserService userService)
    {
        _userService = userService;
    }

    


    [HttpPost("moderator")]
    [Authorize(Policy = "AdminPolicy")]
    public async Task <IActionResult> AddModerator(UserCreateDTO userCreateDTO)
    {
        
       await  _userService.AddUserAsync(userCreateDTO,Roles.Moderator);
        return Ok(StatusCode((int)HttpStatusCode.Created));
    }
    
    [HttpPost("admin")]
    [Authorize(Policy = "SuperAdminPolicy")]
    public async Task< IActionResult> AddAdmin(UserCreateDTO userCreateDTO)
    {
        
       await _userService.AddUserAsync(userCreateDTO,Roles.Admin);
        return Ok(StatusCode((int)HttpStatusCode.Created));
    }



}
