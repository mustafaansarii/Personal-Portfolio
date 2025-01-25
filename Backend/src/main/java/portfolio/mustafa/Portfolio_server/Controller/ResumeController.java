package portfolio.mustafa.Portfolio_server.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import portfolio.mustafa.Portfolio_server.Model.Resume;
import portfolio.mustafa.Portfolio_server.Services.ResumeService;

import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/resumes")
public class ResumeController {

    @Autowired
    private ResumeService resumeService;

    // Create or Update Resume
    @PostMapping
    public ResponseEntity<Resume> createResume(@RequestBody Resume resume) {
        if (resume == null || resume.getResumeLink() == null) {
            return ResponseEntity.badRequest().build();  // 400 Bad Request
        }
        Resume savedResume = resumeService.saveResume(resume);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedResume);  // 201 Created
    }

    // Get All Resumes
    @GetMapping
    public ResponseEntity<List<Resume>> getAllResumes() {
        List<Resume> resumes = resumeService.getAllResumes();
        if (resumes.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();  // 204 No Content
        }
        return ResponseEntity.ok(resumes);  // 200 OK
    }

    // Get Resume by ID
    @GetMapping("/{id}")
    public ResponseEntity<Resume> getResumeById(@PathVariable String id) {
        Optional<Resume> resume = Optional.ofNullable(resumeService.getResumeById(id));
        if (resume.isPresent()) {
            return ResponseEntity.ok(resume.get());  // 200 OK
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();  // 404 Not Found
        }
    }

    // Delete Resume by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteResume(@PathVariable String id) {
        Optional<Resume> existingResume = Optional.ofNullable(resumeService.getResumeById(id));
        if (existingResume.isPresent()) {
            resumeService.deleteResume(id);
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
