package portfolio.mustafa.Portfolio_server.Services;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import org.springframework.mail.MailException;
import portfolio.mustafa.Portfolio_server.Model.ContactForm;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender javaMailSender;

    @Value("${MAIL_USERNAME}")
    private String mail;

    public void sendEmail(ContactForm contactForm) {
        MimeMessage message = javaMailSender.createMimeMessage();

        try {
            MimeMessageHelper helper = new MimeMessageHelper(message, true);
            helper.setTo(mail);
            helper.setSubject("New Contact Form Submission");

            String htmlContent = "<html>" +
                    "<body>" +
                    "<h2>New Contact Form Submission</h2>" +
                    "<p><strong>Name:</strong> " + contactForm.getFirstName() + " " + contactForm.getLastName() + "</p>" +
                    "<p><strong>Company:</strong> " + contactForm.getCompany() + "</p>" +
                    "<p><strong>Email:</strong> " + contactForm.getEmail() + "</p>" +
                    "<p><strong>Phone Number:</strong> " + contactForm.getPhoneNumber() + "</p>" +
                    "<p><strong>Message:</strong><br>" + contactForm.getMessage() + "</p>" +
                    "</body>" +
                    "</html>";

            helper.setText(htmlContent, true); // The 'true' flag indicates HTML content.

            javaMailSender.send(message);

        } catch (MessagingException e) {
            e.printStackTrace();
        } catch (MailException e) {
            e.printStackTrace();
        }
    }
}
