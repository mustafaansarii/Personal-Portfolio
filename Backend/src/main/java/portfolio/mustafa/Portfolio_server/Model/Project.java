package portfolio.mustafa.Portfolio_server.Model;

import jakarta.persistence.*;
import lombok.Data;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "projects") // Table name in the database (you can change it if needed)
@Data
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-generate IDs in PostgreSQL
    private Long id; // Changed to Long for auto-generation of IDs (or use UUID if preferred)

    @Column(name = "img_src")  // Column names are explicitly specified (optional)
    private String imgSrc;

    private String title;
    private String description;

    @JsonProperty("GitHubLink")
    @Column(name = "github_link")  // Specify column name for clarity (optional)
    private String gitHubLink;

    @Column(name = "live_link")  // Specify column name for clarity (optional)
    private String liveLink;


// Getter and Setter for id (MongoDB _id)
    public Long getId() {
        return id;
    }

    public void setId(String id) {
        this.id = Long.valueOf(id);
    }

    // Getter and Setter for imgSrc
    public String getImgSrc() {
        return imgSrc;
    }

    public void setImgSrc(String imgSrc) {
        this.imgSrc = imgSrc;
    }

    // Getter and Setter for title
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    // Getter and Setter for description
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    // Getter and Setter for GitHubLink
    public String getGitHubLink() {
        return gitHubLink;
    }

    public void setGitHubLink(String gitHubLink) {
        this.gitHubLink = gitHubLink;
    }

    // Getter and Setter for liveLink
    public String getLiveLink() {
        return liveLink;
    }

    public void setLiveLink(String liveLink) {
        this.liveLink = liveLink;
    }
}
