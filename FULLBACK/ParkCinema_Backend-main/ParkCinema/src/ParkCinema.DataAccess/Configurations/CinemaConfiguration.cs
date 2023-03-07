using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ParkCinema.Core.Entities;

namespace ParkCinema.DataAccess.Configurations;

public class CinemaConfiguration : IEntityTypeConfiguration<Cinema>
{
    public void Configure(EntityTypeBuilder<Cinema> builder)
    {
        builder.Property(p => p.CinemaName)
               .IsRequired(true)
               .HasMaxLength(100);
        builder.Property(p => p.PhoneNumber)
               .IsRequired(true)
               .HasMaxLength(100);
        builder.Property(p => p.WorkHours)
               .IsRequired(true)
               .HasMaxLength(100);
        builder.Property(p => p.AddressLine)
               .IsRequired(true)
               .HasMaxLength(200);
        builder.Property(p => p.MainImage)
               .IsRequired(true)
               .HasMaxLength(100); 
        builder.Property(p => p.MainImageContainerName)
               .IsRequired(true)
               .HasMaxLength(100); 
        builder.Property(p => p.MainImageUri)
               .IsRequired(true)
               .HasMaxLength(100);

    }
}
