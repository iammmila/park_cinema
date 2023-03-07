using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using ParkCinema.Business.DTOs.Auth;
using ParkCinema.Business.Services.Interfaces;
using ParkCinema.Business.Utilities.Exceptions;
using ParkCinema.Core.Entities.Identity;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace ParkCinema.Business.Services.Implementations;

public class AuthService:IAuthService
{

    public readonly UserManager<AppUser> _userManager;
    public readonly IConfiguration _configuration;

    public AuthService(UserManager<AppUser> userManager, IConfiguration configuration)
    {
        _userManager = userManager;
        _configuration = configuration;
    }

    public async Task<TokenResponseDTO> LoginAsync(LoginDTO login)
    {
        var user = await _userManager.FindByNameAsync(login.EmailOrUserName);
        if (user is null) throw new AuthCreateFailException("Username or Password are invalid ");

        var check = await _userManager.CheckPasswordAsync(user, login.Password);
        if (!check) throw new AuthCreateFailException("Username or Password are invalid");

        List<Claim> claims = new List<Claim>()
            {
                new Claim(ClaimTypes.Name,user.UserName),
                new Claim(ClaimTypes.NameIdentifier,user.Id),
                new Claim(ClaimTypes.Email,user.Email)

            };

        var roles = await _userManager.GetRolesAsync(user);
        foreach (var role in roles)
        {
            claims.Add(new Claim(ClaimTypes.Role, role));
        }


        SymmetricSecurityKey securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWtSettings:SecurityKey"]));
        SigningCredentials signingCredentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
        JwtSecurityToken jwtSecurityToken = new JwtSecurityToken(
             issuer: _configuration["JWtSettings:Issues"],
             audience: _configuration["JWtSettings:Audience"],
             claims: claims,
             notBefore: DateTime.UtcNow,
             expires: DateTime.UtcNow.AddMinutes(10),
             signingCredentials: signingCredentials
            );


        JwtSecurityTokenHandler jwtSecurityTokenHandler = new JwtSecurityTokenHandler();
        var token = jwtSecurityTokenHandler.WriteToken(jwtSecurityToken);

        return new()
        {
            Token = token,
            ExpireDate = jwtSecurityToken.ValidTo,
            UserName = user.UserName,
        };


    }



}
