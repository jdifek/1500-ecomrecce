// Global variables
let products = [];
let filteredProducts = [];
let cart = [];
let currentLanguage = 'de';
let currentFilters = {
  minPrice: null,
  maxPrice: null
};
let currentSort = 'default';

// Language translations
const translations = {
  de: {
    'hero.title': 'Entdecken Sie unsere Premium-Produkte',
    'hero.subtitle': 'Hochwertige Artikel für jeden Bedarf',
    'products.title': 'Unsere Produkte',
    'products.results': 'Produkte',
    'filters.title': 'Filter',
    'filters.price': 'Preis',
    'filters.apply': 'Anwenden',
    'filters.clear': 'Filter zurücksetzen',
    'sort.default': 'Sortieren nach',
    'sort.priceLow': 'Preis: Niedrig zu Hoch',
    'sort.priceHigh': 'Preis: Hoch zu Niedrig',
    'sort.name': 'Name A-Z',
    'cart.title': 'Warenkorb',
    'cart.total': 'Gesamt:',
    'cart.checkout': 'Zur Kasse',
    'cart.empty': 'Ihr Warenkorb ist leer',
    'cart.addToCart': 'In den Warenkorb',
    'order.title': 'Bestellung aufgeben',
    'order.customerData': 'Kundendaten',
    'order.firstName': 'Vorname',
    'order.lastName': 'Nachname',
    'order.email': 'E-Mail',
    'order.phone': 'Telefon',
    'order.delivery': 'Lieferoptionen',
    'order.standardDelivery': 'Standard-Lieferung (3-5 Tage) - Kostenlos',
    'order.expressDelivery': 'Express-Lieferung (1-2 Tage) - €9.99',
    'order.address': 'Lieferadresse',
    'order.street': 'Straße und Hausnummer',
    'order.zip': 'PLZ',
    'order.city': 'Stadt',
    'order.country': 'Land',
    'order.submit': 'Bestellung abschicken',
    'payment.title': 'Zahlungsmethode wählen',
    'payment.crypto': 'Kryptowährung',
    'payment.cryptoDesc': 'Zahlen Sie direkt mit Bitcoin, Ethereum oder anderen Kryptowährungen',
    'payment.cryptoPay': 'Mit Krypto bezahlen',
    'payment.card': 'Karte zu Krypto',
    'payment.cardDesc': 'Zahlen Sie mit Ihrer Kreditkarte über unseren Card-to-Crypto Service',
    'payment.cardPay': 'Mit Karte bezahlen',
    'footer.company': 'Unternehmen',
    'footer.about': 'Über uns',
    'footer.contact': 'Kontakt',
    'footer.careers': 'Karriere',
    'footer.press': 'Presse',
    'footer.support': 'Support',
    'footer.help': 'Hilfe-Center',
    'footer.shipping': 'Versand',
    'footer.returns': 'Rückgabe',
    'footer.warranty': 'Garantie',
    'footer.legal': 'Rechtliches',
    'footer.privacy': 'Datenschutz',
    'footer.terms': 'AGB',
    'footer.cookies': 'Cookie-Richtlinie',
    'footer.imprint': 'Impressum',
    'footer.newsletter': 'Newsletter',
    'footer.newsletterText': 'Bleiben Sie über neue Produkte und Angebote informiert',
    'footer.emailPlaceholder': 'E-Mail-Adresse',
    'footer.subscribe': 'Abonnieren',
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.paymentMethods': 'Zahlungsmethoden:',
    'noResults.title': 'Keine Produkte gefunden',
    'noResults.text': 'Versuchen Sie, Ihre Filter anzupassen oder die Suche zu erweitern.'
  },
  en: {
    'hero.title': 'Discover Our Premium Products',
    'hero.subtitle': 'High-quality items for every need',
    'products.title': 'Our Products',
    'products.results': 'Products',
    'filters.title': 'Filters',
    'filters.price': 'Price',
    'filters.apply': 'Apply',
    'filters.clear': 'Clear Filters',
    'sort.default': 'Sort by',
    'sort.priceLow': 'Price: Low to High',
    'sort.priceHigh': 'Price: High to Low',
    'sort.name': 'Name A-Z',
    'cart.title': 'Shopping Cart',
    'cart.total': 'Total:',
    'cart.checkout': 'Checkout',
    'cart.empty': 'Your cart is empty',
    'cart.addToCart': 'Add to Cart',
    'order.title': 'Place Order',
    'order.customerData': 'Customer Data',
    'order.firstName': 'First Name',
    'order.lastName': 'Last Name',
    'order.email': 'Email',
    'order.phone': 'Phone',
    'order.delivery': 'Delivery Options',
    'order.standardDelivery': 'Standard Delivery (3-5 days) - Free',
    'order.expressDelivery': 'Express Delivery (1-2 days) - €9.99',
    'order.address': 'Delivery Address',
    'order.street': 'Street and House Number',
    'order.zip': 'ZIP Code',
    'order.city': 'City',
    'order.country': 'Country',
    'order.submit': 'Submit Order',
    'payment.title': 'Choose Payment Method',
    'payment.crypto': 'Cryptocurrency',
    'payment.cryptoDesc': 'Pay directly with Bitcoin, Ethereum or other cryptocurrencies',
    'payment.cryptoPay': 'Pay with Crypto',
    'payment.card': 'Card to Crypto',
    'payment.cardDesc': 'Pay with your credit card through our Card-to-Crypto service',
    'payment.cardPay': 'Pay with Card',
    'footer.company': 'Company',
    'footer.about': 'About Us',
    'footer.contact': 'Contact',
    'footer.careers': 'Careers',
    'footer.press': 'Press',
    'footer.support': 'Support',
    'footer.help': 'Help Center',
    'footer.shipping': 'Shipping',
    'footer.returns': 'Returns',
    'footer.warranty': 'Warranty',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.cookies': 'Cookie Policy',
    'footer.imprint': 'Imprint',
    'footer.newsletter': 'Newsletter',
    'footer.newsletterText': 'Stay informed about new products and offers',
    'footer.emailPlaceholder': 'Email address',
    'footer.subscribe': 'Subscribe',
    'footer.rights': 'All rights reserved.',
    'footer.paymentMethods': 'Payment Methods:',
    'noResults.title': 'No products found',
    'noResults.text': 'Try adjusting your filters or expanding your search.'
  }
};

