const navbtn = document.querySelector('.nav-btn');
const navlinks = document.querySelectorAll('.mynav_link');

navbtn.addEventListener('click',() =>{
    document.body.classList.toggle('open-nav');
});

navlinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('open-nav');
    });
});