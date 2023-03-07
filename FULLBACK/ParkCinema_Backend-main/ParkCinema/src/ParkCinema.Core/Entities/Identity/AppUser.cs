using Microsoft.AspNetCore.Identity;

namespace ParkCinema.Core.Entities.Identity;

public class AppUser:IdentityUser
{
    public bool IsActive { get; set; }
    public string? Fullname { get; set; }

}
