# Portfolio Website

A modern, responsive portfolio website built with React and Vite, featuring a dark/light theme toggle, smooth animations and clean design.

## 🚀 Live Demo

[View Live Site](https://udula-muniweera-dev.netlify.app/)

## ✨ Features

- **Responsive Design** - Optimized for all device sizes
- **Dark/Light Theme** - Toggle between themes with persistence
- **Smooth Animations** - CSS animations and transitions
- **Performance Optimized** - Built with Vite for fast loading
- **Accessible** - ARIA labels and semantic HTML
- **SEO Friendly** - Proper meta tags and structure

## 🛠️ Built With

- **React** - Frontend framework
- **Vite** - Build tool and dev server
- **CSS3** - Modern CSS with custom properties
- **JavaScript ES6+** - Modern JavaScript features

## 📱 Sections

- **Hero** - Introduction with call-to-action
- **About** - Professional summary and education
- **Skills** - Technical skills with visual indicators
- **Projects** - Featured work with live demos and source code
- **Contact** - Multiple ways to get in touch

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/ukmuniweera/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📦 Build for Production

```bash
npm run build
```

The build files will be generated in the `dist` directory.

## 🎨 Customization

### Personal Information

Update your personal details in `src/data.js`:

```javascript
export const ABOUT = {
  intro: "Your professional summary here...",
  stats: [
    { label: "Your University", value: "Your Degree" },
    // Add more stats
  ]
};
```

### Skills

Add or modify your skills in the `SKILLS` array:

```javascript
export const SKILLS = [
  { name: "React.js", level: "Advanced" },
  // Add more skills
];
```

### Projects

Showcase your projects in the `PROJECTS` array:

```javascript
export const PROJECTS = [
  {
    slug: "project-slug",
    title: "Project Name",
    description: "Project description...",
    stack: ["React", "Node.js"],
    image: "project-image-url",
    live: "live-demo-url",
    repo: "github-repo-url"
  }
];
```

### Styling

The design system uses CSS custom properties defined in `src/styles.css`. You can easily customize:

- Colors (primary, background, text)
- Typography
- Spacing
- Border radius
- Shadows

## 🌙 Theme System

The website supports both dark and light themes with automatic system preference detection. The theme preference is saved in localStorage.

## 📧 Contact Integration

The contact section includes:
- Phone number with clickable tel: link
- Email with mailto: link
- LinkedIn profile link
- Responsive contact cards with hover effects

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Udula Kesara Muniweera**
- GitHub: [@ukmuniweera](https://github.com/ukmuniweera)
- LinkedIn: [udula-kesara-muniweera](https://linkedin.com/in/udula-kesara-muniweera)
- Email: ukmuniweera@gmail.com

## 🙏 Acknowledgments

- Inspiration from modern portfolio designs
- Icons from various open source libraries
- Color palette inspired by modern design trends

---

⭐ Star this repository if you found it helpful!
