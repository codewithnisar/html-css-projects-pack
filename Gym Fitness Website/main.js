// Classes data
const classesData = [
  {
    name: "Powerlifting 101",
    category: "strength",
    time: "6:00 AM",
    trainer: "Marcus Johnson",
    trainerImg:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    duration: "60 min",
    intensity: "High",
    img: "https://images.unsplash.com/photo-1534367507877-0edd93bd013b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Spin & Burn",
    category: "cardio",
    time: "7:30 AM",
    trainer: "David Rodriguez",
    trainerImg:
      "https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    duration: "45 min",
    intensity: "High",
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Morning Vinyasa",
    category: "mindbody",
    time: "8:00 AM",
    trainer: "Sarah Chen",
    trainerImg:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    duration: "75 min",
    intensity: "Low",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "HIIT Circuit",
    category: "hiit",
    time: "5:30 PM",
    trainer: "David Rodriguez",
    trainerImg:
      "https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    duration: "50 min",
    intensity: "High",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Body Sculpt",
    category: "strength",
    time: "6:30 PM",
    trainer: "Marcus Johnson",
    trainerImg:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    duration: "60 min",
    intensity: "Medium",
    img: "https://images.unsplash.com/photo-1534367507877-0edd93bd013b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Evening Yin Yoga",
    category: "mindbody",
    time: "7:00 PM",
    trainer: "Sarah Chen",
    trainerImg:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    duration: "60 min",
    intensity: "Low",
    img: "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

// Initialize classes
function renderClasses(category = "all") {
  const classesContainer = document.getElementById("classesContainer");
  classesContainer.innerHTML = "";

  const filteredClasses =
    category === "all"
      ? classesData
      : classesData.filter((cls) => cls.category === category);

  filteredClasses.forEach((cls) => {
    const classCard = document.createElement("div");
    classCard.className = "class-card";
    classCard.innerHTML = `
                    <div class="class-header">
                        <img src="${cls.img}" alt="${cls.name}" class="class-img">
                        <div class="class-time">${cls.time}</div>
                    </div>
                    <div class="class-info">
                        <h3 class="class-title">${cls.name}</h3>
                        <div class="class-trainer">
                            <img src="${cls.trainerImg}" alt="${cls.trainer}">
                            <span>with ${cls.trainer}</span>
                        </div>
                        <div class="class-details">
                            <div class="class-detail">
                                <i class="far fa-clock"></i>
                                <span>${cls.duration}</span>
                            </div>
                            <div class="class-detail">
                                <i class="fas fa-fire"></i>
                                <span>${cls.intensity} Intensity</span>
                            </div>
                        </div>
                    </div>
                `;
    classesContainer.appendChild(classCard);
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

// Class filtering
document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", function () {
    // Remove active class from all buttons
    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.classList.remove("active");
    });

    // Add active class to clicked button
    this.classList.add("active");

    // Get category and render classes
    const category = this.getAttribute("data-filter");
    renderClasses(category);
  });
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

// Pricing card selection
document.querySelectorAll(".pricing-card .btn").forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    const planName =
      this.closest(".pricing-card").querySelector(".pricing-name").textContent;
    const price =
      this.closest(".pricing-card").querySelector(".pricing-price").textContent;

    alert(
      `You've selected the ${planName} plan for ${price}. You'll be redirected to sign up.`
    );

    // In a real scenario, you would redirect to signup
    // window.location.href = '/signup?plan=' + planName;
  });
});

// Initialize classes on page load
document.addEventListener("DOMContentLoaded", () => {
  renderClasses();

  // Add animation to stats numbers
  const statNumbers = document.querySelectorAll(".stat-number");
  statNumbers.forEach((stat) => {
    const finalValue = parseInt(stat.textContent);
    let currentValue = 0;
    const increment = finalValue / 50;
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
    }, 30);
  });
});
