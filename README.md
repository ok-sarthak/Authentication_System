# 🔐 Vacant Vectors Authentication System

<div align="center">

![Vacant Vectors Logo](frontend/public/logo_v.png)

**A Full-Stack Authentication System built with React, Node.js, and MongoDB**

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.16-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.0.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-Authentication-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)

</div>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [⚡ Quick Start](#-quick-start)
- [🔧 Installation](#-installation)
- [🌍 Environment Variables](#-environment-variables)
- [🚀 Deployment](#-deployment)
- [📱 Usage](#-usage)
- [🔐 Authentication Flow](#-authentication-flow)
- [📧 Email Templates](#-email-templates)
- [🎨 UI Components](#-ui-components)
- [🛡️ Security Features](#️-security-features)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## ✨ Features

### 🔑 **Authentication & Authorization**
- ✅ **User Registration** with email verification
- ✅ **Secure Login** with JWT tokens
- ✅ **Password Reset** via email
- ✅ **Protected Routes** with middleware
- ✅ **Auto-logout** on token expiration
- ✅ **Remember Me** functionality

### 📧 **Email System**
- ✅ **Email Verification** with 6-digit codes
- ✅ **Password Reset** emails with secure tokens
- ✅ **Welcome Emails** for new users
- ✅ **Beautiful HTML Templates** with responsive design
- ✅ **Mailtrap Integration** for email delivery

### 🎨 **Modern UI/UX**
- ✅ **Responsive Design** with TailwindCSS
- ✅ **Smooth Animations** with Framer Motion
- ✅ **Interactive Components** with hover effects
- ✅ **Floating Background Shapes**
- ✅ **Password Strength Indicator**
- ✅ **Toast Notifications**
- ✅ **Loading Spinners** and states

### 🔒 **Security**
- ✅ **Password Hashing** with bcrypt
- ✅ **JWT Token** authentication
- ✅ **CORS Protection**
- ✅ **Input Validation**
- ✅ **HTTP-only Cookies**
- ✅ **Rate Limiting** ready

---

## 🛠️ Tech Stack

### **Frontend**
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.3.1 | UI Framework |
| **Vite** | 6.0.1 | Build Tool |
| **React Router** | 7.0.2 | Navigation |
| **TailwindCSS** | 3.4.16 | Styling |
| **Framer Motion** | 11.13.1 | Animations |
| **Zustand** | 5.0.2 | State Management |
| **Axios** | 1.7.9 | HTTP Client |
| **React Hot Toast** | 2.4.1 | Notifications |
| **Lucide React** | 0.465.0 | Icons |

### **Backend**
| Technology | Version | Purpose |
|------------|---------|---------|
| **Node.js** | Latest | Runtime |
| **Express** | 4.21.1 | Web Framework |
| **MongoDB** | 8.8.3 | Database |
| **Mongoose** | 8.8.3 | ODM |
| **JWT** | 9.0.2 | Authentication |
| **bcryptjs** | 2.4.3 | Password Hashing |
| **Mailtrap** | 3.4.0 | Email Service |
| **CORS** | 2.8.5 | Cross-Origin Requests |
| **Cookie Parser** | 1.4.7 | Cookie Handling |

---

## 📁 Project Structure

```
📦 Vacant Vectors Authentication/
├── 📁 backend/                    # Server-side application
│   ├── 📁 controllers/           # Route handlers
│   │   └── auth.controller.js    # Authentication logic
│   ├── 📁 db/                    # Database configuration
│   │   └── connectDB.js          # MongoDB connection
│   ├── 📁 mailtrap/              # Email service
│   │   ├── emails.js             # Email functions
│   │   ├── emailsTemplates.js    # HTML templates
│   │   └── mailtrap.config.js    # Mailtrap setup
│   ├── 📁 middleware/            # Custom middleware
│   │   └── verifyToken.js        # JWT verification
│   ├── 📁 models/                # Database models
│   │   └── user.model.js         # User schema
│   ├── 📁 routes/                # API routes
│   │   └── auth.route.js         # Auth endpoints
│   ├── 📁 utils/                 # Utility functions
│   │   └── generateTokenAndSetCookie.js
│   └── index.js                  # Server entry point
├── 📁 frontend/                  # Client-side application
│   ├── 📁 public/               # Static assets
│   │   └── logo_v.png           # App logo
│   ├── 📁 src/                  # Source code
│   │   ├── 📁 components/       # Reusable components
│   │   │   ├── FloatingShape.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── LoadingSpinner.jsx
│   │   │   └── PasswordStrengthMeter.jsx
│   │   ├── 📁 pages/            # Route components
│   │   │   ├── EmailVerificationPage.jsx
│   │   │   ├── ForgotPasswordPage.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   ├── NotFound.jsx
│   │   │   ├── ResetPasswordPage.jsx
│   │   │   └── SignUpPage.jsx
│   │   ├── 📁 store/            # State management
│   │   │   └── authStore.js     # Zustand store
│   │   ├── 📁 utils/            # Helper functions
│   │   │   └── date.js          # Date formatting
│   │   ├── App.jsx              # Main app component
│   │   ├── main.jsx             # App entry point
│   │   └── index.css            # Global styles
│   ├── index.html               # HTML template
│   ├── package.json             # Frontend dependencies
│   ├── tailwind.config.js       # TailwindCSS config
│   └── vite.config.js           # Vite configuration
├── package.json                 # Root dependencies
├── .env.local                   # Environment variables template
└── README.md                    # Project documentation
```

---

## ⚡ Quick Start

### 🚀 **One-Command Setup**
```bash
# Clone and setup the project
git clone <repository-url>
cd vacant-vectors-authentication
npm run build
npm start
```

### 🔧 **Development Mode**
```bash
# Start both frontend and backend
npm run dev
```

---

## 🔧 Installation

### **Prerequisites**
- 📦 **Node.js** (v16 or higher)
- 🍃 **MongoDB** (local or Atlas)
- 📧 **Mailtrap Account** (for emails)

### **Step-by-Step Setup**

#### 1️⃣ **Clone the Repository**
```bash
git clone <your-repository-url>
cd vacant-vectors-authentication
```

#### 2️⃣ **Install Dependencies**
```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
cd ..
```

#### 3️⃣ **Environment Setup**
```bash
# Create environment file
cp .env.local .env

# Edit .env with your configurations
nano .env
```

#### 4️⃣ **Start Development Servers**
```bash
# Terminal 1 - Backend
npm run dev

# Terminal 2 - Frontend (in new terminal)
cd frontend
npm run dev
```

#### 5️⃣ **Access the Application**
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000

---

## 🌍 Environment Variables

Create a `.env` file in the root directory:

```env
# 🗄️ Database Configuration
MONGO_URI=mongodb://localhost:27017/vacant-vectors
# Or for MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database

# 🔐 JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-here

# 🌐 Server Configuration
PORT=5000
NODE_ENV=development

# 📧 Mailtrap Configuration (Email Service)
MAILTRAP_TOKEN=your-mailtrap-token
MAILTRAP_ENDPOINT=https://send.api.mailtrap.io/

# 🖥️ Client Configuration
CLIENT_URL=http://localhost:5173
```

### **📧 Setting up Mailtrap**

1. **Create Account**: Visit [Mailtrap.io](https://mailtrap.io)
2. **Get API Token**: Go to API Tokens section
3. **Copy Token**: Add to your `.env` file
4. **Setup Domain**: Configure your sending domain

---

## 🚀 Deployment

### **📦 Build for Production**
```bash
# Build the application
npm run build

# Start production server
npm start
```

### **🌐 Platform-Specific Deployment**

#### **Heroku**
```bash
# Add build script to package.json
"scripts": {
  "build": "npm install && npm install --prefix frontend && npm run build --prefix frontend"
}

# Deploy
git add .
git commit -m "Deploy to Heroku"
git push heroku main
```

#### **Vercel/Netlify**
- Set build command: `npm run build`
- Set output directory: `frontend/dist`
- Add environment variables in platform settings

---

## 📱 Usage

### **🔐 Authentication Flow**

#### **1. Sign Up Process**
```
User Registration → Email Verification → Dashboard Access
```

1. **Register**: Fill out the signup form
2. **Verify**: Check email for 6-digit code
3. **Access**: Login to dashboard

#### **2. Login Process**
```
Credentials → Validation → JWT Token → Dashboard
```

#### **3. Password Reset**
```
Forgot Password → Email Link → New Password → Success
```

### **📊 User Dashboard**
- View profile information
- See account activity
- Last login timestamp
- Secure logout

---

## 🔐 Authentication Flow

```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant Backend
    participant Database
    participant Email

    User->>Frontend: Sign Up
    Frontend->>Backend: POST /api/auth/signup
    Backend->>Database: Create User
    Backend->>Email: Send Verification
    Backend->>Frontend: Success Response
    
    User->>Frontend: Enter Verification Code
    Frontend->>Backend: POST /api/auth/verify-email
    Backend->>Database: Update User Status
    Backend->>Email: Send Welcome Email
    Backend->>Frontend: Verified Response
    
    User->>Frontend: Login
    Frontend->>Backend: POST /api/auth/login
    Backend->>Database: Validate Credentials
    Backend->>Frontend: JWT Token + User Data
    Frontend->>Frontend: Store Auth State
```

---

## 📧 Email Templates

### **📮 Verification Email**
- 🎨 Modern gradient design
- 📱 Responsive layout
- ⏰ Expiration notice
- 🔢 6-digit verification code

### **🔒 Password Reset**
- 🔗 Secure reset link
- ⏱️ 1-hour expiration
- 🛡️ Security warnings
- 📱 Mobile-friendly

### **👋 Welcome Email**
- 🎉 Professional welcome
- 🏢 Company branding
- 📋 Next steps guide
- 🎨 Beautiful template

---

## 🎨 UI Components

### **🔧 Core Components**

#### **Input Component**
```jsx
<Input
  icon={Mail}
  type="email"
  placeholder="Email Address"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
```

#### **Password Strength Meter**
- Real-time validation
- Visual strength indicator
- Criteria checklist
- Color-coded feedback

#### **Floating Shapes**
```jsx
<FloatingShape
  color="bg-purple-500"
  size="w-64 h-64"
  top="-5%"
  left="10%"
  delay={0}
/>
```

### **🎭 Animations**
- **Page Transitions**: Smooth enter/exit
- **Button Interactions**: Hover and tap effects
- **Loading States**: Spinning indicators
- **Form Validation**: Error animations

---

## 🛡️ Security Features

### **🔐 Authentication Security**
- ✅ **Password Hashing**: bcrypt with salt rounds
- ✅ **JWT Tokens**: Secure token generation
- ✅ **HTTP-only Cookies**: XSS protection
- ✅ **Token Expiration**: 7-day auto-logout
- ✅ **CORS Configuration**: Restricted origins

### **🛠️ Backend Security**
- ✅ **Input Validation**: Sanitized user input
- ✅ **Error Handling**: Secure error messages
- ✅ **Rate Limiting**: Ready for implementation
- ✅ **Environment Variables**: Sensitive data protection

### **🌐 Frontend Security**
- ✅ **Protected Routes**: Authentication required
- ✅ **State Management**: Secure auth state
- ✅ **Auto Redirect**: Unauthorized access handling
- ✅ **Token Storage**: Secure cookie handling

---

## 🔧 API Endpoints

### **Authentication Routes**
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/api/auth/signup` | Register new user | ❌ |
| `POST` | `/api/auth/login` | User login | ❌ |
| `POST` | `/api/auth/logout` | User logout | ✅ |
| `POST` | `/api/auth/verify-email` | Email verification | ❌ |
| `POST` | `/api/auth/forgot-password` | Request password reset | ❌ |
| `POST` | `/api/auth/reset-password/:token` | Reset password | ❌ |
| `GET` | `/api/auth/check-auth` | Verify authentication | ✅ |

### **Request/Response Examples**

#### **Sign Up**
```javascript
// Request
POST /api/auth/signup
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "SecurePass123!"
}

// Response
{
  "success": true,
  "message": "User created successfully",
  "user": {
    "id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "isVerified": false
  }
}
```

---

## 🧪 Testing

### **🔍 Manual Testing**
```bash
# Test API endpoints
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","password":"password123"}'
```

### **📱 Frontend Testing**
- Navigate through all pages
- Test form validations
- Verify responsive design
- Check animations and transitions

---

## 🚀 Future Enhancements

### **🔮 Planned Features**
- [ ] **Two-Factor Authentication** (2FA)
- [ ] **Social Login** (Google, GitHub)
- [ ] **Role-Based Access Control** (RBAC)
- [ ] **User Profile Management**
- [ ] **Password History**
- [ ] **Login Activity Logs**
- [ ] **Email Preferences**
- [ ] **Account Deletion**

### **⚡ Performance Improvements**
- [ ] **Redis Caching**
- [ ] **Database Indexing**
- [ ] **API Rate Limiting**
- [ ] **Image Optimization**
- [ ] **Bundle Size Optimization**

---

## 🤝 Contributing

### **🛠️ Development Setup**
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### **📋 Contribution Guidelines**
- Follow existing code style
- Add tests for new features
- Update documentation
- Use conventional commits

---

## 📞 Support

### **🐛 Issues & Bugs**
If you encounter any issues:
1. Check existing [Issues](../../issues)
2. Create a detailed bug report
3. Include steps to reproduce

### **💡 Feature Requests**
Have an idea? We'd love to hear it!
1. Open a [Feature Request](../../issues/new)
2. Describe the feature
3. Explain the use case

---


## 🙏 Acknowledgments

- 🎨 **UI Inspiration**: Modern authentication patterns
- 📧 **Email Templates**: Professional design standards
- 🔐 **Security Best Practices**: Industry standards
- 🌟 **Open Source Community**: For the amazing tools

---

<div align="center">

### Made with ❤️ by Vacant Vectors Team

**⭐ Star this repository if it helped you!**

[![GitHub stars](https://img.shields.io/github/stars/yourusername/vacant-vectors-auth?style=social)](https://github.com/yourusername/vacant-vectors-auth)
[![GitHub forks](https://img.shields.io/github/forks/yourusername/vacant-vectors-auth?style=social)](https://github.com/yourusername/vacant-vectors-auth)

</div>

---

## 📊 Project Stats

| Metric | Value |
|--------|-------|
| **Lines of Code** | ~2,500+ |
| **Components** | 15+ |
| **API Endpoints** | 7 |
| **Email Templates** | 3 |
| **Dependencies** | 25+ |

---

*Enjoy our Authentication System*
