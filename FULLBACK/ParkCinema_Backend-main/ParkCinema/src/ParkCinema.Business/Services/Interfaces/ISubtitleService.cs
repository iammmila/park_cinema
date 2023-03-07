using ParkCinema.Business.DTOs.Language;
using ParkCinema.Business.DTOs.Subtitle;

namespace ParkCinema.Business.Services.Interfaces;

public interface ISubtitleService
{
    Task<List<SubtitleDTO>> FindAllAsync();
    Task<SubtitleDTO> FindByIdAsync(int id);
    Task CreateAsync(SubtitleCreateDTO subtitleCreateDTO);
    Task DeleteAsync(int id);
}
