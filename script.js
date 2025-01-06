document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        link.classList.add('clicked');
        setTimeout(() => link.classList.remove('clicked'), 1000);
    });
});
