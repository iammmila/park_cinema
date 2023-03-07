using AutoMapper;
using Microsoft.EntityFrameworkCore;
using ParkCinema.Business.DTOs.Genre;
using ParkCinema.Business.Services.Interfaces;
using ParkCinema.Business.Utilities.Exceptions;
using ParkCinema.Core.Entities;
using ParkCinema.DataAccess.Interfaces;

namespace ParkCinema.Business.Services.Implementations;
public class GenreService : IGenreService
{
    private readonly IGenreRepository _genreRepository;
    private readonly IMapper _mapper;

    public GenreService(IGenreRepository genreRepository, IMapper mapper)
    {
        _mapper = mapper;
        _genreRepository = genreRepository;
    }

    public async Task CreateAsync(GenreCreateDTO createGenreDTO)
    {
        if (createGenreDTO is null) throw new NullReferenceException("Genre is null");
        var genre = _mapper.Map<Genre>(createGenreDTO);
        await _genreRepository.CreateAsync(genre);
        await _genreRepository.SaveChangesAsync();
    }

    public async Task DeleteAsync(int id)
    {
        var genre = await _genreRepository.FindByIdAsync(id);
        if (genre is null) throw new NotFoundException("Genre not found");
        _genreRepository.Delete(genre);
        await _genreRepository.SaveChangesAsync();
    }

    public async Task<List<GenreDTO>> FindAllAsync()
    {
        var genres = await _genreRepository.FindAll().ToListAsync();
        List<GenreDTO> genreDTO = _mapper.Map<List<GenreDTO>>(genres);
        return genreDTO;
    }

    public async Task<GenreDTO> FindByIdAsync(int id)
    {
        var genre = await _genreRepository.FindByIdAsync(id);
        if (genre is null) throw new NotFoundException("Genre not found");
        GenreDTO genreDTO = _mapper.Map<GenreDTO>(genre);
        return genreDTO;
    }

}

