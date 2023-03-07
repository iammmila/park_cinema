using ParkCinema.Core.Interfaces;
using System.ComponentModel.DataAnnotations.Schema;

namespace ParkCinema.Core.Entities;

public class Hall : IEntity
{
    public int Id { get; set; }
    public string? HallName { get; set; }
    public int NumberOfRow { get; set; }
    public int NumberOfColumn { get; set; }
    public string? About { get; set; }


    //Fk
    public int CinemaId { get; set; }
    public Cinema Cinema { get; set; } = null!;


    [NotMapped]
    public ICollection<Seat> Seats { get; set; } = null!;
    [NotMapped]
    public ICollection<Session> Sessions { get; set; } = null!;

}
