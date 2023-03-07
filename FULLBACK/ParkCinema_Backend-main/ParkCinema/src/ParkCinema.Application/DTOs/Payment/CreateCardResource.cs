namespace ParkCinema.Application.DTOs.Payment;

public record CreateCardResource(
    string Name,
    string Number,
    string ExpiryYear,
    string ExpiryMonth,
    string Cvc);