// DOM elements
const cartToggle = document.getElementById('cartToggle');
const cartSidebar = document.getElementById('cartSidebar');
const cartClose = document.getElementById('cartClose');
const overlay = document.getElementById('overlay');
const cartCount = document.getElementById('cartCount');
const cartItems = document.getElementById('cartItems');
const totalAmount = document.getElementById('totalAmount');
const checkoutBtn = document.getElementById('checkoutBtn');
const productsGrid = document.getElementById('productsGrid');
const orderModal = document.getElementById('orderModal');
const orderModalClose = document.getElementById('orderModalClose');
const orderForm = document.getElementById('orderForm');
const paymentModal = document.getElementById('paymentModal');
const paymentModalClose = document.getElementById('paymentModalClose');
const cryptoPayBtn = document.getElementById('cryptoPayBtn');
const cardPayBtn = document.getElementById('cardPayBtn');
const langBtns = document.querySelectorAll('.lang-btn');
const filtersToggle = document.getElementById('filtersToggle');
const filtersContent = document.getElementById('filtersContent');
const minPriceInput = document.getElementById('minPrice');
const maxPriceInput = document.getElementById('maxPrice');
const applyPriceBtn = document.getElementById('applyPriceFilter');
const clearFiltersBtn = document.getElementById('clearFilters');
const sortSelect = document.getElementById('sortSelect');
const resultsCount = document.getElementById('resultsCount');

