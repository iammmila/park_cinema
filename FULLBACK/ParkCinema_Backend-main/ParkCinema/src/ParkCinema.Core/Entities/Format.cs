using ParkCinema.Core.Interfaces;
using System.ComponentModel.DataAnnotations.Schema;

namespace ParkCinema.Core.Entities;

public class Format : IEntity
{
    public int Id { get ; set ; }
    public string? Name { get ; set ; }


    [NotMapped]
    public ICollection<Film_Format> Film_Formats { get; set; } = null!;
    [NotMapped]
    public ICollection<Session> Sessions { get; set; } = null!;
    

}
