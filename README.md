# Memoria – Cemetery Management System

**Memoria** is a modern and respectful cemetery management solution designed to simplify burial bookings, plot management, and record digitization for families and cemetery staff.

## 🚀 Project Overview

Memoria is composed of two main components:

- **cms-front-end** – A Next.js web application (frontend)
- **cms-back-end** – An ASP.NET Boilerplate (ABP Zero) application (backend)

Together, they deliver a full-featured system to digitize and streamline cemetery operations.

---

## 🗂️ Repository Structure

```bash
.
├── cms-front-end     # Frontend (Next.js)
└── cms-back-end      # Backend (ASP.NET Boilerplate / ABP Zero)
```

---

## 📦 Technologies Used

### Frontend (cms-front-end)
- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Ant Design](https://ant.design/)
- [TypeScript](https://www.typescriptlang.org/)

### Backend (cms-back-end)
- [ASP.NET Boilerplate (ABP Zero)](https://aspnetboilerplate.com/)
- [Entity Framework Core](https://learn.microsoft.com/en-us/ef/core/)
- [JWT Authentication](https://jwt.io/)
- [SQL Server](https://www.microsoft.com/en-us/sql-server)

---

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18 or later)
- .NET SDK (v6 or later)
- SQL Server
- Yarn or npm

---

### 1. Clone the Repository
```bash
git clone https://github.com/Lihlu/cemetery-management-system.git
cd cemetery-management-system
```

---

### 2. Environment Variable Setup

#### Frontend (cms-front-end)

Create a `.env.local` file in `cms-front-end/` with the following content:

```env
NEXT_PUBLIC_API_BASE_URL=https://localhost:44311/api
```

Replace the value with your backend base URL if different.

#### Backend (cms-back-end)

Edit `appsettings.json` or `appsettings.Development.json` in `cms-back-end/` to configure:

- **Connection Strings**
```json
"ConnectionStrings": {
  "Default": "Server=YOUR_SQL_SERVER;Database=MemoriaDb;User Id=YOUR_USER;Password=YOUR_PASSWORD;"
}
```

- **JWT Authentication**
```json
"Authentication": {
  "JwtBearer": {
    "SecurityKey": "YourSuperSecureKeyHere",
    "Issuer": "Memoria",
    "Audience": "MemoriaUsers"
  }
}
```

Make sure the JWT `SecurityKey` is strong and kept secret.

---

### 3. Frontend Setup

```bash
cd cms-front-end
yarn install     # or npm install
yarn dev         # or npm run dev
```

---

### 4. Backend Setup

```bash
cd cms-back-end
# Open in Visual Studio or use CLI to:
# - Apply migrations
# - Run the application
```

> ⚠️ Ensure SQL Server is running and that your connection string is correct.

---

## 🌐 Usage

- Admin and staff can manage plots, bookings, and records.
- Families can browse and request burial bookings.
- The system keeps all records digitized, searchable, and secure.

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repo and submit a pull request.

---

## ❤️ Acknowledgements

Built using the power of:
- ASP.NET Boilerplate
- Next.js & React
- Ant Design


