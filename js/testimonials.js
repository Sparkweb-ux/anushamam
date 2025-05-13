/**
 * Testimonials functionality for NutriBloom
 * A healthy vegetarian food website
 */

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    role: "Fitness Instructor",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    text: "NutriBloom has been a game-changer for my nutrition. Their salads and energy potions keep me energized throughout my busy day teaching fitness classes. The Mediterranean Quinoa Salad is my absolute favorite!"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Software Developer",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    text: "As someone who sits at a desk all day, finding healthy food options was a challenge until I discovered NutriBloom. Their delivery service is prompt, and their Brain Boost Potion helps me stay focused during long coding sessions."
  },
  {
    id: 3,
    name: "Sarah Chen",
    role: "Yoga Instructor",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    text: "I recommend NutriBloom to all my yoga students. Their commitment to using fresh, organic ingredients aligns perfectly with my philosophy of mindful eating. The Green Goodness Bowl is pure bliss after a morning practice."
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Marathon Runner",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
    text: "Training for marathons requires proper nutrition, and NutriBloom has been an essential part of my regimen. Their Recovery Potion has significantly improved my post-run recovery time. Highly recommended for all athletes!"
  },
  {
    id: 5,
    name: "Olivia Martinez",
    role: "Busy Mom of Three",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
    text: "NutriBloom has made healthy eating possible for our entire family. My kids love the fruit bowls, and I appreciate having nutritious options that are ready to eat when we're on the go. It's transformed our family's eating habits."
  }
];

// Function to create a testimonial carousel item
function createTestimonialItem(testimonial, isActive = false) {
  return `
    <div class="carousel-item ${isActive ? 'active' : ''}">
      <div class="testimonial-item">
        <div class="testimonial-img">
          <img src="${testimonial.image}" alt="${testimonial.name}">
        </div>
        <p class="testimonial-text">${testimonial.text}</p>
        <h4 class="testimonial-author">${testimonial.name}</h4>
        <p class="testimonial-role">${testimonial.role}</p>
      </div>
    </div>
  `;
}

// Function to load testimonials into the carousel
function loadTestimonials() {
  const testimonialCarouselInner = document.querySelector('#testimonialCarousel .carousel-inner');
  
  if (testimonialCarouselInner) {
    testimonialCarouselInner.innerHTML = testimonials
      .map((testimonial, index) => createTestimonialItem(testimonial, index === 0))
      .join('');
  }
}

// Initialize testimonials on DOM content loaded
document.addEventListener('DOMContentLoaded', loadTestimonials);

// Function to randomize testimonial order for variety
function shuffleTestimonials() {
  // Fisher-Yates shuffle algorithm
  for (let i = testimonials.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [testimonials[i], testimonials[j]] = [testimonials[j], testimonials[i]];
  }
}

// Function to handle testimonial carousel adjustments
function setupTestimonialCarousel() {
  const carousel = document.getElementById('testimonialCarousel');
  
  if (carousel) {
    // Set interval for auto sliding (7 seconds)
    const carouselInstance = new bootstrap.Carousel(carousel, {
      interval: 7000
    });
    
    // Add event listeners for pause on hover
    carousel.addEventListener('mouseenter', () => {
      carouselInstance.pause();
    });
    
    carousel.addEventListener('mouseleave', () => {
      carouselInstance.cycle();
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        carouselInstance.prev();
      } else if (e.key === 'ArrowRight') {
        carouselInstance.next();
      }
    });
  }
}

// Detect when testimonials section is visible and then initialize carousel
function initializeWhenVisible() {
  const testimonialSection = document.getElementById('testimonials');
  
  if (!testimonialSection) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Initialize the carousel when section becomes visible
        setupTestimonialCarousel();
        // Stop observing once initialized
        observer.unobserve(testimonialSection);
      }
    });
  }, { threshold: 0.3 });
  
  observer.observe(testimonialSection);
}

// Setup testimonial carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Shuffle testimonials for variety
  shuffleTestimonials();
  // Load testimonials into the carousel
  loadTestimonials();
  // Initialize when visible
  initializeWhenVisible();
});

// Add animation to testimonials
document.addEventListener('DOMContentLoaded', () => {
  const testimonialItems = document.querySelectorAll('.testimonial-item');
  
  testimonialItems.forEach(item => {
    // Add animation classes
    item.classList.add('animate__animated');
    
    // Add data attributes for AOS library
    item.setAttribute('data-aos', 'fade-up');
    item.setAttribute('data-aos-duration', '800');
  });
});