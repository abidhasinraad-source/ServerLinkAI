/**
 * AI Automation Agency - Core Website Script
 * Tech Stack: Vanilla JavaScript (ES6+)
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================================================
    // 1. STICKY NAVIGATION BAR
    // ==========================================================================
    const header = document.querySelector('.site-header');
    
    const handleScroll = () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    // Listen for scroll events to inject active styling class
    window.addEventListener('scroll', handleScroll);
    // Run once on load to catch persistent scroll states
    handleScroll();

    // ==========================================================================
    // 2. MOBILE OVERLAY MENU
    // ==========================================================================
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileNavToggle && mainNav) {
        mobileNavToggle.addEventListener('click', () => {
            const isOpened = mobileNavToggle.getAttribute('aria-expanded') === 'true';
            
            // Toggle accessible attributes and class states
            mobileNavToggle.setAttribute('aria-expanded', !isOpened);
            mainNav.classList.toggle('open');
            
            // Subtle transition lock for body scrolling when menu is active
            document.body.style.overflow = !isOpened ? 'hidden' : '';
        });

        // Close mobile nav when clicking any nav link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNavToggle.setAttribute('aria-expanded', 'false');
                mainNav.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }

    // ==========================================================================
    // 3. INLINE FORM SUBMISSION INTERACTION
    // ==========================================================================
    const inlineForm = document.querySelector('.inline-demo-form');

    if (inlineForm) {
        inlineForm.addEventListener('submit', (e) => {
            // Allow the form element's standard action attribute to execute the target redirect
            // We capture the event briefly to ensure fields are populated correctly before passing off
            const company = document.getElementById('company-name')?.value;
            const industry = document.getElementById('industry-select')?.value;
            const email = document.getElementById('email')?.value;

            if (!company || !industry || !email) {
                e.preventDefault();
                alert('Please complete all fields before booking your demo.');
            }
        });
    }
});
