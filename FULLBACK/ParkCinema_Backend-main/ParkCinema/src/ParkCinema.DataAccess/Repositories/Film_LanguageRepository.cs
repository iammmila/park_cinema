using ParkCinema.Core.Entities;
using ParkCinema.DataAccess.Contexts;
using ParkCinema.DataAccess.Interfaces;

namespace ParkCinema.DataAccess.Repositories;

public class Film_LanguageRepository : Repository<Film_Language>, IFilm_LanguageRepository
{
    public Film_LanguageRepository(AppDbContext context) : base(context)
    {
    }
}
