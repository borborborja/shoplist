---
description: How to build and deploy the admin panel changes
---

// turbo-all
1. Build the frontend:
   ```bash
   cd web && npm run build
   ```
2. Rebuild the PocketBase binary to embed the new frontend:
   ```bash
   go build -o pocketbase main.go
   ```
3. Restart the server (if already running, kill it first):
   ```bash
   fuser -k 8090/tcp && ./pocketbase serve --http=0.0.0.0:8090
   ```
