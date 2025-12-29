# React-course
This is a simple React application created as part of my React course (Level 1).
## Project Description
The project demonstrates a basic React app and shows how it can be built and run using Docker to ensure the same environment on any machine.
## Project Structure
- `src/` : React source code
- `public/` : Public files
- `Dockerfile` : Docker configuration for the project
## Run Locally (Without Docker)

1. Install dependencies:
```bash
npm install
```

2. Start the application:
```bash
npm start
```

3. Open the browser at:
http://localhost:3000

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