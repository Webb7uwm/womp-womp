// Menu Data
const menuData = {
    appetizers: [
        {
            name: 'Truffle Risotto Bites',
            description: 'Golden fried risotto balls with black truffle oil and parmesan',
            price: '$12',
            emoji: '🍚'
        },
        {
            name: 'Seared Scallops',
            description: 'Pan-seared diver scallops with lemon butter and microgreens',
            price: '$14',
            emoji: '🐚'
        },
        {
            name: 'Foie Gras Terrine',
            description: 'Smooth foie gras with toasted brioche and fig compote',
            price: '$16',
            emoji: '🍞'
        }
    ],
    mains: [
        {
            name: 'Filet Mignon',
            description: 'Premium 8oz filet with truffle mashed potatoes and grilled asparagus',
            price: '$42',
            emoji: '🥩'
        },
        {
            name: 'Pan-Seared Halibut',
            description: 'Fresh Atlantic halibut with saffron risotto and beurre blanc',
            price: '$38',
            emoji: '🐟'
        },
        {
            name: 'Duck Confit',
            description: 'Tender duck leg with cherry gastrique and seasonal vegetables',
            price: '$36',
            emoji: '🦆'
        },
        {
            name: 'Lobster Thermidor',
            description: 'Classic preparation with creamed lobster and gratin topping',
            price: '$44',
            emoji: '🦞'
        },
        {
            name: 'Vegetable Wellington',
            description: 'Seasonal vegetables wrapped in puff pastry with mushroom duxelles',
            price: '$32',
            emoji: '🥕'
        },
        {
            name: 'Lamb Rack',
            description: 'Herb-crusted lamb with Dijon jus and roasted root vegetables',
            price: '$40',
            emoji: '🍖'
        }
    ],
    desserts: [
        {
            name: 'Chocolate Soufflé',
            description: 'Warm chocolate soufflé with vanilla bean ice cream',
            price: '$10',
            emoji: '🍫'
        },
        {
            name: 'Crème Brûlée',
            description: 'Classic French custard with caramelized sugar crust',
            price: '$9',
            emoji: '🔥'
        },
        {
            name: 'Raspberry Panna Cotta',
            description: 'Silky panna cotta with fresh raspberry coulis and shortbread',
            price: '$9',
            emoji: '🫐'
        }
    ],
    beverages: [
        {
            name: 'Champagne',
            description: 'Selection of premium champagnes and sparkling wines',
            price: '$15+',
            emoji: '🍾'
        },
        {
            name: 'Red Wine',
            description: 'Curated selection of Bordeaux, Burgundy, and Italian wines',
            price: '$12+',
            emoji: '🍷'
        },
        {
            name: 'Signature Cocktails',
            description: 'House-made cocktails crafted by our expert mixologists',
            price: '$14',
            emoji: '🍸'
        },
        {
            name: 'Espresso Martini',
            description: 'Vodka, coffee liqueur, fresh espresso and cream',
            price: '$12',
            emoji: '☕'
        }
    ]
};

// Initialize menu display
function initializeMenu() {
    displayMenuItems('appetizers');

    // Add event listeners to menu tabs
    const menuTabs = document.querySelectorAll('.menu-tab');
    menuTabs.forEach(tab => {
        tab.addEventListener('click', function () {
            // Remove active class from all tabs
            menuTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
            // Display corresponding menu items
            const category = this.getAttribute('data-category');
            displayMenuItems(category);
        });
    });
}

// Display menu items for a specific category
function displayMenuItems(category) {
    const menuItemsContainer = document.getElementById('menu-items');
    menuItemsContainer.innerHTML = '';

    const items = menuData[category];
    items.forEach((item, index) => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <div class="menu-item-image">${item.emoji}</div>
            <div class="menu-item-content">
                <h3 class="menu-item-name">${item.name}</h3>
                <p class="menu-item-description">${item.description}</p>
                <p class="menu-item-price">${item.price}</p>
            </div>
        `;
        menuItemsContainer.appendChild(menuItem);
    });
}

// Handle contact form submission
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form values
            const formData = new FormData(this);
            const name = formData.get('name') || this.querySelector('input[type="text"]').value;
            const email = formData.get('email') || this.querySelector('input[type="email"]').value;
            const message = formData.get('message') || this.querySelector('textarea').value;

            // Create mailto link as fallback (client-side only)
            const mailtoLink = `mailto:info@wompwomp.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

            // Show success message
            alert(`Thank you, ${name}! We'll get back to you at ${email} as soon as possible.`);

            // Open mailto link
            window.location.href = mailtoLink;

            // Reset form
            this.reset();
        });
    }
}

// Smooth scroll navigation
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', function () {
    initializeMenu();
    initializeContactForm();
    initializeSmoothScroll();
});
