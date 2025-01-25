package portfolio.mustafa.Portfolio_server.Repository;




import org.springframework.data.jpa.repository.JpaRepository;
import portfolio.mustafa.Portfolio_server.Model.OTP;

import java.util.Optional;

public interface OTPRepository extends JpaRepository<OTP, Long> {

    Optional<OTP> findByEmail(String email);

    // Method to delete all OTPs associated with a given email
    void deleteByEmail(String email);
}

