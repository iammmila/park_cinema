using Microsoft.Extensions.Configuration;
using ParkCinema.Application.Abstraction.Payment.Stripe;
using ParkCinema.Application.DTOs.Payment;
using Stripe;

namespace ParkCinema.Infrastructure.Services.Payment.Stripe;

public class StripePayment : IStripePayment
{

    private readonly TokenService _tokenService;
    private readonly CustomerService _customerService; 
    private readonly ChargeService _chargeService;


    public StripePayment(
    TokenService tokenService,
    CustomerService customerService,
    ChargeService chargeService,
    IConfiguration configuration
        )
    {
        _tokenService = tokenService;
        _customerService = customerService;
        _chargeService = chargeService;
        StripeConfiguration.ApiKey = configuration["Stripe:ApiKey"];

    }




    public async Task<ChargeResource> CreateCharge(CreateChargeResource resource, CancellationToken cancellationToken)
    {
        var chargeOptions = new ChargeCreateOptions
        {
            Currency = resource.Currency,
            Amount = (long)(resource.Amount * 100),
            ReceiptEmail = resource.ReceiptEmail,
            Customer = resource.CustomerId,
            Description = resource.Description
        };

        var charge = await _chargeService.CreateAsync(chargeOptions, null, cancellationToken);

        if (charge.Status == "succeeded")
        {
            return new ChargeResource(
                charge.Id,
                charge.Currency,
                charge.Amount,
                charge.CustomerId,
                charge.ReceiptEmail,
                charge.Description);
        }
        throw new Exception("Failed payment");

    }

    public async Task<CustomerResource> CreateCustomer(CreateCustomerResource resource, CancellationToken cancellationToken)
    {
        var tokenOptions = new TokenCreateOptions
        {
            Card = new TokenCardOptions
            {
                Name = resource.Card.Name,
                Number = resource.Card.Number,
                ExpYear = resource.Card.ExpiryYear,
                ExpMonth = resource.Card.ExpiryMonth,
                Cvc = resource.Card.Cvc
            }
        };
        var token = await _tokenService.CreateAsync(tokenOptions, null, cancellationToken);

        var customerOptions = new CustomerCreateOptions
        {
            Email = resource.Email,
            Name = resource.Name,
            Source = token.Id
        };
        var customer = await _customerService.CreateAsync(customerOptions, null, cancellationToken);

        return new CustomerResource(customer.Id, customer.Email, customer.Name);
    }


}
