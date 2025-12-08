// Gallery data
const galleryData = [
  {
    id: 1,
    category: "portrait",
    title: "Urban Portrait",
    img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    category: "wedding",
    title: "Sunset Vows",
    img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w-800&q=80",
  },
  {
    id: 3,
    category: "landscape",
    title: "Mountain Sunrise",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    category: "street",
    title: "City Life",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    category: "portrait",
    title: "Family Moments",
    img: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    category: "wedding",
    title: "First Dance",
    img: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    category: "landscape",
    title: "Ocean Cliffs",
    img: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    category: "street",
    title: "Morning Market",
    img: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    category: "portrait",
    title: "Professional Headshot",
    img: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

// Initialize gallery
function renderGallery(category = "all") {
  const galleryContainer = document.getElementById("masonryGrid");
  galleryContainer.innerHTML = "";

  const filteredItems =
    category === "all"
      ? galleryData
      : galleryData.filter((item) => item.category === category);

  filteredItems.forEach((item) => {
    const galleryItem = document.createElement("div");
    galleryItem.className = "masonry-item";
    galleryItem.innerHTML = `
                    <img src="${item.img}" alt="${item.title}">
                    <div class="image-overlay">
                        <h3 class="image-title">${item.title}</h3>
                        <span class="image-category">${item.category}</span>
                    </div>
                `;
    galleryContainer.appendChild(galleryItem);
  });
}

// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close mobile menu when clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Gallery filtering
document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", function () {
    // Remove active class from all buttons
    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.classList.remove("active");
    });

    // Add active class to clicked button
    this.classList.add("active");

    // Get category and render gallery
    const category = this.getAttribute("data-filter");
    renderGallery(category);
  });
});

// Contact modal
const contactBtn = document.querySelector(".contact-cta .btn");
const contactModal = document.getElementById("contactModal");
const closeModal = document.getElementById("closeModal");
const contactForm = document.getElementById("contactForm");

// Open modal
contactBtn.addEventListener("click", (e) => {
  e.preventDefault();
  contactModal.style.display = "flex";
});

// Close modal
closeModal.addEventListener("click", () => {
  contactModal.style.display = "none";
});

// Close modal when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === contactModal) {
    contactModal.style.display = "none";
  }
});

// Form submission
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("contact-name").value;
  const email = document.getElementById("contact-email").value;
  const service = document.getElementById("contact-service").value;
  const date = document.getElementById("contact-date").value;

  // Show confirmation
  alert(
    `Thank you, ${name}! Your photography inquiry has been submitted. I'll contact you at ${email} within 24 hours to discuss your ${service} needs.`
  );

  // Reset form and close modal
  this.reset();
  contactModal.style.display = "none";
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    if (this.getAttribute("href") === "#") return;

    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Image click to view larger
document.addEventListener("click", function (e) {
  if (e.target.closest(".masonry-item")) {
    const imgSrc = e.target.closest(".masonry-item").querySelector("img").src;
    const imgTitle = e.target
      .closest(".masonry-item")
      .querySelector(".image-title").textContent;

    // In a real implementation, you would open a lightbox
    // For this demo, we'll just show an alert
    alert(`Viewing: ${imgTitle}\n\nClick would open full-size image viewer.`);
  }
});

// Initialize gallery on page load
document.addEventListener("DOMContentLoaded", () => {
  renderGallery();

  // Add animation to stats numbers
  const statNumbers = document.querySelectorAll(".stat-number");
  statNumbers.forEach((stat) => {
    const finalValue = parseInt(stat.textContent);
    let currentValue = 0;
    const increment = finalValue / 30;
    const timer = setInterval(() => {
      currentValue += increment;
      if (currentValue >= finalValue) {
        stat.textContent =
          finalValue + (stat.textContent.includes("+") ? "+" : "");
        clearInterval(timer);
      } else {
        stat.textContent =
          Math.floor(currentValue) +
          (stat.textContent.includes("+") ? "+" : "");
      }
    }, 50);
  });
});
