using ParkCinema.Business.DTOs.Film;
using ParkCinema.Business.DTOs.Format;
using ParkCinema.Business.DTOs.Language;
using ParkCinema.Business.DTOs.Session;
using ParkCinema.Business.DTOs.Subtitle;
using ParkCinema.Business.Services.Interfaces;
using ParkCinema.Core.Entities;
using ParkCinema.DataAccess.Interfaces;

namespace ParkCinema.Business.Services.Implementations;

public class SessionService : ISessionService
{
    private readonly ISessionRepository _sessionRepository;
    private readonly IHallService _hallService;
    private readonly IFilmService _filmService;
    private readonly IFormatService _formatService;
    private readonly ILanguageService _languageService;
    private readonly ISubtitleService _subtitleService;

    public SessionService(ISessionRepository sessionRepository,
                          IHallService hallService,
                          IFilmService filmService,
                          IFormatService formatService,
                          ILanguageService languageService,
                          ISubtitleService subtitleService
                          )
    {
        _sessionRepository = sessionRepository;
        _hallService = hallService;
        _filmService = filmService;
        _formatService = formatService;
        _languageService = languageService;
        _subtitleService = subtitleService;
    }

    public async Task<List<SessionDTO>> FindAllAsync()
    {


        var sessions = _sessionRepository.FindAll();
        List<SessionDTO> sessionDTOs = new List<SessionDTO>();

        if (sessions is null) return sessionDTOs;

        foreach (var session in sessions)
        {
            SessionDTO sessionDTO = new SessionDTO
            {
                Id = session.Id,
                StartTime = session.StartTime,
                Film = await _filmService.FindByIdAsync(session.Film_Id),
                Film_Id = session.Film_Id,
                Format = await _formatService.FindByIdAsync(session.Format_Id),
                Format_Id = session.Format_Id,
                Language = await _languageService.FindByIdAsync(session.Language_Id),
                Language_Id = session.Language_Id
                //Subtitle=await _subtitleService.FindByIdAsync(session.Subtitle_Id)

            };
            sessionDTOs.Add(sessionDTO);
        }
        return sessionDTOs;
    }
}
