package portfolio.mustafa.Portfolio_server.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import portfolio.mustafa.Portfolio_server.Model.Project;
import portfolio.mustafa.Portfolio_server.Services.ProjectService;

import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/projects")
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    // Create or Update Project
    @PostMapping
    public ResponseEntity<Project> createProject(@RequestBody Project project) {
        if (project == null || project.getTitle() == null || project.getDescription() == null) {
            return ResponseEntity.badRequest().build();  // 400 Bad Request
        }
        Project savedProject = projectService.saveProject(project);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedProject);  // 201 Created
    }

    // Get All Projects
    @GetMapping
    public ResponseEntity<List<Project>> getAllProjects() {
        List<Project> projects = projectService.getAllProjects();
        if (projects.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();  // 204 No Content
        }
        return ResponseEntity.ok(projects);  // 200 OK
    }

    // Get Project by ID
    @GetMapping("/{id}")
    public ResponseEntity<Project> getProjectById(@PathVariable String id) {
        Optional<Project> project = Optional.ofNullable(projectService.getProjectById(id));
        if (project.isPresent()) {
            return ResponseEntity.ok(project.get());  // 200 OK
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();  // 404 Not Found
        }
    }

    // Delete Project by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProject(@PathVariable String id) {
        Optional<Project> existingProject = Optional.ofNullable(projectService.getProjectById(id));
        if (existingProject.isPresent()) {
            projectService.deleteProject(id);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();  // 204 No Content
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();  // 404 Not Found
        }
    }

    @DeleteMapping("/Delete_all")
    public ResponseEntity<Void> deleteAllProjects() {
        try {
            projectService.deleteAllProjects();
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();  // 204 No Content
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();  // 404 Not Found
        }
    }
}
