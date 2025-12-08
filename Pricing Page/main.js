// Pricing data
      const pricingData = {
        monthly: {
          basic: 19,
          standard: 49,
          premium: 99,
        },
        yearly: {
          basic: 15.2, // 20% off
          standard: 39.2, // 20% off
          premium: 79.2, // 20% off
        },
      };

      // DOM elements
      const billingToggle = document.getElementById("billingToggle");
      const monthlyLabel = document.getElementById("monthlyLabel");
      const yearlyLabel = document.getElementById("yearlyLabel");
      const basicPriceElement = document.getElementById("basicPrice");
      const standardPriceElement = document.getElementById("standardPrice");
      const premiumPriceElement = document.getElementById("premiumPrice");
      const pricingPeriodElements =
        document.querySelectorAll(".pricing-period");
      const ctaButtons = document.querySelectorAll(".pricing-card .btn");

      // Toggle billing period
      function toggleBillingPeriod() {
        const isYearly = billingToggle.checked;
        const period = isYearly ? "yearly" : "monthly";

        // Update labels
        if (isYearly) {
          monthlyLabel.classList.remove("active");
          yearlyLabel.classList.add("active");
        } else {
          monthlyLabel.classList.add("active");
          yearlyLabel.classList.remove("active");
        }

        // Update prices
        basicPriceElement.textContent = `$${pricingData[period].basic}`;
        standardPriceElement.textContent = `$${pricingData[period].standard}`;
        premiumPriceElement.textContent = `$${pricingData[period].premium}`;

        // Update period text
        const periodText = isYearly ? "per month, billed yearly" : "per month";
        pricingPeriodElements.forEach((element) => {
          element.textContent = periodText;
        });

        // Update pricing cards for yearly discount highlight
        if (isYearly) {
          document.querySelectorAll(".pricing-card").forEach((card) => {
            const priceElement = card.querySelector(".pricing-price span");
            const originalPrice =
              pricingData.monthly[
                card.querySelector(".btn").getAttribute("data-plan")
              ];
            const discountPrice =
              pricingData.yearly[
                card.querySelector(".btn").getAttribute("data-plan")
              ];

            // Add discount badge to pricing cards
            let discountBadge = card.querySelector(".discount-badge");
            if (!discountBadge) {
              discountBadge = document.createElement("div");
              discountBadge.className = "discount-badge";
              discountBadge.style.cssText = `
                            position: absolute;
                            top: 20px;
                            left: -10px;
                            background-color: var(--secondary);
                            color: white;
                            padding: 5px 15px;
                            font-size: 0.8rem;
                            font-weight: 600;
                            border-radius: 4px;
                            transform: rotate(-15deg);
                            box-shadow: 0 3px 10px rgba(16, 185, 129, 0.3);
                            z-index: 1;
                        `;
              discountBadge.textContent = "Save 20%";
              card.style.position = "relative";
              card.appendChild(discountBadge);
            }

            // Show original price with strikethrough
            const originalPriceElement = document.createElement("span");
            originalPriceElement.style.cssText = `
                        display: block;
                        font-size: 1rem;
                        color: var(--gray);
                        text-decoration: line-through;
                        margin-top: 5px;
                    `;
            originalPriceElement.textContent = `$${originalPrice}/mo`;

            // Check if we already have the original price displayed
            const existingOriginalPrice = card.querySelector(".original-price");
            if (existingOriginalPrice) {
              existingOriginalPrice.textContent = `$${originalPrice}/mo`;
            } else {
              originalPriceElement.className = "original-price";
              card
                .querySelector(".pricing-price")
                .appendChild(originalPriceElement);
            }
          });
        } else {
          // Remove discount badges and original prices
          document
            .querySelectorAll(".discount-badge")
            .forEach((badge) => badge.remove());
          document
            .querySelectorAll(".original-price")
            .forEach((price) => price.remove());
        }
      }

      // Initialize with monthly pricing
      toggleBillingPeriod();

      // Add event listener to toggle
      billingToggle.addEventListener("change", toggleBillingPeriod);

      // Add hover effects to pricing cards
      document.querySelectorAll(".pricing-card").forEach((card) => {
        card.addEventListener("mouseenter", function () {
          this.style.zIndex = "10";
        });

        card.addEventListener("mouseleave", function () {
          this.style.zIndex = "1";
        });
      });

      // CTA button click handlers
      ctaButtons.forEach((button) => {
        button.addEventListener("click", function (e) {
          e.preventDefault();
          const plan = this.getAttribute("data-plan");
          const isYearly = billingToggle.checked;
          const price = isYearly
            ? pricingData.yearly[plan]
            : pricingData.monthly[plan];
          const period = isYearly ? "yearly" : "monthly";

          // Show confirmation modal
          let planName = "";
          switch (plan) {
            case "basic":
              planName = "Basic";
              break;
            case "standard":
              planName = "Standard";
              break;
            case "premium":
              planName = "Premium";
              break;
          }

          alert(
            `You've selected the ${planName} plan for $${price}/${period}. You'll be redirected to checkout.`
          );

          // In a real scenario, you would redirect to checkout
          // window.location.href = `/checkout?plan=${plan}&period=${period}`;
        });
      });

      // FAQ item interaction
      document.querySelectorAll(".faq-item").forEach((item) => {
        item.addEventListener("click", function () {
          // Toggle expanded state
          this.classList.toggle("expanded");

          // In a real implementation, you would show/hide more content
          // For this demo, we'll just change the background color
          if (this.classList.contains("expanded")) {
            this.style.backgroundColor = "var(--light)";
          } else {
            this.style.backgroundColor = "white";
          }
        });
      });

      // CTA section buttons
      document
        .querySelector(".cta-btn")
        .addEventListener("click", function (e) {
          e.preventDefault();
          alert(
            "Starting your 14-day free trial... You'll be redirected to signup."
          );
        });

      document
        .querySelector(".cta-btn-outline")
        .addEventListener("click", function (e) {
          e.preventDefault();
          alert("Scheduling a demo... You'll be redirected to our calendar.");
        });

      // Add animation to pricing cards on page load
      document.addEventListener("DOMContentLoaded", () => {
        const cards = document.querySelectorAll(".pricing-card");
        cards.forEach((card, index) => {
          card.style.opacity = "0";
          card.style.transform = "translateY(30px)";

          setTimeout(() => {
            card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, index * 200);
        });
      });