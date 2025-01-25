# Use an official OpenJDK runtime with Java 17 as a parent image
FROM openjdk:17-jdk-slim

# Set the working directory in the container
WORKDIR /app

# Copy the JAR file from the target folder to the container
COPY target/Portfolio-server-0.0.1-SNAPSHOT.jar /app/Portfolio-server.jar

# Expose the port your Spring Boot app runs on (e.g., 8080)
EXPOSE 8080

# Run the Spring Boot application
CMD ["java", "-jar", "Portfolio-server.jar"]
