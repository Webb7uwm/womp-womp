# WOMP WOMP - Fine Dining Restaurant Website

A modern, visually stunning restaurant website built with vanilla HTML, CSS, and JavaScript. Perfect for GitHub Pages deployment - 100% client-side with no backend requirements.

## 🌟 Features

### Design & UX
- **Elegant Dark Theme**: Sophisticated black and gold color scheme with gradient accents
- **Smooth Animations**: Hover effects, transitions, and interactive elements for premium feel
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Fixed Navigation**: Easy access to all sections from any point on the page
- **Modern Typography**: Playfair Display for headings, Poppins for body text

### Sections

1. **Navigation Bar**
   - Sticky header with smooth scroll links
   - Brand name with elegant gradient styling
   - Quick access to all major sections

2. **Hero Section**
   - Welcoming introduction with call-to-action
   - Patterned background with premium aesthetic

3. **Menu Section**
   - Interactive category tabs (Appetizers, Mains, Desserts, Beverages)
   - Beautiful menu item cards with emoji icons
   - Price display and detailed descriptions
   - Smooth transitions between categories

4. **About Section**
   - Restaurant story and philosophy
   - Two-column responsive layout
   - Large emoji for visual interest

5. **Reservations Section**
   - Location information
   - Operating hours
   - Direct phone contact link

6. **Contact Section**
   - Clean contact form
   - Email submission via mailto (client-side)
   - Success feedback to users

7. **Footer**
   - Copyright and legal links
   - Professional closing

## 📋 Menu Items Included

### Appetizers
- Truffle Risotto Bites
- Seared Scallops
- Foie Gras Terrine

### Main Courses
- Filet Mignon
- Pan-Seared Halibut
- Duck Confit
- Lobster Thermidor
- Vegetable Wellington
- Lamb Rack

### Desserts
- Chocolate Soufflé
- Crème Brûlée
- Raspberry Panna Cotta

### Beverages
- Champagne Selection
- Red Wine Selection
- Signature Cocktails
- Espresso Martini

## 🚀 Getting Started

### For Local Development
1. Clone the repository
2. Open `index.html` in your browser
3. No build process required!

### For GitHub Pages
1. Enable GitHub Pages in repository settings
2. Select `main` branch as the source
3. Your site will be live at `https://webb7uwm.github.io/womp-womp/`

## 🎨 Customization

### Colors
The primary color scheme uses:
- **Gold/Yellow**: `#d4af37` (primary), `#f4d03f` (accent)
- **Dark Background**: `#1a1a1a`, `#2d2d2d`
- **Text**: `#f0f0f0` (primary), `#bbb` (secondary)

To change colors, modify the hex values in `styles.css`.

### Restaurant Details
Update the following in `index.html`:
- Restaurant name
- Address and location
- Phone number
- Operating hours
- Email address

### Menu Items
Modify menu data in `script.js` in the `menuData` object:
```javascript
const menuData = {
    appetizers: [...],
    mains: [...],
    desserts: [...],
    beverages: [...]
};
```

## 📱 Responsive Breakpoints

- **Desktop**: Full layout with multi-column grids
- **Tablet** (≤768px): Adjusted spacing and 2-column layouts
- **Mobile** (≤480px): Single column layout with optimized touch targets

## ♿ Accessibility

- Semantic HTML structure
- High contrast colors for readability
- Proper form labels and inputs
- Keyboard navigation support
- Smooth scroll behavior

## 📄 Files Structure

```
womp-womp/
├── index.html       # Main HTML structure
├── styles.css       # All styling and responsive design
├── script.js        # Interactive menu and contact form
├── README.md        # This file
├── AGENTS.md        # Development guidelines
├── architecture.md  # Architecture documentation
└── LICENSE          # MIT License
```

## 🔧 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Gradients, animations, grid layout, flexbox
- **Vanilla JavaScript**: No frameworks or dependencies
- **Google Fonts**: Playfair Display & Poppins

## ✨ Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Notes

- **No Backend Required**: All functionality is client-side
- **No External Dependencies**: Only uses Google Fonts (CDN)
- **Perfect for GitHub Pages**: Static site friendly
- **Email Form**: Uses mailto links for form submission (client-side limitation - consider adding backend or form service for production)

## 🎯 Future Enhancements

- Photo gallery with lightbox
- Online reservation system (requires backend)
- Menu search/filter functionality
- Newsletter signup
- Google Maps integration
- Review/testimonials section
- Special events/promotions
- Online ordering (requires backend)

## 📄 License

MIT License - See LICENSE file for details

---

**Enjoy your elegant restaurant website!** 🍽️✨
