// Contact form functionality with validation and submission

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    if (!contactForm) return;

    // Form validation rules
    const validationRules = {
        name: {
            required: true,
            minLength: 2,
            pattern: /^[a-zA-Z\s]+$/,
            message: 'Please enter a valid name (letters and spaces only)'
        },
        email: {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Please enter a valid email address'
        },
        phone: {
            required: false,
            pattern: /^[\+]?[1-9][\d]{0,15}$/,
            message: 'Please enter a valid phone number'
        },
        subject: {
            required: true,
            message: 'Please select a subject'
        },
        message: {
            required: true,
            minLength: 10,
            maxLength: 1000,
            message: 'Please enter a message between 10 and 1000 characters'
        }
    };

    // Real-time validation
    const formInputs = contactForm.querySelectorAll('input, textarea, select');
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });

        input.addEventListener('input', function() {
            // Clear error message when user starts typing
            clearFieldError(this);
        });
    });

    // Form submission
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Validate all fields
        let isValid = true;
        formInputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });

        if (!isValid) {
            showFormMessage('Please correct the errors above and try again.', 'error');
            return;
        }

        // Show loading state
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        try {
            // Simulate form submission
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());

            // Simulate API call
            await submitContactForm(data);

            // Success
            showFormMessage('Thank you for your message! We will get back to you within 24 hours.', 'success');
            contactForm.reset();

            // Reset validation states
            formInputs.forEach(input => {
                clearFieldError(input);
            });

        } catch (error) {
            showFormMessage('Sorry, there was an error sending your message. Please try again later.', 'error');
        } finally {
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });

    // Field validation function
    function validateField(field) {
        const fieldName = field.name;
        const value = field.value.trim();
        const rules = validationRules[fieldName];

        if (!rules) return true; // No validation rules for this field

        // Clear previous error
        clearFieldError(field);

        // Required check
        if (rules.required && !value) {
            showFieldError(field, `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`);
            return false;
        }

        // Pattern check
        if (rules.pattern && value && !rules.pattern.test(value)) {
            showFieldError(field, rules.message);
            return false;
        }

        // Length checks
        if (rules.minLength && value.length < rules.minLength) {
            showFieldError(field, `Minimum ${rules.minLength} characters required`);
            return false;
        }

        if (rules.maxLength && value.length > rules.maxLength) {
            showFieldError(field, `Maximum ${rules.maxLength} characters allowed`);
            return false;
        }

        return true;
    }

    // Show field error
    function showFieldError(field, message) {
        field.style.borderColor = '#e53e3e';

        let errorElement = field.parentNode.querySelector('.field-error');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'field-error';
            errorElement.style.cssText = `
                color: #e53e3e;
                font-size: 0.875rem;
                margin-top: 0.25rem;
                font-weight: 500;
            `;
            field.parentNode.appendChild(errorElement);
        }
        errorElement.textContent = message;
    }

    // Clear field error
    function clearFieldError(field) {
        field.style.borderColor = '#e2e8f0';
        const errorElement = field.parentNode.querySelector('.field-error');
        if (errorElement) {
            errorElement.remove();
        }
    }

    // Show form message
    function showFormMessage(message, type) {
        let messageElement = contactForm.querySelector('.form-message');
        if (!messageElement) {
            messageElement = document.createElement('div');
            messageElement.className = 'form-message';
            messageElement.style.cssText = `
                padding: 1rem;
                border-radius: 4px;
                margin-bottom: 1rem;
                font-weight: 500;
                text-align: center;
            `;
            contactForm.insertBefore(messageElement, contactForm.firstChild);
        }

        messageElement.textContent = message;
        messageElement.style.backgroundColor = type === 'success' ? '#c6f6d5' : '#fed7d7';
        messageElement.style.color = type === 'success' ? '#22543d' : '#742a2a';
        messageElement.style.border = `1px solid ${type === 'success' ? '#9ae6b4' : '#feb2b2'}`;

        // Auto-hide success messages
        if (type === 'success') {
            setTimeout(() => {
                if (messageElement.parentNode) {
                    messageElement.remove();
                }
            }, 5000);
        }
    }

    // Simulate contact form submission
    async function submitContactForm(data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate random success/failure for demo
                if (Math.random() > 0.1) { // 90% success rate
                    console.log('Contact form submitted:', data);
                    resolve({ success: true });
                } else {
                    reject(new Error('Network error'));
                }
            }, 2000); // Simulate 2 second delay
        });
    }

    // Phone number formatting
    const phoneInput = contactForm.querySelector('input[name="phone"]');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            // Remove all non-digit characters
            let value = e.target.value.replace(/\D/g, '');

            // Format as Indian phone number
            if (value.length > 10) {
                value = value.slice(0, 10);
            }

            if (value.length > 5) {
                value = value.slice(0, 5) + ' ' + value.slice(5);
            }
            if (value.length > 2) {
                value = value.slice(0, 2) + ' ' + value.slice(2);
            }

            e.target.value = value;
        });
    }

    // Character counter for message field
    const messageTextarea = contactForm.querySelector('textarea[name="message"]');
    if (messageTextarea) {
        const maxLength = validationRules.message.maxLength;
        const counterElement = document.createElement('div');
        counterElement.style.cssText = `
            font-size: 0.75rem;
            color: #718096;
            text-align: right;
            margin-top: 0.25rem;
        `;
        messageTextarea.parentNode.appendChild(counterElement);

        function updateCounter() {
            const remaining = maxLength - messageTextarea.value.length;
            counterElement.textContent = `${messageTextarea.value.length}/${maxLength} characters`;
            counterElement.style.color = remaining < 50 ? '#e53e3e' : '#718096';
        }

        messageTextarea.addEventListener('input', updateCounter);
        updateCounter(); // Initial count
    }

    // Accessibility improvements
    formInputs.forEach(input => {
        // Add ARIA labels if not present
        if (!input.getAttribute('aria-label') && !input.getAttribute('aria-labelledby')) {
            const label = contactForm.querySelector(`label[for="${input.id}"]`);
            if (label) {
                input.setAttribute('aria-describedby', `${input.id}-description`);
                label.id = `${input.id}-label`;
                input.setAttribute('aria-labelledby', label.id);
            }
        }

        // Add autocomplete attributes
        if (input.name === 'name') input.setAttribute('autocomplete', 'name');
        if (input.name === 'email') input.setAttribute('autocomplete', 'email');
        if (input.name === 'phone') input.setAttribute('autocomplete', 'tel');
    });

    // Keyboard navigation improvements
    contactForm.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
            e.preventDefault();
            const formElements = Array.from(contactForm.elements);
            const currentIndex = formElements.indexOf(e.target);
            const nextElement = formElements[currentIndex + 1];

            if (nextElement) {
                nextElement.focus();
            } else {
                contactForm.dispatchEvent(new Event('submit'));
            }
        }
    });

    // Form data persistence (save to localStorage)
    formInputs.forEach(input => {
        // Load saved data
        const savedValue = localStorage.getItem(`contact_${input.name}`);
        if (savedValue && input.type !== 'password') {
            input.value = savedValue;
        }

        // Save data on change
        input.addEventListener('input', function() {
            localStorage.setItem(`contact_${this.name}`, this.value);
        });
    });

    // Clear saved data on successful submission
    // This is handled in the submit event listener above

    // Add loading states for better UX
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.transition = 'border-color 0.3s, box-shadow 0.3s';
        });
    });

    // Emergency contact quick access
    const emergencyBtn = document.querySelector('.emergency-number');
    if (emergencyBtn) {
        emergencyBtn.addEventListener('click', function() {
            const phoneNumber = this.textContent.trim();
            if (confirm(`Call emergency number ${phoneNumber}?`)) {
                window.location.href = `tel:${phoneNumber}`;
            }
        });
    }

    // Social media link handling
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add tracking or confirmation if needed
            console.log('Social link clicked:', this.href);
        });
    });
});
