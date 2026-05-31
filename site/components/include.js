document.addEventListener("DOMContentLoaded", function() {
  // Load header component
  const headerElement = document.querySelector("#header-placeholder");
  if (headerElement) {
    // Use a relative path and make sure it's correctly pointing to the header.html file
    fetch('./components/header.html')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
      })
      .then(data => {
        // Insert the header HTML
        headerElement.innerHTML = data;
        
        // Set active class for current page
        const currentPage = window.location.pathname.split("/").pop();
        let navId = "";
        
        if (currentPage === "index.html" || currentPage === "" || currentPage === "/") {
          navId = "nav-home";
        } else if (currentPage === "about.html") {
          navId = "nav-about";
        } else if (currentPage === "products.html") {
          navId = "nav-products";
        } else if (currentPage === "contact.html") {
          navId = "nav-contact";
        }
        
        if (navId) {
          const activeNavItem = document.getElementById(navId);
          if (activeNavItem) {
            activeNavItem.classList.add("active");
          }
        }
        
        // Check if navigation loaded correctly
        console.log("Header loaded successfully. Nav items:", document.querySelectorAll('.nav li').length);
      })
      .catch(error => {
        console.error('Error loading header:', error);
        // Fallback: If fetch fails, try direct HTML injection for the navigation
        headerElement.innerHTML = `
          <nav>
            <div class="nav-container">
              <a href="index.html" class="nav-logo">
                <img src="m.JPG" alt="MERA Logo">
                <span class="nav-logo-text">ERA</span>
              </a>
              <span class="nav-tagline">Industrial, Chemical & Construction Equipment Trade</span>
              <ul class="nav">
                <li><a href="index.html" id="nav-home">Home</a></li>
                <li><a href="about.html" id="nav-about">About Us</a></li>
                <li><a href="products.html" id="nav-products">Products</a></li>
                <li><a href="contact.html" id="nav-contact">Contact</a></li>
              </ul>
            </div>
          </nav>
        `;
      });
  }
  
  // Load footer component
  const footerElement = document.querySelector("#footer-placeholder");
  if (footerElement) {
    fetch('./components/footer.html')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
      })
      .then(data => {
        footerElement.innerHTML = data;
      })
      .catch(error => {
        console.error('Error loading footer:', error);
        // Fallback footer content if loading fails
        footerElement.innerHTML = `
          <footer>
            <p>© 2025 MERA Industrial, Chemical & Construction Equipment Trade</p>
            <p>Your trusted partner for industrial materials and equipment</p>
          </footer>
        `;
      });
  }
});