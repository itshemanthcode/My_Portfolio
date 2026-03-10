# Portfolio Website - Kuruba Hemanth Kishore

A modern, fully responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Inspired by modern portfolio designs with smooth animations and a clean UI.

## 🌟 Features

- ✅ **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop
- ✅ **Dark/Light Mode** - Toggle between themes with smooth transitions
- ✅ **Smooth Animations** - Powered by Framer Motion for engaging interactions
- ✅ **Typewriter Effect** - Dynamic hero section with rotating text
- ✅ **Interactive Navigation** - Sticky navbar with smooth scrolling
- ✅ **Contact Form** - Ready for EmailJS integration
- ✅ **Project Filtering** - Filter projects by category (Web/AI/ML)
- ✅ **Resume Download** - Easy resume download functionality
- ✅ **Back to Top Button** - Smooth scroll to top
- ✅ **Modern UI/UX** - Clean, minimal design with gradient accents

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the portfolio directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── DarkModeToggle.tsx  # Theme toggle button
│   ├── Hero.tsx            # Hero section with typewriter
│   ├── Typewriter.tsx      # Typewriter animation component
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills showcase
│   ├── Experience.tsx      # Work experience timeline
│   ├── Projects.tsx        # Projects with filtering
│   ├── Achievements.tsx    # Achievements section
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx          # Footer component
│   └── BackToTop.tsx       # Scroll to top button
└── public/
    └── resume.pdf          # Your resume PDF (add this file)
```

## ⚙️ Configuration

### 1. Add Your Resume

Place your resume PDF in the `public` folder as `resume.pdf`:
```
public/resume.pdf
```

### 2. EmailJS Setup (Optional)

To enable contact form functionality:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update `components/Contact.tsx` with your credentials:

```typescript
const serviceId = 'YOUR_SERVICE_ID';
const templateId = 'YOUR_TEMPLATE_ID';
const publicKey = 'YOUR_PUBLIC_KEY';
```

4. Uncomment the EmailJS send code in the `handleSubmit` function.

### 3. Update Social Links

Update your LinkedIn and GitHub links in `components/Contact.tsx`:
- Replace `https://linkedin.com/in/your-profile`
- Replace `https://github.com/your-username`

### 4. Customize Content

All content is in the component files. Update:
- Personal information in respective sections
- Project details in `components/Projects.tsx`
- Experience details in `components/Experience.tsx`
- Skills in `components/Skills.tsx`

## 🎨 Customization

### Colors

The color scheme uses Tailwind CSS with gradient accents. Main colors:
- Primary: Blue (`blue-600`)
- Secondary: Purple (`purple-600`)
- Background: White/Dark Gray

To customize, update Tailwind classes in components or modify `globals.css`.

### Fonts

Currently using Inter font from Google Fonts. To change:
1. Update `app/layout.tsx` with your preferred font
2. Update font variables in `globals.css`

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: React Icons (Feather Icons)
- **Form Handling**: EmailJS (configurable)

## 📝 Sections

1. **Hero** - Introduction with typewriter effect
2. **About** - Professional summary and education
3. **Skills** - Technical skills organized by category
4. **Experience** - Work experience timeline
5. **Projects** - Portfolio projects with filtering
6. **Achievements** - Notable achievements and activities
7. **Contact** - Contact form and information

## 🎯 Features Inspired By

- [Bruno Simon's Portfolio](https://bruno-simon.com/) - Modern design and smooth interactions
- [Jesse Zhou's Portfolio](https://jesse-zhou.medium.com/) - Clean layout and professional presentation

## 📄 License

This project is open source and available for personal use.

## 👨‍💻 Author

**Kuruba Hemanth Kishore**
- Email: hemanthk.cse.rymec@gmail.com
- Phone: +91 7204948579
- Location: Bellary, Karnataka, India

---

Built with ❤️ using Next.js and Tailwind CSS