// Event listeners
cartToggle.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
overlay.addEventListener('click', closeAll);
checkoutBtn.addEventListener('click', openOrderModal);
orderModalClose.addEventListener('click', closeOrderModal);
orderForm.addEventListener('submit', handleOrderSubmit);
paymentModalClose.addEventListener('click', closePaymentModal);
cryptoPayBtn.addEventListener('click', () => handlePayment('crypto'));
cardPayBtn.addEventListener('click', () => handlePayment('card'));
filtersToggle.addEventListener('click', toggleFilters);
applyPriceBtn.addEventListener('click', applyPriceFilter);
clearFiltersBtn.addEventListener('click', clearAllFilters);
sortSelect.addEventListener('change', handleSort);

langBtns.forEach(btn => {
  btn.addEventListener('click', () => switchLanguage(btn.dataset.lang));
});

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  loadProducts();
  updateCartDisplay();
  updateLanguage();
});

// Load products from JSON
async function loadProducts() {
  try {
    const response = await fetch('/products.json');
    products = await response.json();
    filteredProducts = [...products];
    renderProducts();
    updateResultsCount();
  } catch (error) {
    console.error('Error loading products:', error);
    productsGrid.innerHTML = '<p>Error loading products. Please try again later.</p>';
  }
}

// Filter functions
function applyPriceFilter() {
  const minPrice = parseFloat(minPriceInput.value) || null;
  const maxPrice = parseFloat(maxPriceInput.value) || null;

  currentFilters.minPrice = minPrice;
  currentFilters.maxPrice = maxPrice;

  applyFilters();
}

function applyFilters() {
  filteredProducts = products.filter(product => {
    // Price filter
    if (currentFilters.minPrice !== null && product.price < currentFilters.minPrice) {
      return false;
    }

    if (currentFilters.maxPrice !== null && product.price > currentFilters.maxPrice) {
      return false;
    }

    return true;
  });

  applySorting();
  renderProducts();
  updateResultsCount();
}

function clearAllFilters() {
  // Reset filters
  currentFilters = {
    minPrice: null,
    maxPrice: null
  };

  // Clear form inputs
  minPriceInput.value = '';
  maxPriceInput.value = '';

  // Reset products
  filteredProducts = [...products];
  applySorting();
  renderProducts();
  updateResultsCount();
}

function handleSort() {
  currentSort = sortSelect.value;
  applySorting();
  renderProducts();
}

function applySorting() {
  switch (currentSort) {
    case 'price-low':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case 'name':
      filteredProducts.sort((a, b) => a.name[currentLanguage].localeCompare(b.name[currentLanguage]));
      break;
    default:
      // Keep original order
      break;
  }
}

function toggleFilters() {
  filtersContent.classList.toggle('open');
}

function updateResultsCount() {
  resultsCount.textContent = filteredProducts.length;
}

// Render products grid
function renderProducts() {
  if (filteredProducts.length === 0) {
    productsGrid.innerHTML = `
      <div class="no-results">
        <h3 data-key="noResults.title">${translations[currentLanguage]['noResults.title']}</h3>
        <p data-key="noResults.text">${translations[currentLanguage]['noResults.text']}</p>
      </div>
    `;
    return;
  }

  productsGrid.innerHTML = filteredProducts.map(product => `
    <div class="product-card">
      <div class="product-icon"></div>
      <img src="${product.image}" alt="${product.name[currentLanguage]}" class="product-image">
      <div class="product-info">
        <h3 class="product-name">${product.name[currentLanguage]}</h3>
        <p class="product-description">${product.description[currentLanguage]}</p>
        <div class="product-footer">
          <span class="product-price">€${product.price.toFixed(2)}</span>
          <button class="add-to-cart" data-id="${product.id}" data-key="cart.addToCart">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            ${translations[currentLanguage]['cart.addToCart']}
          </button>
        </div>
      </div>
    </div>
  `).join('');

  // Удаляем старые слушатели событий, чтобы избежать дублирования
  productsGrid.removeEventListener('click', handleAddToCartClick);
  // Добавляем делегирование событий для кнопок "Add to Cart"
  productsGrid.addEventListener('click', handleAddToCartClick);
}

