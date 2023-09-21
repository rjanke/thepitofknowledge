# About
This is my personal blog site and it's built with [Vitepress](https://vitepress.dev/) and Docker.

# Develop
In the root directory, run:
```bash
docker-compose up -d
```

The site should be available at http://localhost:5173.

To stop, run:
```bash
docker-compose down
```

## Useful Docker Commands
### Access the container directly.
```bash
docker exec -it vitepress /bin/bash
```
### Rebuild Docker Container
```bash
docker-compose build --no-cache
```