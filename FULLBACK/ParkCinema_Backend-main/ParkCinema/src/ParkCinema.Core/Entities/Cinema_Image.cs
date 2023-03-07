using ParkCinema.Core.Interfaces;

namespace ParkCinema.Core.Entities;

public class Cinema_Image : IEntity
{
    public int Id { get; set; }
    public string? Image { get; set; }
    public string? ImageContainerName { get; set; }
    public string? ImageUri { get; set; }

    public int CinemaId { get; set; }
    public Cinema Cinema { get; set; } = null!;
}
