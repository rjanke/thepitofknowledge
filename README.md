# About
This is the code behind my personal blog [site](https://thepitofknowledge.com/). It's built on [VitePress](https://vitepress.dev/), GitHub Pages, and uses Docker for local development.

## Local Development
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
Be sure to stop any running containers first.
```bash
docker-compose down
```
```bash
docker-compose build --no-cache
```
## Contributions
If you see a mistake or otherwise think an article needs improvement, feel free to [create an issue](https://github.com/rjanke/thepitofknowledge/issues) and (if you think you have a fix) create a [pull request](https://github.com/rjanke/thepitofknowledge/pulls) with your changes. Any input is highly appreciated, thank you!

## License
All code samples/snippets are licensed under the public domain. View the [full license](https://github.com/rjanke/thepitofknowledge/blob/main/pages/license.md).

Copyright © 2017-present Ryan Janke (rjanke)