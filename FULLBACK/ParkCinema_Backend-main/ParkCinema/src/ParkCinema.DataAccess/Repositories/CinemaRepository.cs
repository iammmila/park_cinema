using ParkCinema.Core.Entities;
using ParkCinema.DataAccess.Contexts;
using ParkCinema.DataAccess.Interfaces;

namespace ParkCinema.DataAccess.Repositories;

public class CinemaRepository : Repository<Cinema>, ICinemaRepository
{
    public CinemaRepository(AppDbContext context) : base(context)
    {
    }
}
