namespace ParkCinema.Business.DTOs.FilmGenre;

public class FilmGenreCreateDTO
{
    public int Film_Id { get; set; } 
    public List<int> Genres_Id { get; set; } = null!;
}
