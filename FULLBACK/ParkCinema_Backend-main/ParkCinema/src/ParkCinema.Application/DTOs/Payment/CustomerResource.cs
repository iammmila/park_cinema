namespace ParkCinema.Application.DTOs.Payment;

public record CustomerResource(
    string CustomerId,
    string Email,
    string Name);