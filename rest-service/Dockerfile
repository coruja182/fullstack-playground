#Build stage
FROM gradle:8.5.0-jdk17 AS buildStage
WORKDIR /usr/app/
COPY . .
RUN gradle build

# Package stage
FROM eclipse-temurin:17-jdk-jammy
ENV JAR_NAME=app.jar
ENV APP_HOME=/usr/app
WORKDIR $APP_HOME
COPY --from=buildStage /usr/app/build/libs/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]