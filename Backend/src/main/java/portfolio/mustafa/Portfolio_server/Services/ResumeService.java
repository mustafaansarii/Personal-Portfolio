package portfolio.mustafa.Portfolio_server.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import portfolio.mustafa.Portfolio_server.Model.Resume;
import portfolio.mustafa.Portfolio_server.Repository.ResumeRepo;

import java.util.List;
import java.util.Optional;

@Service
public class ResumeService {

    @Autowired
    private ResumeRepo resumeRepository;

    // Create or Update Resume
    public Resume saveResume(Resume resume) {
        if (resume == null || resume.getResumeLink() == null || resume.getResumeLink().isEmpty()) {
            throw new IllegalArgumentException("Resume link is required");
        }
        return resumeRepository.save(resume);
    }

    // Get All Resumes
    public List<Resume> getAllResumes() {
        List<Resume> resumes = resumeRepository.findAll();
        if (resumes.isEmpty()) {
            throw new RuntimeException("No resumes found");
        }
        return resumes;
    }

    // Get Resume by ID
    public Resume getResumeById(String id) {
        Optional<Resume> resume = resumeRepository.findById(id);
        if (resume.isEmpty()) {
            throw new RuntimeException("Resume not found with ID: " + id);
        }
        return resume.get();
    }

    // Delete Resume by ID
    public void deleteResume(String id) {
        if (!resumeRepository.existsById(id)) {
            throw new RuntimeException("Resume not found with ID: " + id);
        }
        resumeRepository.deleteById(id);
    }

    // Delete All Resumes
    public void deleteAllResumes() {
        if (resumeRepository.count() == 0) {
            throw new RuntimeException("No resumes available to delete");
        }
        resumeRepository.deleteAll();
    }
}
