/**
 * Menu data and functionality for NutriBloom
 * A healthy vegetarian food website
 */

// Menu items data
const menuItems = [
  // Salads
  {
    id: 1,
    name: "Mediterranean Quinoa Salad",
    description: "Protein-rich quinoa mixed with fresh cucumber, tomatoes, red onion, olives, and feta cheese, dressed with lemon and olive oil.",
    price: 12.99,
    image: "https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg",
    category: "salads",
    nutrients: [
      { name: "Protein", value: "14g" },
      { name: "Fiber", value: "8g" },
      { name: "Calories", value: "320" }
    ],
    featured: true,
    badge: "Popular"
  },
  {
    id: 2,
    name: "Avocado & Kale Power Salad",
    description: "Nutrient-dense kale, creamy avocado, mixed seeds, and chickpeas with a tangy tahini dressing.",
    price: 13.99,
    image: "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg",
    category: "salads",
    nutrients: [
      { name: "Protein", value: "12g" },
      { name: "Fiber", value: "11g" },
      { name: "Calories", value: "380" }
    ],
    featured: false
  },
  {
    id: 3,
    name: "Rainbow Superfood Salad",
    description: "A colorful mix of spinach, red cabbage, carrots, bell peppers, edamame, and pomegranate seeds with ginger dressing.",
    price: 14.99,
    image: "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg",
    category: "salads",
    nutrients: [
      { name: "Protein", value: "10g" },
      { name: "Fiber", value: "9g" },
      { name: "Calories", value: "290" }
    ],
    featured: true,
    badge: "New"
  },
  
  // Fruit Bowls
  {
    id: 4,
    name: "Tropical Acai Bowl",
    description: "Antioxidant-rich acai blend topped with granola, fresh mango, banana, coconut flakes, and a drizzle of honey.",
    price: 11.99,
    image: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg",
    category: "bowls",
    nutrients: [
      { name: "Protein", value: "8g" },
      { name: "Fiber", value: "12g" },
      { name: "Calories", value: "340" }
    ],
    featured: true,
    badge: "Bestseller"
  },
  {
    id: 5,
    name: "Berry Bliss Bowl",
    description: "Greek yogurt topped with mixed berries, house-made granola, chia seeds, and a touch of maple syrup.",
    price: 10.99,
    image: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg",
    category: "bowls",
    nutrients: [
      { name: "Protein", value: "15g" },
      { name: "Fiber", value: "7g" },
      { name: "Calories", value: "310" }
    ],
    featured: false
  },
  {
    id: 6,
    name: "Green Goodness Bowl",
    description: "Spirulina and banana blend topped with kiwi, green apple, pumpkin seeds, and matcha granola.",
    price: 12.99,
    image: "https://images.pexels.com/photos/1332267/pexels-photo-1332267.jpeg",
    category: "bowls",
    nutrients: [
      { name: "Protein", value: "9g" },
      { name: "Fiber", value: "10g" },
      { name: "Calories", value: "320" }
    ],
    featured: true
  },
  
  // Juices
  {
    id: 7,
    name: "Green Detox Juice",
    description: "A revitalizing blend of kale, cucumber, green apple, celery, ginger, and lemon.",
    price: 8.99,
    image: "https://images.pexels.com/photos/616833/pexels-photo-616833.jpeg",
    category: "juices",
    nutrients: [
      { name: "Vitamin C", value: "120%" },
      { name: "Vitamin A", value: "80%" },
      { name: "Calories", value: "110" }
    ],
    featured: true
  },
  {
    id: 8,
    name: "Immune Booster Juice",
    description: "Orange, carrot, turmeric, and ginger come together in this powerful immune-supporting juice.",
    price: 7.99,
    image: "https://images.pexels.com/photos/1536355/pexels-photo-1536355.jpeg",
    category: "juices",
    nutrients: [
      { name: "Vitamin C", value: "180%" },
      { name: "Vitamin A", value: "120%" },
      { name: "Calories", value: "130" }
    ],
    featured: false,
    badge: "Seasonal"
  },
  {
    id: 9,
    name: "Berry Antioxidant Juice",
    description: "Mixed berries, pomegranate, and apple create this antioxidant-rich, vibrant juice.",
    price: 8.99,
    image: "https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg",
    category: "juices",
    nutrients: [
      { name: "Vitamin C", value: "85%" },
      { name: "Antioxidants", value: "High" },
      { name: "Calories", value: "145" }
    ],
    featured: true
  },
  
  // Energy Potions
  {
    id: 10,
    name: "Pre-Workout Energy Potion",
    description: "A powerful blend of banana, oats, almond butter, maca powder, and cinnamon to fuel your workout.",
    price: 9.99,
    image: "https://images.pexels.com/photos/3323682/pexels-photo-3323682.jpeg",
    category: "energy",
    nutrients: [
      { name: "Protein", value: "15g" },
      { name: "Carbs", value: "35g" },
      { name: "Calories", value: "290" }
    ],
    featured: true
  },
  {
    id: 11,
    name: "Brain Boost Potion",
    description: "Enhance mental clarity with this mix of blueberries, avocado, MCT oil, and lion's mane mushroom.",
    price: 10.99,
    image: "https://images.pexels.com/photos/1346063/pexels-photo-1346063.jpeg",
    category: "energy",
    nutrients: [
      { name: "Healthy Fats", value: "18g" },
      { name: "Antioxidants", value: "High" },
      { name: "Calories", value: "260" }
    ],
    featured: false
  },
  {
    id: 12,
    name: "Recovery Potion",
    description: "Speed up recovery with tart cherry, banana, spinach, protein, and collagen to support muscle repair.",
    price: 10.99,
    image: "https://images.pexels.com/photos/775031/pexels-photo-775031.jpeg",
    category: "energy",
    nutrients: [
      { name: "Protein", value: "22g" },
      { name: "Vitamin K", value: "70%" },
      { name: "Calories", value: "270" }
    ],
    featured: true,
    badge: "Recovery"
  }
];

