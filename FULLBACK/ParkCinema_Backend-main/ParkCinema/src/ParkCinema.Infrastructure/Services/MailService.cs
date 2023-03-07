

using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.Extensions.Configuration;
using MimeKit;
using ParkCinema.Application.Abstraction.Services;

namespace ParkCinema.Infrastructure.Services;

public class MailService : IMailService
{
    readonly IConfiguration _configuration;

    public MailService(IConfiguration configuration)
    {
        _configuration = configuration;
    }
    public async Task SendMailAsync(string to, string subject, string body, bool isBodyHtml = true)
    {
        var email = new MimeMessage();
        email.Sender = MailboxAddress.Parse(_configuration["Mail:Username"]);
        email.To.Add(MailboxAddress.Parse(to));
        email.Subject = subject;
        var builder = new BodyBuilder();
        //if (mailRequest.Attachments != null)
        //{
        //    byte[] fileBytes;
        //    foreach (var file in mailRequest.Attachments)
        //    {
        //        if (file.Length > 0)
        //        {
        //            using (var ms = new MemoryStream())
        //            {
        //                file.CopyTo(ms);
        //                fileBytes = ms.ToArray();
        //            }
        //            builder.Attachments.Add(file.FileName, fileBytes, ContentType.Parse(file.ContentType));
        //        }
        //    }
        //}
        builder.HtmlBody = body;
        email.Body = builder.ToMessageBody();
        using var smtp = new SmtpClient();
        smtp.Connect(_configuration["Mail:Host"], int.Parse(_configuration["Mail:Port"]), SecureSocketOptions.StartTls);
        smtp.Authenticate(_configuration["Mail:Username"], _configuration["Mail:Password"]);
        await smtp.SendAsync(email);
        smtp.Disconnect(true);
    }

    public async Task SendMailAsync(string[] tos, string subject, string body, bool isBodyHtml = true)
    {
        //MailMessage mail = new();
        //mail.IsBodyHtml = isBodyHtml;
        //foreach (var to in tos)
        //    mail.To.Add(to);
        //mail.Subject = subject;
        //mail.Body = body;
        //mail.From = new(_configuration["Mail:Username"], "ParkCinema", System.Text.Encoding.UTF8);

        //SmtpClient smtp = new();
        //smtp.Credentials = new NetworkCredential(_configuration["Mail:Username"], _configuration["Mail:Password"]);
        //smtp.Port = 587;
        //smtp.EnableSsl = true;
        //smtp.Host = _configuration["Mail:Host"];
        //await smtp.SendMailAsync(mail);
    }
}