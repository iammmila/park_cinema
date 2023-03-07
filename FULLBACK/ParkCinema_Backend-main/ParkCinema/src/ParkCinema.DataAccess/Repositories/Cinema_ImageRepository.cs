using ParkCinema.Core.Entities;
using ParkCinema.DataAccess.Contexts;
using ParkCinema.DataAccess.Interfaces;

namespace ParkCinema.DataAccess.Repositories;

public class Cinema_ImageRepository : Repository<Cinema_Image>, ICinema_ImageRepository
{
    public Cinema_ImageRepository(AppDbContext context) : base(context)
    {
    }
}
