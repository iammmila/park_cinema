using ParkCinema.Core.Entities;
using ParkCinema.DataAccess.Contexts;
using ParkCinema.DataAccess.Interfaces;

namespace ParkCinema.DataAccess.Repositories;

public class FormatRepository : Repository<Format>, IFormatRepository
{
    public FormatRepository(AppDbContext context) : base(context)
    {
    }
}
