package portfolio.mustafa.Portfolio_server.Services;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

@Service
public class OTPService {

    @Autowired
    private JavaMailSender mailSender;

    // Store OTPs with associated emails
    private final Map<String, String> otpStore = new HashMap<>();

    // Generate and send OTP
    public void sendOTP(String email) {
        // Generate a 6-digit random OTP
        String otp = String.format("%06d", new Random().nextInt(999999));

        // Store the OTP
        otpStore.put(email, otp);

        // Send the OTP via email
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);

            helper.setTo(email);
            helper.setSubject("Your OTP Code");

            // Enhanced HTML Content
            String htmlContent = "<html>" +
                    "<body style='font-family: Arial, sans-serif; color: #333;'>" +
                    "<h2 style='color: #0056b3;'>Your One-Time Password (OTP)</h2>" +
                    "<p>Hi,</p>" +
                    "<p>Your OTP for verification is:</p>" +
                    "<p style='font-size: 24px; font-weight: bold; color: #ff6f61;'>" + otp + "</p>" +
                    "<p>This OTP is valid for <strong>5 minutes</strong>. If you did not request this, please ignore this email.</p>" +
                    "<br>" +
                    "<p>Thank you,</p>" +
                    "<p><strong>Your Company Name</strong></p>" +
                    "</body>" +
                    "</html>";

            helper.setText(htmlContent, true); // The 'true' flag specifies that the content is HTML.
            mailSender.send(message);

        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }

    // Verify the OTP
    public boolean verifyOTP(String email, String otp) {
        // Check if the OTP matches the one stored
        String storedOtp = otpStore.get(email);
        return storedOtp != null && storedOtp.equals(otp);
    }

    // Clear the OTP after verification or expiration
    public void clearOTP(String email) {
        otpStore.remove(email);
    }
}
