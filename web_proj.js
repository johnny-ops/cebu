// Wait until the DOM content is loaded to add the hamburger menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    
    // Add click event listener to the hamburger
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active'); // Show/hide navbar links
        hamburger.classList.toggle('open'); // Animate hamburger
    });
});

// Function to handle the tab switching
function opentab(event, tabname) {
    var tablinks = document.getElementsByClassName('tab-links');
    var tabcontents = document.getElementsByClassName('tab-contents');

    // Get the clicked tab and corresponding content
    var clickedTab = event.currentTarget;
    var targetContent = document.getElementById(tabname);

    // Check if the clicked tab is already active
    if (targetContent.classList.contains('active-tab')) {
        // Apply outro animation
        targetContent.classList.add('outro'); // Add outro effect

        // Wait for the outro animation to complete (100ms) before removing the active class
        setTimeout(function () {
            targetContent.classList.remove('active-tab'); // Hide the content
            targetContent.classList.remove('outro'); // Remove outro effect
        }, 100); // This timeout matches the duration of the outro animation
    } else {
        // Remove active classes from all tabs and contents
        for (var i = 0; i < tablinks.length; i++) {
            tablinks[i].classList.remove('active-link');
        }
        for (var i = 0; i < tabcontents.length; i++) {
            tabcontents[i].classList.remove('active-tab');
            tabcontents[i].classList.remove('outro');
        }

        // Add active class to clicked tab and show content with intro animation
        clickedTab.classList.add('active-link');
        targetContent.classList.add('active-tab');
    }
}

// Select all navigation links
const navLinks = document.querySelectorAll("nav ul li a");

// Add a click event listener to each link
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        // Remove 'active' class from all links
        navLinks.forEach(nav => nav.classList.remove("active"));
        
        // Add 'active' class to the clicked link
        link.classList.add("active");
    });
});
