# 🚀 Groq API Setup Guide for Portfolio Chatbot

## 📋 **Prerequisites**
- A Groq account (free tier available)
- Your portfolio project running locally

## 🔑 **Step 1: Get Your Groq API Key**

1. Visit [Groq Console](https://console.groq.com/)
2. Sign up or log in to your account
3. Navigate to "API Keys" section
4. Create a new API key
5. Copy the API key (it starts with `gsk_...`)

## ⚙️ **Step 2: Configure Environment Variables**

1. Create a `.env` file in your project root:
```bash
# .env
VITE_GROQ_API_KEY=gsk_your_actual_api_key_here
```

2. **IMPORTANT**: Add `.env` to your `.gitignore` file to keep your API key secure:
```bash
# .gitignore
.env
.env.local
```

## 🧪 **Step 3: Test the Integration**

1. Start your development server:
```bash
npm run dev
```

2. Click the chat button (bottom right corner)
3. Ask the chatbot a question about Saikat
4. Check the browser console for any API errors

## 🔍 **Step 4: Verify API Status**

The chatbot will automatically detect if your API key is configured. You can check the status in the browser console:

```javascript
// In browser console
import { groqService } from './src/services/groqService'
console.log(groqService.getStatus())
```

## 💰 **Pricing & Limits**

- **Free Tier**: 100 requests per minute
- **Paid Plans**: Starting from $0.50 per 1M tokens
- **Models Available**: Llama 3.1, Mixtral, and more

## 🚨 **Troubleshooting**

### **API Key Not Working**
- Ensure the `.env` file is in the project root
- Restart your development server after adding the `.env` file
- Check that the API key starts with `gsk_`

### **Rate Limiting**
- If you hit rate limits, the chatbot will fall back to local responses
- Consider upgrading your Groq plan for higher limits

### **Fallback Mode**
- If Groq API is unavailable, the chatbot uses intelligent local responses
- All core functionality remains available

## 🎯 **Customization**

You can customize the AI responses by editing the `SAIKAT_CONTEXT` in `src/services/groqService.js`. This context tells the AI about your background, skills, and experience.

## 🔒 **Security Notes**

- Never commit your `.env` file to version control
- The API key is only used client-side for this portfolio project
- Consider implementing rate limiting for production use

## 📞 **Support**

If you encounter issues:
1. Check the browser console for error messages
2. Verify your API key is correct
3. Ensure your Groq account has available credits
4. Check Groq's [status page](https://status.groq.com/) for service issues

---

**Happy Chatting! 🎉**
