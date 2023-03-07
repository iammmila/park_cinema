using ParkCinema.Core.Entities;
using ParkCinema.DataAccess.Contexts;
using ParkCinema.DataAccess.Interfaces;

namespace ParkCinema.DataAccess.Repositories;

public class SessionRepository : Repository<Session>, ISessionRepository
{
    public SessionRepository(AppDbContext context) : base(context)
    {
    }
}
