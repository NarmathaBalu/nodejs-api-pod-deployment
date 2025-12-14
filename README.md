# Node.js Sample API with Podman and Jenkins CI/CD

This repository contains a **Node.js sample API** deployed in a **Podman pod** along with **Redis**, managed through a **Jenkins CI/CD pipeline**. The setup mimics Kubernetes pods for multi-container applications and provides a repeatable, rootless deployment environment.

---

## **Folder Structure**

nodejs-sample-api/
├── Jenkinsfile # CI/CD pipeline definition
├── Dockerfile # Node.js container build
├── server.js # Main Node.js API
├── routes.js # Additional API endpoints
├── package.json # Node.js dependencies
├── package-lock.json # Node.js lock file
├── README.md # This documentation
└── tests/ # Optional automated tests
└── test.js

yaml
Copy code

---

## **API Endpoints**

| Endpoint               | Method | Description                          |
|------------------------|--------|--------------------------------------|
| `/health`              | GET    | Returns API status (`UP`)             |
| `/api/hello`           | GET    | Returns "Hello from Node.js API"     |
| `/api/goodbye`         | GET    | Returns "Goodbye from Node.js API"   |
| `/metrics`             | GET    | Returns sample metrics               |

---

## **Prerequisites**

- Node.js >= 20  
- npm  
- Podman >= 4.0 (macOS/Windows requires Podman Machine)  
- Jenkins installed locally  

---

## **Local Deployment with Podman**

1. **Start Podman machine (macOS/Windows):**

```bash
podman machine init
podman machine start
Build Node.js API container:

bash
Copy code
podman build -t nodejs-api:latest .
Run API in a Podman pod with Redis:

bash
Copy code
# Remove existing pod if any
podman pod rm -f api-pod || true

# Create pod and expose port
podman pod create --name api-pod -p 3000:3000

# Run Node.js API
podman run -d --pod api-pod --name nodejs-api nodejs-api:latest

# Run Redis container
podman run -d --pod api-pod --name redis redis:alpine
Verify API endpoints:

bash
Copy code
curl http://localhost:3000/health
curl http://localhost:3000/api/hello
curl http://localhost:3000/api/goodbye
Stop and clean up containers/pod:

bash
Copy code
podman pod rm -f api-pod
podman rm -f nodejs-api redis
