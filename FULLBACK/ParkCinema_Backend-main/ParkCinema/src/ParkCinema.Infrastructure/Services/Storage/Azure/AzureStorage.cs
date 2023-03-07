using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using ParkCinema.Application.Abstraction.Storage.Azure;

namespace ParkCinema.Infrastructure.Services.Storage.Azure;

public class AzureStorage :Storage, IAzureStorage
{

    private readonly BlobServiceClient _blobServiceClient;
    private BlobContainerClient? _containerClient;

    public AzureStorage(IConfiguration configuration)
    {
        _blobServiceClient = new BlobServiceClient(configuration["Storage:Azure"]);
    }

    public async Task<(string fileName, string pathOrContainerName)> UploadAsync(string containerName, IFormFile file)
    {
        _containerClient = _blobServiceClient.GetBlobContainerClient(containerName);
        await _containerClient.CreateIfNotExistsAsync();
        await _containerClient.SetAccessPolicyAsync(PublicAccessType.BlobContainer);

        (string fileName, string pathOrContainerName) datas = new();

        string newFileName = FileRename(containerName, file.FileName, HasFile);


        BlobClient blobClient = _containerClient.GetBlobClient(newFileName);
        await blobClient.UploadAsync(file.OpenReadStream());
        datas = (newFileName, containerName);
        return datas;
    }
    public async Task<List<(string fileName, string pathOrContainerName)>> UploadAsync(string containerName, IFormFileCollection files)
    {
        _containerClient = _blobServiceClient.GetBlobContainerClient(containerName);
        await _containerClient.CreateIfNotExistsAsync();
        await _containerClient.SetAccessPolicyAsync(PublicAccessType.BlobContainer);

        List<(string fileName, string pathOrContainerName)> datas = new();

      

        foreach (var file in files)
        {
            string newFileName = FileRename(containerName, file.FileName, HasFile);

            BlobClient blobClient = _containerClient.GetBlobClient(newFileName);
            await blobClient.UploadAsync(file.OpenReadStream());
            datas.Add((newFileName, containerName));
        }
        return datas;
    }


    public void Delete(string containerName, string fileName)
    {
        _containerClient = _blobServiceClient.GetBlobContainerClient(containerName);
        BlobClient blobClient = _containerClient.GetBlobClient(fileName);
        blobClient.DeleteIfExists();

    }

    public List<string> GetFiles(string containerName)
    {
        _containerClient = _blobServiceClient.GetBlobContainerClient(containerName);
        return _containerClient.GetBlobs().Select(x=>x.Name).ToList();
    }

    public bool HasFile(string containerName, string fileName)
    {
        _containerClient = _blobServiceClient.GetBlobContainerClient(containerName);
        return _containerClient.GetBlobs().Any(x => x.Name==fileName);
    }

}
