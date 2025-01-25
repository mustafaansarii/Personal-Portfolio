package portfolio.mustafa.Portfolio_server.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import portfolio.mustafa.Portfolio_server.Model.Social;
import portfolio.mustafa.Portfolio_server.Services.SocialService;

import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/socials")
public class SocialController {

    @Autowired
    private SocialService socialService;

    // Create or Update Social
    @PostMapping
    public ResponseEntity<Social> createSocial(@RequestBody Social social) {
        if (social == null || social.getLink() == null || social.getImgSrc() == null) {
            return ResponseEntity.badRequest().build();  // 400 Bad Request
        }
        Social savedSocial = socialService.saveSocial(social);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedSocial);  // 201 Created
    }

    // Get All Socials
    @GetMapping
    public ResponseEntity<List<Social>> getAllSocials() {
        List<Social> socials = socialService.getAllSocials();
        if (socials.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();  // 204 No Content
        }
        return ResponseEntity.ok(socials);  // 200 OK
    }

    // Get Social by ID
    @GetMapping("/{id}")
    public ResponseEntity<Social> getSocialById(@PathVariable String id) {
        Optional<Social> social = Optional.ofNullable(socialService.getSocialById(id));
        if (social.isPresent()) {
            return ResponseEntity.ok(social.get());  // 200 OK
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();  // 404 Not Found
        }
    }

    // Delete Social by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSocial(@PathVariable String id) {
        Optional<Social> existingSocial = Optional.ofNullable(socialService.getSocialById(id));
        if (existingSocial.isPresent()) {
            socialService.deleteSocial(id);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();  // 204 No Content
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();  // 404 Not Found
        }
    }

    // Health Check Endpoint
    @GetMapping("/health")
    public ResponseEntity<String> health() {
        return ResponseEntity.ok("OK");  // 200 OK
    }
}
