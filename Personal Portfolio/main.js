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

      // Form submission handling
      document
        .getElementById("contactForm")
        .addEventListener("submit", function (e) {
          e.preventDefault();

          // Get form values
          const name = document.getElementById("name").value;
          const email = document.getElementById("email").value;
          const subject = document.getElementById("subject").value;
          const message = document.getElementById("message").value;

          // In a real application, you would send this data to a server
          // For this demo, we'll just show an alert
          alert(
            `Thank you, ${name}! Your message has been sent. I'll get back to you at ${email} soon.`
          );

          // Reset the form
          this.reset();
        });

      // Smooth scrolling for navigation links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();

          const targetId = this.getAttribute("href");
          if (targetId === "#") return;

          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: "smooth",
            });
          }
        });
      });

      // Add shadow to header on scroll
      window.addEventListener("scroll", () => {
        const header = document.querySelector("header");
        if (window.scrollY > 50) {
          header.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.1)";
        } else {
          header.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.08)";
        }
      });