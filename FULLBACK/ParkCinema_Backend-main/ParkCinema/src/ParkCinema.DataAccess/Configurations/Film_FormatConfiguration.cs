using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ParkCinema.Core.Entities;

namespace ParkCinema.DataAccess.Configurations;

public class Film_FormatConfiguration : IEntityTypeConfiguration<Film_Format>
{
    public void Configure(EntityTypeBuilder<Film_Format> builder)
    {
        builder
            .HasKey(ff => new { ff.Film_Id, ff.Format_Id });

        builder
            .HasOne<Format>(ff => ff.Format)
            .WithMany(ff => ff.Film_Formats)
            .HasForeignKey(ff => ff.Format_Id);

        builder
            .HasOne<Film>(ff => ff.Film)
            .WithMany(fl => fl.Film_Formats)
            .HasForeignKey(fl => fl.Film_Id);
    }
}
