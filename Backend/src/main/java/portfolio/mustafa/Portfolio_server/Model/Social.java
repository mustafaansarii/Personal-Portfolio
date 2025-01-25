package portfolio.mustafa.Portfolio_server.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;
import jakarta.persistence.Id;

@Entity // Marks this class as a JPA entity
@Table(name = "social") // Optional: Specify table name if needed (default will be "social")
public class Social {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)  // Auto-generate IDs
    private Long id;

    private String imgSrc;
    private String link;

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getImgSrc() {
        return imgSrc;
    }

    public void setImgSrc(String imgSrc) {
        this.imgSrc = imgSrc;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }
}
