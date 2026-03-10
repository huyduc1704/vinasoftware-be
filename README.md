# Vinasoftware Accounting - Backend API 🚀

Dự án Backend API cho hệ thống quản lý Kế toán & HR (Vinasoftware Accounting), được xây dựng trên nền tảng tiến tiến đảm bảo hiệu suất cao và dễ dàng mở rộng.

## 🛠️ Công Nghệ Sử Dụng (Tech Stack)

- **Framework:** [NestJS](https://nestjs.com/) (Node.js) - Kiến trúc module hóa, hỗ trợ Dependency Injection mạnh mẽ.
- **Ngôn ngữ:** TypeScript.
- **Bảo mật & Authentication:** JWT (JSON Web Tokens), Cookie-based Auth, bcrypt.
- **ORM & Database:** [Prisma](https://www.prisma.io/) + PostgreSQL.
- **Tài liệu API:** Swagger (OpenAPI) & [Scalar API Reference](https://scalar.com/).
- **Môi trường & Triển khai:** Docker, hỗ trợ deploy Serverless / Container (Railway, Render).

---

## 💻 Cài Đặt Dưới Dưới Cục Bộ (Local Development)

### Yêu cầu hệ thống (Prerequisites)
- [Node.js](https://nodejs.org/) (Khuyên dùng v18+).
- Hệ quản trị cơ sở dữ liệu PostgreSQL đã được cài đặt, hoặc một Database URL Cloud (Neon, Supabase).

### 1. Cài đặt thư viện
```bash
git clone https://github.com/huyduc1704/vinasoftware-be.git
cd vinasoftware-accounting
npm install
```

### 2. Thiết lập Biến môi trường
Tạo file `.env` ở thư mục gốc của dự án và điền các thông tin sau:
```env
# URL kết nối đến cơ sở dữ liệu PostgreSQL của bạn
DATABASE_URL="postgresql://user:password@localhost:5432/vinasoftware_db?schema=public"

# Khóa bí mật dùng để mã hóa Token đăng nhập (JWT)
JWT_SECRET="Chuoi-Bi-Mat-Tao-Token-Cua-Ban-O-Day"

# Port chạy ứng dụng (Mặc định 8080)
PORT=8080
```

### 3. Khởi tạo Cơ sở dữ liệu (Database Setup)
Đẩy cấu trúc bảng (Schema) xuống Database và tạo dữ liệu mẫu (Seeding):
```bash
# Push cấu trúc bảng xuống Database
npx prisma db push

# Generate lại Prisma Client để Typescript nhận diện
npx prisma generate

# (Tùy chọn) Khởi tạo dữ liệu mẫu gồm Tài khoản Admin & Các chức danh nhân sự
npm run seed
```

### 4. Khởi chạy Ứng dụng
```bash
# Chế độ phát triển (Cập nhật code tự động)
npm run dev

# Chế độ Production
npm run build
npm run start:prod
```

Server sẽ chạy tại: `http://localhost:8080`

---

## 📚 Tài Liệu API (API Documentation)

Sau khi khởi chạy ứng dụng thành công, toàn bộ tài liệu hệ thống API đã được tự động tạo và biên dịch thông qua Swagger & Scalar.

- **URL truy cập API Docs:** `http://localhost:8080/docs`
- Bạn có thể xem chi tiết các Endpoint, Models gửi nhận và Test API trực tiếp ngay trên giao diện này.

---

## 🐳 Triển Khai Lên Máy Chủ (Deployment)

Dự án này đã được cấu hình sẵn sàng để có thể Deploy bằng **Docker**.

### Gợi ý nền tảng:
- **Hosting Backend:** [Railway.app](https://railway.app), [Render.com](https://render.com) (Hỗ trợ chạy Docker Container liên tục).
- **Hosting Database:** [Neon.tech](https://neon.tech), [Supabase.com](https://supabase.com/database) (Cung cấp PostgreSQL Serverless miễn phí).

### Cách Deploy trên Railway (Bằng Github Repo):
1. Đăng nhập [Railway.app](https://railway.app) > **New Project** > **Deploy from GitHub repo**.
2. Chọn repository `vinasoftware-be`.
3. Đi tới Tab **Variables** của Service mới tạo, thêm các biến:
   - `DATABASE_URL` = (Connection String trỏ đến Neon / Supabase)
   - `JWT_SECRET` = (Chuỗi Secret Của Bạn)
   - `PORT` = `8080`
4. Railway sẽ tự động đọc file `Dockerfile` trong source code và tiến hành build & chạy server.

---

## 📄 Cấu Trúc Thư Mục Chính
```text
vinasoftware-accounting/
├── prisma/
│   ├── schema.prisma      # Định nghĩa thiết kế Database
│   └── seed.ts            # Dữ liệu mẫu (Khởi tạo tài khoản admin)
├── src/
│   ├── auth/              # Module Xác thực (Login, JWT Guards)
│   ├── contracts/         # Module Quản lý Hợp đồng Khách hàng
│   ├── customers/         # Module Quản lý Khách hàng
│   ├── employees/         # Module Quản lý Nhân sự & Phả hệ
│   ├── prisma/            # Module Kết nối Database Prisma
│   ├── app.module.ts      # Module Gốc của hệ thống
│   └── main.ts            # File khởi chạy ứng dụng
├── Dockerfile             # Cấu hình Build Docker Image
└── package.json           # Danh sách Package Node.js
```
