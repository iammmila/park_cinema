using ParkCinema.Core.Entities;
using ParkCinema.DataAccess.Contexts;
using ParkCinema.DataAccess.Interfaces;

namespace ParkCinema.DataAccess.Repositories;

public class Film_FormatRepository : Repository<Film_Format>, IFilm_FormatRepository

{
    public Film_FormatRepository(AppDbContext context) : base(context)
    {
    }
}
