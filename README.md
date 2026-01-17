<div align="center">

# 🩺 CBC Disease Predictor

### AI-Powered Complete Blood Count Analysis

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Python](https://img.shields.io/badge/Python-3.8+-green.svg)](https://www.python.org/)
[![Flask](https://img.shields.io/badge/Flask-Latest-black.svg)](https://flask.palletsprojects.com/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**A modern, professional web application for predicting Anemia and Leukemia using machine learning models trained on Complete Blood Count (CBC) test results.**

[Features](#-features) • [Screenshots](#-screenshots) • [Installation](#-installation) • [Usage](#-usage) • [Tech Stack](#-tech-stack) • [Contributing](#-contributing)

</div>

---

## 📋 Overview

CBC Disease Predictor is a full-stack medical analysis application that leverages machine learning to provide accurate predictions for:
- **Anemia** - Based on haemoglobin, MCH, MCHC, and MCV values
- **Leukemia** - Based on comprehensive blood markers including WBC, RBC, platelets, and genetic factors

The application features a beautiful, responsive UI with smooth animations, glassmorphism effects, and an intuitive user experience designed for medical professionals and patients alike.

## ✨ Features

### 🧬 Core Functionality
- **AI-Powered Predictions** - RandomForest and XGBoost ML models for accurate disease detection
- **Dual Disease Analysis** - Support for both Anemia and Leukemia prediction
- **Input Validation** - Real-time form validation with comprehensive error handling
- **Data Transformation** - Automatic preprocessing and scaling of medical data
- **Result Visualization** - Clear, color-coded results with detailed parameter breakdown

### 🎨 User Experience
- **Modern UI/UX** - Glassmorphism design with gradient accents
- **Smooth Animations** - Framer Motion powered transitions and micro-interactions
- **Fully Responsive** - Mobile-first design supporting all screen sizes (320px to 4K)
- **Accessibility** - WCAG compliant with proper ARIA labels and focus states
- **Dark Patterns** - Custom scrollbars and loading states

### 🔐 Authentication (UI Ready)
- Login page with form validation
- Signup page with password requirements
- Ready for backend integration

### 📱 Multi-Device Support
- 📱 Mobile (320px - 767px)
- 📲 Tablet (768px - 1023px)
- 💻 Desktop (1024px - 1919px)
- 🖥️ Large Display (1920px+)

## 📸 Screenshots

<div align="center">

### Landing Page
![Home Page](./screenshot%20cbc%20project/home.png)
*Modern hero section with animated features and call-to-action buttons*

### Patient Information
![Predict Page](./screenshot%20cbc%20project/predict%20page.png)
*Clean form for entering patient demographics*

### Disease Selection & CBC Entry
![Select Disease](./screenshot%20cbc%20project/select%20desease%20page.png)
*Choose between Anemia and Leukemia analysis*

![CBC Values](./screenshot%20cbc%20project/cbc%20test%20values.png)
*Dynamic form fields based on selected disease type*

### Input Verification
![Verify Input](./screenshot%20cbc%20project/verify%20input.png)
*Review raw and transformed data before prediction*

### Results Display
![Result Page](./screenshot%20cbc%20project/result%20page.png)
*Color-coded prediction results with detailed CBC parameters*

### Authentication
<table>
  <tr>
    <td><img src="./screenshot%20cbc%20project/login%20page.png" alt="Login" /></td>
    <td><img src="./screenshot%20cbc%20project/signup%20page.png" alt="Signup" /></td>
  </tr>
  <tr>
    <td align="center"><em>Login Page</em></td>
    <td align="center"><em>Signup Page</em></td>
  </tr>
</table>

</div>

## 🚀 Installation

### Prerequisites

Ensure you have the following installed:

- **Node.js** v20.x LTS ([Download](https://nodejs.org/))
- **Python** 3.8+ ([Download](https://www.python.org/downloads/))
- **npm** (comes with Node.js)
- **Git** ([Download](https://git-scm.com/))

### Clone the Repository

```bash
git clone https://github.com/yourusername/cbc-disease-predictor.git
cd cbc-disease-predictor
```

### Install Dependencies

#### Frontend (Node.js)

```bash
npm install
```

> **⚠️ Important:** If using Node v24, you may encounter errors. Switch to Node v20 LTS:
>
> ```bash
> nvm use 20
> # If nvm not installed: https://github.com/nvm-sh/nvm
> ```

#### Backend (Python)

```bash
pip install -r backend/requirements.txt
```

Or using a virtual environment (recommended):

```bash
python -m venv .venv
.venv\Scripts\activate  # Windows
source .venv/bin/activate  # macOS/Linux
pip install -r backend/requirements.txt
```

## 🎮 Usage

### Quick Start (Recommended)

Run both frontend and backend with a single command:

```bash
npm run dev:all
```

This will start:
- ✅ **Frontend:** http://localhost:5173
- ✅ **Backend:** http://localhost:5000

### Run Separately

**Terminal 1 - Frontend:**
```bash
npm run dev
```

**Terminal 2 - Backend:**
```bash
npm run dev:backend
# or
cd backend && python app.py
```

### Build for Production

```bash
npm run build
npm run preview  # Preview production build
```

## 🏗️ Project Structure

```
cbc-disease-predictor/
│
├── backend/
│   ├── app.py                    # Flask API server
│   ├── requirements.txt          # Python dependencies
│   ├── anemia_model.pkl          # Anemia ML model (RandomForest)
│   ├── anemia_scaler.pkl         # Anemia data scaler
│   └── leukemia_model.pkl        # Leukemia ML model (XGBoost)
│
├── src/
│   ├── pages/
│   │   ├── IntroPage.jsx                # Landing page with hero section
│   │   ├── Header.jsx                   # Navigation bar
│   │   ├── LoginPage.jsx                # Login form
│   │   ├── SignupPage.jsx               # Registration form
│   │   ├── PredictPage.jsx              # Patient information form
│   │   ├── EnterCBCValuesPage.jsx       # CBC values input
│   │   ├── VerifyInputPage.jsx          # Data verification
│   │   ├── PredictionResultPage.jsx     # Results display
│   │   └── UploadReportPage.jsx         # Report upload (placeholder)
│   │
│   ├── App.jsx                   # Main routing configuration
│   ├── main.jsx                  # React entry point
│   └── index.css                 # Global styles & utilities
│
├── screenshot cbc project/       # Application screenshots
├── package.json                  # Node.js dependencies & scripts
├── tailwind.config.js            # TailwindCSS configuration
├── vite.config.js                # Vite build configuration
├── .gitignore                    # Git ignore rules
├── LICENSE                       # MIT License
└── README.md                     # This file
```

## 🛣️ Available Routes

| Route | Description | Features |
|-------|-------------|----------|
| `/` | Landing Page | Hero section, features, how it works |
| `/login` | User Login | Form validation, gradient design |
| `/signup` | User Registration | Multi-field form with validation |
| `/predict` | Patient Info | Name, age, gender input |
| `/enter-cbc-values` | CBC Entry | Dynamic fields based on disease type |
| `/verify-input` | Data Review | Raw & transformed data display |
| `/prediction-result` | Results | Color-coded prediction with details |
| `/upload-report` | File Upload | Optional report upload (placeholder) |

## 🧪 Tech Stack

### Frontend
- **React** 18.2.0 - UI library
- **Vite** 6.3.2 - Build tool & dev server
- **TailwindCSS** 3.4.17 - Utility-first CSS framework
- **Framer Motion** 12.10.0 - Animation library
- **React Router DOM** 6.14.1 - Client-side routing
- **Formik** 2.4.6 - Form management
- **Yup** 1.6.1 - Schema validation
- **Heroicons** 2.2.0 - Icon library

### Backend
- **Flask** - Lightweight Python web framework
- **Flask-CORS** - Cross-origin resource sharing
- **scikit-learn** - Machine learning library
- **XGBoost** - Gradient boosting framework
- **NumPy** - Numerical computing
- **Pandas** - Data manipulation
- **joblib** - Model serialization

### Machine Learning Models
- **Anemia Detection**: RandomForest Classifier
  - Input features: Gender, Haemoglobin, MCH, MCHC, MCV
  - Preprocessing: StandardScaler normalization
  
- **Leukemia Detection**: XGBoost Classifier
  - Input features: Age, Gender, WBC, RBC, Platelets, Hemoglobin, Bone Marrow Blasts, Genetic Mutation, Family History, BMI
  - Preprocessing: Feature engineering and scaling

## 📡 API Endpoints

### POST `/predict`

Predicts disease based on CBC values.

**Request Body:**
```json
{
  "disease": "anemia",  // or "leukemia"
  "inputs": {
    "gender": "Male",
    "haemoglobin": 12.5,
    "mch": 28.0,
    "mchc": 33.0,
    "mcv": 85.0
  }
}
```

**Response:**
```json
{
  "prediction": "1",  // 1 = Positive, 0 = Negative
  "confidence": 0.89
}
```

## 🎨 Design Features

### Color Palette
- **Primary**: Blue (#2563EB) to Cyan (#0891B2) gradients
- **Secondary**: Teal (#14B8A6) to Emerald (#10B981)
- **Success**: Green shades for negative results
- **Error**: Rose/Red shades for positive results
- **Warning**: Amber for verification steps

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900

### Animations
- **Page Transitions**: Fade in, slide up, scale
- **Hover Effects**: Scale, shadow, translate
- **Background**: Floating gradient orbs
- **Icons**: Rotation on hover
- **Buttons**: Scale on interaction

## 🔧 Configuration

### Vite Config
Located in `vite.config.js` - handles React setup and build optimization.

### Tailwind Config
Located in `tailwind.config.js` - custom animations, colors, and utilities.

### PostCSS Config
Located in `postcss.config.js` - TailwindCSS and Autoprefixer setup.

## 🚀 Deployment

### Frontend (Vercel/Netlify)

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting provider.

### Backend (Heroku/Railway/Render)

1. Create a `Procfile`:
```
web: cd backend && gunicorn app:app
```

2. Add `gunicorn` to `requirements.txt`:
```bash
echo "gunicorn" >> backend/requirements.txt
```

3. Deploy to your hosting provider.

### Environment Variables

Create `.env` file in root (if needed):
```env
VITE_API_URL=http://localhost:5000
```

## 🐛 Troubleshooting

### Node Version Issues
```bash
# Check current version
node --version

# Install nvm (Windows)
# Download from: https://github.com/coreybutler/nvm-windows

# Switch to Node 20
nvm install 20
nvm use 20
```

### Python Module Errors
```bash
# Create virtual environment
python -m venv .venv

# Activate (Windows)
.venv\\Scripts\\activate

# Activate (macOS/Linux)
source .venv/bin/activate

# Install dependencies
pip install -r backend/requirements.txt
```

### CORS Issues
Ensure Flask-CORS is installed and configured in `backend/app.py`:
```python
from flask_cors import CORS
CORS(app)
```

### Port Already in Use
```bash
# Kill process on port 5173 (frontend)
npx kill-port 5173

# Kill process on port 5000 (backend)
npx kill-port 5000
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and development process.

## 🙏 Acknowledgments

- **Machine Learning Models**: Trained on medical CBC datasets
- **UI Design**: Inspired by modern healthcare applications
- **Icons**: Heroicons by Tailwind Labs
- **Animations**: Powered by Framer Motion

## 📧 Contact

For questions or support, please open an issue on GitHub or contact the maintainers.

---

<div align="center">

**Made with ❤️ for better healthcare through AI**

[⬆ Back to Top](#-cbc-disease-predictor)

</div>
