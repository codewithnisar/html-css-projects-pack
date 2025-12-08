// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Building Responsive Layouts with CSS Grid",
    excerpt:
      "Learn how to create modern, responsive layouts using CSS Grid with practical examples and best practices.",
    category: "Web Development",
    date: "Mar 12, 2023",
    readTime: "5 min",
    img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Sarah Johnson",
  },
  {
    id: 2,
    title: "The Future of Web Design in 2023",
    excerpt:
      "Exploring the latest design trends, tools, and techniques that will dominate the web design landscape this year.",
    category: "Design",
    date: "Mar 10, 2023",
    readTime: "6 min",
    img: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Alex Martinez",
  },
  {
    id: 3,
    title: "10 JavaScript Frameworks to Watch in 2023",
    excerpt:
      "A comprehensive guide to the most promising JavaScript frameworks and libraries for modern web development.",
    category: "Technology",
    date: "Mar 8, 2023",
    readTime: "8 min",
    img: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "David Kim",
  },
  {
    id: 4,
    title: "The Rise of No-Code Development Platforms",
    excerpt:
      "How no-code platforms are democratizing software development and what it means for professional developers.",
    category: "Technology",
    date: "Mar 5, 2023",
    readTime: "7 min",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Lisa Wang",
  },
  {
    id: 5,
    title: "Understanding React Hooks: A Complete Guide",
    excerpt:
      "Master React Hooks with this comprehensive guide covering useState, useEffect, and custom hooks.",
    category: "Web Development",
    date: "Mar 3, 2023",
    readTime: "10 min",
    img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Michael Chen",
  },
  {
    id: 6,
    title: "Design Systems: Building for Consistency at Scale",
    excerpt:
      "Learn how to create and maintain design systems that ensure consistency across large organizations.",
    category: "Design",
    date: "Feb 28, 2023",
    readTime: "9 min",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Emma Rodriguez",
  },
];

// Categories data
const categoriesData = [
  { name: "Technology", count: 24 },
  { name: "Web Development", count: 18 },
  { name: "Design", count: 15 },
  { name: "AI & Machine Learning", count: 12 },
  { name: "Productivity", count: 8 },
  { name: "Career", count: 6 },
  { name: "Tools", count: 5 },
];

// Initialize blog grid
function renderBlogGrid() {
  const blogGrid = document.getElementById("blogGrid");
  blogGrid.innerHTML = "";

  blogPosts.forEach((post) => {
    const blogCard = document.createElement("article");
    blogCard.className = "blog-card";
    blogCard.innerHTML = `
                    <div class="blog-image">
                        <img src="${post.img}" alt="${post.title}">
                    </div>
                    <div class="blog-content">
                        <div class="blog-category">${post.category}</div>
                        <h3>${post.title}</h3>
                        <p class="blog-excerpt">${post.excerpt}</p>
                        <div class="blog-meta">
                            <span>${post.date}</span>
                            <span class="read-time"><i class="far fa-clock"></i> ${post.readTime} read</span>
                        </div>
                    </div>
                `;

    // Add click event to open article
    blogCard.addEventListener("click", () => {
      alert(
        `Opening article: ${post.title}\n\nAuthor: ${post.author}\nCategory: ${post.category}\n\nIn a real implementation, this would navigate to the full article page.`
      );
    });

    blogGrid.appendChild(blogCard);
  });
}

// Initialize categories list
function renderCategories() {
  const categoriesList = document.getElementById("categoriesList");
  categoriesList.innerHTML = "";

  categoriesData.forEach((category) => {
    const categoryItem = document.createElement("li");
    categoryItem.innerHTML = `
                    <a href="#" class="category-link">${category.name}</a>
                    <span class="category-count">${category.count}</span>
                `;

    // Add click event to filter by category
    categoryItem.addEventListener("click", (e) => {
      e.preventDefault();
      alert(
        `Filtering articles by category: ${category.name}\n\nIn a real implementation, this would show only articles in the ${category.name} category.`
      );
    });

    categoriesList.appendChild(categoryItem);
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

// Search form submission
document.querySelector(".search-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const searchQuery = this.querySelector(".search-input").value;

  if (searchQuery.trim() === "") {
    alert("Please enter search keywords");
    return;
  }

  alert(
    `Searching for: "${searchQuery}"\n\nIn a real implementation, this would search the blog database and display results.`
  );
  this.reset();
});

// Newsletter form submission
document
  .querySelector(".newsletter-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const email = this.querySelector(".newsletter-input").value;

    if (email) {
      alert(
        `Thank you for subscribing with ${email}! You'll receive our latest articles.`
      );
      this.reset();
    }
  });

// Pagination
document.querySelectorAll(".page-btn").forEach((button) => {
  button.addEventListener("click", function () {
    // Remove active class from all buttons
    document.querySelectorAll(".page-btn").forEach((btn) => {
      btn.classList.remove("active");
    });

    // Add active class to clicked button (if it's a number button)
    if (!this.querySelector("i")) {
      this.classList.add("active");
      alert(`Loading page ${this.textContent}...`);
    } else if (this.querySelector(".fa-chevron-left")) {
      // Previous page logic
      alert("Loading previous page...");
    } else if (this.querySelector(".fa-chevron-right")) {
      // Next page logic
      alert("Loading next page...");
    }
  });
});

// Featured article read more
document
  .querySelector(".featured-card .btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    alert(
      'Opening featured article: "The Future of AI in Web Development"\n\nIn a real implementation, this would navigate to the full article.'
    );
  });

// Popular post click events
document.querySelectorAll(".popular-post").forEach((post) => {
  post.addEventListener("click", function () {
    const title = this.querySelector("h4").textContent;
    alert(
      `Opening article: ${title}\n\nIn a real implementation, this would navigate to the full article.`
    );
  });
});

// Subscribe button in header
document
  .querySelector(".nav-btns .btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    alert("Opening subscription page...");
  });

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  renderBlogGrid();
  renderCategories();
});
