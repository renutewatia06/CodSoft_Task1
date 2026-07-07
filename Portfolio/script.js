// Smooth scroll for navigation links

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({

            behavior:'smooth'

        });

    });

});

// Simple animation on page load

window.addEventListener('load',()=>{

    document.body.style.opacity='1';

});

document.body.style.opacity='0';

document.body.style.transition='opacity 1s';