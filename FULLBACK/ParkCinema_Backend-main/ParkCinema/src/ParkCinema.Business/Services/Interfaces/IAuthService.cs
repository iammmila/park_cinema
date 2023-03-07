using ParkCinema.Business.DTOs.Auth;

namespace ParkCinema.Business.Services.Interfaces;

public interface IAuthService
{
    Task<TokenResponseDTO> LoginAsync(LoginDTO login);
}
