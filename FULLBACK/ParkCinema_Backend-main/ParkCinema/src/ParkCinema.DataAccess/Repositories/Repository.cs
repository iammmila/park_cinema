using Microsoft.EntityFrameworkCore;
using ParkCinema.DataAccess.Contexts;
using ParkCinema.DataAccess.Interfaces;
using System.Linq.Expressions;

namespace ParkCinema.DataAccess.Repositories;

public class Repository<T> : IRepository<T> where T : class, new()
{


    private readonly AppDbContext _context;
    private DbSet<T> _table;

    public Repository(AppDbContext context)
    {
        _context = context;
        _table = _context.Set<T>();
    }



    public IQueryable<T> FindAll()
    {
        return _table.AsQueryable();
    }

    public async Task<T?> FindByIdAsync(int id)
    {
        return await _table.FindAsync(id);
    }

    public IQueryable<T> FindByCondition(Expression<Func<T, bool>> expression)
    {
        var result = _table.Where(expression).AsNoTracking();
        return result;
    }

    public async Task CreateAsync(T entity)
    {
        await _table.AddAsync(entity);
    }

    public void Update(T entity)
    {
        _table.Update(entity);
    }

    public void Delete(T entity)
    {
        _table.Remove(entity);
    }

    public async Task SaveChangesAsync()
    {
        await _context.SaveChangesAsync();
    }

    
    
    //?IF I IT I NEED I WILL USE BUT NOW INCLUDE AND THEN INCLUDE IT WORKS FOR ME

    //public async Task<IEnumerable<object>> GetEntitiesWithDetailsAsync<TEntity, TJoinEntity, TDetailEntity>(
    //    Expression<Func<TEntity, bool>> predicate,
    //    Expression<Func<TJoinEntity, int>> joinEntityForeignKeySelector,
    //    Expression<Func<TJoinEntity, TDetailEntity>> detailEntitySelector)
    //    where TEntity : class
    //    where TJoinEntity : class
    //    where TDetailEntity : class
    //{
    //    var entities = await _context.Set<TEntity>()
    //        .Where(predicate)
    //        .SelectMany(t => _context.Set<TJoinEntity>()
    //            .Where(j => (int)t.GetType().GetProperty("Id").GetValue(t) == (int)joinEntityForeignKeySelector.Compile().Invoke(j))
    //            .Select(j => new { Entity = t, Details = detailEntitySelector.Compile().Invoke(j) })
    //        )
    //        .ToListAsync();

    //    return entities.Select(entity => new
    //    {
    //        Id = entity.Entity.GetType().GetProperty("Id").GetValue(entity.Entity),
    //        Details = entity.Details
    //    });
    //}





}
