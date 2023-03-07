namespace ParkCinema.Infrastructure.Services.Storage;

public class Storage
{
    protected delegate bool HasFile(string pathOrContainerName, string fileName);
    protected string FileRename(string pathOrContianerName, string fileName, HasFile hasFile)
    {
        string extension = Path.GetExtension(fileName);

        int i = 0;
        while (hasFile(pathOrContianerName, fileName))
        {
            if (i == 0)
                fileName = fileName.Replace(extension, $"({++i}){extension}");
            else
                fileName = fileName.Replace($"({i}){extension}", $"({++i}){extension}");
        }

        return fileName;
    }
}
