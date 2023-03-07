namespace ParkCinema.Core.Entities;

public class Film_Subtitle
{
    public int Film_Id { get; set; }
    public Film Film { get; set; } = null!;   
    
    public int Subtitle_Id { get; set; }
    public Subtitle Subtitle { get; set; } = null!;



}
