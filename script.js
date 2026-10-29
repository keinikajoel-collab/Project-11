document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  // Inventory filter functionality
  const filterButtons = document.querySelectorAll(".filter-btn");
  const vehicleCards = document.querySelectorAll(".vehicle-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Manage active state
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const category = button.getAttribute("data-category");

      // Filter vehicle items
      vehicleCards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");
        if (category === "all" || cardCategory === category) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});