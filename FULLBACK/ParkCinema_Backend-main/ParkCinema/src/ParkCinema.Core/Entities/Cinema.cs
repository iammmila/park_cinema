using ParkCinema.Core.Interfaces;
using System.ComponentModel.DataAnnotations.Schema;

namespace ParkCinema.Core.Entities;

public class Cinema : IEntity
{
    public int Id { get; set; }
    public string? CinemaName { get; set; }
    public string? PhoneNumber { get; set; }
    public string? WorkHours { get; set; }
    public string? AddressLine { get; set; }
    public string? AddressPath { get; set; }
    public string? MainImage { get; set; }
    public string? MainImageContainerName { get; set; }
    public string? MainImageUri { get; set; }

    // Navigation property
    [NotMapped]
    public ICollection<Cinema_Image> Images { get; set; } = null!;
    [NotMapped]
    public ICollection<Hall> Halls { get; set; } = null!;

}
