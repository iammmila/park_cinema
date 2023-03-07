
namespace ParkCinema.Core.Entities;

public class Film_Language
{
    public int Film_Id { get; set; }
    public Film Film { get; set; } = null!;

    public int Language_Id { get; set; }
    public Language Language { get; set; } = null!;

}
