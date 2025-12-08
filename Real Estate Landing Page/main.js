// Properties data
        const propertiesData = [
            { 
                id: 1, 
                title: "Downtown Luxury Condo", 
                address: "123 Main St, Downtown", 
                price: "$650,000", 
                type: "condo", 
                status: "for-sale",
                beds: 3, 
                baths: 2, 
                sqft: "1,800", 
                img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            { 
                id: 2, 
                title: "Suburban Family Home", 
                address: "456 Oak Ave, Suburbs", 
                price: "$425,000", 
                type: "house", 
                status: "for-sale",
                beds: 4, 
                baths: 3, 
                sqft: "2,400", 
                img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            { 
                id: 3, 
                title: "Modern City Apartment", 
                address: "789 City Blvd, Downtown", 
                price: "$2,800/mo", 
                type: "apartment", 
                status: "for-rent",
                beds: 2, 
                baths: 2, 
                sqft: "1,200", 
                img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            { 
                id: 4, 
                title: "Lakeside Cottage", 
                address: "101 Lakeview Dr, Countryside", 
                price: "$550,000", 
                type: "house", 
                status: "for-sale",
                beds: 3, 
                baths: 2, 
                sqft: "1,900", 
                img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            { 
                id: 5, 
                title: "Uptown Townhouse", 
                address: "222 Uptown Ave, Northside", 
                price: "$3,200/mo", 
                type: "townhouse", 
                status: "for-rent",
                beds: 3, 
                baths: 2.5, 
                sqft: "2,100", 
                img: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            { 
                id: 6, 
                title: "Modern Loft Studio", 
                address: "333 Art District, Westside", 
                price: "$1,950/mo", 
                type: "apartment", 
                status: "for-rent",
                beds: 1, 
                baths: 1, 
                sqft: "900", 
                img: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            { 
                id: 7, 
                title: "Executive Penthouse", 
                address: "444 Skyline Blvd, Downtown", 
                price: "$1,850,000", 
                type: "condo", 
                status: "sold",
                beds: 4, 
                baths: 3.5, 
                sqft: "3,500", 
                img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            { 
                id: 8, 
                title: "Garden Villa", 
                address: "555 Greenway Ln, Southside", 
                price: "$725,000", 
                type: "villa", 
                status: "for-sale",
                beds: 3, 
                baths: 3, 
                sqft: "2,800", 
                img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            { 
                id: 9, 
                title: "Urban Studio Apartment", 
                address: "666 Metro St, Eastside", 
                price: "$1,650/mo", 
                type: "apartment", 
                status: "for-rent",
                beds: 1, 
                baths: 1, 
                sqft: "750", 
                img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            }
        ];

        // Initialize properties grid
        function renderProperties(filter = {}) {
            const propertiesContainer = document.getElementById('propertiesGrid');
            propertiesContainer.innerHTML = '';
            
            let filteredProperties = [...propertiesData];
            
            // Apply filters if provided
            if (filter.type && filter.type !== '') {
                filteredProperties = filteredProperties.filter(property => property.type === filter.type);
            }
            
            if (filter.status && filter.status !== '') {
                filteredProperties = filteredProperties.filter(property => property.status === filter.status);
            }
            
            if (filter.beds && filter.beds !== '') {
                filteredProperties = filteredProperties.filter(property => property.beds >= parseInt(filter.beds));
            }
            
            // Update results count
            document.querySelector('.results-count').textContent = `Showing ${filteredProperties.length} properties`;
            
            filteredProperties.forEach(property => {
                const propertyCard = document.createElement('div');
                propertyCard.className = 'property-card';
                
                // Determine status text and class
                let statusText = '';
                let statusClass = '';
                if (property.status === 'for-sale') {
                    statusText = 'For Sale';
                    statusClass = 'status-for-sale';
                } else if (property.status === 'for-rent') {
                    statusText = 'For Rent';
                    statusClass = 'status-for-rent';
                } else {
                    statusText = 'Sold';
                    statusClass = 'status-sold';
                }
                
                propertyCard.innerHTML = `
                    <div class="property-image">
                        <img src="${property.img}" alt="${property.title}">
                        <div class="property-status ${statusClass}">${statusText}</div>
                    </div>
                    <div class="property-info">
                        <div class="property-price">${property.price}</div>
                        <h3>${property.title}</h3>
                        <p class="property-address">${property.address}</p>
                        <div class="property-features">
                            <div class="property-feature">
                                <div class="feature-icon">
                                    <i class="fas fa-bed"></i>
                                </div>
                                <span class="feature-text">${property.beds} Bed</span>
                            </div>
                            <div class="property-feature">
                                <div class="feature-icon">
                                    <i class="fas fa-bath"></i>
                                </div>
                                <span class="feature-text">${property.baths} Bath</span>
                            </div>
                            <div class="property-feature">
                                <div class="feature-icon">
                                    <i class="fas fa-ruler-combined"></i>
                                </div>
                                <span class="feature-text">${property.sqft} sq ft</span>
                            </div>
                        </div>
                        <div class="property-actions">
                            <button class="btn btn-outline view-details" data-id="${property.id}">View Details</button>
                            <button class="btn contact-agent" data-id="${property.id}">Contact Agent</button>
                        </div>
                    </div>
                `;
                propertiesContainer.appendChild(propertyCard);
            });
            
            // Add event listeners to the new buttons
            addPropertyEventListeners();
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

        // Search functionality
        const searchBtn = document.getElementById('searchBtn');
        const locationFilter = document.getElementById('location');
        const typeFilter = document.getElementById('property-type');
        const priceFilter = document.getElementById('price-range');
        const bedsFilter = document.getElementById('bedrooms');
        
        searchBtn.addEventListener('click', () => {
            const filters = {
                location: locationFilter.value,
                type: typeFilter.value,
                price: priceFilter.value,
                beds: bedsFilter.value
            };
            
            // In a real implementation, this would filter properties
            // For this demo, we'll just show an alert and filter by type
            alert(`Searching properties in ${filters.location || 'any location'}, type: ${filters.type || 'any'}, price: ${filters.price || 'any'}, bedrooms: ${filters.beds || 'any'}`);
            
            // Apply simple type filter for demo
            renderProperties({ type: filters.type });
        });

        // Property detail modal
        const propertyModal = document.getElementById('propertyModal');
        const closeModal = document.getElementById('closeModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalContent = document.getElementById('modalContent');
        
        // Close modal
        closeModal.addEventListener('click', () => {
            propertyModal.style.display = 'none';
        });
        
        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === propertyModal) {
                propertyModal.style.display = 'none';
            }
        });
        
        // Function to add event listeners to property buttons
        function addPropertyEventListeners() {
            // View details buttons
            document.querySelectorAll('.view-details').forEach(button => {
                button.addEventListener('click', function() {
                    const propertyId = parseInt(this.getAttribute('data-id'));
                    const property = propertiesData.find(p => p.id === propertyId);
                    
                    if (property) {
                        modalTitle.textContent = property.title;
                        modalContent.innerHTML = `
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 30px;">
                                <div>
                                    <img src="${property.img}" alt="${property.title}" style="width: 100%; border-radius: var(--radius);">
                                </div>
                                <div>
                                    <h3 style="margin-bottom: 10px;">${property.title}</h3>
                                    <p style="color: var(--gray); margin-bottom: 20px;">${property.address}</p>
                                    <div style="font-size: 1.8rem; font-weight: 700; color: var(--primary); margin-bottom: 20px;">${property.price}</div>
                                    <div style="display: flex; gap: 20px; margin-bottom: 30px;">
                                        <div style="text-align: center;">
                                            <div style="font-size: 1.5rem; color: var(--primary); font-weight: 600;">${property.beds}</div>
                                            <div style="color: var(--gray); font-size: 0.9rem;">Bedrooms</div>
                                        </div>
                                        <div style="text-align: center;">
                                            <div style="font-size: 1.5rem; color: var(--primary); font-weight: 600;">${property.baths}</div>
                                            <div style="color: var(--gray); font-size: 0.9rem;">Bathrooms</div>
                                        </div>
                                        <div style="text-align: center;">
                                            <div style="font-size: 1.5rem; color: var(--primary); font-weight: 600;">${property.sqft}</div>
                                            <div style="color: var(--gray); font-size: 0.9rem;">Square Feet</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style="display: flex; gap: 15px;">
                                <button class="btn" style="flex: 1;" id="scheduleTour">Schedule a Tour</button>
                                <button class="btn btn-secondary" style="flex: 1;" id="contactAgentModal">Contact Agent</button>
                            </div>
                        `;
                        
                        propertyModal.style.display = 'flex';
                        
                        // Add event listeners to modal buttons
                        document.getElementById('scheduleTour').addEventListener('click', () => {
                            alert(`Tour scheduled for ${property.title}! An agent will contact you to confirm the date and time.`);
                            propertyModal.style.display = 'none';
                        });
                        
                        document.getElementById('contactAgentModal').addEventListener('click', () => {
                            alert(`Contacting agent for ${property.title}. You'll be redirected to the contact form.`);
                            propertyModal.style.display = 'none';
                        });
                    }
                });
            });
            
            // Contact agent buttons
            document.querySelectorAll('.contact-agent').forEach(button => {
                button.addEventListener('click', function() {
                    const propertyId = parseInt(this.getAttribute('data-id'));
                    const property = propertiesData.find(p => p.id === propertyId);
                    
                    if (property) {
                        alert(`Contacting agent for ${property.title}. You'll be redirected to the contact form.`);
                    }
                });
            });
        }

        // Pagination functionality
        document.querySelectorAll('.page-btn').forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                document.querySelectorAll('.page-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // Add active class to clicked button (if it's a number button)
                if (!this.querySelector('i')) {
                    this.classList.add('active');
                    alert(`Loading page ${this.textContent}...`);
                } else if (this.querySelector('.fa-chevron-left')) {
                    // Previous page logic
                    alert('Loading previous page...');
                } else if (this.querySelector('.fa-chevron-right')) {
                    // Next page logic
                    alert('Loading next page...');
                }
            });
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

        // Initialize properties on page load
        document.addEventListener('DOMContentLoaded', () => {
            renderProperties();
        });