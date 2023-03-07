using ParkCinema.Core.Interfaces;
using System.ComponentModel.DataAnnotations.Schema;

namespace ParkCinema.Core.Entities;

public class Film : IEntity
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public int AgeLimit { get; set; }
    public int DurationMinute { get; set; }
    public string? Country { get; set; }
    public string? Director { get; set; }
    public string? Actors { get; set; }
    public string? Description { get; set; }
    public string? Trailer { get; set; }
    public string? Poster { get; set; }
    public string? Uri { get; set; }
    public string? PosterPathOrContainerName { get; set; }
    public bool IsNew { get; set; }
    public DateTime Date { get; set; }

    // 
    [NotMapped]
    public ICollection<Film_Genre> Film_Genres { get; set; } = null!;

    [NotMapped]
    public ICollection<Film_Language> Film_Languages { get; set; } = null!;

    [NotMapped]
    public ICollection<Film_Format> Film_Formats { get; set; } = null!; 
    
    [NotMapped]
    public ICollection<Film_Subtitle> Film_Subtitles { get; set; }=null!;    
    [NotMapped]
    public ICollection<Session> Sessions { get; set; }=null!;
}
