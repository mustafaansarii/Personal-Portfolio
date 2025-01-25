package portfolio.mustafa.Portfolio_server.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity // Marks this class as a JPA entity
@Table(name = "resume") // Optional: Specify table name if needed
public class Resume {

    @Id // Marks this field as the primary key in the database
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-generate IDs
    private Long id; // Primary key for the table

    private String resumeLink; // Other fields for the table

    // Getter for id
    public Long getId() {
        return id;
    }

    // Setter for resumeLink
    public String getResumeLink() {
        return resumeLink;
    }

    public void setResumeLink(String resumeLink) {
        this.resumeLink = resumeLink;
    }
}
