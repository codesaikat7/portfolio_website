# Lottie Animation Integration Guide

This guide explains how to use Lottie animations in your portfolio project.

## What is Lottie?

Lottie is a library that parses Adobe After Effects animations exported as JSON files and renders them natively on mobile and web. It provides smooth, lightweight animations that can be easily customized and controlled.

## Installation

The required dependencies are already installed:
```bash
npm install lottie-react
```

## Project Structure

```
portfolio/
├── public/
│   └── lottie/           # Place your .json Lottie files here
│       └── sample-animation.json
├── src/
│   ├── components/
│   │   ├── LottieAnimation.jsx    # Reusable Lottie component
│   │   └── LottieDemo.jsx         # Demo component
│   └── App.jsx                    # Main app with LottieDemo
```

## How to Use

### 1. Add Your Lottie Files

Place your `.json` Lottie files in the `public/lottie/` folder. You can get Lottie files from:
- [LottieFiles](https://lottiefiles.com/) - Free and premium animations
- [IconScout](https://iconscout.com/lotties) - Professional animations
- Export from Adobe After Effects using the Bodymovin plugin

### 2. Basic Usage

```jsx
import LottieAnimation from './components/LottieAnimation'

// Simple animation
<LottieAnimation
  animationData={yourLottieData}
  className="w-32 h-32"
/>
```

### 3. Advanced Usage

```jsx
<LottieAnimation
  animationData={yourLottieData}
  autoplay={false}           // Don't start automatically
  loop={false}               // Don't loop
  speed={2}                  // 2x speed
  onComplete={() => console.log('Done!')}  // Callback when finished
  className="w-64 h-64"      // Custom styling
/>
```

### 4. Loading External Lottie Files

```jsx
import { useState, useEffect } from 'react'

const [animationData, setAnimationData] = useState(null)

useEffect(() => {
  fetch('/lottie/your-animation.json')
    .then(response => response.json())
    .then(data => setAnimationData(data))
    .catch(error => console.log('Error loading Lottie file:', error))
}, [])

// Then use it
{animationData && (
  <LottieAnimation
    animationData={animationData}
    className="w-32 h-32"
  />
)}
```

## Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `animationData` | Object | Required | Lottie JSON data |
| `loop` | Boolean | `true` | Whether to loop the animation |
| `autoplay` | Boolean | `true` | Whether to start automatically |
| `className` | String | `""` | CSS classes for styling |
| `style` | Object | `{}` | Inline styles |
| `onComplete` | Function | `undefined` | Callback when animation completes |
| `speed` | Number | `1` | Animation speed multiplier |

## Integration Examples

### Hero Section Animation
```jsx
// Add a subtle animation to your hero section
<div className="hero-content">
  <LottieAnimation
    animationData={heroAnimation}
    className="w-24 h-24 opacity-50"
    speed={0.5}
  />
  <h1>Welcome to My Portfolio</h1>
</div>
```

### Skills Section Icons
```jsx
// Replace static icons with animated ones
{skillCategories.map((category) => (
  <div key={category.title}>
    <LottieAnimation
      animationData={category.iconAnimation}
      className="w-12 h-12"
      autoplay={false}
      loop={false}
    />
    <h3>{category.title}</h3>
  </div>
))}
```

### Loading States
```jsx
// Use Lottie for loading animations
{isLoading ? (
  <LottieAnimation
    animationData={loadingAnimation}
    className="w-16 h-16"
    loop={true}
  />
) : (
  <YourContent />
)}
```

## Performance Tips

1. **Optimize Lottie files**: Use tools like [Lottie Optimizer](https://lottiefiles.com/optimize) to reduce file size
2. **Lazy load**: Only load animations when they're needed
3. **Pause when not visible**: Stop animations when they're off-screen
4. **Use appropriate sizes**: Don't render large animations in small containers

## Troubleshooting

### Animation not playing
- Check if the JSON file is valid
- Ensure the file path is correct
- Verify the animationData is loaded before rendering

### Performance issues
- Reduce animation complexity
- Use smaller file sizes
- Consider pausing animations when not visible

### Styling issues
- Use `className` for Tailwind classes
- Use `style` prop for custom CSS
- Ensure the container has proper dimensions

## Resources

- [LottieFiles](https://lottiefiles.com/) - Free animations
- [Lottie Web Documentation](https://github.com/airbnb/lottie-web)
- [React Lottie](https://github.com/chenqingspring/react-lottie) - Alternative React wrapper
- [After Effects to Lottie](https://www.youtube.com/watch?v=5X7BxLpJUdE) - Tutorial

## Example Animations You Can Add

- **Hero Section**: Floating elements, typing animation, or geometric patterns
- **Skills Section**: Animated icons for each skill category
- **Projects Section**: Hover effects or loading animations
- **Contact Section**: Form submission animations
- **Loading States**: Page transitions and content loading

Get creative and make your portfolio stand out with smooth, engaging animations! 🎨✨
