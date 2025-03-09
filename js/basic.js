function scrollToSectionWithOffset(sectionId, offset) {
    const section = document.getElementById(sectionId);
    const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = sectionPosition - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}


document.getElementById('hamburger').addEventListener('click', function(event) {
    event.preventDefault();
    const menu = document.getElementById('mobileMenu');
    const hamburger = document.getElementById('hamburger');
    
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    hamburger.classList.toggle('hamburger_active');
    hamburger.classList.toggle('open');
    
    event.stopPropagation();
});

const closeMenu = function() {
    const menu = document.getElementById('mobileMenu');
    const hamburger = document.getElementById('hamburger');
    
    menu.style.display = 'none'; 
    hamburger.classList.remove('open');
    hamburger.classList.remove('hamburger_active');  
};

const scrollToSection = function(sectionId) {
    scrollToSectionWithOffset(sectionId, window.innerHeight * 0.1);
    closeMenu();  
};

document.getElementById('scrollToExperience').addEventListener('click', function() {
    scrollToSection('experience');
});

document.getElementById('scrollToAdvantage').addEventListener('click', function() {
    scrollToSection('advantage');
});

document.getElementById('scrollToContacts').addEventListener('click', function() {
    scrollToSection('contacts');
});

document.getElementById('scrollToServices').addEventListener('click', function() {
    scrollToSection('services');
});

document.getElementById('mobileScrollToExperience').addEventListener('click', function() {
    scrollToSection('experience');
});

document.getElementById('mobileScrollToAdvantage').addEventListener('click', function() {
    scrollToSection('advantage');
});

document.getElementById('mobileScrollToContacts').addEventListener('click', function() {
    scrollToSection('contacts');
});

document.getElementById('mobileScrollToServices').addEventListener('click', function() {
    scrollToSection('services');
});

document.addEventListener('click', function(event) {
    const menu = document.getElementById('mobileMenu');
    const hamburger = document.getElementById('hamburger');

    if (menu.style.display === 'flex' && !menu.contains(event.target) && !hamburger.contains(event.target)) {
        closeMenu(); 
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contactForm');
    form.reset();
});

document.getElementById('submitButton').addEventListener('click', function(e) {
    e.preventDefault();
    
    var form = document.getElementById('contactForm');
    var responseMessage = document.getElementById('responseMessage');
    
    responseMessage.style.display = 'none';
    responseMessage.innerHTML = '';  

    var errors = [];

    if (!form.name.value.trim()) {
        errors.push('"Имя" не заполнено.');
    }

    if (!form.email.value.trim() || !form.email.checkValidity()) {
        errors.push('"Эл. Почта" заполнено неверно.');
    }

    if (!form.phone.value.trim()) {
        errors.push('"Телефон" не заполнено.');
    }

    if (!form.message.value.trim()) {
        errors.push('"Сообщение" не заполнено.');
    }

    if (errors.length > 0) {
        responseMessage.style.display = 'block';
        responseMessage.innerHTML = errors.join('<br>');  
    } else {
        var formData = new FormData(form);
        var data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });


        fetch('URL', {  
                                method: 'POST',
                                contentType: 'application/json',
                                body: JSON.stringify(data)
                            
        })
        responseMessage.style.display = 'none';
        form.reset();
        form.name.style.display = 'none';
        form.email.style.display = 'none';
        form.phone.style.display = 'none';
        form.message.style.display = 'none';
        document.getElementById('submitButton').innerText = 'Отправлено';
        document.getElementById('submitButton').classList.add('buttonok');
    }
});

const currentYear = new Date().getFullYear();
    const startYear = 2005;
    const difference = currentYear - startYear;
    document.querySelectorAll(".year").forEach(el => el.textContent = currentYear);
    document.getElementById("difference").textContent = difference;