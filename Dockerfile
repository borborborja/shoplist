# -----------------------------------------------------------------------------
# Stage 1: Build Frontend (Node)
# -----------------------------------------------------------------------------
FROM node:20-alpine AS frontend-builder
WORKDIR /app/web

# Copy package files
COPY web/package*.json ./
RUN npm ci

# Copy source and build
COPY web/ .
RUN npm run build

# -----------------------------------------------------------------------------
# Stage 2: Build Backend (Go)
# -----------------------------------------------------------------------------
FROM golang:1.23-alpine AS backend-builder
WORKDIR /app

# Install build dependencies
RUN apk add --no-cache git

# Copy Go module files
COPY go.mod ./
# COPY go.sum ./ # Not created yet, will be created by 'go mod tidy' inside container if we were running interactively, but here we might fail if go.sum is missing. 
# We'll run 'go mod tidy' during build for this initial setup since we don't have local Go.
RUN go mod tidy

# Copy Go source
COPY cmd/ ./cmd/
# Copy built frontend assets to the expected embed location
COPY --from=frontend-builder /app/web/dist ./web/dist

# Build static binary
# -ldflags="-s -w" strips debug info for smaller binary
RUN CGO_ENABLED=0 go build \
    -ldflags="-s -w" \
    -o /shoplist \
    ./cmd/server/main.go

# -----------------------------------------------------------------------------
# Stage 3: Final Image (Scratch/Alpine)
# -----------------------------------------------------------------------------
FROM alpine:latest

WORKDIR /app

# Install CA certificates for HTTPS
RUN apk add --no-cache ca-certificates

# Copy binary
COPY --from=backend-builder /shoplist /app/shoplist

# Create data directory
RUN mkdir /pb_data

# Expose port
EXPOSE 8090

# Persistence Volume
VOLUME /pb_data

# Run
CMD ["/app/shoplist", "serve", "--http=0.0.0.0:8090"]
