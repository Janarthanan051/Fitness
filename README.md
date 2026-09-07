# 🏋️‍♂️ FitMaker - Premium Fitness & Web Application

Welcome to **FitMaker**, an industry-standard, high-performance fitness web application built with **React**, **Vite**, and **Tailwind CSS**. Designed for human readability, security, modularity, and seamless developer maintainability.

---

## 🚀 Quick Start Guide for Developers

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation & Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Janarthanan051/Fitness.git
   cd Fitness
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   ```bash
   cp .env.example .env.local
   ```

4. **Launch Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

5. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 📁 Project Architecture & Directory Structure

```
Fitness/
├── public/                     # Static public assets (favicons, SVGs)
├── src/
│   ├── assets/                 # High-resolution image assets (tools, trainers, blog, reviews)
│   ├── components/             # Human-readable, modular React components
│   │   ├── BlogPosts.jsx       # Blog posts section with responsive grid layout
│   │   ├── CommunitySignup.jsx # Secure sign-up/login form with input validation
│   │   ├── CustomerReviews.jsx # Interactive testimonial showcase
│   │   ├── FitnessTools.jsx    # Interactive calculators (BMI, Calorie, Water, Goal, Macro)
│   │   ├── Footer.jsx          # Secure, responsive footer with social links
│   │   ├── Navbar.jsx          # Accessible navigation header
│   │   ├── SocialIcons.jsx     # Reusable SVG social brand icons
│   │   └── Trainers.jsx        # Certified master trainers showcase
│   ├── data/
│   │   └── fitnessData.js      # Centralized data store (Easy content customization)
│   ├── App.css                 # Global CSS rules & keyframe animations
│   ├── App.jsx                 # Main application page layout
│   ├── index.css               # Tailwind CSS directives
│   └── main.jsx                # React DOM entry point
├── .env.example                # Security & environment template
├── package.json                # Project dependencies & scripts
├── tailwind.config.js          # Tailwind theme & color configurations
└── README.md                   # Developer documentation
```

---

## 🛠️ How to Customize Content (For Developers)

All text content, pricing plans, service offerings, and data objects are centralized in [`src/data/fitnessData.js`](file:///c:/Fitness/src/data/fitnessData.js). To modify content without touching component JSX logic:

### 1. Modifying Trainers
Edit `trainersData` array in [`fitnessData.js`](file:///c:/Fitness/src/data/fitnessData.js):
```javascript
export const trainersData = [
  {
    id: 1,
    name: "Sam Cole",
    role: "Personal Trainer",
    image: trainer1Img,
  },
  // Add new trainers here...
];
```

### 2. Modifying Fitness Tools
Edit `fitnessToolsData` array in [`fitnessData.js`](file:///c:/Fitness/src/data/fitnessData.js):
```javascript
export const fitnessToolsData = [
  {
    id: "calorie",
    title: "CALORIE CALCULATOR",
    description: "Determine your daily target calories based on activity level..."
  }
];
```

---

## 🔒 Security Standards & Best Practices

1. **Input Sanitization & XSS Protection**:
   - Form inputs in `CommunitySignup.jsx` are sanitized using string scrubbing to prevent cross-site scripting (XSS) and script tag injection.
2. **Email Format Validation**:
   - RFC 5322 regex validation (`/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/`) enforces valid email inputs before submission.
3. **Tabnabbing Protection**:
   - All external anchor tags include `target="_blank" rel="noopener noreferrer"` to prevent malicious parent window tampering.
4. **Accessible ARIA Standards**:
   - Semantic tags (`<section>`, `<form>`, `<button>`), `aria-label`, and `role="tablist"` attributes provide accessibility support.

---

## 📜 Available Scripts

- `npm run dev` - Starts the Vite development server.
- `npm run build` - Compiles production-ready bundle into `dist/`.
- `npm run preview` - Locally previews the production build.

---

## 🤝 Code Conventions

- **Human-Readable Component Design**: Clean, well-commented React functional components with descriptive prop names.
- **Tailwind Utility First**: Styling follows Tailwind CSS standards with dark-theme color tokens (`#120a09` base, `#D90A14` accent red).
- **Zero Console Errors**: All production builds compile cleanly with exit code 0.
