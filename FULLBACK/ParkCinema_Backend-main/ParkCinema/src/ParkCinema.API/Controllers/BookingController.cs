using Microsoft.AspNetCore.Mvc;
using ParkCinema.Application.DTOs.Payment;
using ParkCinema.Business.DTOs.Booking;
using ParkCinema.Business.Services.Interfaces;
 
namespace ParkCinema.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingController : ControllerBase
    {
        private readonly IBookingService _bookingService;

        public BookingController(IBookingService bookingService)
        {
            _bookingService = bookingService; 
        }


         
        [HttpPost("Charge")]
        public async Task<ActionResult<ChargeResource>> CreateCharge([FromBody] BookingDTO bookingDTO, 
                                                                     CancellationToken cancellationToken)
        {
                
           var responseQR=  await _bookingService.CreateCharge(bookingDTO, cancellationToken);
            return File(responseQR, "image/png");
        }


    }
}
