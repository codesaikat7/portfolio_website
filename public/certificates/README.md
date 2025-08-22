# PDF Certificates Directory

This directory contains your degree certificates and other professional certifications in PDF format.

## 📁 How to Add Your Certificates

### 1. **Place Your PDF Files Here**
- Copy your PDF certificates to this directory
- Use descriptive filenames (e.g., `bsc-mathematics-certificate.pdf`)

### 2. **Update the Data File**
In `src/data/experienceData.jsx`, update the certificate paths:

```javascript
education: [
  {
    // ... other fields
    certificate: '/certificates/your-actual-filename.pdf',
    certificateAlt: 'Your Certificate Description (PDF)',
    certificateType: 'pdf'
  }
]
```

### 3. **File Naming Convention**
- Use lowercase letters and hyphens
- Include the degree/certification type
- Example: `bsc-mathematics-certificate.pdf`, `mca-nitc-certificate.pdf`

## 🔧 Current Certificate Setup

### **B.Sc. Mathematics Certificate**
- **File**: `bsc-mathematics-certificate.pdf`
- **Institution**: Acharya Brojendra Nath Seal College
- **Path**: `/certificates/bsc-mathematics-certificate.pdf`

### **M.C.A. Certificate**
- **File**: `mca-nitc-certificate.pdf`
- **Institution**: National Institute of Technology, Calicut
- **Path**: `/certificates/mca-nitc-certificate.pdf`

## 📱 Features

### **PDF Display Options**
- **View PDF**: Opens PDF in new tab
- **Download PDF**: Downloads PDF to user's device
- **Responsive Design**: Works on all screen sizes

### **Security**
- PDFs are served from the public directory
- Users can view and download certificates
- No server-side processing required

## ⚠️ Important Notes

1. **File Size**: Keep PDFs reasonably sized (< 10MB recommended)
2. **File Names**: Use consistent naming convention
3. **Updates**: Update data file when adding new certificates
4. **Backup**: Keep original certificates safe

## 🚀 Adding More Certificates

To add additional certificates:

1. **Add PDF file** to this directory
2. **Update data structure** in `experienceData.jsx`
3. **Test the display** in your portfolio

## 📋 Supported Formats

- **Primary**: PDF (`.pdf`)
- **Future**: Could support images (`.jpg`, `.png`) if needed

## 🔍 Troubleshooting

- **PDF not displaying**: Check file path and filename
- **Download not working**: Ensure file exists in directory
- **Modal not opening**: Check console for JavaScript errors
