package portfolio.mustafa.Portfolio_server.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import portfolio.mustafa.Portfolio_server.Model.Project;
import portfolio.mustafa.Portfolio_server.Repository.ProjectRepo;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepo projectRepository;

    // Create or Update Project
    public Project saveProject(Project project) {
        if (project == null || project.getTitle() == null || project.getTitle().isEmpty()) {
            throw new IllegalArgumentException("Project title is required");
        }
        return projectRepository.save(project);
    }

    // Get All Projects
    public List<Project> getAllProjects() {
        List<Project> projects = projectRepository.findAll();
        if (projects.isEmpty()) {
            throw new RuntimeException("No projects found");
        }
        return projects;
    }

    // Get Project by ID
    public Project getProjectById(String id) {
        Optional<Project> project = projectRepository.findById(id);
        if (project.isEmpty()) {
            throw new RuntimeException("Project not found with ID: " + id);
        }
        return project.get();
    }

    // Delete Project by ID
    public void deleteProject(String id) {
        if (!projectRepository.existsById(id)) {
            throw new RuntimeException("Project not found with ID: " + id);
        }
        projectRepository.deleteById(id);
    }

    // Delete All Projects
    public void deleteAllProjects() {
        if (projectRepository.count() == 0) {
            throw new RuntimeException("No projects available to delete");
        }
        projectRepository.deleteAll();
    }
}
