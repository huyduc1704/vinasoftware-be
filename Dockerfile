# Base image
FROM node:18-alpine AS builder

# Thiết lập thư mục làm việc
WORKDIR /app

# Khai báo biến môi trường phụ trợ Prisma (Tuỳ chọn)
ENV PRISMA_SKIP_TESTS=1

# Copy file cấu hình package
COPY package*.json ./
COPY prisma ./prisma/

# Cài đặt toàn bộ dependencies (kể cả devDeps để build)
RUN npm install

# Copy source code
COPY . .

# Generate Prisma Client & Build app
RUN npx prisma generate
RUN npm run build

# Stage 2: Production image (Giảm kích thước file image)
FROM node:18-alpine

WORKDIR /app

# Copy thư mục node_modules đã cài và thư mục dist đã build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

# Expose port (Backend đang chạy PORT 8080)
EXPOSE 8080

# Chạy Command mặc định khi khởi động container
CMD ["npm", "run", "start:prod"]
