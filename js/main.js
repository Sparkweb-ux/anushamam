/**
 * Main JavaScript for NutriBloom
 * A healthy vegetarian food website
 */

document.addEventListener('DOMContentLoaded', function() {
  'use strict';

  // Initialize AOS animations
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });

  // Navbar color change on scroll
  const navbar = document.getElementById('mainNav');
  
  function handleNavbarTransparency() {
    if (window.scrollY > 100) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  }

  window.addEventListener('scroll', handleNavbarTransparency);
  
  // Call once to set initial state
  handleNavbarTransparency();

  // Smooth scrolling for anchor links
  document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Calculate the target position with offset for the navbar
        const navbarHeight = navbar.getBoundingClientRect().height;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
        
        // Perform smooth scroll
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // If on mobile, close the navbar after clicking
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        
        if (navbarCollapse.classList.contains('show')) {
          navbarToggler.click();
        }
      }
    });
  });

  // Make the active menu item based on scroll position
  function updateActiveNavItem() {
    const scrollPosition = window.scrollY + navbar.getBoundingClientRect().height + 20;
    
    // Get all sections
    const sections = document.querySelectorAll('section, header');
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-link').forEach(link => {
          link.parentElement.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.parentElement.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavItem);
  
  // Call once to set initial state
  updateActiveNavItem();

  // Form validation
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      let isValid = true;
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');
      
      // Simple validation
      if (!nameInput.value.trim()) {
        nameInput.classList.add('is-invalid');
        isValid = false;
      } else {
        nameInput.classList.remove('is-invalid');
      }
      
      if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
        emailInput.classList.add('is-invalid');
        isValid = false;
      } else {
        emailInput.classList.remove('is-invalid');
      }
      
      if (!messageInput.value.trim()) {
        messageInput.classList.add('is-invalid');
        isValid = false;
      } else {
        messageInput.classList.remove('is-invalid');
      }
      
      if (isValid) {
        // In a real application, this would send the form data to the server
        alert('Form submitted successfully! We will get back to you soon.');
        contactForm.reset();
      }
    });
  }
  
  // Email validation helper
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Newsletter form validation
  const newsletterForm = document.querySelector('.newsletter-form');
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      
      if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
        emailInput.classList.add('is-invalid');
      } else {
        emailInput.classList.remove('is-invalid');
        // Submit form logic would go here
        alert('Thank you for subscribing to our newsletter!');
        newsletterForm.reset();
      }
    });
  }
  
  // Back to top button
  const createBackToTopButton = () => {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.classList.add('back-to-top');
    document.body.appendChild(button);
    
    button.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        button.classList.add('show');
      } else {
        button.classList.remove('show');
      }
    });
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
      .back-to-top {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--primary-color);
        color: white;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
      }
      
      .back-to-top.show {
        opacity: 1;
        visibility: visible;
      }
      
      .back-to-top:hover {
        background-color: var(--primary-dark);
        transform: translateY(-3px);
      }
    `;
    document.head.appendChild(style);
  };
  
  // Create and initialize back to top button
  createBackToTopButton();

  // Add animations to menu items
  const animateMenuItems = () => {
    const menuItems = document.querySelectorAll('.menu-item');
    
    if (menuItems.length === 0) return;
    
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated', 'animate__fadeInUp');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    menuItems.forEach(item => {
      observer.observe(item);
    });
  };
  
  // Initialize animations when menu items are loaded
  document.addEventListener('menuLoaded', animateMenuItems);
});