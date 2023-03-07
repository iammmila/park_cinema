using AutoMapper;
using Microsoft.EntityFrameworkCore;
using ParkCinema.Business.DTOs.Subtitle;
using ParkCinema.Business.Services.Interfaces;
using ParkCinema.Business.Utilities.Exceptions;
using ParkCinema.Core.Entities;
using ParkCinema.DataAccess.Interfaces;

namespace ParkCinema.Business.Services.Implementations;

public class SubtitleService : ISubtitleService
{

    private readonly ISubtitleRepository _subtitleRepository;
    private readonly IMapper _mapper;
    public SubtitleService(ISubtitleRepository subtitleRepository,IMapper mapper)
    {
        _subtitleRepository = subtitleRepository;
        _mapper = mapper;
    }
    public async Task CreateAsync(SubtitleCreateDTO subtitleCreateDTO)
    {

        if (subtitleCreateDTO is null) throw new NullReferenceException("Subtitle is null");
        var subtitle = _mapper.Map<Subtitle>(subtitleCreateDTO);
        await _subtitleRepository.CreateAsync(subtitle);
        await _subtitleRepository.SaveChangesAsync();
    }

    public async Task DeleteAsync(int id)
    {
        var subtitle = await _subtitleRepository.FindByIdAsync(id);
        if (subtitle is null) throw new NotFoundException("Subtitle not found");
        _subtitleRepository.Delete(subtitle);
        await _subtitleRepository.SaveChangesAsync();
    }

    public async Task<List<SubtitleDTO>> FindAllAsync()
    {
        var subtitle = await _subtitleRepository.FindAll().ToListAsync();
        List<SubtitleDTO> subtitliesDTO = _mapper.Map<List<SubtitleDTO>>(subtitle);
        return subtitliesDTO;
    }

    public async Task<SubtitleDTO> FindByIdAsync(int id)
    {
        var subtitle = await _subtitleRepository.FindByIdAsync(id);
        if (subtitle is null) throw new NotFoundException("subtitle not found");
        SubtitleDTO subtitleDTO = _mapper.Map<SubtitleDTO>(subtitle);
        return subtitleDTO;
    }
}
