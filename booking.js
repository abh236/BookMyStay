
  function showPage(pageId) {
    const pages = ['home', 'login',`tophotels`,`facilities`];

    pages.forEach(id => {
      const section = document.getElementById(id);
      if (section) {
        section.classList.remove('active');
      }
    });

    const target = document.getElementById(pageId);
    if (target) {
      target.classList.add('active');
    }
  }

  function validateSignIn(event) {
    event.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
      alert("Please fill in all fields.");
      return false;
    }

    if (email === "user@example.com" && password === "123456") {
      alert("Login successful!");
      showPage('home');
    } else {
      alert("Invalid credentials.");
    }

    return false;
  }

  function signInWith(service) {
    alert(`Redirecting to ${service} Sign In...`);
  }

  function showPhoneModal() {
    document.getElementById('phoneModal').style.display = 'block';
  }

  function closePhoneModal() {
    document.getElementById('phoneModal').style.display = 'none';
  }

  function sendOTP() {
    const phone = document.getElementById('phoneInput').value.trim();
    if (!phone) {
      alert("Please enter a valid phone number.");
      return;
    }
    alert(`OTP sent to ${phone}`);
    closePhoneModal();
  }

  document.addEventListener("DOMContentLoaded", function() {
    let count = localStorage.getItem('page_view_count') || 0;
    count++;
    localStorage.setItem('page_view_count', count);
  
    animateCounter(0, count, 1500);
  });
  
  function animateCounter(start, end, duration) {
    let range = end - start;
    let stepTime = Math.abs(Math.floor(duration / range));
    let current = start;
    let counter = document.getElementById("counter");
  
    let timer = setInterval(function() {
      current += 1;
      counter.innerText = current;
      if (current >= end) {
        clearInterval(timer);
      }
    }, stepTime);
  }
  

  const images = [
    "url('carousel-2.jpg')",
    "url('carousel-1.jpg')",
    "url('room-1.jpg')",
    "url('room-2.jpg')"
  ];
  
  let currentIndex = 0;
  
  function updateBackground() {
    document.querySelector('.background-slider').style.backgroundImage = images[currentIndex];
  }
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateBackground();
  }
  
  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateBackground();
  }
  

  window.onload = updateBackground;
  



const cards = document.querySelectorAll('.facility-card');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.style.animation = 'fadeInUp 0.8s ease forwards';
    }
  });
});
