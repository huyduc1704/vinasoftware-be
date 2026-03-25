# Vinasoftware Accounting - Backend API

Dự án Backend API cho hệ thống quản lý Kế toán & HR (Vinasoftware Accounting), được xây dựng trên nền tảng tiến tiến đảm bảo hiệu suất cao và dễ dàng mở rộng.

## Công Nghệ Sử Dụng (Tech Stack)

- **Framework:** [NestJS](https://nestjs.com/) (Node.js) - Kiến trúc module hóa, hỗ trợ Dependency Injection mạnh mẽ.
- **Ngôn ngữ:** TypeScript.
- **Bảo mật & Authentication:** JWT (JSON Web Tokens), Cookie-based Auth, bcrypt.
- **ORM & Database:** [Prisma](https://www.prisma.io/) + PostgreSQL.
- **Tài liệu API:** Swagger (OpenAPI) & [Scalar API Reference](https://scalar.com/).
- **Môi trường & Triển khai:** Docker, hỗ trợ deploy Serverless / Container (Railway, Render).

---

## Bước 1: Tạo & Kết Nối Database PostgreSQL

Dự án sử dụng **PostgreSQL**. Bạn có thể dùng database trên Cloud miễn phí hoặc cài trên máy tính cục bộ.

### Cách 1: Dùng Cloud Database (Khuyến nghị - Dễ hơn)

**Dùng [Neon.tech](https://neon.tech) (Miễn phí, không cần cài đặt):**
1. Vào [neon.tech](https://neon.tech) → Đăng ký tài khoản miễn phí.
2. Tạo một **Project** mới.
3. Vào mục **Connection Details** → Copy chuỗi **Connection String** có dạng:
   ```
   postgresql://user:password@ep-xxx.us-east-2.aws.neon.tech/neondb?sslmode=require
   ```
4. Dán vào file `.env` ở bước tiếp theo.

### Cách 2: Dùng PostgreSQL Cục Bộ (Local)

1. Tải & cài đặt [PostgreSQL](https://www.postgresql.org/download/).
2. Sau khi cài, mở **pgAdmin** hoặc dùng terminal để tạo database:
   ```sql
   CREATE DATABASE vinasoftware_db;
   ```
3. Connection String sẽ có dạng:
   ```
   postgresql://postgres:your_password@localhost:5432/vinasoftware_db
   ```

---

## Bước 2: Chạy Dự Án Cục Bộ (Không dùng Docker)

### Yêu cầu
- [Node.js](https://nodejs.org/) v18+
- Database PostgreSQL đã tạo ở Bước 1

### Cài đặt

```bash
# 1. Clone source code về máy
git clone https://github.com/huyduc1704/vinasoftware-be.git
cd vinasoftware-accounting

# 2. Cài các thư viện cần thiết
npm install
```

### Tạo file `.env`

Tạo file `.env` ở thư mục gốc và điền vào:
```env
# Dán Connection String từ Bước 1 vào đây
DATABASE_URL="postgresql://user:password@localhost:5432/vinasoftware_db"

# Chuỗi bí mật để mã hóa Token đăng nhập (Đặt tùy ý, càng dài càng bảo mật)
JWT_SECRET="your-super-secret-key-here"

# Cổng chạy server (Mặc định 8080)
PORT=8080
```

### Khởi tạo Database

```bash
# Tạo cấu trúc bảng trong Database
npx prisma db push

# Tạo dữ liệu mẫu (Tài khoản Admin mặc định)
npm run seed
```

### Khởi chạy

```bash
# Chế độ phát triển (Tự reload khi sửa code)
npm run dev
```

Server chạy tại: `http://localhost:8080`
Tài liệu API tại: `http://localhost:8080/docs`

---

## Bước 2 (Thay Thế): Chạy Bằng Docker

Nếu không muốn cài Node.js, bạn có thể dùng Docker để chạy toàn bộ dự án trong Container.

### Yêu cầu
- Cài [Docker Desktop](https://www.docker.com/products/docker-desktop/) (Windows/Mac) hoặc Docker Engine (Linux).
- Đã có Database PostgreSQL (Neon.tech hoặc local) từ Bước 1.

### Các lệnh Docker

```bash
# 1. Build Docker Image từ Dockerfile
docker build -t vinasoftware-be .

# 2. Chạy Container (Thay DATABASE_URL và JWT_SECRET bằng giá trị của bạn)
docker run -d \
  -p 8080:8080 \
  -e DATABASE_URL="postgresql://user:password@host:5432/db" \
  -e JWT_SECRET="your-secret-key" \
  -e PORT=8080 \
  --name vinasoftware-api \
  vinasoftware-be

# 3. Chạy Migration Database (Chỉ cần làm lần đầu)
docker exec -it vinasoftware-api npx prisma db push
docker exec -it vinasoftware-api npm run seed
```

Server chạy tại: `http://localhost:8080`

### Một số lệnh Docker hữu ích

```bash
# Xem logs (nhật ký) của container
docker logs -f vinasoftware-api

# Dừng container
docker stop vinasoftware-api

# Khởi động lại
docker start vinasoftware-api

# Xóa container (khi muốn build lại)
docker rm -f vinasoftware-api
```

---

## Bước 3: Deploy Lên Railway (Production)

### Deploy tự động từ GitHub (Khuyến nghị)

1. Đăng ký [Railway.app](https://railway.app) (Miễn phí).
2. **New Project** → **Deploy from GitHub repo** → Chọn `vinasoftware-be`.
3. Vào Tab **Variables** → Thêm các biến môi trường:
   - `DATABASE_URL` = Connection String từ Neon.tech
   - `JWT_SECRET` = Chuỗi bí mật của bạn
   - `PORT` = `8080`
4. Railway tự động đọc `Dockerfile` và build + chạy server.
5. Vào Tab **Settings** → **Domains** để lấy URL công khai.

---

## Tài Liệu API

Sau khi server chạy, truy cập tài liệu API đầy đủ tại:
- **Local:** `http://localhost:8080/docs`
- **Production:** `https://your-railway-url.up.railway.app/docs`

---

## Cấu Trúc Thư Mục

```text
vinasoftware-accounting/
├── prisma/
│   ├── schema.prisma      # Định nghĩa cấu trúc Database
│   └── seed.ts            # Dữ liệu mẫu khởi tạo
├── src/
│   ├── auth/              # Module Xác thực (Login, JWT)
│   ├── contracts/         # Module Quản lý Hợp đồng
│   ├── customers/         # Module Quản lý Khách hàng
│   ├── employees/         # Module Quản lý Nhân sự
│   ├── prisma/            # Kết nối Database
│   └── main.ts            # Điểm khởi chạy ứng dụng
├── Dockerfile             # Cấu hình build Docker
└── package.json           # Danh sách thư viện
```
