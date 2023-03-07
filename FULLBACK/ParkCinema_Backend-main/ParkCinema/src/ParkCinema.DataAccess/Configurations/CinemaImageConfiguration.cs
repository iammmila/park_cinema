using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ParkCinema.Core.Entities;

namespace ParkCinema.DataAccess.Configurations;

public class CinemaImageConfiguration : IEntityTypeConfiguration<Cinema_Image>
{
    public void Configure(EntityTypeBuilder<Cinema_Image> builder)
    {
        builder
          .HasOne(i => i.Cinema)
          .WithMany(c => c.Images)
          .HasForeignKey(i => i.CinemaId);

        builder.Property(p => p.ImageUri)
            .IsRequired(true)
            .HasMaxLength(100);

        builder.Property(p => p.ImageContainerName)
            .IsRequired(true)
            .HasMaxLength(100);
    }
}
