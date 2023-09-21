# About
This is my personal blog site. It's built on [VitePress](https://vitepress.dev/), GitHub Pages, and Docker for local development.

# Local Development
In the root directory, run:
```bash
docker-compose up -d
```

The site should now be available at http://localhost:5173.

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