using ParkCinema.Core.Entities;
using ParkCinema.DataAccess.Contexts;
using ParkCinema.DataAccess.Interfaces;

namespace ParkCinema.DataAccess.Repositories;

public class HallRepository : Repository<Hall>, IHallRepository
{
    public HallRepository(AppDbContext context) : base(context)
    {
    }
}
