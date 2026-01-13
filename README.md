# React-course
This is a simple React application created as part of my React course (Level 1).
## Project Description
The project demonstrates a basic React app and shows how it can be built and run using Docker to ensure the same environment on any machine.
## Tech Stack
- React
- Node.js
- Docker

## Run Using Docker

### Build Docker Image
```bash
docker build -t react-course .
```

### Run Docker Container
```bash
docker run -p 3000:3000 react-course
```

### Open in Browser
http://localhost:3000

## Stopping the Container and Cleanup
To stop the running container:
```bash
docker ps
docker stop <container_id>
```
## Configuration Notes
	The application runs on port 3000

## production Deployment 
- Platform: Back4App Containers
- Deployment Type: Docker Container
- Node Version: 18
- Exposed Port: 3000
- Branch: main
- production Url : mydashboard-yengzt4v.b4a.run
