package portfolio.mustafa.Portfolio_server.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import portfolio.mustafa.Portfolio_server.Model.ContactForm;
import portfolio.mustafa.Portfolio_server.Services.EmailService;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
public class ContactController {

    @Value("${frontend.local.url}")
    private String localFrontendUrl;

    @Value("${frontend.live.url}")
    private String liveFrontendUrl;
    @Autowired
    private  EmailService emailService;
    // Handle the contact form POST request
    @PostMapping("/api/contact")
    @CrossOrigin(origins = {"https://mustafaansari.vercel.app", "http://localhost:5173"})
    public String handleContactForm(@RequestBody ContactForm contactForm) {
        try {
            // Simulate message processing (e.g., sending an email or saving to the database)
            emailService.sendEmail(contactForm);
            System.out.println("Form received: " + contactForm);

            // Return success message
            return "Message sent successfully!";
        } catch (Exception e) {
            // Log error and return failure message
            System.out.println("Error: " + e.getMessage());
            return "Error sending message. Please try again.";
        }
    }
}
