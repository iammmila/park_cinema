namespace ParkCinema.Business.DTOs;

public class TicketViewModel
{
    public string? Film { get; set; }
    public DateTime StartTime { get; set; }
    public int Row { get; set; }
    public int Column { get; set; }
    public long Price { get; set; }
    public string? HallName { get; set; }
}
