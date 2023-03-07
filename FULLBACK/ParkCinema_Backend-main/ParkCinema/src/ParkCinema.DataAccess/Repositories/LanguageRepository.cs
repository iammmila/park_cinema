using ParkCinema.Core.Entities;
using ParkCinema.DataAccess.Contexts;
using ParkCinema.DataAccess.Interfaces;

namespace ParkCinema.DataAccess.Repositories;

public class LanguageRepository : Repository<Language>, ILanguageRepository
{
    public LanguageRepository(AppDbContext context) : base(context)
    {
    }
}
