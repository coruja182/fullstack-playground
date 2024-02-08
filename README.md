# Full Stack Playground

## Project requirements

- Docker Desktop
- NodeJS 20
- Java 17

## Environment Setup

- Install [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- Make sure your JAVA_HOME is set to JDK 17
- Make sure `node --version` responds version 20

## Running Locally

```shell
docker compose up --build --force-recreate
```

To shutdown you just need to `Ctrl + C` or in another shell type `docker compose down`

After starting up, the front end should be available on port 5173 (<http://localhost:5173>)

## Front End

### front-end TODOs

- Dockerfile should use a different user, not `root`
- Test/Implement a production build

### Build Image

```shell
cd frontend
docker build --target dev -t frontend:dev

# to run
docker run -p 5173:5173 frontend:dev

# to run image, but access the shell
docker run -p 5173:5173 -it frontend:dev /bin/sh
```

## References

- <https://docs.docker.com/language/java/develop/>
- <https://github.com/spring-guides/gs-rest-service>
- MySQL init script: <https://iamvickyav.medium.com/mysql-init-script-on-docker-compose-e53677102e48>
- Spring Data REST Repositories: <https://spring.io/guides/gs/accessing-data-rest/>
- Configure MySQL 8 with Spring Boot: <https://www.sqliz.com/posts/java-connect-mysql8-micro-spring-boot/>
- Removing CORS from backend calls: <https://docs.spring.io/spring-data/rest/reference/customizing/configuring-cors.html>
- Use containers for Node.js development: <https://docs.docker.com/language/nodejs/develop/>

## Problems found during dev process and related references

- front end was not accessible in the local machine <https://stackoverflow.com/questions/67902313/vue-vite-cannot-connect-to-docker-container/73009260#73009260>
