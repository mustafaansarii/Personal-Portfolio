package portfolio.mustafa.Portfolio_server.Config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Value("${frontend.local.url}")
    private String localFrontendUrl;

    @Value("${frontend.live.url}")
    private String liveFrontendUrl;

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins(localFrontendUrl, liveFrontendUrl) // Allow both local and live frontends
                .allowedMethods("GET", "POST", "PUT", "DELETE");
    }
}
