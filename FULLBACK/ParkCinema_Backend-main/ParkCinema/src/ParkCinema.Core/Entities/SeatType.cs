using ParkCinema.Core.Interfaces;
using System.ComponentModel.DataAnnotations.Schema;

namespace ParkCinema.Core.Entities;

public class SeatType : IEntity
{
    public int Id { get ; set ; }
    public string? Type { get ; set ; }


    [NotMapped]
    public ICollection<Seat> Seats { get; set; } = null!;
}
