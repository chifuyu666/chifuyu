// ===== PREMIUM CONTACT PAGE FUNCTIONALITY (Simplified for direct Formspree submission) =====

document.addEventListener("DOMContentLoaded", () => {
    initializeContactPage()
})

function initializeContactPage() {
    // Initialize animations
    initializeContactAnimations()

    // Initialize mobile menu (now called from global script.js)
    // Ensure window.initializeMobileMenu is available from script.js
    if (typeof window.initializeMobileMenu === "function") {
        window.initializeMobileMenu()
    }

    // Update navbar contact button
    updateContactButton()

    // Add client-side validation for the form
    setupFormValidation()
}

// Initialize contact page animations
function initializeContactAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-in")
            }
        })
    }, observerOptions)

    const animateElements = document.querySelectorAll(".animate-on-scroll")
    animateElements.forEach((el) => observer.observe(el))
}

// Update contact button in navbar
function updateContactButton() {
    const contactBtn = document.getElementById("contactBtn")
    if (contactBtn) {
        // Check if we're on the contact page
        if (window.location.pathname.includes("contact.html")) {
            // Hide the desktop contact button on contact page
            contactBtn.style.display = "none"
        } else {
            // Ensure the desktop button is visible if not on contact page
            contactBtn.style.display = ""
            contactBtn.classList.add("active")
            // Remove existing event listeners by cloning the button to prevent duplicates
            const newContactBtn = contactBtn.cloneNode(true)
            contactBtn.parentNode.replaceChild(newContactBtn, contactBtn)

            // Add new event listener for navigation
            newContactBtn.addEventListener("click", (e) => {
                e.preventDefault()
                // Assuming createUltraSmoothRippleEffect is defined in script.js
                const createUltraSmoothRippleEffect = window.createUltraSmoothRippleEffect // Declare the variable here
                if (typeof createUltraSmoothRippleEffect === "function") {
                    createUltraSmoothRippleEffect(newContactBtn, e)
                }
                window.location.href = "contact.html"
            })
        }
    }
}

// ===== CLIENT-SIDE FORM VALIDATION =====
function setupFormValidation() {
    const form = document.querySelector(".contact-form")
    const fullNameInput = document.getElementById("fullName")
    const emailInput = document.getElementById("email")
    const subjectInput = document.getElementById("subject")
    const phoneNumberInput = document.getElementById("phoneNumber")
    const countryCodeSelect = document.getElementById("countryCode")

    // Get error message spans
    const fullNameError = document.getElementById("fullNameError")
    const emailError = document.getElementById("emailError")
    const subjectError = document.getElementById("subjectError")
    const phoneNumberError = document.getElementById("phoneNumberError")

    // Declare emailRegex variable here
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (
        !form ||
        !fullNameInput ||
        !emailInput ||
        !subjectInput ||
        !phoneNumberInput ||
        !countryCodeSelect ||
        !fullNameError ||
        !emailError ||
        !subjectError ||
        !phoneNumberError
    ) {
        console.warn("One or more form elements for validation not found.")
        return
    }

    // Helper function to validate a single field
    function validateField(inputElement, errorElement, regex, errorMessage) {
        if (!inputElement.value.trim()) {
            inputElement.classList.add("error")
            errorElement.textContent = `${inputElement.previousElementSibling.textContent} is required.`
            return false
        } else if (regex && !regex.test(inputElement.value.trim())) {
            inputElement.classList.add("error")
            errorElement.textContent = errorMessage
            return false
        } else {
            inputElement.classList.remove("error")
            errorElement.textContent = ""
            return true
        }
    }

    form.addEventListener("submit", (event) => {
        let isValid = true

        // Validate Full Name
        isValid = validateField(fullNameInput, fullNameError, null, "") && isValid

        // Validate Email
        isValid = validateField(emailInput, emailError, emailRegex, "Invalid email format.") && isValid

        // Validate Subject
        isValid = validateField(subjectInput, subjectError, null, "") && isValid

        // Validate Phone Number
        const fullPhoneNumber = countryCodeSelect.value + phoneNumberInput.value
        const phoneRegex = /^\+?[0-9\s\-()]*$/ // Allows +, digits, spaces, hyphens, parentheses

        if (!phoneNumberInput.value.trim()) {
            phoneNumberInput.classList.add("error")
            phoneNumberError.textContent = "Phone number is required."
            isValid = false
        } else if (!phoneRegex.test(fullPhoneNumber)) {
            phoneNumberInput.classList.add("error")
            phoneNumberError.textContent = "Invalid phone number format."
            isValid = false
        } else {
            phoneNumberInput.classList.remove("error")
            phoneNumberError.textContent = ""
        }

        // Prevent form submission if any validation fails
        if (!isValid) {
            event.preventDefault()
            // Optionally show a general notification if needed
            if (typeof window.showUltraSmoothNotification === "function") {
                window.showUltraSmoothNotification("Please correct the errors in the form.")
            }
        }
    })

    // Real-time validation feedback on input change
    fullNameInput.addEventListener("input", () => validateField(fullNameInput, fullNameError, null, ""))
    emailInput.addEventListener("input", () => validateField(emailInput, emailError, emailRegex, "Invalid email format."))
    subjectInput.addEventListener("input", () => validateField(subjectInput, subjectError, null, ""))

    phoneNumberInput.addEventListener("input", () => {
        if (phoneNumberInput.value.trim()) {
            phoneNumberInput.classList.remove("error")
            phoneNumberError.textContent = ""
        }
    })
    countryCodeSelect.addEventListener("change", () => {
        // Re-validate phone number if country code changes and phone number is already entered
        if (phoneNumberInput.value.trim()) {
            phoneNumberInput.dispatchEvent(new Event("input")) // Trigger input event to re-validate
        }
    })
}
