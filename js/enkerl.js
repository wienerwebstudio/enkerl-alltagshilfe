/*
 * Enkerl – wenig JavaScript, bewusst:
 *  1. Mobiles Menü auf/zu
 *  2. Anliegen im Kontaktformular vorbelegen (Links mit data-anliegen)
 *  3. Dankes-Hinweis nach Netlify-Redirect (?success=true)
 * Die Hero-Animation läuft rein in CSS.
 */
(function () {
    'use strict';

    // 1. Mobiles Menü
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.getElementById('nav');
    if (toggle && nav) {
        toggle.addEventListener('click', function () {
            var open = nav.getAttribute('data-open') === 'true';
            nav.setAttribute('data-open', open ? 'false' : 'true');
            toggle.setAttribute('aria-expanded', open ? 'false' : 'true');
            toggle.textContent = open ? 'Menü' : 'Schließen';
        });
        nav.addEventListener('click', function (e) {
            if (e.target.tagName === 'A' && nav.getAttribute('data-open') === 'true') {
                toggle.click();
            }
        });
    }

    // 2. Anliegen vorbelegen
    var select = document.getElementById('anliegen');
    if (select) {
        document.querySelectorAll('[data-anliegen]').forEach(function (link) {
            link.addEventListener('click', function () {
                select.value = link.getAttribute('data-anliegen');
            });
        });
    }

    // 3. Dankes-Hinweis
    if (window.location.search.indexOf('success=true') !== -1) {
        var box = document.getElementById('form-success');
        var form = document.getElementById('kontaktformular');
        if (box) {
            box.hidden = false;
            box.setAttribute('tabindex', '-1');
            box.focus();
        }
        if (form) { form.reset(); }
    }
})();
