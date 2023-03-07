using AutoMapper;
using Microsoft.EntityFrameworkCore;
using ParkCinema.Business.DTOs.Language;
using ParkCinema.Business.Services.Interfaces;
using ParkCinema.Business.Utilities.Exceptions;
using ParkCinema.Core.Entities;
using ParkCinema.DataAccess.Interfaces;

namespace ParkCinema.Business.Services.Implementations;

public class LanguageService : ILanguageService
{
    private readonly ILanguageRepository _languageRepository;
    private readonly IMapper _mapper;

    public LanguageService(ILanguageRepository languageRepository, IMapper mapper)
    {
        _languageRepository = languageRepository;
        _mapper = mapper;
    }

    public async Task CreateAsync(LanguageCreateDTO languageCreateDTO)
    {
        if (languageCreateDTO is null) throw new NullReferenceException("Genre is null");
        var genre = _mapper.Map<Language>(languageCreateDTO);
        await _languageRepository.CreateAsync(genre);
        await _languageRepository.SaveChangesAsync();
    }

    public async Task DeleteAsync(int id)
    {
        var language = await _languageRepository.FindByIdAsync(id);
        if (language is null) throw new NotFoundException("Language not found");
        _languageRepository.Delete(language);
        await _languageRepository.SaveChangesAsync();
    }

    public async Task<List<LanguageDTO>> FindAllAsync()
    {
        var languages = await _languageRepository.FindAll().ToListAsync();
        List<LanguageDTO> languageDTO= _mapper.Map<List<LanguageDTO>>(languages);
        return languageDTO;
    }

    public async Task<LanguageDTO> FindByIdAsync(int id)
    {
        var language = await _languageRepository.FindByIdAsync(id);
        if (language is null) throw new NotFoundException("Language not found");
        LanguageDTO languageDTO = _mapper.Map<LanguageDTO>(language);
        return languageDTO;
    }
}
