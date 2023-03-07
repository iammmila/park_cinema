using ParkCinema.Core.Entities;
using ParkCinema.DataAccess.Contexts;
using ParkCinema.DataAccess.Interfaces;

namespace ParkCinema.DataAccess.Repositories;

public class Film_SubtitleRepository : Repository<Film_Subtitle>, IFilm_SubtitleRepository
{
    public Film_SubtitleRepository(AppDbContext context) : base(context)
    {
    }
}
