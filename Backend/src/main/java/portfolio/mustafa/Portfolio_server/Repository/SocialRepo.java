package portfolio.mustafa.Portfolio_server.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import portfolio.mustafa.Portfolio_server.Model.Social;
@Repository
public interface SocialRepo extends JpaRepository<Social, String> {
    // Custom query methods can be added here if needed
}
