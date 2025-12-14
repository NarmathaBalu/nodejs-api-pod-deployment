# Node.js Sample API – Jenkins + Podman CI/CD

This repository demonstrates a **simple end-to-end CI/CD pipeline**
using **Jenkins and Podman** to build and deploy a Node.js API locally.

---

## 🚀 API Endpoints

| Method | Endpoint       | Description        |
|------|---------------|--------------------|
| GET  | /health       | Health check       |
| GET  | /api/hello    | Sample API message |

---

## 🧰 Prerequisites

- macOS
- Git
- Node.js (optional for local run)
- Jenkins (local)
- Podman

### Podman setup (macOS)
```bash
brew install podman
podman machine init
podman machine start


## to run podmon

podman build -t demo .
podman run -d -p 3000:3000 demo
