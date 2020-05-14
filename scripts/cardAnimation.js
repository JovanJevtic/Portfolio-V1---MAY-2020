const card = document.querySelector('#card-1');
const card2 = document.querySelector('#card-2');
const card3 = document.querySelector('#card-3');

const cardIcon1 = document.querySelector('#card-icon-1');
const cardIcon2 = document.querySelector('#card-icon-2');
const cardIcon3 = document.querySelector('#card-icon-3');

card.addEventListener('mouseover', () => {

    card.classList.add('card-upper');
    card2.classList.remove('card-upper');
    card3.classList.remove('card-upper');

    card.style.transition = '0.4s';

    cardIcon1.classList.remove('card-icon-no');
    cardIcon2.classList.remove('card-icon');
    cardIcon2.classList.add('card-icon-no');
    cardIcon3.classList.remove('card-icon');
    cardIcon3.classList.add('card-icon-no');
    cardIcon1.classList.add('card-icon');
});

card2.addEventListener('mouseover', () => {

    card2.classList.add('card-upper');
    card.classList.remove('card-upper');
    card3.classList.remove('card-upper');

    card2.style.transition = '0.4s';

    cardIcon1.classList.remove('card-icon');
    cardIcon1.classList.add('card-icon-no');
    cardIcon2.classList.remove('card-icon-no');
    cardIcon3.classList.remove('card-icon');
    cardIcon3.classList.add('card-icon-no');
    cardIcon2.classList.add('card-icon');
});

card3.addEventListener('mouseover', () => {

    card3.classList.add('card-upper');
    card2.classList.remove('card-upper');
    card.classList.remove('card-upper');

    card3.style.transition = '0.4s';


    cardIcon1.classList.remove('card-icon');
    cardIcon1.classList.add('card-icon-no');
    cardIcon2.classList.remove('card-icon');
    cardIcon2.classList.add('card-icon-no');
    cardIcon3.classList.remove('card-icon-no');
    cardIcon3.classList.add('card-icon');

});


const hamburger = document.getElementById('hamburger');
const list = document.getElementById('header-list');
const links = document.querySelectorAll('.link');
const lines = document.querySelectorAll('.line');
const page = document.getElementsByClassName('page-container');

console.log(page);

hamburger.addEventListener('click', () => {
    list.classList.toggle('open');
    links.forEach(link => {
        link.classList.toggle('fade');
    });

    lines.forEach(line => {
        line.classList.toggle('color');
    });

    page.classList.toggle('overflowed');

});