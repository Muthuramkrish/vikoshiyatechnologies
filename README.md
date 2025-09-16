# Vikoshiya Technologies - React Website

A modern React TypeScript website for Vikoshiya Technologies, built with Vite and Tailwind CSS.

## Features

- ⚡ **Vite** - Fast build tool and development server
- ⚛️ **React 18** - Latest React with hooks and modern patterns
- 🔷 **TypeScript** - Type-safe development
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🛣️ **React Router** - Client-side routing
- 📱 **Responsive Design** - Mobile-first approach
- 🎯 **SEO Optimized** - Meta tags and structured content

## Pages

- **Home** (`/`) - Landing page with services overview
- **About** (`/about`) - Company story and team information
- **Blog** (`/blog`) - Blog posts and company updates
- **Contact** (`/contact`) - Contact form and company information
- **Web Development** (`/web-development`) - Detailed service page
- **Privacy Policy** (`/privacy`) - Privacy policy page
- **Terms of Service** (`/terms`) - Terms and conditions

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd vikoshiya-technologies
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── assets/          # Images and static files
├── components/      # Reusable React components
├── pages/          # Page components
├── App.tsx         # Main app component
├── main.tsx        # React entry point
└── index.css       # Global styles and Tailwind imports
```

## Technologies Used

- **Vite** - Build tool and dev server
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Font Awesome** - Icons

## Customization

### Styling
The project uses Tailwind CSS. You can customize the design by:
- Modifying `tailwind.config.js` for theme changes
- Updating `src/index.css` for custom styles
- Editing component classes directly

### Content
Update content by editing the respective page components in `src/pages/`.

### Images
Replace images in `src/assets/` and update imports accordingly.

## Deployment

### Build for Production
```bash
npm run build
```

The built files will be in the `dist/` directory.

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist/` folder to Netlify

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, contact Vikoshiya Technologies:
- Email: info@vikoshiya.com
- Phone: +91 95857 54821
- Website: https://vikoshiya.com 