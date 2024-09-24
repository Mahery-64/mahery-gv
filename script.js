const links = document.querySelectorAll('nav a');

for (const link of links) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const sectionId = this.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
}
