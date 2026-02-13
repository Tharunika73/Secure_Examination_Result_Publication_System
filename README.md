# Secure Examination Result Publication System (SERPS)

A comprehensive, secure web application for managing and publishing examination results with role-based access control.

## 🎯 Features

### For Students
- Secure login using Registration Number and Date of Birth
- View semester-wise results with SGPA/CGPA
- Download result as PDF (planned)
- Real-time result publication notifications

### For Teachers
- Marks entry interface with validation
- Class-wise and subject-wise marks management
- Draft and publish workflow
- Audit trail for all modifications

### For Administrators
- System overview dashboard with statistics
- Result approval and publication workflow
- User management
- Audit logs and security monitoring

## 🏗️ Architecture

### Frontend
- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS v4
- **Routing**: React Router v6
- **HTTP Client**: Axios
- **State Management**: React Hooks

### Backend
- **Framework**: Spring Boot 3.2.0
- **Security**: Spring Security with JWT
- **Database**: H2 (development) / MySQL (production)
- **ORM**: Spring Data JPA
- **Build Tool**: Maven

## 📁 Project Structure

```
Secure_Examination_Result_Publication_System/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── layouts/         # Layout components
│   │   ├── pages/           # Page components
│   │   ├── services/        # API service layer
│   │   └── App.jsx          # Main app component
│   └── package.json
│
├── result-system/           # Spring Boot backend
│   ├── src/main/java/com/secureexam/resultsystem/
│   │   ├── config/          # Configuration classes
│   │   ├── controller/      # REST controllers
│   │   ├── dto/            # Data Transfer Objects
│   │   ├── entity/         # JPA entities
│   │   ├── repository/     # Data repositories
│   │   ├── security/       # Security & JWT
│   │   └── service/        # Business logic
│   └── pom.xml
│
└── README_SERPS.md          # This file
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ and npm
- **Java** 17+
- **Maven** 3.6+ (or use included Maven wrapper)

### Backend Setup

1. Navigate to backend directory:
   ```bash
   cd result-system
   ```

2. Build the project:
   ```bash
   ./mvnw clean install
   # or on Windows: mvnw.cmd clean install
   ```

3. Run the application:
   ```bash
   ./mvnw spring-boot:run
   # or on Windows: mvnw.cmd spring-boot:run
   ```

The backend will start on `http://localhost:8080`

### Frontend Setup

1. Navigate to frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

The frontend will start on `http://localhost:5173`

## 🔐 Default Credentials

### Admin
- **Username**: `admin`
- **Password**: `password`

### Teacher
- **Username**: `teacher`
- **Password**: `password`

### Students
- **Reg No**: `2023CS001` to `2023CS005`
- **DOB**: `2000-01-01` to `2000-01-05`

## 📡 API Endpoints

### Authentication
```
POST /api/auth/login - User login
```

### Student APIs (Requires STUDENT role)
```
GET /api/student/{regNo}/results?semester={semester} - Get results
```

### Teacher APIs (Requires TEACHER role)
```
GET /api/teacher/marks?classId={classId}&subjectId={subjectId} - Get class marks
POST /api/teacher/marks - Save marks
```

### Admin APIs (Requires ADMIN role)
```
GET /api/admin/stats - Get system statistics
POST /api/admin/results/publish - Publish results
POST /api/admin/results/approve - Approve results
```

## 🛠️ Technology Stack

### Frontend
- React 18
- Vite 7
- Tailwind CSS v4
- React Router v6
- Axios
- Lucide React (icons)

### Backend
- Spring Boot 3.2.0
- Spring Security
- Spring Data JPA
- JWT (io.jsonwebtoken)
- H2 Database
- Lombok
- BCrypt

## 🔒 Security Features

- JWT-based authentication
- Role-based access control (RBAC)
- Password encryption using BCrypt
- CORS configuration
- Audit logging for all operations
- Secure result publication workflow

## 📊 Database Schema

### Main Entities
- **User**: Authentication and user information
- **Student**: Student profile data
- **Subject**: Course/subject information
- **Result**: Examination marks and grades

## 🧪 Testing

### Frontend
```bash
cd frontend
npm run test
```

### Backend
```bash
cd result-system
./mvnw test
```

## 📦 Production Build

### Frontend
```bash
cd frontend
npm run build
```
Output will be in `frontend/dist/`

### Backend
```bash
cd result-system
./mvnw clean package
```
JAR file will be in `result-system/target/`

## 🌐 Deployment

### Frontend
Deploy the `frontend/dist/` folder to any static hosting service (Netlify, Vercel, etc.)

### Backend
Deploy the JAR file to any Java hosting service or container platform

## 📝 License

This project is created for educational purposes.

## 👥 Contributors

- Development Team

## 📞 Support

For issues and questions, please create an issue in the repository.
