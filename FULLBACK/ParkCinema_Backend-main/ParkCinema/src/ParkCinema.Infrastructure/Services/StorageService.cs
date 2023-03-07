using Microsoft.AspNetCore.Http;
using ParkCinema.Application.Abstraction.Storage;

namespace ParkCinema.Infrastructure.Services;

public class StorageService : IStorageService
{
    private readonly IStorage _storage;

    public StorageService(IStorage storage)
    {
        _storage = storage;
    }


    public void Delete(string pathOrContainerName, string fileName)=>
        _storage.Delete(pathOrContainerName, fileName);
   

    public List<string> GetFiles(string pathOrContainerName)=>
        _storage.GetFiles(pathOrContainerName);

    public bool HasFile(string pathOrContainerName, string fileName)=>
        _storage.HasFile(pathOrContainerName, fileName);
  

    public Task<List<(string fileName, string pathOrContainerName)>> UploadAsync(string pathOrContainerName, IFormFileCollection files)=>
        _storage.UploadAsync(pathOrContainerName, files);
   
    public Task<(string fileName, string pathOrContainerName)> UploadAsync(string pathOrContainerName, IFormFile file)=>
        _storage.UploadAsync(pathOrContainerName, file);
}
