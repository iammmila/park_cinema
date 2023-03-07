using ParkCinema.Application.Abstraction.Payment.PayPal;
using ParkCinema.Application.DTOs.Payment;

namespace ParkCinema.Infrastructure.Services.Payment.PayPal;

public class PayPalPayment : IPayPalPayment
{
    //It will need we can write logic here for the PayPal payment
    public Task<ChargeResource> CreateCharge(CreateChargeResource resource, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    public Task<CustomerResource> CreateCustomer(CreateCustomerResource resource, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}
