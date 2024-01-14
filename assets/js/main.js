document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#003459'; // darker shade when scrolled
        } else {
            header.style.backgroundColor = '#005792'; // original color
        }
    });
});
