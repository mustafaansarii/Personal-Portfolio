package portfolio.mustafa.Portfolio_server.Controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import portfolio.mustafa.Portfolio_server.Model.AdminModel;
import portfolio.mustafa.Portfolio_server.Services.AdminService;


import java.util.Optional;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;

    // Endpoint to get admin by email
    @GetMapping("/{email}")
    public ResponseEntity<AdminModel> getAdminByEmail(@PathVariable String email) {
        Optional<AdminModel> admin = adminService.getAdminByEmail(email);
        if (admin.isPresent()) {
            return new ResponseEntity<>(admin.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Endpoint to create a new admin
    @PostMapping
    public ResponseEntity<AdminModel> createAdmin(@RequestBody AdminModel admin) {
        AdminModel savedAdmin = adminService.saveAdmin(admin);
        return new ResponseEntity<>(savedAdmin, HttpStatus.CREATED);
    }

    // Endpoint to delete admin by email
    @DeleteMapping("/{email}")
    public ResponseEntity<Void> deleteAdmin(@PathVariable String email) {
        adminService.deleteAdmin(email);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
