using ParkCinema.Business.DTOs.Session;

namespace ParkCinema.Business.Services.Interfaces;

public interface ISessionService
{
    Task<List<SessionDTO>> FindAllAsync();
   
    
    
    //Task CreateAsync(FilmCreateDTO filmDTO);
    //Task<FilmDTO> FindByIdAsync(int id);
    //Task DeleteAsync(int id);
    //Task UpdateAsync(int id, FilmUpdateDTO courseUpdateDto);


}
