using ParkCinema.Business.DTOs.AppUser;
using ParkCinema.Core.Enums;

namespace ParkCinema.Business.Services.Interfaces;

public interface IUserService
{
    Task AddUserAsync(UserCreateDTO userCreateDTO,Roles role); 
    Task<UserDTO> GetUserByIdAsync(int Id); 
    Task<bool> DeleteUserAsync(UserUpdateDTO userUpdateDTO);
}
