using ParkCinema.Core.Entities;
using ParkCinema.DataAccess.Contexts;
using ParkCinema.DataAccess.Interfaces;

namespace ParkCinema.DataAccess.Repositories;

public class SubtitleRepository : Repository<Subtitle>, ISubtitleRepository
{
    public SubtitleRepository(AppDbContext context) : base(context)
    {
    }
}
