using AutoMapper;
using Microsoft.EntityFrameworkCore;
using ParkCinema.Business.DTOs.Format;
using ParkCinema.Business.Services.Interfaces;
using ParkCinema.Business.Utilities.Exceptions;
using ParkCinema.Core.Entities;
using ParkCinema.DataAccess.Interfaces;

namespace ParkCinema.Business.Services.Implementations;

public class FormatService:IFormatService
{

    private readonly IFormatRepository _formatRepository;
    private readonly IMapper _mapper;

    public FormatService(IFormatRepository formatRepository, IMapper mapper)
    {
        _formatRepository = formatRepository;
        _mapper = mapper;
    }


    public async Task CreateAsync(FormatCreateDTO formatCreateDTO)
    {

        if (formatCreateDTO is null) throw new NullReferenceException("Format is null");
        var format = _mapper.Map<Format>(formatCreateDTO);
        await _formatRepository.CreateAsync(format);
        await _formatRepository.SaveChangesAsync();
    }

    public async Task DeleteAsync(int id)
    {
        var format = await _formatRepository.FindByIdAsync(id);
        if (format is null) throw new NotFoundException("Format not found");
        _formatRepository.Delete(format);
        await _formatRepository.SaveChangesAsync();
    }

    public async Task<List<FormatDTO>> FindAllAsync()
    {
        var format = await _formatRepository.FindAll().ToListAsync();
        List<FormatDTO> formatsDTO = _mapper.Map<List<FormatDTO>>(format);
        return formatsDTO;
    }

    public async Task<FormatDTO> FindByIdAsync(int id)
    {
        var format = await _formatRepository.FindByIdAsync(id);
        if (format is null) throw new NotFoundException("Format not found");
        FormatDTO formatDTO = _mapper.Map<FormatDTO>(format);
        return formatDTO;
    }


}
