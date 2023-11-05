document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button');
    const contentContainer = document.getElementById('content-container');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove the 'selected' class from all buttons
            buttons.forEach(otherButton => {
                otherButton.classList.remove('selected');
            });

            // Add the 'selected' class to the clicked button
            button.classList.add('selected');

            // Load the content associated with the clicked button
            const contentFile = button.getAttribute('data-content');
            fetch(contentFile)
                .then(response => response.text())
                .then(content => {
                    contentContainer.classList.add('fade-out'); // Apply fade-out class
                    setTimeout(() => {
                        contentContainer.innerHTML = content;
                        contentContainer.classList.remove('fade-out'); // Remove fade-out class
                    }, 300); // Adjust the duration if needed
                });
        });
    });

    // Select the 'About' button by default
    buttons[0].click();
});