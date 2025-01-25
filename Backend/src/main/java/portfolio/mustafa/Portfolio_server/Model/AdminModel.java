package portfolio.mustafa.Portfolio_server.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class AdminModel {
    @Id
    private String email; // Primary key, cannot be generated automatically
    private String password;

    // Getters and Setters
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
