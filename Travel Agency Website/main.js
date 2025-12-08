// Mobile menu toggle
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');
        
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        // Header scroll effect
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                if(this.getAttribute('href') === '#') return;
                
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Search form submission
        document.querySelector('.search-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const destination = document.getElementById('destination').value;
            const date = document.getElementById('travel-date').value;
            const travelers = document.getElementById('travelers').value;
            const budget = document.getElementById('budget').value;
            
            if (!destination) {
                alert('Please enter a destination');
                return;
            }
            
            alert(`Searching for ${travelers} traveler(s) to ${destination} on ${date} with ${budget} budget.`);
            
            // In a real scenario, you would process the search
            // window.location.href = `/search?destination=${destination}&date=${date}&travelers=${travelers}&budget=${budget}`;
        });

        // Booking functionality
        document.querySelectorAll('.pricing-card .btn').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const planName = this.closest('.pricing-card').querySelector('.pricing-name').textContent;
                const price = this.closest('.pricing-card').querySelector('.pricing-price').textContent;
                
                alert(`You've selected the ${planName} package for ${price}. You'll be redirected to booking.`);
                
                // In a real scenario, you would redirect to booking
                // window.location.href = '/booking?package=' + planName;
            });
        });

        // Destination card booking
        document.querySelectorAll('.destination-card').forEach(card => {
            card.addEventListener('click', function(e) {
                if (e.target.tagName === 'A' || e.target.closest('a')) return;
                
                const destinationName = this.querySelector('h3').textContent;
                const price = this.querySelector('.destination-price').textContent;
                
                alert(`You've selected ${destinationName} for ${price}. Would you like to book this destination?`);
            });
        });

        // Contact form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const destination = this.querySelector('select').value;
            
            alert(`Thank you, ${name}! Your travel inquiry has been submitted. We'll contact you at ${email} within 24 hours to plan your ${destination} trip.`);
            
            // Reset form
            this.reset();
        });

        // Newsletter subscription
        document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('.newsletter-input').value;
            
            if (email) {
                alert(`Thank you for subscribing with ${email}! You'll receive our travel updates and special offers.`);
                this.reset();
            }
        });

        // Reviews data
        const reviews = [
            {
                text: "Our trip to Japan with Wanderlust was absolutely incredible! Every detail was perfectly planned, and the guides were knowledgeable and friendly. We'll definitely be booking our next vacation with them.",
                name: "Jennifer Lee",
                location: "Traveled to Japan, 2023",
                img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
                rating: 5
            },
            {
                text: "The Greek islands tour was a dream come true! The accommodations were stunning, and the itinerary allowed us to experience both popular spots and hidden gems. Highly recommended!",
                name: "Michael Rodriguez",
                location: "Traveled to Greece, 2023",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
                rating: 4
            },
            {
                text: "Bali exceeded all our expectations. From the cultural experiences to the beach resorts, everything was perfect. The Wanderlust team made sure we had a seamless experience from start to finish.",
                name: "Sarah Chen",
                location: "Traveled to Bali, 2023",
                img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
                rating: 5
            }
        ];
        
        let currentReview = 0;
        const reviewContainer = document.querySelector('.review-card');
        
        function updateReview() {
            const review = reviews[currentReview];
            
            reviewContainer.innerHTML = `
                <p class="review-text">${review.text}</p>
                <div class="review-author">
                    <img src="${review.img}" alt="${review.name}" class="author-img">
                    <div class="author-info">
                        <h4>${review.name}</h4>
                        <p>${review.location}</p>
                    </div>
                    <div class="rating">
                        ${'<i class="fas fa-star"></i>'.repeat(review.rating)}
                    </div>
                </div>
            `;
            
            currentReview = (currentReview + 1) % reviews.length;
        }
        
        // Change review every 8 seconds
        setInterval(updateReview, 8000);
        
        // Initialize with first review
        updateReview();