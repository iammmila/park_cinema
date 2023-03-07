using ParkCinema.Core.Interfaces;
using ParkCinema.DataAccess.Repositories;
using System.Linq.Expressions;

namespace ParkCinema.DataAccess.Interfaces;

public interface IRepository<T> where T : class, new()
{
    IQueryable<T> FindAll();
    Task<T?> FindByIdAsync(int id);
    IQueryable<T> FindByCondition(Expression<Func<T, bool>> expression);
    Task CreateAsync(T entity);
    void Update(T entity);
    void Delete(T entity);
    Task SaveChangesAsync();

    //?IF I IT I NEED I WILL USE BUT NOW INCLUDE AND THEN INCLUDE IT WORKS FOR ME

    //public  Task<IEnumerable<object>> GetEntitiesWithDetailsAsync<TEntity, TJoinEntity, TDetailEntity>(
    //Expression<Func<TEntity, bool>> predicate,
    //Expression<Func<TJoinEntity, int>> joinEntityForeignKeySelector,
    //Expression<Func<TJoinEntity, TDetailEntity>> detailEntitySelector)
    //where TEntity : class
    //where TJoinEntity : class
    //where TDetailEntity : class;

}
