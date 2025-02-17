document.addEventListener("DOMContentLoaded", function () {
    // Contact Form Submission
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", async function (event) {
            event.preventDefault();
            
            const nameField = document.getElementById("name");
            const emailField = document.getElementById("email");
            const messageField = document.getElementById("message");
            
            const formData = {
                name: nameField.value,
                email: emailField.value,
                message: messageField.value
            };
            
            try {
                const response = await fetch("http://localhost:5000/send-email", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData)
                });
                
                const result = await response.json();
                alert(result.message);
                
                // Reset form fields after successful submission
                nameField.value = "";
                emailField.value = "";
                messageField.value = "";
            } catch (error) {
                alert("Failed to send message. Please try again.");
            }
        });
    }
});