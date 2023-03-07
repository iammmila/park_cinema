using ParkCinema.Core.Interfaces;
using System.ComponentModel.DataAnnotations.Schema;

namespace ParkCinema.Core.Entities;

public class Genre : IEntity
{
    public int Id { get; set; }
    public string? Name { get; set; }

    //

    [NotMapped]
    public ICollection<Film_Genre> Film_Genres { get; set; } = null!;
}
