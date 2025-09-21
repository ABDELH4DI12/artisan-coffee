# ☕ Artisan Coffee - Modern Coffee Shop Website

A beautiful, responsive coffee shop website built with React, TypeScript, and Tailwind CSS. Features a complete e-commerce experience with shopping cart, blog, and interactive product catalog.

![React](https://img.shields.io/badge/React-18.3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-teal)
![Vite](https://img.shields.io/badge/Vite-7.1-purple)

## 🚀 Features

### 📄 Pages
- **Home** - Hero section with CTAs, feature highlights, and testimonials
- **About** - Company story, mission, values, and team
- **Menu** - Categorized menu with filtering (hot drinks, cold drinks, pastries)
- **Shop** - E-commerce with product filters (origin, roast, category)
- **Blog** - Coffee guides, tips, and educational content
- **Contact** - Contact form, location map, and business hours
- **Cart** - Shopping cart with order management

### 🛒 E-Commerce Features
- Product catalog with detailed information
- Quick view modal for products
- Shopping cart with persistence (localStorage)
- Product filtering by category, origin, and roast level
- Add to cart functionality
- Order summary with shipping calculations
- Free shipping threshold indicator

### 🎨 Design Features
- Fully responsive design
- Mobile-friendly hamburger menu
- Smooth animations with Framer Motion
- Scroll-to-top button
- Loading states
- 404 error page
- Testimonial carousel
- Newsletter subscription

### 🔧 Technical Features
- React Context API for state management
- React Router for navigation
- TypeScript for type safety
- Tailwind CSS for styling
- Framer Motion for animations
- Local storage for cart persistence

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd coffee-shop
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
coffee-shop/
├── src/
│   ├── components/       # Reusable components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ScrollToTop.tsx
│   │   ├── ProductModal.tsx
│   │   ├── TestimonialCarousel.tsx
│   │   └── Loading.tsx
│   ├── pages/           # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Menu.tsx
│   │   ├── Shop.tsx
│   │   ├── Blog.tsx
│   │   ├── Contact.tsx
│   │   ├── Cart.tsx
│   │   └── NotFound.tsx
│   ├── contexts/        # React contexts
│   │   └── CartContext.tsx
│   ├── data/           # Static data
│   │   ├── products.ts
│   │   ├── blog.ts
│   │   └── testimonials.ts
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── public/             # Static assets
├── tailwind.config.js  # Tailwind configuration
├── vite.config.ts      # Vite configuration
└── package.json        # Dependencies

```

## 🎨 Color Palette

- **Coffee Brown**: Various shades from light to dark
- **Cream**: #FFF8E7
- **Dark Brown**: #3E2723
- **Forest Green**: #2E7D32
- **Light Brown**: #8D6E63

## 🚀 Deployment

Build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory, ready to be deployed to any static hosting service.

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For any questions or feedback, please reach out to hello@artisancoffee.com

---

Built with ❤️ and ☕ by the Artisan Coffee Team

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
