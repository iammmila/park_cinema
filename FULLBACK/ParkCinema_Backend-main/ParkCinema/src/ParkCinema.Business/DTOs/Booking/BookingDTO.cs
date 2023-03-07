namespace ParkCinema.Business.DTOs.Booking;

public class BookingDTO
{
    public int SessionID { get; set; }
    public int SeatID { get; set; }
    public string? ReceiptEmail { get; set; }
    public string? Name { get; set; }
    public string? Number { get; set; }
    public string? ExpiryYear { get; set; }
    public string? ExpiryMonth { get; set; }
    public string? Cvc { get; set; }
}
