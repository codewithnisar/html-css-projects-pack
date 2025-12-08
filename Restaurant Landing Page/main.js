// Menu data
        const menuData = [
            { name: "Bruschetta", price: "$12.99", desc: "Toasted bread topped with tomatoes, garlic, fresh basil", category: "appetizers", img: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
            { name: "Calamari Fritti", price: "$16.99", desc: "Crispy fried squid served with lemon aioli", category: "appetizers", img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
            { name: "Caprese Salad", price: "$14.99", desc: "Fresh mozzarella, tomatoes, basil with balsamic glaze", category: "appetizers", img: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
            { name: "Spaghetti Carbonara", price: "$22.99", desc: "Classic Roman pasta with eggs, pecorino, pancetta", category: "pasta", img: "https://images.unsplash.com/photo-1598866594230-a7c12756260f?ixlib=rb-4.0.3&auto=format&fit=crop&w-400&q=80" },
            { name: "Fettuccine Alfredo", price: "$21.99", desc: "Fresh pasta in a creamy Parmigiano-Reggiano sauce", category: "pasta", img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
            { name: "Penne Arrabbiata", price: "$19.99", desc: "Penne pasta in a spicy tomato sauce with garlic", category: "pasta", img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
            { name: "Chicken Parmigiana", price: "$26.99", desc: "Breaded chicken breast with marinara and mozzarella", category: "main", img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
            { name: "Veal Marsala", price: "$29.99", desc: "Sautéed veal with mushrooms in a Marsala wine sauce", category: "main", img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
            { name: "Grilled Salmon", price: "$28.99", desc: "Atlantic salmon with lemon butter and asparagus", category: "main", img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
            { name: "Tiramisu", price: "$9.99", desc: "Classic Italian dessert with coffee-soaked ladyfingers", category: "dessert", img: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
            { name: "Cannoli", price: "$8.99", desc: "Crispy pastry tubes filled with sweet ricotta cream", category: "dessert", img: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
            { name: "Panna Cotta", price: "$8.99", desc: "Creamy vanilla custard with berry compote", category: "dessert", img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
            { name: "Italian Soda", price: "$4.99", desc: "Sparkling water with syrup in various flavors", category: "drinks", img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
            { name: "House Wine", price: "$9.99", desc: "Glass of our selected house red or white wine", category: "drinks", img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
            { name: "Espresso", price: "$3.99", desc: "Authentic Italian espresso shot", category: "drinks", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
        ];

        // Initialize menu
        function renderMenu(category = 'all') {
            const menuItemsContainer = document.getElementById('menuItems');
            menuItemsContainer.innerHTML = '';
            
            const filteredItems = category === 'all' 
                ? menuData 
                : menuData.filter(item => item.category === category);
            
            filteredItems.forEach(item => {
                const menuItem = document.createElement('div');
                menuItem.className = 'menu-item';
                menuItem.innerHTML = `
                    <img src="${item.img}" alt="${item.name}" class="menu-item-img">
                    <div class="menu-item-info">
                        <div class="menu-item-header">
                            <h3 class="menu-item-name">${item.name}</h3>
                            <span class="menu-item-price">${item.price}</span>
                        </div>
                        <p class="menu-item-desc">${item.desc}</p>
                    </div>
                `;
                menuItemsContainer.appendChild(menuItem);
            });
        }

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

        // Menu category filtering
        document.querySelectorAll('.category-btn').forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                document.querySelectorAll('.category-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Get category and render menu
                const category = this.getAttribute('data-category');
                renderMenu(category);
            });
        });

        // Reservation modal
        const reservationBtn = document.querySelector('.reservation-cta .btn');
        const reservationModal = document.getElementById('reservationModal');
        const closeModal = document.getElementById('closeModal');
        const reservationForm = document.getElementById('reservationForm');
        
        // Set minimum date to today
        const dateInput = document.getElementById('reservation-date');
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
        dateInput.value = today;
        
        // Open modal
        reservationBtn.addEventListener('click', (e) => {
            e.preventDefault();
            reservationModal.style.display = 'flex';
        });
        
        // Close modal
        closeModal.addEventListener('click', () => {
            reservationModal.style.display = 'none';
        });
        
        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === reservationModal) {
                reservationModal.style.display = 'none';
            }
        });
        
        // Form submission
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('reservation-name').value;
            const email = document.getElementById('reservation-email').value;
            const phone = document.getElementById('reservation-phone').value;
            const guests = document.getElementById('reservation-guests').value;
            const date = document.getElementById('reservation-date').value;
            const time = document.getElementById('reservation-time').value;
            
            // Format date
            const dateObj = new Date(date);
            const formattedDate = dateObj.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            });
            
            // Show confirmation
            alert(`Thank you, ${name}! Your table for ${guests} guests is reserved for ${formattedDate} at ${time}. A confirmation has been sent to ${email}.`);
            
            // Reset form and close modal
            this.reset();
            dateInput.value = today;
            reservationModal.style.display = 'none';
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

        // Initialize menu on page load
        document.addEventListener('DOMContentLoaded', () => {
            renderMenu();
        });