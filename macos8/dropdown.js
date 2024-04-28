// Toggle dropdown visibility when clicking on dropdown buttons
function toggleDropdown(id) {
    var dropdown = document.getElementById(id);
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

// Get all dropdown content elements
const dropdownContents = document.querySelectorAll('.dropdown-content');

// Loop through each dropdown content and add click event listener to its items
dropdownContents.forEach(content => {
    content.addEventListener('click', (event) => {
        content.style.display = 'none'; // Close the dropdown after an item is clicked
        event.stopPropagation(); // Prevent the event from bubbling up to the parent (toggleDropdown)
    });
});

// Close dropdowns when the mouse moves away from them
document.addEventListener('mouseover', (event) => {
    dropdownContents.forEach(content => {
        if (!content.contains(event.target)) {
            content.style.display = 'none'; // Close the dropdown if the mouse is not over it
        }
    });
});
