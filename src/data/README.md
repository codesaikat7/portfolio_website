# Portfolio Data Files

This directory contains centralized data files for your portfolio components, making it easier to maintain and update your portfolio information.

## 📁 Files

### `experienceData.jsx`
Contains all the data for your Experience and Skills components:

- **workExperience**: Your professional work history
- **education**: Your educational background
- **certifications**: Professional certifications and achievements
- **skills**: Technical skills organized by category

### `skillsData` (exported separately)
Contains detailed skill information with proficiency levels and visual styling.

## 🔧 How to Use

### 1. Import in Components
```javascript
import { experienceData, skillsData } from '../data/experienceData'

const MyComponent = () => {
  const { workExperience, education, certifications } = experienceData
  const { skillCategories } = skillsData
  
  // Use the data in your component
}
```

### 2. Update Your Information
To update your portfolio information, simply edit the data files:

```javascript
// In experienceData.jsx
export const experienceData = {
  workExperience: [
    {
      id: 1,
      company: 'Your Company Name',
      position: 'Your Position',
      duration: 'Start Date - End Date',
      location: 'City, State, Country',
      description: 'Your job description...',
      technologies: ['Tech1', 'Tech2', 'Tech3'],
      achievements: [
        'Achievement 1',
        'Achievement 2'
      ]
    }
  ]
}
```

## 📝 Data Structure

### Work Experience
```javascript
{
  id: number,
  company: string,
  position: string,
  duration: string,
  location: string,
  description: string,
  technologies: string[],
  achievements: string[]
}
```

### Education
```javascript
{
  id: number,
  institution: string,
  degree: string,
  duration: string,
  location: string,
  description: string,
  achievements: string[],
  relevantCourses: string[]
}
```

### Skills
```javascript
{
  title: string,
  icon: JSX.Element,
  skills: [
    {
      name: string,
      level: number (0-100),
      color: string (Tailwind CSS classes)
    }
  ]
}
```

## ✨ Benefits

1. **Centralized Management**: All portfolio data in one place
2. **Easy Updates**: Change information without touching component code
3. **Reusability**: Data can be used across multiple components
4. **Maintainability**: Cleaner, more organized code structure
5. **Version Control**: Track changes to your portfolio data separately

## 🚀 Adding New Sections

To add new data sections:

1. **Add to the data file**:
```javascript
export const experienceData = {
  // ... existing data
  newSection: [
    // your new data
  ]
}
```

2. **Import in your component**:
```javascript
const { newSection } = experienceData
```

3. **Use in your JSX**:
```javascript
{newSection.map(item => (
  <div key={item.id}>{item.name}</div>
))}
```

## 🔄 Updating Information

- **Work Experience**: Add new jobs, update descriptions, modify technologies
- **Education**: Add new degrees, update grades, modify descriptions
- **Skills**: Adjust proficiency levels, add new technologies, modify categories
- **Certifications**: Add new certifications, update dates, modify descriptions

## 📱 Responsive Considerations

The data structure supports responsive design:
- Skills have different levels for visual representation
- Work experience includes detailed descriptions for larger screens
- Education shows relevant courses for comprehensive view

## 🎨 Customization

- **Colors**: Modify skill colors using Tailwind CSS classes
- **Icons**: Replace SVG icons with custom ones
- **Layout**: Adjust data structure to match your component design
- **Styling**: Add new fields for additional styling options

## 📋 Best Practices

1. **Keep IDs unique** across all data arrays
2. **Use consistent formatting** for dates and locations
3. **Maintain skill levels** between 0-100 for proper visualization
4. **Update regularly** to keep your portfolio current
5. **Backup data** before making major changes
