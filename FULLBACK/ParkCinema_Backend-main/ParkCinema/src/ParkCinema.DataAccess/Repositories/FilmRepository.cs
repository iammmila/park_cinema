using ParkCinema.Core.Entities;
using ParkCinema.DataAccess.Contexts;
using ParkCinema.DataAccess.Interfaces;

namespace ParkCinema.DataAccess.Repositories;

public class FilmRepository : Repository<Film>,IFilmRepository
{
    public FilmRepository(AppDbContext context) : base(context)
    {
    }
}
