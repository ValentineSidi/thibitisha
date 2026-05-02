<<<<<<< HEAD
# Thibitisha - Job Advert Verification Tool

A web application to verify job adverts against Kenyan scam patterns and protect users from fake jobs and trafficking.

## Setup Instructions

### Configuration

This project uses external configuration for API keys to keep credentials secure.

1. **Copy the example configuration:**
   ```bash
   cp config.example.js config.js
   ```

2. **Add your API keys to `config.js`:**
   - IBM Text-to-Speech API key and URL
   - IBM Watson Natural Language Understanding API key and URL
   - IBM Cloudant URL, API key, and database name

3. **Never commit `config.js`:**
   - The file is already in `.gitignore`
   - Only `config.example.js` should be committed to the repository
   - Keep your real API keys local only

### Running the Application

Start a local web server:
```bash
python3 -m http.server 8000
```

Then open your browser to `http://localhost:8000`

## Security Notes

- **config.js** - Contains real API keys (local only, not in git)
- **config.example.js** - Template with placeholders (committed to repo)
- **.gitignore** - Ensures config.js is never committed

## Features

- Job advert text analysis
- Image text extraction (OCR)
- AI-enhanced scam detection using IBM Watson NLU
- Anonymous reporting to Cloudant database
- Text-to-speech for accessibility

## API Services Used

- IBM Watson Text-to-Speech
- IBM Watson Natural Language Understanding
- IBM Cloudant NoSQL Database
=======
# thibitisha
>>>>>>> d3ff576c272778addceee1621ba6cefe3fad27bd
