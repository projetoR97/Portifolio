let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    //menu.classList.toggle('bx-x');
     menu.classList.toggle('i');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    //menu.classList.remove('bx-x');
    menu.classList.remove('i');
    navbar.classList.remove('active');
}
const typed = new Typed('.multiple-text', {
    strings: ['Desenvolvedora Frontend', 'Desenvolvedora Backend', 'Desenvolvedora Blockchain', 'Designer Web', 'YouTuber'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
});
const text = new Typed('.outro-text', {
    strings: ['Desenvolvedora Frontend', 'Desenvolvedora Backend', 'Desenvolvedora Blockchain', 'Designer Web', 'YouTuber'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
});

