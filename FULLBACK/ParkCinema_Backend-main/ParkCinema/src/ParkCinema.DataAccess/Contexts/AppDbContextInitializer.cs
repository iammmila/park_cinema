using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using ParkCinema.Core.Entities.Identity;
using ParkCinema.Core.Enums;
using ParkCinema.DataAccess.Exceptions;

namespace ParkCinema.DataAccess.Contexts;

public class AppDbContextInitializer
{
    private readonly UserManager<AppUser> _userManager;
    private readonly RoleManager<IdentityRole> _roleManager;
    private readonly IConfiguration _configuration;

    public AppDbContextInitializer(UserManager<AppUser> userManager,
        RoleManager<IdentityRole> roleManager,
        IConfiguration configuration)
    {
        _userManager = userManager;
        _roleManager = roleManager;
        _configuration = configuration;
    }


    public async Task UserSeedAsync()
    {
        AppUser user = new AppUser
        {
            UserName = _configuration["AdminSettings:Name"],
            Email = _configuration["AdminSettings:Email"],
            IsActive=true
        };


        await _userManager.CreateAsync(user, _configuration["AdminSettings:Password"]);

        var roleExists = await _roleManager.RoleExistsAsync(Roles.SuperAdmin.ToString());
        if (!roleExists)
        {
            await _roleManager.CreateAsync(new IdentityRole(Roles.SuperAdmin.ToString()));
        }

        var identityResult = await _userManager.AddToRoleAsync(user, Roles.SuperAdmin.ToString());
        if (!identityResult.Succeeded)
        {
            int count = 0;
            string msg = string.Empty;
            foreach (var error in identityResult.Errors)
            {
                msg += count == 0 ? $"{error}" : $",{error}";
                count++;
            }
            throw new AdminCreateException(msg);
        }
    }



}
