using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ParkCinema.Core.Entities;
using System.Reflection.Emit;

namespace ParkCinema.DataAccess.Configurations;

public class Film_GenreConfiguration : IEntityTypeConfiguration<Film_Genre>
{
    public void Configure(EntityTypeBuilder<Film_Genre> builder)
    {
        builder
            .HasKey(fg => new { fg.Film_Id, fg.Genre_Id });

        builder
            .HasOne<Genre>(fg => fg.Genre)
            .WithMany(g => g.Film_Genres)
            .HasForeignKey(fg => fg.Genre_Id);

        builder
            .HasOne<Film>(fg => fg.Film)
            .WithMany(g => g.Film_Genres)
            .HasForeignKey(fg => fg.Film_Id);
    }
}
