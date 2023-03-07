using ParkCinema.Core.Interfaces;

namespace ParkCinema.Core.Entities;

public class Session : IEntity
{
    public int Id { get ; set; }
    public DateTime StartTime { get; set; }
    public int Price { get; set; }


    public int Hall_Id { get; set; }
    public Hall Hall { get; set; } = null!;

    public int Film_Id { get; set; }
    public Film Film { get; set; } = null!;

    public int Format_Id { get; set; }
    public Format Format  { get; set; } = null!;

    public int Language_Id { get; set; }
    public Language Language { get; set; } = null!;

    public int Subtitle_Id { get; set; }
    public Subtitle Subtitle { get; set; } = null!;
    



}
