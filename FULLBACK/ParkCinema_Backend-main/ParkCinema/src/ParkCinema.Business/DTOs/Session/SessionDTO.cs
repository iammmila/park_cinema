using ParkCinema.Business.DTOs.Film;
using ParkCinema.Business.DTOs.Format;
using ParkCinema.Business.DTOs.Hall;
using ParkCinema.Business.DTOs.Language;
using ParkCinema.Business.DTOs.Subtitle;

namespace ParkCinema.Business.DTOs.Session;

public class SessionDTO
{
    public int Id { get; set; }
    public DateTime StartTime { get; set; }
    public int Price { get; set; }


    public int Hall_Id { get; set; }
    public HallDTO Hall { get; set; } = null!;

    public int Film_Id { get; set; }
    public FilmDTO Film { get; set; } = null!;

    public int Format_Id { get; set; }
    public FormatDTO Format { get; set; } = null!;

    public int Language_Id { get; set; }
    public LanguageDTO Language { get; set; } = null!;

    public int Subtitle_Id { get; set; }
    public SubtitleDTO Subtitle { get; set; } = null!;



}
