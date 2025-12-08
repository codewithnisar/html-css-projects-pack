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
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Add shadow to header on scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if(window.scrollY > 50) {
                header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.08)';
            } else {
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
            }
        });
        
        // Pricing card selection
        document.querySelectorAll('.pricing-card .btn').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const planName = this.closest('.pricing-card').querySelector('.pricing-name').textContent;
                const price = this.closest('.pricing-card').querySelector('.pricing-price').textContent;
                
                alert(`You've selected the ${planName} plan for ${price}. You'll be redirected to checkout.`);
                
                // In a real scenario, you would redirect to checkout
                // window.location.href = '/checkout?plan=' + planName;
            });
        });
        
        // Testimonial slider simulation
        const testimonials = [
            {
                text: "These earbuds are a game-changer! The noise cancellation is incredible - I can't hear anything around me when I'm working. The battery life lasts me all week with daily use.",
                name: "Alex Morgan",
                role: "Software Developer",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
                rating: 5
            },
            {
                text: "As a fitness enthusiast, I needed earbuds that stay in place during intense workouts. SoundSphere Pro not only stays secure but also sounds amazing. The waterproof feature is a lifesaver!",
                name: "Jessica Chen",
                role: "Fitness Trainer",
                img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
                rating: 4
            },
            {
                text: "I travel frequently for work, and these have become my essential travel companion. The battery life is phenomenal, and the case charges wirelessly which is super convenient.",
                name: "David Kim",
                role: "Marketing Executive",
                img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
                rating: 5
            }
        ];
        
        let currentTestimonial = 0;
        const testimonialContainer = document.querySelector('.testimonial-card');
        
        function updateTestimonial() {
            const testimonial = testimonials[currentTestimonial];
            
            testimonialContainer.innerHTML = `
                <p class="testimonial-text">${testimonial.text}</p>
                <div class="testimonial-author">
                    <img src="${testimonial.img}" alt="${testimonial.name}" class="author-img">
                    <div class="author-info">
                        <h4>${testimonial.name}</h4>
                        <p>${testimonial.role}</p>
                    </div>
                    <div class="rating">
                        ${'<i class="fas fa-star"></i>'.repeat(testimonial.rating)}
                    </div>
                </div>
            `;
            
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        }
        
        // Change testimonial every 8 seconds
        setInterval(updateTestimonial, 8000);
        
        // Initialize with first testimonial
        updateTestimonial();