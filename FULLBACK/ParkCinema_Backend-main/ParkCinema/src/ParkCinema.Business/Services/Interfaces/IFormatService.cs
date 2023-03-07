using ParkCinema.Business.DTOs.Format;

namespace ParkCinema.Business.Services.Interfaces;

public interface IFormatService
{
    Task<List<FormatDTO>> FindAllAsync();
    Task<FormatDTO> FindByIdAsync(int id);
    Task CreateAsync(FormatCreateDTO formatCreateDTO);
    Task DeleteAsync(int id);
}
