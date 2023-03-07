using Microsoft.AspNetCore.Http;

namespace ParkCinema.Application.Abstraction.Storage;

public interface IStorage
{
    Task<List<(string fileName, string pathOrContainerName)>> UploadAsync(string pathOrContainerName, IFormFileCollection files);
    Task<(string fileName, string pathOrContainerName)> UploadAsync(string pathOrContainerName, IFormFile file);
    void Delete(string pathOrContainerName, string fileName);
    List<string> GetFiles(string pathOrContainerName);
    bool HasFile(string pathOrContainerName, string fileName);
}
