/*!
 * Enkerl - reveal-on-scroll + contact form success message
 * Implements the single documented animation (see css/enkerl.css):
 * each .reveal element fades in + glides up 16px ONCE on first viewport entry.
 */
window.addEventListener('DOMContentLoaded', function () {
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var revealEls = document.querySelectorAll('.reveal');

    if (reduceMotion || !('IntersectionObserver' in window)) {
        // Show everything immediately, no animation.
        revealEls.forEach(function (el) { el.classList.add('is-visible'); });
    } else {
        var observer = new IntersectionObserver(function (entries, obs) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    obs.unobserve(entry.target); // only once
                }
            });
        }, { threshold: 0.15 });
        revealEls.forEach(function (el) { observer.observe(el); });
    }

    // Friendly success message when redirected back from Netlify (?success=true)
    if (window.location.search.indexOf('success=true') !== -1) {
        var success = document.getElementById('submitSuccessMessage');
        var form = document.getElementById('contactForm');
        if (success) {
            success.classList.remove('d-none');
            success.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        if (form) {
            form.reset();
        }
    }
});
