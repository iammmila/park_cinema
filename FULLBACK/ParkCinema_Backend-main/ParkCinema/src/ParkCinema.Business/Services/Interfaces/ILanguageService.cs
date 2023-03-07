using ParkCinema.Business.DTOs.Genre;
using ParkCinema.Business.DTOs.Language;

namespace ParkCinema.Business.Services.Interfaces;

public interface ILanguageService
{
    Task<List<LanguageDTO>> FindAllAsync();
    Task<LanguageDTO> FindByIdAsync(int id);
    Task CreateAsync(LanguageCreateDTO createGnreDTO);
    Task DeleteAsync(int id);
}
