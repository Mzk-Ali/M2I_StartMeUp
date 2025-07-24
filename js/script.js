// document.addEventListener("DOMContentLoaded", () => {
//     includeHTML("nav", "fragments/nav.html");
//     includeHTML("footer", "fragments/footer.html");
// });

// function includeHTML(elementId, file) {
//     fetch(file)
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById(elementId).innerHTML = data;
//             // if (typeof callback === "function") callback();
//         });
// }


// Observe when the section is in the view
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("main section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        } else {
            entry.target.classList.remove("visible");
        }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});

// Button to empty the filter
const btnEmptyFilters = document.getElementById('btn-filtre');
const select = document.getElementById('select-filter');

if(btnEmptyFilters) {
    btnEmptyFilters.addEventListener('click', () => {
        select.selectedIndex = 0;
    })
}

// Toggle Menu Burger
const burger = document.getElementById('nav-burger');
const navLinks = document.getElementById('nav-links');

if (burger) {
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.remove('rotate');
        void burger.offsetWidth;
        burger.classList.add('rotate');
    });
}

// Add class Active for the current Page in the Navbar
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-links a");
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});

// Validation du formulaire de contact
const form = document.getElementById('contactForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Cache tous les messages d'erreur
    document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');
    document.getElementById('success-message').style.display = 'none';

    let isValid = true;

    // Validation du nom
    const lastname = form.lastname.value.trim();
    if (lastname === '') {
        document.getElementById('error-lastname').style.display = 'block';
        isValid = false;
    }

    // Validation du prénom
    const firstname = form.firstname.value.trim();
    if (firstname === '') {
        document.getElementById('error-firstname').style.display = 'block';
        isValid = false;
    }

    // Validation du téléphone
    const phone = form.phone.value.trim();
    const phonePattern = /^(\+33|0)[1-9](\s?\d{2}){4}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById('error-phone').style.display = 'block';
        isValid = false;
    }

    // Validation de la description
    const description = form.description.value.trim();
    if (description === '') {
        document.getElementById('error-description').style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        // Affiche le message de succès
        document.getElementById('success-message').style.display = 'block';

        // Réinitialise le formulaire
        form.reset();
    }
});