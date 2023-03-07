using ParkCinema.Application.DTOs.Payment;

namespace ParkCinema.Application.Abstraction.Payment;

public interface IPayment
{
    Task<CustomerResource> CreateCustomer(CreateCustomerResource resource, CancellationToken cancellationToken);
    Task<ChargeResource> CreateCharge(CreateChargeResource resource, CancellationToken cancellationToken);
}


