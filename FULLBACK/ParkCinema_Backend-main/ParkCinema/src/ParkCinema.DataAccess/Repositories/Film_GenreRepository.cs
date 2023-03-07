using ParkCinema.Core.Entities;
using ParkCinema.DataAccess.Contexts;
using ParkCinema.DataAccess.Interfaces;

namespace ParkCinema.DataAccess.Repositories;

public class Film_GenreRepository : Repository<Film_Genre>, IFilm_GenreRepository
{
    public Film_GenreRepository(AppDbContext context) : base(context)
    {
    }
}
