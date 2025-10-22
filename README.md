# TFFS Science Fest 2025 - Nexus AI Showcase Website

🌌 A visually stunning, interactive, and professional website showcasing **Nexus AI** for the TFFS Science Fest 2025.

## ✨ Features

- **Futuristic Design**: Modern UI with animated particles, smooth transitions, and glowing effects
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Micro-Animations**: Beautiful hover effects, scroll animations, and interactive elements
- **Firebase Integration**: Firestore database for storing visitor feedback
- **Team Showcase**: Elegant profile cards for all team members
- **Project Highlights**: Detailed presentation of Nexus AI's dual modes (Fast & Pro)
- **Interactive Feedback Form**: Real-time form submission with toast notifications

## 🚀 Technologies Used

- HTML5
- CSS3 (with modern animations and gradients)
- Vanilla JavaScript (ES6+)
- Firebase Firestore
- AOS.js (Animate On Scroll)

## 📁 Project Structure

```
SCIENCE FEST 2025/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # JavaScript functionality and Firebase integration
├── firebase-config.md  # Firebase setup instructions
└── README.md          # This file
```

## 🔧 Setup Instructions

### 1. Firebase Configuration

To enable the feedback form functionality:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or use an existing one
3. Enable Firestore Database
4. Get your Firebase config from Project Settings
5. Open `script.js` and replace the config object:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

### 2. Firestore Security Rules

Set up these security rules in Firebase Console:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /feedback/{document} {
      allow read: if request.auth != null;
      allow create: if true;
    }
  }
}
```

### 3. Local Development

Simply open `index.html` in a modern web browser. No build process required!

For better development experience with live reload:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (if available)
npx serve
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
cd "d:\CODING NEW\SCIENCE FEST 2025"
vercel
```

### Deploy to Netlify

1. Drag and drop the project folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or use Netlify CLI:
```bash
npm i -g netlify-cli
netlify deploy
```

### Deploy to GitHub Pages

1. Create a new repository on GitHub
2. Push your code:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main
```
3. Enable GitHub Pages in repository settings

## 👥 Team Members

- **Sarthak Mitra** - Developer & Leader
- **Aishik Mitra** - Lead Researcher
- **Jashojeet Barik** - Presentation Head
- **Aryabir Bhattacharya** - Management & Coordination

## 🤖 About Nexus AI

Nexus AI is an open-source personal assistant with dual modes:
- **Fast Mode**: Quick, responsive, perfect for daily use
- **Pro Mode**: Advanced reasoning, coding, and problem-solving

Visit: [ainexusplatform.vercel.app](https://ainexusplatform.vercel.app)

## 🎨 Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #0a192f;
    --accent-color: #00d9ff;
    /* ... more variables */
}
```

### Animations
Adjust animation timing in `script.js`:
```javascript
AOS.init({
    duration: 1000,  // Animation duration
    once: true,      // Animate only once
    offset: 100      // Trigger offset
});
```

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## 📝 License

Created with ❤️ by Team TFFS for Science Fest 2025

## 🐛 Troubleshooting

**Feedback form not working?**
- Check if Firebase config is properly set up in `script.js`
- Verify Firestore database is enabled in Firebase Console
- Check browser console for errors

**Animations not playing?**
- Ensure JavaScript is enabled in your browser
- Check if AOS.js is loading properly (check network tab)

## 📞 Contact

For questions or support, reach out to the TFFS team.

---

**Developed with ❤️ by Team TFFS | Nexus AI Project | Science Fest 2025**
