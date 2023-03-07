using Microsoft.AspNetCore.Hosting;
using ParkCinema.Application.Abstraction.Payment;
using ParkCinema.Application.Abstraction.Services;
using ParkCinema.Application.DTOs.Payment;
using ParkCinema.Business.DTOs;
using ParkCinema.Business.DTOs.Booking;
using ParkCinema.Business.Services.Interfaces;
using System.Text.Json;

namespace ParkCinema.Business.Services.Implementations;

public class BookingService : IBookingService
{

    private readonly IPaymentService _paymentService;
    private readonly IMailService _mailService;
    private readonly IWebHostEnvironment _hostEnvironment;
    private readonly IQRCodeService _qRCodeService;
    public BookingService(IPaymentService paymentService, 
        IMailService mailService,
        IWebHostEnvironment hostEnvironment, 
        IQRCodeService qRCodeService)
    {
        _paymentService = paymentService;
        _mailService = mailService;
        _hostEnvironment = hostEnvironment;
        _qRCodeService= qRCodeService;
    }

    public async Task<byte[]> CreateCharge(BookingDTO bookingDTO, CancellationToken cancellationToken)
    {
        //I MUST TAKE SESSION ID AND SEAT IDS THEN I SHOUD CHARGE THIS PARAMETRS AND I SHOULD CHANGE THE STATUS OF SEAT
        //I DONT HAVE ENOUGH TIME THAT IS WHY I KEEP SIMPLE AFTER FIXE THE SESSION SERVICE I CAN USE THIS LIKE THAT


        CreateCardResource cardResource = new CreateCardResource
        (
             bookingDTO.Name,
             bookingDTO.Number,
             bookingDTO.ExpiryYear,
             bookingDTO.ExpiryMonth,
             bookingDTO.Cvc
        );

        CreateCustomerResource customerResource = new CreateCustomerResource
        (
            bookingDTO.ReceiptEmail,
            bookingDTO.Name,
            cardResource
        );


        var response = await _paymentService.CreateCustomer(customerResource, cancellationToken);

        long totalAmount = 10;
        string filmName = "Avatar";

        CreateChargeResource chargeResource = new CreateChargeResource
            ("USD",
            totalAmount,
            response.CustomerId,
            response.Email,
            filmName
            );

       var chardData= await _paymentService.CreateCharge(chargeResource, cancellationToken);

        var ticketViewModel = new TicketViewModel
        {
            HallName = "Hall 1",
            Film = "Avatar",
            Row = 3,
            Column = 2,
            Price = totalAmount
        };

     
       
 


    //

    var webRoot = _hostEnvironment.WebRootPath;
        var htmlPath = Path.Combine(webRoot, "assets", "ticket.html");
        var htmlContent = File.ReadAllText(htmlPath);

        // Replace placeholders with actual values
        htmlContent = htmlContent.Replace("{{Standard Hall}}", "Zal 1");



        var htmlbody = htmlContent;
        await _mailService.SendMailAsync(bookingDTO.ReceiptEmail, "ParkCinema", htmlbody);


        var responseQR = new { Id= chardData.ChargeId, Costumer_ID = chardData, film=filmName};
        string json = JsonSerializer.Serialize(responseQR);
        var res = _qRCodeService.GenerateQRCode(json);



        return res;
    }

}
