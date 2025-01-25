package portfolio.mustafa.Portfolio_server.Services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import portfolio.mustafa.Portfolio_server.Model.AdminModel;
import portfolio.mustafa.Portfolio_server.Repository.AdminRepo;

import java.util.Optional;

@Service
public class AdminService {

    @Autowired
    private AdminRepo adminRepo;

    // Get admin by email
    public Optional<AdminModel> getAdminByEmail(String email) {
        return adminRepo.findById(email);
    }

    // Save a new admin
    public AdminModel saveAdmin(AdminModel admin) {
        return adminRepo.save(admin);
    }

    // Delete admin by email
    public void deleteAdmin(String email) {
        adminRepo.deleteById(email);
    }
}
