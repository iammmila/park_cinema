using ParkCinema.Core.Interfaces;

namespace ParkCinema.Core.Entities;

public class Seat : IEntity

{
    public int Id { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }

    public int Row { get; set; }
    public int Column { get; set; }
    public bool IsEmpty { get; set; }

    public int SeatType_ID { get; set; }
    public SeatType SeatType { get; set; } = null!;

    public int Hall_ID { get; set; }
    public Hall Hall { get; set; } = null!;


}
