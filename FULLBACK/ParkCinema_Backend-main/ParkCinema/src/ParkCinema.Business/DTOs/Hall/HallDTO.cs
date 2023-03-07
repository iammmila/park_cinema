namespace ParkCinema.Business.DTOs.Hall;

public class HallDTO
{
    public int Id { get; set; }
    public string? HallName { get; set; }
    public int NumberOfRow { get; set; }
    public int NumberOfColumn { get; set; }
    public string? About { get; set; }
    public int CinemaId { get; set; }
}
