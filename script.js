const contactForm = document.getElementById('contact-form');
const submitButton = contactForm.querySelector('button[type="submit"]');

contactForm.addEventListener('submit', async function(event) {
  event.preventDefault();
  
  // Show loading state
  submitButton.disabled = true;
  submitButton.innerHTML = 'Sending...';

  try {
    // Basic validation
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;

    if (!email || !message) {
      throw new Error('Please fill in all fields');
    }

    // Here you would typically send the form data to a server
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call

    // Success feedback
    const notification = document.createElement('div');
    notification.className = 'success-message';
    notification.textContent = 'Thank you for reaching out! I will get back to you soon.';
    contactForm.appendChild(notification);
    
    // Reset form
    contactForm.reset();
    
    // Remove notification after 5 seconds
    setTimeout(() => notification.remove(), 5000);

  } catch (error) {
    // Error feedback
    alert(error.message || 'Something went wrong. Please try again.');
  } finally {
    // Reset button state
    submitButton.disabled = false;
    submitButton.innerHTML = 'Send Message';
  }
});