document.addEventListener('DOMContentLoaded', () => {
    let slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    document.getElementById('next').addEventListener('click', () => {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active');
    });

    document.getElementById('prev').addEventListener('click', () => {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        slides[currentIndex].classList.add('active');
    });

    document.getElementById('contactForm').addEventListener('submit', (event) => {
        event.preventDefault();
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        
        if (validateEmail(email) && validatePassword(password)) {
            alert('Formulário enviado com sucesso!');
        } else {
            alert('Por favor, preencha os campos corretamente.');
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePassword(password) {
        return password.length >= 6;
    }
});
