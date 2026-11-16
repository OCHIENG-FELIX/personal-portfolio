
// MOBILE NAVIGATION FUNCTIONALITY

const navToggle = document.getElementById("nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isExpanded = navLinks.classList.contains("active");

    navToggle.setAttribute("aria-expanded", isExpanded);

});

// Close menu after clicking a navigation link

const navigationItems = document.querySelectorAll(".nav-links a");

navigationItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        navToggle.setAttribute("aria-expanded", "false");

    });

});
