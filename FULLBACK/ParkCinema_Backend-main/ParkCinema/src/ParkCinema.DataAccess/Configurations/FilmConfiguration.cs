using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ParkCinema.Core.Entities;

namespace ParkCinema.DataAccess.Configurations;

public class FilmConfiguration : IEntityTypeConfiguration<Film>
{


    public void Configure(EntityTypeBuilder<Film> builder)
    {
        builder.Property(p => p.Name)
            .IsRequired(true)
            .HasMaxLength(100);

        builder.Property(p => p.AgeLimit)
            .IsRequired(true);

        builder.Property(p => p.DurationMinute)
          .IsRequired(true);

        builder.Property(p => p.Country)
           .IsRequired(true)
           .HasMaxLength(100);

        builder.Property(p => p.Director)
           .IsRequired(true)
           .HasMaxLength(100);

        builder.Property(p => p.Description)
            .IsRequired(true)
            .HasColumnType("TEXT"); 

        builder.Property(p => p.Trailer)
            .IsRequired(true)
            .HasColumnType("TEXT");

        builder.Property(p => p.Actors)
            .IsRequired(true)
            .HasColumnType("TEXT");

        builder.Property(p => p.Poster)
            .IsRequired(true)
            .HasColumnType("TEXT");

        builder.Property(p => p.IsNew)
            .IsRequired(true);

    }
}
