# 🚀 Groq API Setup Guide

## 🔑 Getting Your Groq API Key

1. **Visit Groq Console**: Go to [https://console.groq.com/](https://console.groq.com/)
2. **Sign Up/Login**: Create an account or sign in
3. **Get API Key**: Navigate to API Keys section and create a new key
4. **Copy the Key**: Copy your API key (it starts with `gsk_`)

## 📁 Create Environment File

Create a `.env` file in your project root (same level as `package.json`):

```bash
# In your project root directory
touch .env
```

## 🔧 Add Your API Key

Open the `.env` file and add your Groq API key:

```env
# Groq API Configuration
VITE_GROQ_API_KEY=gsk_your_actual_api_key_here

# Example:
# VITE_GROQ_API_KEY=gsk_abc123def456ghi789...
```

## ⚠️ Important Notes

- **Never commit your `.env` file** (it's already in `.gitignore`)
- **Restart your dev server** after adding the `.env` file
- **The key must start with `VITE_`** for Vite to expose it to the browser

## 🧪 Test the Setup

1. Add your API key to `.env`
2. Restart the dev server: `npm run dev`
3. Open the chatbot and ask a question
4. You should see AI responses instead of fallback responses

## 🔍 Troubleshooting

If you still get fallback responses:

1. **Check the console** for any error messages
2. **Verify the API key** is correct and starts with `gsk_`
3. **Ensure the `.env` file** is in the project root
4. **Restart the dev server** after making changes

## 💰 Pricing

- **Free Tier**: 100 requests per minute
- **Paid Plans**: Start at $0.50 per million tokens
- **No Credit Card Required** for free tier

## 🎯 Next Steps

Once configured, your AI chatbot will:
- Use Groq's Llama 3.1 70B model for responses
- Access your complete portfolio data
- Provide detailed, accurate answers about your background
- Fall back to local responses if API is unavailable

---

**Need help?** Check the browser console for error messages or refer to [Groq's documentation](https://console.groq.com/docs).
