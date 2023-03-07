using ParkCinema.Business.DTOs.Format;
using ParkCinema.Business.DTOs.Genre;
using ParkCinema.Business.DTOs.Language;
using ParkCinema.Business.DTOs.Subtitle;

namespace ParkCinema.Business.DTOs.Film;

public class FilmDTO
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
    public DateTime Date { get; set; }
    public string? Uri { get; set; }

    // 
    public ICollection<GenreDTO> Genres { get; set; } = null!;
    public ICollection<LanguageDTO> Languages { get; set; } = null!;
    public ICollection<FormatDTO> Formats { get; set; } = null!;
    public ICollection<SubtitleDTO> Subtitles { get; set; } = null!;
}
