namespace ParkCinema.Application.DTOs.Payment;

public record CreateCustomerResource(
    string Email,
    string Name,
    CreateCardResource Card);