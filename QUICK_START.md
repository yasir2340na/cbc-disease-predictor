# Quick Reference Card

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run application
npm run dev:all

# Access
Frontend: http://localhost:5173
Backend:  http://localhost:5000
```

## 📦 npm Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start frontend only |
| `npm run dev:backend` | Start backend only |
| `npm run dev:all` | **Start both** (recommended) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## 🎨 Key Features

- **Anemia Prediction**: 5 CBC parameters
- **Leukemia Prediction**: 11 parameters + BMI
- **Responsive Design**: 320px - 4K displays
- **Animations**: Framer Motion powered
- **ML Models**: RandomForest + XGBoost

## 🗂️ Project Structure

```
├── backend/           # Flask API + ML models
├── src/
│   └── pages/        # React components
├── screenshot cbc project/  # App screenshots
└── package.json      # Dependencies
```

## 🔌 API

**Endpoint:** `POST /predict`

**Request:**
```json
{
  "disease": "anemia",
  "inputs": { ... }
}
```

**Response:**
```json
{
  "prediction": "1"  // 1 = Positive, 0 = Negative
}
```

## 🎯 Routes

| URL | Page |
|-----|------|
| `/` | Home |
| `/login` | Login |
| `/signup` | Signup |
| `/predict` | Patient Info |
| `/enter-cbc-values` | CBC Input |
| `/verify-input` | Verification |
| `/prediction-result` | Results |

## 🐛 Common Issues

**Port in use?**
```bash
npx kill-port 5173 5000
```

**Node version?**
```bash
nvm use 20
```

**Dependencies?**
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📚 Documentation

- [README.md](README.md) - Full documentation
- [CONTRIBUTING.md](CONTRIBUTING.md) - How to contribute
- [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment guide
- [CHANGELOG.md](CHANGELOG.md) - Version history

## 🤝 Need Help?

Open an issue: [GitHub Issues](https://github.com/yourusername/cbc-disease-predictor/issues)

---

**Made with ❤️ for better healthcare through AI**
