# Saikat's Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features smooth animations, dark mode support, and a professional design perfect for showcasing your software engineering skills.

## ✨ Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Powered by Framer Motion for engaging interactions
- **Performance Optimized**: Built with Vite for fast development and builds
- **SEO Friendly**: Semantic HTML structure and meta tags
- **Accessible**: WCAG compliant with proper ARIA labels

## 🚀 Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Inter & JetBrains Mono fonts

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Customization Guide

### Personal Information

Update the following files with your information:

#### 1. Hero Section (`src/components/Hero.jsx`)
- Change the name from "Saikat" to your name
- Update the title and description
- Modify social media links (GitHub, LinkedIn, Email)

#### 2. About Section (`src/components/About.jsx`)
- Update personal details (location, availability, education)
- Modify the profile image placeholder
- Change statistics to reflect your experience
- Update the "Who I Am" and "What I Do" sections

#### 3. Skills Section (`src/components/Skills.jsx`)
- Modify skill categories and proficiency levels
- Add/remove skills based on your expertise
- Update additional skills and interests

#### 4. Projects Section (`src/components/Projects.jsx`)
- Replace sample projects with your actual projects
- Update project descriptions, technologies, and links
- Add your GitHub repositories and live demos
- Modify project categories and featured projects

#### 5. Experience Section (`src/components/Experience.jsx`)
- Update work experience with your job history
- Modify education details
- Add/remove certifications
- Update company websites and achievements

#### 6. Contact Section (`src/components/Contact.jsx`)
- Change contact email and phone number
- Update location information
- Modify social media links
- Customize the contact form

#### 7. Footer (`src/components/Footer.jsx`)
- Update social media links
- Modify contact information
- Change the brand name

### Styling & Theme

#### Colors
The color scheme can be customized in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... customize your primary colors
  },
  dark: {
    // ... customize dark mode colors
  }
}
```

#### Fonts
Update fonts in `tailwind.config.js` and `src/index.css`:
```javascript
fontFamily: {
  sans: ['Your-Font', 'system-ui', 'sans-serif'],
  mono: ['Your-Mono-Font', 'monospace'],
}
```

### Images & Assets

1. **Profile Picture**: Replace the placeholder in the About section
2. **Project Images**: Add actual screenshots of your projects
3. **Favicon**: Update the favicon in the `public` folder
4. **Social Media**: Update all social media links with your profiles

### Content Structure

The portfolio is organized into these main sections:
- **Hero**: Introduction and call-to-action
- **About**: Personal information and background
- **Skills**: Technical expertise and proficiency
- **Projects**: Portfolio showcase
- **Experience**: Work history and education
- **Contact**: Contact form and information

## 🔧 Configuration

### Environment Variables
Create a `.env` file for any API keys or configuration:
```env
VITE_CONTACT_EMAIL=your-email@example.com
VITE_GITHUB_URL=https://github.com/yourusername
VITE_LINKEDIN_URL=https://linkedin.com/in/yourusername
```

### Build Configuration
Modify `vite.config.js` for build settings:
```javascript
export default defineConfig({
  base: '/your-repo-name/', // For GitHub Pages
  // ... other configurations
})
```

## 📱 Responsive Design

The portfolio is built with a mobile-first approach:
- **Mobile**: Single column layout with optimized touch interactions
- **Tablet**: Two-column grid for medium screens
- **Desktop**: Full multi-column layout with hover effects

## 🌙 Dark Mode

Dark mode is automatically detected based on user preference and can be toggled manually. The theme preference is stored in localStorage.

## 🚀 Deployment

### GitHub Pages
1. Update `vite.config.js` with your repository name
2. Push to GitHub
3. Enable GitHub Pages in repository settings
4. Set source to GitHub Actions

### Netlify
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel
1. Import your GitHub repository
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide React](https://lucide.dev/) - Icon library

## 📞 Support

If you have any questions or need help customizing your portfolio, feel free to:
- Open an issue on GitHub
- Contact me at [your-email@example.com]
- Check the documentation for common questions

---

**Happy coding! 🚀**

Remember to replace all placeholder content with your actual information before deploying your portfolio.
# portfolio_website