// Новая функция для обработки кликов по кнопкам "Add to Cart"
function handleAddToCartClick(e) {
  const addToCartBtn = e.target.closest('.add-to-cart');
  if (addToCartBtn) {
    const productId = parseInt(addToCartBtn.dataset.id);
    addToCart(productId);
  }
}

// Cart functions
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const existingItem = cart.find(item => item.id === productId);

  if (product) {
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        ...product,
        quantity: 1
      });
    }

    updateCartDisplay();

    // Visual feedback
    const button = event.target.closest('button');
    const originalText = button.textContent;
    button.textContent = currentLanguage === 'de' ? 'Hinzugefügt!' : 'Added!';
    button.style.background = '#059669';

    setTimeout(() => {
      button.textContent = originalText;
      button.style.background = '#2563eb';
    }, 1000);
  } else {
    console.error(`Product with ID ${productId} not found`);
  }
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartDisplay();
}

function updateQuantity(productId, change) {
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeFromCart(productId);
    } else {
      updateCartDisplay();
    }
  }
}

function updateCartDisplay() {
  // Update cart count
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;

  // Update cart items
  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="empty-cart">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="m1 1 4 4 9.5 9.5a2 2 0 0 0 2.83 0L21 11H7l-2-2H1"></path>
        </svg>
        <p data-key="cart.empty">${translations[currentLanguage]['cart.empty']}</p>
      </div>
    `;
  } else {
    cartItems.innerHTML = cart.map(item => `
      <div class="cart-item" data-id="${item.id}">
        <img src="${item.image}" alt="${item.name[currentLanguage]}" class="cart-item-image">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name[currentLanguage]}</div>
          <div class="cart-item-price">€${item.price.toFixed(2)}</div>
          <div class="cart-item-controls">
            <button class="quantity-btn decrease-btn">-</button>
            <span class="quantity">${item.quantity}</span>
            <button class="quantity-btn increase-btn">+</button>
            <button class="remove-item">Remove</button>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Update total
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  totalAmount.textContent = `€${total.toFixed(2)}`;

  // Enable/disable checkout button
  checkoutBtn.disabled = cart.length === 0;

  // Удаляем старые слушатели, чтобы избежать дублирования
  cartItems.removeEventListener('click', handleCartActions);
  // Добавляем делегирование событий для кнопок в корзине
  cartItems.addEventListener('click', handleCartActions);
}

// Новая функция для обработки кликов в корзине
function handleCartActions(e) {
  const target = e.target;
  const cartItem = target.closest('.cart-item');
  if (!cartItem) return;

  const productId = parseInt(cartItem.dataset.id);

  if (target.classList.contains('remove-item')) {
    removeFromCart(productId);
  } else if (target.classList.contains('increase-btn')) {
    updateQuantity(productId, 1);
  } else if (target.classList.contains('decrease-btn')) {
    updateQuantity(productId, -1);
  }
}

