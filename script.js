// Function to reveal the hidden message
document.getElementById('revealMessageBtn').addEventListener('click', function() {
    document.getElementById('extraMessage').classList.remove('hidden');
});

// Form submission logic (optional)
document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    alert(`Message from ${name}: \n\n${message}`);
    // Optionally, you can send this data to a server or store it in a database
});