namespace ParkCinema.Application.Abstraction.Services;

public interface IQRCodeService
{
    byte[] GenerateQRCode(string text);
}
