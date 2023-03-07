namespace ParkCinema.Business.DTOs.Auth;


    public class TokenResponseDTO
    {
        public string? Token { get; set; }
        public DateTime ExpireDate { get; set; }
        public string? UserName { get; set; }
    }
