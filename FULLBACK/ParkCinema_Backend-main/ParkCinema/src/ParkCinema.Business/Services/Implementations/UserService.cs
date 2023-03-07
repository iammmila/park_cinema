using Microsoft.AspNetCore.Identity;
using ParkCinema.Business.DTOs.AppUser;
using ParkCinema.Business.Services.Interfaces;
using ParkCinema.Business.Utilities.Exceptions;
using ParkCinema.Core.Entities.Identity;
using ParkCinema.Core.Enums;

namespace ParkCinema.Business.Services.Implementations;

public class UserService : IUserService
{
    private readonly UserManager<AppUser> _userManager;
    private readonly RoleManager<IdentityRole> _roleManager;
    public UserService(UserManager<AppUser> userManager, RoleManager<IdentityRole> roleManager)
    {
        _userManager = userManager;
        _roleManager = roleManager;
    }

    public async Task AddUserAsync(UserCreateDTO userCreateDTO,Roles role)
    {
        AppUser user = new AppUser
        {
            Fullname= userCreateDTO.Fullname,
            UserName = userCreateDTO.Username,
            Email = userCreateDTO.Email,
            IsActive=true
        };
        var identityResult = await _userManager.CreateAsync(user, userCreateDTO.Password);

        if (!identityResult.Succeeded)
        {
            int count = 0;
            string msg = string.Empty;
            foreach (var error in identityResult.Errors)
            {
                msg += count == 0 ? $"{error}" : $",{error}";
                count++;
            }
            throw new UserCreateFailedException(msg);
        }
        var roleExists = await _roleManager.RoleExistsAsync(role.ToString());
        if (!roleExists)
        {
            await _roleManager.CreateAsync(new IdentityRole(role.ToString()));
        }

        var result = await _userManager.AddToRoleAsync(user, role.ToString());

        if (!result.Succeeded)
        {
            int count = 0;
            string msg = string.Empty;
            foreach (var error in result.Errors)
            {
                msg += count == 0 ? $"{error}" : $",{error}";
                count++;
            }
            throw new AddRoleFailedException(msg);
        }

    }

    public Task<UserDTO> GetUserByIdAsync(int Id)
    {
        throw new NotImplementedException();
    }

    public Task<bool> DeleteUserAsync(UserUpdateDTO userUpdateDTO)
    {
        throw new NotImplementedException();
    }
}