// Cart modal functions
function openCart() {
  cartSidebar.classList.add('open');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  cartSidebar.classList.remove('open');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function closeAll() {
  closeCart();
  closeOrderModal();
  closePaymentModal();
}

// Order modal functions
function openOrderModal() {
  if (cart.length === 0) return;

  closeCart();
  orderModal.classList.add('open');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeOrderModal() {
  orderModal.classList.remove('open');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

// Payment modal functions
function openPaymentModal() {
  closeOrderModal();
  paymentModal.classList.add('open');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePaymentModal() {
  paymentModal.classList.remove('open');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

// Handle order form submission
async function handleOrderSubmit(e) {
  e.preventDefault();

  const formData = new FormData(orderForm);
  const deliveryType = formData.get('delivery');
  const deliveryCost = deliveryType === 'express' ? 9.99 : 0;
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal + deliveryCost;

  const orderData = {
    customer: {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone')
    },
    delivery: {
      type: deliveryType,
      cost: deliveryCost,
      address: {
        street: formData.get('street'),
        zip: formData.get('zip'),
        city: formData.get('city'),
        country: formData.get('country')
      }
    },
    items: cart.map(item => ({
      id: item.id,
      name: item.name[currentLanguage],
      price: item.price,
      quantity: item.quantity,
      total: item.price * item.quantity
    })),
    subtotal: subtotal,
    deliveryCost: deliveryCost,
    total: total,
    language: currentLanguage,
    timestamp: new Date().toISOString()
  };

  try {
    const response = await fetch('https://test-webhook.ymca.one', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData)
    });

    if (response.ok) {
      console.log('Order submitted successfully:', orderData);
      // Store order data for payment
      window.currentOrder = orderData;
      openPaymentModal();
    } else {
      throw new Error('Failed to submit order');
    }
  } catch (error) {
    console.error('Error submitting order:', error);
    alert(currentLanguage === 'de' ? 'Fehler beim Senden der Bestellung. Bitte versuchen Sie es erneut.' : 'Error submitting order. Please try again.');
  }
}

// Payment handlers
function handlePayment(method) {
  const orderData = window.currentOrder;
  if (!orderData) {
    console.error('No order data found');
    return;
  }

  // Create payment URL with order data and payment method
  const baseUrl = method === 'crypto'
    ? 'https://your-crypto-payment-service.com/pay'
    : 'https://your-card-to-crypto-service.com/pay';

  const params = new URLSearchParams({
    method: method,
    amount: orderData.total,
    currency: 'EUR',
    orderId: `order_${Date.now()}`,
    customerEmail: orderData.customer.email,
    language: currentLanguage
  });

  const paymentUrl = `${baseUrl}?${params.toString()}`;

  // Open payment page
  window.open(paymentUrl, '_blank');

  // Clear cart after successful payment initiation
  cart = [];
  updateCartDisplay();
  closePaymentModal();

  const message = currentLanguage === 'de'
    ? `Sie werden zur ${method === 'crypto' ? 'Krypto-' : 'Karten'}zahlung weitergeleitet.`
    : `You are being redirected to ${method === 'crypto' ? 'crypto' : 'card'} payment.`;

  alert(message);
}

// Language switching
function switchLanguage(lang) {
  currentLanguage = lang;

  // Update active language button
  langBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Update all translated elements
  updateLanguage();

  // Re-render products with new language
  renderProducts();
  updateCartDisplay();

  // Update sort options
  updateSortOptions();
}

function updateSortOptions() {
  const options = sortSelect.querySelectorAll('option');
  options.forEach(option => {
    const key = option.getAttribute('data-key');
    if (key && translations[currentLanguage][key]) {
      option.textContent = translations[currentLanguage][key];
    }
  });
}

function updateLanguage() {
  const elementsToTranslate = document.querySelectorAll('[data-key]');

  elementsToTranslate.forEach(element => {
    const key = element.getElementById('data-key');
    if (translations[currentLanguage][key]) {
      if (element.tagName === 'INPUT' && element.type === 'email') {
        element.placeholder = translations[currentLanguage][key];
      } else {
        element.textContent = translations[currentLanguage][key];
      }
    }
  });
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeAll();
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add loading state for images
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('load', () => {
      img.style.opacity = '1';
    });
    img.addEventListener('error', () => {
      img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik03NSA3NUgxMjVWMTI1SDc1Vjc1WiIgZmlsbD0iI0Q5REREREQiLz4KPC9zdmc+';
    });
  });
});

// Newsletter subscription
document.addEventListener('DOMContentLoaded', () => {
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = e.target.querySelector('.newsletter-input').value;
      if (email) {
        alert(currentLanguage === 'de' ? 'Vielen Dank für Ihre Anmeldung!' : 'Thank you for subscribing!');
        e.target.querySelector('.newsletter-input').value = '';
      }
    });
  }
});