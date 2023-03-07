using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ParkCinema.Core.Entities;
using System.Reflection.Emit;

namespace ParkCinema.DataAccess.Configurations;

public class Film_LanguageConfiguration : IEntityTypeConfiguration<Film_Language>
{
    public void Configure(EntityTypeBuilder<Film_Language> builder)
    {
        builder
            .HasKey(fl => new { fl.Film_Id,fl.Language_Id});

        builder
            .HasOne<Language>(fl => fl.Language)
            .WithMany(fl => fl.Film_Languages)
            .HasForeignKey(fl => fl.Language_Id);

        builder
            .HasOne<Film>(fl => fl.Film)
            .WithMany(fl => fl.Film_Languages)
            .HasForeignKey(fl => fl.Film_Id);
    }
}
