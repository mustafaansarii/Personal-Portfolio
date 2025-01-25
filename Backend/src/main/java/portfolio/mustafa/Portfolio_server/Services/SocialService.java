package portfolio.mustafa.Portfolio_server.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import portfolio.mustafa.Portfolio_server.Model.Social;
import portfolio.mustafa.Portfolio_server.Repository.SocialRepo;

import java.util.List;
import java.util.Optional;

@Service
public class SocialService {

    @Autowired
    private SocialRepo socialRepository;

    // Create or Update Social
    public Social saveSocial(Social social) {
        if (social == null || social.getImgSrc() == null || social.getImgSrc().isEmpty() ||
                social.getLink() == null || social.getLink().isEmpty()) {
            throw new IllegalArgumentException("Image source and link are required");
        }
        return socialRepository.save(social);
    }

    // Get All Socials
    public List<Social> getAllSocials() {
        List<Social> socials = socialRepository.findAll();
        if (socials.isEmpty()) {
            throw new RuntimeException("No socials found");
        }
        return socials;
    }

    // Get Social by ID
    public Social getSocialById(String id) {
        Optional<Social> social = socialRepository.findById(id);
        if (social.isEmpty()) {
            throw new RuntimeException("Social not found with ID: " + id);
        }
        return social.get();
    }

    // Delete Social by ID
    public void deleteSocial(String id) {
        if (!socialRepository.existsById(id)) {
            throw new RuntimeException("Social not found with ID: " + id);
        }
        socialRepository.deleteById(id);
    }

    // Delete All Socials
    public void deleteAllSocials() {
        if (socialRepository.count() == 0) {
            throw new RuntimeException("No socials available to delete");
        }
        socialRepository.deleteAll();
    }
}
