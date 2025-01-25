package portfolio.mustafa.Portfolio_server.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import portfolio.mustafa.Portfolio_server.Services.OTPService;

import javax.validation.constraints.Email;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@RestController
@RequestMapping("/otp")
public class OTPController {

    @Autowired
    private OTPService otpService;

    @Value("${MAIL_USERNAME}")
    private String mail;

    // Method to validate email format
    private boolean isValidEmail(String email) {
        String emailRegex = "^[A-Za-z0-9+_.-]+@(.+)$";
        Pattern pattern = Pattern.compile(emailRegex);
        Matcher matcher = pattern.matcher(email);
        return matcher.matches();
    }

    // Endpoint to send OTP to the provided email
    @PostMapping("/send/{email}")
    public ResponseEntity<String> sendOTP(@PathVariable String email) {
        if (email == null || email.isEmpty()) {
            return ResponseEntity.badRequest().body("Email is required.");
        }

        if (!isValidEmail(email)) {
            return ResponseEntity.badRequest().body("Invalid email format.");
        }

        try {
            if (email.equals(mail)) {
                otpService.sendOTP(email);
                return ResponseEntity.ok("OTP sent successfully to " + email);
            } else {
                return ResponseEntity.badRequest().body("Unauthorized email.");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                 .body("Error sending OTP: " + e.getMessage());
        }
    }

    // Endpoint to verify OTP for the provided email and OTP
    @PostMapping("/verify/{email}/{otp}")
    public ResponseEntity<String> verifyOTP(@PathVariable String email, @PathVariable String otp) {
        if (email == null || email.isEmpty() || otp == null || otp.isEmpty()) {
            return ResponseEntity.badRequest().body("Both email and OTP are required.");
        }

        if (!isValidEmail(email)) {
            return ResponseEntity.badRequest().body("Invalid email format.");
        }

        try {
            boolean isValid = otpService.verifyOTP(email, otp);

            if (isValid) {
                otpService.clearOTP(email);
                return ResponseEntity.ok("OTP verified successfully!");
            } else {
                return ResponseEntity.badRequest().body("Invalid or expired OTP.");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                 .body("Error verifying OTP: " + e.getMessage());
        }
    }
}
