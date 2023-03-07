using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ParkCinema.Core.Entities;

namespace ParkCinema.DataAccess.Configurations;

public class SubtitleConfiguration : IEntityTypeConfiguration<Subtitle>
{
    public void Configure(EntityTypeBuilder<Subtitle> builder)
    {
        builder.Property(p => p.Name)
            .IsRequired(true)
            .HasMaxLength(4);
    }
}
