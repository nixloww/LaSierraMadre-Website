document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const navToggle = document.getElementById('navToggle');
    const mainNav = document.getElementById('mainNav');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
            navToggle.setAttribute('aria-expanded', !isExpanded);
            mainNav.classList.toggle('active');
        });

        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.setAttribute('aria-expanded', 'false');
                mainNav.classList.remove('active');
            });
        });
    }

    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            formSuccess.textContent = '';
            let isValid = true;
  
            document.querySelectorAll('.error').forEach(el => el.textContent = '');

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            if (!nameInput.value.trim()) {
                document.getElementById('nameError').textContent = 'Full Name is required.';
                isValid = false;
            }

            if (!emailInput.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
                document.getElementById('emailError').textContent = 'A valid Email is required.';
                isValid = false;
            }

            if (!messageInput.value.trim()) {
                document.getElementById('messageError').textContent = 'Message is required.';
                isValid = false;
            }

            if (isValid) {
                console.log('Form Submitted:', {
                    name: nameInput.value,
                    email: emailInput.value,
                    message: messageInput.value
                });

                formSuccess.textContent = 'Message sent successfully! We will be in touch soon.';
                contactForm.reset();
            }
        });
    }
});