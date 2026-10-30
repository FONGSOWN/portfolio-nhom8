# THE SYNDICATE — DARK GANG GANG PORTFOLIO

> **Concept:** DARK GANG — UNDERGROUND — NO MERCY.  
> Không gian Portfolio đại diện chính thức của nhóm ba thành viên sinh viên Công nghệ Thông tin — **Trường Đại học Giao thông vận tải TP.HCM (UTH)**.

---

## 🩸 Bảng Màu Thiết Kế (Palette)
- **Jet Black:** `#050505` (Bóng tối tuyệt đối)
- **Charcoal:** `#0C0C0C` / `#111111` (Bề mặt khối kim loại)
- **Blood Red:** `#8B0000` (Ánh đèn ngầm)
- **Dark Crimson:** `#C00024` (Nhận diện chủ đạo)
- **Neon Crimson:** `#FF1E44` (Tia quét laser & trạng thái kích hoạt)
- **Smoke Grey:** `#777777` (Khói sương đô thị)
- **Silver:** `#D0D0D0` (Chữ và chi tiết kim loại)

---

## 🎧 Nhạc Nền Tích Hợp (Underground Soundtrack)
- **Bài hát:** *Đầu Đường Xó Chợ*
- **Nghệ sĩ:** Obito ft. Lăng LD
- **Vị trí tệp:** `public/assets/music/` & `dist/assets/music/`
- **Tính năng player:**
  - Mini-player phong cách tactical HUD / underground cassette deck ở góc màn hình.
  - Phím Play / Pause trực tiếp, không qua YouTube hay dịch vụ ngoài.
  - Bộ hiển thị sóng nhạc thời gian thực (Audio Frequency Visualizer Canvas).
  - Thanh tiến trình kéo / tua bài hát chính xác kèm thời gian thực.
  - Thanh chỉnh âm lượng mượt mà, ghi nhớ âm lượng bằng `localStorage`.
  - Hiệu ứng nhịp đập đỏ thẫm (ambient rhythmic bass pulse) lan tỏa theo nền website khi nhạc phát.

---

## 👥 Ba Thành Viên Tinh Nhuệ (The Syndicate Operatives)

1. **Nguyễn Văn Trung** (`OPERATIVE // OVERLORD`)
   - **Vai trò:** Core Systems & Backend Architect
   - **Học vấn:** Trường Đại học Giao thông vận tải TP.HCM (UTH)
   - **Kỹ năng:** Java, Socket Programming, MySQL Stored Procedures, Python AI, Network Security
   - **Portfolio chính thức:** [https://trung047.github.io/Portfolio/](https://trung047.github.io/Portfolio/)

2. **Nguyễn Vũ Duy** (`OPERATIVE // VIRTUOSO`)
   - **Vai trò:** Frontend Lead & UI/UX Specialist
   - **Học vấn:** Trường Đại học Giao thông vận tải TP.HCM (UTH)
   - **Kỹ năng:** React JS, Tailwind CSS, JavaScript ES6+, C++, Motion Interaction, Figma
   - **Portfolio chính thức:** [https://nguyen-vu-duy-portfolio.vercel.app/](https://nguyen-vu-duy-portfolio.vercel.app/)

3. **Dương Như Phong Sơn** (`OPERATIVE // WARLORD`)
   - **Vai trò:** Full-Stack Engineer & Cloud Infrastructure
   - **MSSV:** 045206003326
   - **Học vấn:** Trường Đại học Giao thông vận tải TP.HCM (UTH)
   - **Kỹ năng:** Python Flask, SQLite/MySQL, Cloud Render Deployment, C/C++, System Architecture
   - **Portfolio chính thức:** [https://portfolio-ca-nhan.onrender.com/](https://portfolio-ca-nhan.onrender.com/)

---

## 🐾 Đồ Án Nhóm Tiêu Biểu: PetCare
- **Tên dự án:** Hệ Thống Quản Lý Phòng Khám Thú Y (PetCare Clinic Management)
- **Công nghệ:** Python Flask, SQLite / MySQL, HTML5 / CSS3, JavaScript ES6, Cloud Render
- **Mô tả:** Nền tảng số hóa đặt lịch khám bệnh, quản lý hồ sơ tiêm chủng và bệnh án thú cưng, phân quyền quản trị viên phòng khám.
- **Trải nghiệm thực tế (Live Demo):** [https://website-quan-li-thu-y.onrender.com](https://website-quan-li-thu-y.onrender.com)

---

## ⚡ Hướng Dẫn Cài Đặt & Chạy Môi Trường

### 1. Cài đặt thư viện
```bash
npm install
```

### 2. Chạy môi trường phát triển (Dev Server)
```bash
npm run dev
```

### 3. Đóng gói sản phẩm (Production Build)
```bash
npm run build
```

Thư mục đầu ra `dist/` đã sẵn sàng để triển khai lên bất kỳ Web Server hoặc dịch vụ Hosting nào (GitHub Pages, Vercel, Render, Netlify).

### 4. Triển khai lên GitHub Pages
Dự án đã tích hợp sẵn:
- File cấu hình GitHub Actions tự động tại `.github/workflows/deploy.yml`.
- Thư mục `docs/` chứa bản build tĩnh tương thích tùy chọn `Deploy from a branch -> /docs`.
- Đường dẫn tương đối `base: './'` trong `vite.config.js` đảm bảo không bị lỗi đường dẫn tĩnh ở bất kỳ domain con nào.

---

*Bản quyền © 2026 THE SYNDICATE • Khoa Công nghệ Thông tin — Trường Đại học Giao thông vận tải TP.HCM.*

