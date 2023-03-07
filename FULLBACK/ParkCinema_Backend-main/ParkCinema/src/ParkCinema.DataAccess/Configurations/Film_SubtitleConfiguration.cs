using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ParkCinema.Core.Entities;

namespace ParkCinema.DataAccess.Configurations;

public class Film_SubtitleConfiguration : IEntityTypeConfiguration<Film_Subtitle>
{
    public void Configure(EntityTypeBuilder<Film_Subtitle> builder)
    {
        builder
    .HasKey(fs => new { fs.Film_Id, fs.Subtitle_Id });

        builder
            .HasOne<Subtitle>(fs => fs.Subtitle)
            .WithMany(fs => fs.Film_Subtitles)
            .HasForeignKey(fs => fs.Subtitle_Id);

        builder
            .HasOne<Film>(fs => fs.Film)
            .WithMany(fs => fs.Film_Subtitles)
            .HasForeignKey(fs => fs.Film_Id);
    }
}
