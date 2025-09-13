// Sidebar toggle
const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});

// Support Dropdown
const supportBtn = document.querySelector(".support-btn");
const dropdownContent = document.querySelector(".dropdown-content");

supportBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dropdownContent.classList.toggle("show");
});

// Close dropdown if clicked outside
window.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown")) {
    dropdownContent.classList.remove("show");
  }
});

// Available Books Card click - redirect to books.html
const totalBooksCard = document.getElementById("total-books-card");

totalBooksCard.addEventListener("click", () => {
  window.location.href = "books.html"; // redirect to the new page
});
