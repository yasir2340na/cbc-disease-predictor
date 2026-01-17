# Deployment Guide

This guide covers deploying the CBC Disease Predictor to various hosting platforms.

## Table of Contents
- [Frontend Deployment](#frontend-deployment)
- [Backend Deployment](#backend-deployment)
- [Full Stack Deployment](#full-stack-deployment)
- [Environment Variables](#environment-variables)

---

## Frontend Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Configure**
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Netlify

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

4. **Configuration** (`netlify.toml`)
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"
   
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

### GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update `vite.config.js`**
   ```javascript
   export default defineConfig({
     base: '/cbc-disease-predictor/',
     // ... rest of config
   })
   ```

3. **Add deploy script to `package.json`**
   ```json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

---

## Backend Deployment

### Heroku

1. **Install Heroku CLI**
   ```bash
   # Download from: https://devcenter.heroku.com/articles/heroku-cli
   ```

2. **Create `Procfile` in project root**
   ```
   web: cd backend && gunicorn app:app
   ```

3. **Create `runtime.txt`**
   ```
   python-3.11.0
   ```

4. **Update `backend/requirements.txt`**
   ```bash
   echo "gunicorn" >> backend/requirements.txt
   ```

5. **Deploy**
   ```bash
   heroku login
   heroku create your-app-name
   git push heroku main
   ```

### Railway

1. **Install Railway CLI**
   ```bash
   npm install -g @railway/cli
   ```

2. **Login and initialize**
   ```bash
   railway login
   railway init
   ```

3. **Deploy**
   ```bash
   railway up
   ```

4. **Configure**
   - Root Directory: `backend`
   - Start Command: `gunicorn app:app`

### Render

1. **Create `render.yaml`**
   ```yaml
   services:
     - type: web
       name: cbc-predictor-backend
       env: python
       buildCommand: pip install -r backend/requirements.txt
       startCommand: cd backend && gunicorn app:app
   ```

2. **Connect repository** on Render dashboard

3. **Deploy** automatically on push

### PythonAnywhere

1. **Upload files** to PythonAnywhere

2. **Install requirements**
   ```bash
   pip3 install --user -r backend/requirements.txt
   ```

3. **Configure WSGI**
   ```python
   import sys
   path = '/home/yourusername/cbc-disease-predictor/backend'
   if path not in sys.path:
       sys.path.append(path)
   
   from app import app as application
   ```

---

## Full Stack Deployment

### Docker

1. **Create `Dockerfile` in root**
   ```dockerfile
   FROM node:20 AS frontend-build
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   RUN npm run build
   
   FROM python:3.11-slim
   WORKDIR /app
   
   COPY backend/requirements.txt .
   RUN pip install --no-cache-dir -r requirements.txt
   
   COPY backend/ ./backend/
   COPY --from=frontend-build /app/dist ./frontend/dist
   
   EXPOSE 5000
   CMD ["python", "backend/app.py"]
   ```

2. **Create `docker-compose.yml`**
   ```yaml
   version: '3.8'
   services:
     app:
       build: .
       ports:
         - "5000:5000"
       environment:
         - FLASK_ENV=production
   ```

3. **Build and run**
   ```bash
   docker-compose up --build
   ```

### DigitalOcean App Platform

1. **Create `app.yaml`**
   ```yaml
   name: cbc-disease-predictor
   services:
     - name: frontend
       github:
         repo: yourusername/cbc-disease-predictor
         branch: main
       build_command: npm run build
       run_command: npm run preview
       
     - name: backend
       github:
         repo: yourusername/cbc-disease-predictor
         branch: main
       build_command: pip install -r backend/requirements.txt
       run_command: cd backend && gunicorn app:app
   ```

---

## Environment Variables

### Frontend `.env`

```env
VITE_API_URL=https://your-backend-url.com
```

### Backend Environment Variables

```env
FLASK_ENV=production
CORS_ORIGINS=https://your-frontend-url.com
SECRET_KEY=your-secret-key-here
```

---

## Post-Deployment Checklist

- [ ] Test all routes and functionality
- [ ] Verify API endpoints are accessible
- [ ] Check CORS configuration
- [ ] Test on mobile devices
- [ ] Verify SSL/HTTPS is working
- [ ] Monitor error logs
- [ ] Set up analytics (optional)
- [ ] Configure custom domain (optional)
- [ ] Set up CI/CD pipeline (optional)

---

## Monitoring

### Frontend Monitoring
- Use Vercel Analytics or Google Analytics
- Monitor lighthouse scores
- Track user interactions

### Backend Monitoring
- Use Sentry for error tracking
- Monitor API response times
- Track ML model performance

---

## Troubleshooting

### CORS Issues
Update `backend/app.py`:
```python
from flask_cors import CORS
CORS(app, origins=["https://your-frontend-url.com"])
```

### Build Failures
- Check Node.js version (should be v20.x)
- Verify all dependencies are installed
- Check build logs for specific errors

### Model Loading Issues
- Ensure .pkl files are included in deployment
- Check file paths are correct
- Verify sufficient memory allocation

---

## Need Help?

Open an issue on GitHub: https://github.com/yourusername/cbc-disease-predictor/issues
