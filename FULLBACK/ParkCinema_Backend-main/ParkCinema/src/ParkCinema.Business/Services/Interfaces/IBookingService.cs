using ParkCinema.Business.DTOs.Booking;

namespace ParkCinema.Business.Services.Interfaces;

public interface IBookingService
{
    Task<byte[]> CreateCharge(BookingDTO bookingDTO, CancellationToken cancellationToken);
}
