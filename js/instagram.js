/**
 * Instagram feed integration for NutriBloom
 * A healthy vegetarian food website
 */

// Simulated Instagram feed data
// In a real application, this would be fetched from the Instagram API
const instagramPosts = [
  {
    id: 'instagram-1',
    imageUrl: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    caption: 'Our signature Mediterranean Quinoa Salad, packed with protein and fresh flavors! #healthyfood #vegetarian',
    likes: 124,
    commentCount: 18,
    date: '2025-03-15'
  },
  {
    id: 'instagram-2',
    imageUrl: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg',
    caption: 'Start your morning right with our Berry Bliss Bowl! #breakfast #healthyeating',
    likes: 98,
    commentCount: 7,
    date: '2025-03-13'
  },
  {
    id: 'instagram-3',
    imageUrl: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg',
    caption: 'Fresh ingredients - delicious meals! Today\'s harvest. #farmtotable #organic',
    likes: 156,
    commentCount: 12,
    date: '2025-03-10'
  },
  {
    id: 'instagram-4',
    imageUrl: 'https://images.pexels.com/photos/616833/pexels-photo-616833.jpeg',
    caption: 'Our Green Detox Juice is just what you need to refresh and revitalize! #detox #juice',
    likes: 87,
    commentCount: 5,
    date: '2025-03-08'
  },
  {
    id: 'instagram-5',
    imageUrl: 'https://images.pexels.com/photos/1346063/pexels-photo-1346063.jpeg',
    caption: 'Brain Boost Potion - the perfect afternoon pick-me-up! #focus #energy',
    likes: 102,
    commentCount: 14,
    date: '2025-03-05'
  },
  {
    id: 'instagram-6',
    imageUrl: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg',
    caption: 'Meal prep Sunday! Getting ready for a week of healthy eating. #mealprep #healthyhabits',
    likes: 143,
    commentCount: 23,
    date: '2025-03-03'
  },
  {
    id: 'instagram-7',
    imageUrl: 'https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg',
    caption: 'Avocado & Kale Power Salad - packed with all the nutrients you need! #powerfoods #salad',
    likes: 119,
    commentCount: 9,
    date: '2025-03-01'
  },
  {
    id: 'instagram-8',
    imageUrl: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg',
    caption: 'Our customer favorite - Tropical Acai Bowl! #acaibowl #healthybreakfast',
    likes: 178,
    commentCount: 31,
    date: '2025-02-27'
  }
];

// Function to create Instagram post item
function createInstagramItem(post) {
  return `
    <div class="col-6 col-md-4 col-lg-3">
      <div class="instagram-item" data-aos="fade-up">
        <img src="${post.imageUrl}" alt="Instagram Post">
        <div class="instagram-item-overlay">
          <a href="https://instagram.com" target="_blank" class="instagram-link">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  `;
}

// Function to load Instagram feed
function loadInstagramFeed() {
  const instagramFeedContainer = document.getElementById('instagramFeed');
  
  if (instagramFeedContainer) {
    // Sort posts by date (most recent first)
    const sortedPosts = [...instagramPosts].sort((a, b) => 
      new Date(b.date) - new Date(a.date)
    );
    
    // Display posts
    instagramFeedContainer.innerHTML = sortedPosts
      .map(post => createInstagramItem(post))
      .join('');
      
    // Add hover effects to Instagram items
    addInstagramItemHoverEffects();
  }
}

// Add hover effects to Instagram items
function addInstagramItemHoverEffects() {
  const instagramItems = document.querySelectorAll('.instagram-item');
  
  instagramItems.forEach(item => {
    // Add mouseenter event listener
    item.addEventListener('mouseenter', function() {
      // Get the overlay element
      const overlay = this.querySelector('.instagram-item-overlay');
      
      // Add entrance animation class
      overlay.classList.add('animate__animated', 'animate__fadeIn');
    });
    
    // Add mouseleave event listener
    item.addEventListener('mouseleave', function() {
      // Get the overlay element
      const overlay = this.querySelector('.instagram-item-overlay');
      
      // Remove animation classes
      overlay.classList.remove('animate__animated', 'animate__fadeIn');
    });
  });
}

// Initialize Instagram feed on DOM content loaded
document.addEventListener('DOMContentLoaded', loadInstagramFeed);

// Refresh Instagram feed periodically (every 5 minutes)
// In a real application, this would fetch fresh data from the Instagram API
function setupInstagramFeedRefresh() {
  setInterval(() => {
    // Reload the Instagram feed
    loadInstagramFeed();
    
    // Log refresh (for development purposes)
    console.log('Instagram feed refreshed at', new Date().toLocaleTimeString());
  }, 5 * 60 * 1000); // 5 minutes in milliseconds
}

// Setup Instagram feed refresh
document.addEventListener('DOMContentLoaded', setupInstagramFeedRefresh);

// Add click event for Instagram follow button
document.addEventListener('DOMContentLoaded', function() {
  const instagramFollowBtn = document.querySelector('a.btn-outline-primary[href*="instagram.com"]');
  
  if (instagramFollowBtn) {
    instagramFollowBtn.addEventListener('click', function(e) {
      // In a real application, this could track engagement
      console.log('Instagram follow button clicked');
      
      // For demo purposes, we're not preventing default behavior
      // This will navigate to the Instagram link as normal
    });
  }
});