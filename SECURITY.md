# Security Policy

## Supported Versions

We release patches for security vulnerabilities for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

We take the security of CBC Disease Predictor seriously. If you believe you have found a security vulnerability, please report it to us as described below.

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please report them via email to: [your-email@example.com]

You should receive a response within 48 hours. If for some reason you do not, please follow up via email to ensure we received your original message.

Please include the following information:

- Type of issue (e.g. buffer overflow, SQL injection, cross-site scripting, etc.)
- Full paths of source file(s) related to the manifestation of the issue
- The location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit it

## Preferred Languages

We prefer all communications to be in English.

## Policy

We follow the principle of [Coordinated Vulnerability Disclosure](https://vuls.cert.org/confluence/display/CVD).

## Security Best Practices

When using this application:

1. **Never expose ML models** - Keep your trained models secure and don't commit them to public repositories if they contain sensitive information
2. **Secure API endpoints** - Always use authentication and CORS properly in production
3. **Validate all inputs** - The application validates inputs, but always verify data server-side
4. **Use HTTPS** - Always deploy with HTTPS in production
5. **Environment variables** - Never commit API keys or secrets to version control
6. **Regular updates** - Keep dependencies up to date to patch known vulnerabilities
7. **Patient data** - Handle medical data according to HIPAA/GDPR regulations if applicable

## Known Security Considerations

- The current version includes UI-only authentication (no backend validation)
- ML models should be validated and tested thoroughly before production use
- Medical predictions should always be verified by qualified healthcare professionals
- This is a demonstration application and should not be used for actual medical diagnosis without proper validation
