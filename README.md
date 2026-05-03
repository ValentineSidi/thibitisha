# 🛡️ Thibitisha - Protecting Kenya's Youth from Job Scams

**Thibitisha** (Swahili for "verify") is an AI-powered job advert verification tool that protects Kenyan Gen Z from fake job offers and human trafficking schemes.

🌐 **Live Demo:** [https://valentinesidi.github.io/thibitisha](https://valentinesidi.github.io/thibitisha)

---

## 🚨 The Problem

Kenya faces a critical crisis: **Gen Z unemployment** has created a perfect storm for exploitation. Young, desperate job seekers are falling victim to sophisticated scam networks that promise legitimate employment but deliver:

- **Fake job offers** with upfront payment demands
- **Human trafficking** disguised as overseas opportunities
- **Identity theft** through fraudulent recruitment processes
- **Financial exploitation** targeting vulnerable youth

### Martin Mburu's Story

Martin Mburu, a 24-year-old Kenyan graduate, responded to what seemed like a legitimate job posting for a customer service role in Dubai. The "recruiter" was professional, the company website looked real, and the salary was attractive but not unrealistic. After paying "processing fees" totaling KES 45,000 (his family's savings), Martin arrived in Dubai only to discover:

- The company didn't exist
- His "employment visa" was fake
- He was stranded in a foreign country with no money
- The scammers had disappeared

Martin's story is not unique. **Thousands of Kenyan youth** face similar exploitation every month, with devastating consequences for families and communities.

---

## 💡 Our Solution

Thibitisha empowers job seekers to **verify before they trust**. Using advanced AI analysis, our tool:

✅ **Analyzes job adverts** for scam patterns and red flags
✅ **Extracts text from images** (screenshots, photos of flyers)
✅ **Provides instant risk assessment** with detailed explanations
✅ **AI Scam Advisor chat** for real-time questions and guidance
✅ **Enables anonymous reporting** to build community intelligence
✅ **Offers accessibility features** including text-to-speech

---

## 🔧 IBM Technology Stack

Thibitisha is built entirely on **IBM's cutting-edge AI and cloud technologies**:

### 🤖 **IBM Bob (AI Development Partner)**
Our entire application was developed in collaboration with IBM Bob, an AI-powered development assistant that accelerated our build process and ensured best practices throughout.

### 🧠 **IBM Watson Natural Language Understanding (NLU)**
Powers our core scam detection engine AND the new AI Scam Advisor chat by analyzing:
- Sentiment and emotional manipulation tactics
- Entity extraction (companies, locations, contact details)
- Keyword analysis for common scam indicators
- Semantic patterns in fraudulent job postings
- Real-time emotion detection for contextual responses
- User intent classification for personalized advice

### 💬 **AI Scam Advisor Chat (NEW!)**
Interactive AI-powered chat assistant using IBM Watson NLU:
- Floating chat button for instant help
- Context-aware responses based on sentiment analysis
- Bilingual support (English & Swahili)
- Specialized knowledge about job scams, red flags, and safety tips
- Emotional intelligence to provide supportive guidance
- Real-time analysis of user questions

### 🔊 **IBM Watson Text-to-Speech**
Provides accessibility for visually impaired users and those with reading difficulties, ensuring everyone can protect themselves from scams.

### 📊 **IBM Cloudant (NoSQL Database)**
Stores anonymized scam reports to build **community intelligence**:
- Distributed, scalable database for high availability
- Real-time synchronization across regions
- Privacy-preserving architecture for sensitive data
- Enables pattern recognition across reported scams

---

## 🚀 How to Run Locally

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Python 3.x (for local server)
- IBM Cloud account with API credentials

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/valentinesidi/thibitisha.git
   cd thibitisha
   ```

2. **Configure API credentials:**
   ```bash
   cp config.example.js config.js
   ```

3. **Add your IBM API keys to `config.js`:**
   - IBM Watson Text-to-Speech API key and URL
   - IBM Watson Natural Language Understanding API key and URL (powers both main analysis AND AI chat)
   - IBM Cloudant URL, API key, and database name

4. **Start local web server:**
   ```bash
   python3 -m http.server 8000
   ```

5. **Open in browser:**
   ```
   http://localhost:8000
   ```

---

## 🔒 Security Notes

**IMPORTANT:** This project uses external configuration to protect sensitive API credentials.

- ✅ **config.js** - Contains real API keys (local only, **NEVER commit**)
- ✅ **config.example.js** - Template with placeholders (safe to commit)
- ✅ **.gitignore** - Automatically excludes config.js from version control

**Never share your `config.js` file or commit it to any repository.** All IBM API keys should remain confidential and local to your development environment.

---

## 🌍 Impact & Vision

Thibitisha represents more than just a tool—it's a **movement to protect Kenya's youth** from exploitation. By combining IBM's world-class AI technology with local knowledge of scam patterns, we're creating a safer digital ecosystem for job seekers.

### Our Goals:
- 🎯 Verify 100,000+ job adverts in the first year
- 🤝 Partner with Kenyan employment agencies and NGOs
- 📱 Expand to mobile app for wider accessibility
- 🌐 Scale across East Africa to protect millions

---

## 📄 License

This project is developed for the IBM watsonx Challenge 2025.

---

## 🙏 Acknowledgments

Built with ❤️ for Kenya's Gen Z by Valentine Sidi, powered by IBM's AI technologies.

**Together, we can end job scam exploitation.**
