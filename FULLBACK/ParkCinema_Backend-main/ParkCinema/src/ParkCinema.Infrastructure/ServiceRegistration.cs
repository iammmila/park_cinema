using Microsoft.Extensions.DependencyInjection;
using ParkCinema.Application.Abstraction.Payment;
using ParkCinema.Application.Abstraction.Services;
using ParkCinema.Application.Abstraction.Storage;
using ParkCinema.Infrastructure.Services;
using ParkCinema.Infrastructure.Services.Storage;
using Stripe;

namespace ParkCinema.Infrastructure;

public static class ServiceRegistration
{
    public static void AddInfrastructureServices(this IServiceCollection services)
    {
        services.AddScoped<IStorageService, StorageService>();
        services.AddScoped<IPaymentService, PaymentService>();
        services.AddScoped<TokenService>();
        services.AddScoped<CustomerService>();
        services.AddScoped<ChargeService>();
        services.AddScoped<IMailService, MailService>();
        services.AddScoped<IQRCodeService,QRCodeService>();
    }

    //
    public static void AddStorage<T>(this IServiceCollection services) where T : Storage, IStorage
    {
        services.AddScoped<IStorage, T>();
    }
    public static void AddPayment<T>(this IServiceCollection services) where T :class, IPayment
    {
        services.AddScoped<IPayment, T>();
    }


}
