using ParkCinema.Core.Entities;
using ParkCinema.DataAccess.Contexts;
using ParkCinema.DataAccess.Interfaces;

namespace ParkCinema.DataAccess.Repositories;

public class GenreRepository : Repository<Genre>, IGenreRepository
{
    public GenreRepository(AppDbContext context) : base(context)
    {
    }
}
