// script.js

// Function to show an alert when the button is clicked
function showAlert() {
    alert('Button was clicked!');
}

// Add an event listener to the button
document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('alert-button');
    button.addEventListener('click', showAlert);
});
