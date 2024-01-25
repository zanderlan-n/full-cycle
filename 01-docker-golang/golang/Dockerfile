FROM golang:1.18-alpine AS builder

WORKDIR /app
COPY server.go .
RUN CGO_ENABLED=0 GOOS=linux GO111MODULE=off go build -ldflags="-s -w" -o server

FROM scratch
COPY --from=builder /app/server /server
CMD ["/server"]

