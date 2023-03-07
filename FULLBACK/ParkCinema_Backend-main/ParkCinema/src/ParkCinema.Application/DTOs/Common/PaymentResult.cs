namespace ParkCinema.Application.DTOs.Common;

public class PaymentResult
{
    public bool Succeeded { get; set; }
    public string? Message { get; set; }
    public string? TransactionId { get; set; }
}
