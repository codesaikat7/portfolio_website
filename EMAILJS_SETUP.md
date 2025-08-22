# EmailJS Setup Guide for Contact Form

This guide will help you set up EmailJS to enable email functionality in your portfolio's contact form.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down the **Service ID** (you'll need this later)

## Step 3: Create Main Contact Form Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template structure:

```html
Subject: New Contact Form Message from {{from_name}}

Hello {{to_name}},

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

4. Save the template and note down the **Template ID**

## Step 4: Create Auto-Reply Template

1. Create another new template for auto-replies
2. Use this template structure:

```html
Subject: {{subject}}

{{message}}

---
This is an automated response. Please don't reply to this email.
```

3. Save the template and note down the **Auto-Reply Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

## Step 5: Get Your Public Key

1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

## Step 6: Configure Environment Variables

1. Create a `.env` file in your project root (if it doesn't exist)
2. Add these variables:

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID=your_auto_reply_template_id_here
```

3. Replace the placeholder values with your actual IDs from EmailJS

## Step 7: Test the Contact Form

1. Start your development server
2. Go to the contact section
3. Fill out and submit the form
4. Check your email inbox for the message
5. Check the sender's email for the auto-reply

## Important Notes

- **Free Plan Limits**: EmailJS free plan allows 200 emails per month
- **Security**: The public key is safe to expose in frontend code
- **Environment Variables**: Make sure to restart your dev server after adding the `.env` file
- **Production**: The same environment variables will work in production

## Troubleshooting

- **"Failed to send message"**: Check your EmailJS configuration and internet connection
- **"Service not found"**: Verify your Service ID is correct
- **"Template not found"**: Verify your Template ID is correct
- **"Public key invalid"**: Check your Public Key in the EmailJS dashboard

## Alternative: Direct Email Link

If you prefer not to use EmailJS, the contact form already includes a direct email link to `code.saikat7@gmail.com` that users can click to open their default email client.

## Support

For EmailJS support, visit their [documentation](https://www.emailjs.com/docs/) or [community forum](https://community.emailjs.com/).