// Function to create a menu item card
function createMenuItemCard(item) {
  return `
    <div class="col-md-6 col-lg-4 mb-4">
      <div class="menu-item">
        <div class="menu-item-img">
          <img src="${item.image}" alt="${item.name}">
          ${item.badge ? `<span class="menu-item-badge">${item.badge}</span>` : ''}
        </div>
        <div class="menu-item-content">
          <h3 class="menu-item-title">${item.name}</h3>
          <p class="menu-item-description">${item.description}</p>
          <div class="d-flex justify-content-between align-items-center">
            <span class="menu-item-price">$${item.price.toFixed(2)}</span>
            <button class="btn btn-sm btn-outline-primary">Order Now</button>
          </div>
          <div class="menu-item-nutrients">
            ${item.nutrients.map(nutrient => `
              <span class="menu-item-nutrient">
                <i class="fas fa-circle-check"></i> ${nutrient.name}: ${nutrient.value}
              </span>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

// Function to populate menu items
function populateMenu() {
  // All menu items tab
  const allMenuContainer = document.querySelector('#all .row');
  if (allMenuContainer) {
    allMenuContainer.innerHTML = menuItems.map(item => createMenuItemCard(item)).join('');
  }
  
  // Category tabs
  const categories = ['salads', 'bowls', 'juices', 'energy'];
  
  categories.forEach(category => {
    const categoryContainer = document.querySelector(`#${category} .row`);
    if (categoryContainer) {
      const categoryItems = menuItems.filter(item => item.category === category);
      categoryContainer.innerHTML = categoryItems.map(item => createMenuItemCard(item)).join('');
    }
  });
  
  // Dispatch event when menu is loaded
  document.dispatchEvent(new CustomEvent('menuLoaded'));
}

// Initialize
document.addEventListener('DOMContentLoaded', populateMenu);

// Add Order Functionality
document.addEventListener('click', function(e) {
  // Handle "Order Now" button clicks
  if (e.target && e.target.classList.contains('btn-outline-primary') && 
      e.target.textContent === 'Order Now') {
    
    // Find the parent menu item
    const menuItem = e.target.closest('.menu-item');
    if (menuItem) {
      const menuItemTitle = menuItem.querySelector('.menu-item-title').textContent;
      
      // In a real application, this would add the item to a cart
      alert(`Added "${menuItemTitle}" to your cart!`);
      
      // Change button text temporarily
      const originalText = e.target.textContent;
      e.target.textContent = 'Added ✓';
      e.target.classList.add('btn-success');
      e.target.classList.remove('btn-outline-primary');
      
      // Change back after 2 seconds
      setTimeout(() => {
        e.target.textContent = originalText;
        e.target.classList.remove('btn-success');
        e.target.classList.add('btn-outline-primary');
      }, 2000);
    }
  }
});

// Filter functionality (activated by URL hash)
function checkHashAndFilter() {
  const hash = window.location.hash;
  if (hash) {
    const category = hash.replace('#', '');
    const categoryTab = document.querySelector(`.menu-filter a[href="#${category}"]`);
    if (categoryTab) {
      categoryTab.click();
    }
  }
}

// Check for hash on page load
window.addEventListener('load', checkHashAndFilter);
// Check for hash change
window.addEventListener('hashchange', checkHashAndFilter);