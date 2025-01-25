package portfolio.mustafa.Portfolio_server.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import portfolio.mustafa.Portfolio_server.Model.AdminModel;

public interface AdminRepo extends JpaRepository<AdminModel, String> {
    // Additional custom queries can be added here if needed
}
