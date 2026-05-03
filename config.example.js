/* ============================================
   CONFIGURATION EXAMPLE FILE
   ============================================
   This file shows the structure of credentials needed.
   
   TO USE:
   1. Copy this file and rename it to config.js
   2. Replace all placeholder values with your actual credentials
   3. Make sure config.js is in your .gitignore (keep it local only)
   
   NEVER commit real API keys to version control!
   ============================================ */

// IBM Text-to-Speech Configuration
// Used for: Accessibility features (read results aloud)
const IBM_TTS_API_KEY = 'YOUR_IBM_TTS_API_KEY_HERE';
const IBM_TTS_URL = 'https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/YOUR_INSTANCE_ID';

// IBM Watson Natural Language Understanding Configuration
// Used for: Main scam analysis AND AI Scam Advisor chat
const IBM_NLU_CONFIG = {
    apiKey: 'YOUR_IBM_WATSON_NLU_API_KEY_HERE',
    url: 'YOUR_IBM_WATSON_NLU_URL_HERE', // e.g., https://api.us-south.natural-language-understanding.watson.cloud.ibm.com
    version: '2022-04-07'
};

// IBM Cloudant Configuration
const CLOUDANT_URL = 'https://YOUR_ACCOUNT.cloudantnosqldb.appdomain.cloud';
const CLOUDANT_API_KEY = 'YOUR_CLOUDANT_API_KEY_HERE';
const CLOUDANT_DATABASE = 'scam_reports';

// Made with Bob
