# Contributing to CBC Disease Predictor

Thank you for your interest in contributing to CBC Disease Predictor! We welcome contributions from the community.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for everyone.

## How to Contribute

### Reporting Bugs

If you find a bug, please open an issue with:
- A clear and descriptive title
- Steps to reproduce the issue
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Your environment (OS, Node version, Python version)

### Suggesting Enhancements

Feature requests are welcome! Please open an issue with:
- A clear description of the feature
- Why this feature would be useful
- Examples of how it would work

### Pull Requests

1. **Fork the repository** and create your branch from `main`
   ```bash
   git checkout -b feature/AmazingFeature
   ```

2. **Follow the coding style**
   - Use ESLint and Prettier for JavaScript/React code
   - Follow PEP 8 for Python code
   - Write meaningful commit messages

3. **Test your changes**
   - Ensure the frontend builds without errors: `npm run build`
   - Test the backend API endpoints
   - Verify responsive design on multiple screen sizes

4. **Update documentation**
   - Update README.md if needed
   - Add comments for complex logic
   - Update API documentation for new endpoints

5. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/AmazingFeature
   ```

7. **Open a Pull Request**
   - Provide a clear description of your changes
   - Reference any related issues
   - Include screenshots for UI changes

## Development Setup

### Prerequisites
- Node.js v20.x LTS
- Python 3.8+
- Git

### Setup
```bash
# Clone your fork
git clone https://github.com/yourusername/cbc-disease-predictor.git
cd cbc-disease-predictor

# Install dependencies
npm install
pip install -r backend/requirements.txt

# Start development servers
npm run dev:all
```

## Coding Standards

### JavaScript/React
- Use functional components with hooks
- Follow React best practices
- Use meaningful variable and function names
- Add PropTypes or TypeScript types (if applicable)
- Keep components small and focused

### Python
- Follow PEP 8 style guide
- Use type hints where appropriate
- Write docstrings for functions
- Keep functions small and focused

### CSS/Tailwind
- Use Tailwind utility classes
- Avoid custom CSS unless necessary
- Follow mobile-first responsive design
- Maintain consistent spacing and colors

## Commit Message Guidelines

Use clear and meaningful commit messages:

- `feat: Add new feature`
- `fix: Fix bug in component`
- `docs: Update documentation`
- `style: Format code`
- `refactor: Refactor component`
- `test: Add tests`
- `chore: Update dependencies`

## Questions?

Feel free to open an issue with your question or reach out to the maintainers.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
