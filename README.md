CarZone - Automotive Website
CarZone is a modern, responsive single-page application built with Vue.js 3, showcasing an automotive dealership's services, team, gallery, and contact information. The website features a clean design with gradient backgrounds, animated scroll effects, Font Awesome icons, and a mobile-optimized layout. It uses Vue Router for navigation, AOS for animations, and a consistent blue/black/white color scheme.
Table of Contents

Features
Project Setup
Project Structure
Dependencies
Running the Project
Troubleshooting
Contributing
License

Features

Responsive Design: Optimized for desktop, tablet (<768px), and mobile (<480px) with dynamic font sizes (clamp), touch-friendly buttons, and single-column grid stacking.
Hero Sections: Full-width background images with white text, gradient overlays, and fade-up animations across all pages.
Grid Layouts: Three-column grids (1fr 1fr 1fr) for features, team, testimonials, services, pricing, gallery, and contact info, stacking to single-column on mobile.
Animations: Scroll-based animations using vue3-aos (fade-up, zoom-in, slide-up) with staggered delays, plus CSS hover transitions (scale, translate).
Icons: Font Awesome icons for team roles, testimonials, services, contact info, and CTAs, with animated scaling on hover.
Navigation: Vue Router for seamless page transitions between Home, About, Services, Gallery, and Contact.
Interactive Elements:
Gallery: Clickable images with zoom icons and modal preview.
Contact: Form with validation, newsletter signup, and social media links.
CTAs: Gradient buttons with arrow icons linking to Contact page or external actions (e.g., WhatsApp).


Styling: Gradient backgrounds, box shadows, rounded corners, and decorative heading underlines (h2::after).

Project Setup
Prerequisites

Node.js (v16 or higher recommended)
npm (v8 or higher)
Git

Installation

Clone the repository:
git clone https://github.com/your-username/carzone.git
cd carzone

Note: Replace https://github.com/your-username/carzone.git with your repository URL or copy the project from /Users/macbookairm1/vue-nav-project.

Install dependencies:
npm install


Install required packages:
npm install vue-router@4 vue3-aos @fortawesome/fontawesome-free


Verify package.json:
{
  "dependencies": {
    "vue": "^3.2.13",
    "vue-router": "^4.0.3",
    "vue3-aos": "^3.0.0",
    "@fortawesome/fontawesome-free": "^6.4.0"
  }
}



Project Structure
vue-nav-project/
├── public/
│   ├── index.html          # Main HTML file
│   └── favicon.ico         # Favicon
├── src/
│   ├── assets/
│   │   └── style.css       # Global CSS (grids, buttons, hero, etc.)
│   ├── components/
│   │   ├── HomePage.vue    # Home page with features and testimonials
│   │   ├── AboutPage.vue   # About page with team, testimonials, and history
│   │   ├── ServicesPage.vue # Services page with offerings and pricing
│   │   ├── GalleryPage.vue  # Gallery page with image modal
│   │   ├── ContactPage.vue  # Contact page with form, info, and newsletter
│   ├── router/
│   │   └── index.js        # Vue Router configuration
│   ├── App.vue             # Root component with navigation
│   └── main.js             # Entry point with Vue and AOS setup
├── .eslintrc.js            # ESLint config (disables multi-word component names)
├── package.json            # Project metadata and dependencies
└── README.md               # Project documentation

Dependencies

Vue.js 3: Core framework for building the SPA.
vue-router@4: Client-side routing.
vue3-aos: Scroll animations (fade-up, zoom-in, slide-up).
@fortawesome/fontawesome-free: Icons for team, services, and CTAs.
Montserrat & Roboto Fonts: Imported via Google Fonts in style.css.

Running the Project

Start the development server:
npm run serve

Open http://localhost:8080 in your browser.

Navigate to pages:

/: Home
/about: About
/services: Services
/gallery: Gallery
/contact: Contact


Build for production:
npm run build

Output is in the dist/ folder.


Troubleshooting

Compilation Errors:
Ensure all CSS blocks are closed (e.g., @media in components).
Run npm install again if dependencies are missing.
Check console logs for specific errors.


Images Not Loading:
Verify Unsplash URLs in components (e.g., GalleryPage.vue images).
Clear browser cache or test in incognito mode.
Example: Middle gallery image was replaced with https://images.unsplash.com/photo-1541345023926-55d6e0853f4b?auto=format&fit=crop&w=600.


Icons Missing:
Confirm @fortawesome/fontawesome-free is installed and imported in main.js.
Check for 404 errors on all.min.css.


Animations Not Working:
Ensure vue3-aos is initialized in main.js.
Verify data-aos attributes in templates.


Mobile Layout Issues:
Test at 768px and 480px breakpoints.
Check clamp and @media rules in style.css and components.


Cache Issues:rm -rf node_modules package-lock.json
npm install
npm run serve


Permissions:chmod -R u+rwX .



Contributing

Fork the repository.
Create a feature branch:git checkout -b feature/your-feature


Commit changes:git commit -m "Add your feature"


Push to the branch:git push origin feature/your-feature


Open a pull request.

License
This project is licensed under the MIT License. See LICENSE for details.

Built with 🚗 by [James Mbaya Muthiora] on June 4, 2025.
