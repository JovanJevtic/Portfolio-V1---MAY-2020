function textAnimation () {
    const text = document.querySelector('.animationText');
    const strText = text.textContent;
    const splitText = strText.split('');    
    text.textContent = "";

    for(let i = 0; i < splitText.length; i++) {
        text.innerHTML += "<span style='font-family: Lobster, cursive;'>" + splitText[i] + "</span>"
        //font-family: 'Lobster', cursive;

    }

    let char = 0;
    let char2 = 0;
    let timer = setInterval(onTick, 50);
    let timer2 = setInterval(onTick2, 65);

    function onTick() {
        const span = text.querySelectorAll('span')[char];
        span.classList.add('fade');

        char++;

        if(char === splitText.length) {
            complete();
            return;
        }
    }

    function onTick2() {
        const span = text.querySelectorAll('span')[char2];
        span.classList.add('fades');

        char2++;

        if(char2 === splitText.length) {
            complete2();
            return;
        }
    }

    function complete() {
        clearInterval(timer);
        timer = null;
    }

    function complete2() {
        clearInterval(timer2);
        timer2 = null;
    }

    const landingImg = document.querySelector('#landing-img');
}   
  
setTimeout(textAnimation, 0);


function scrollAppearTxt1() {
    var txt1 = document.querySelector('.animated-txt')
    txt1.classList.add('animated-txt-fade');
}

setTimeout(scrollAppearTxt1, 8000);

function scrollAppearBtn() {

    var btn1 = document.querySelector('.animated-btn1')
    btn1.classList.add('animated-btn1-fade');

    var btn2 = document.querySelector('.animated-btn2')
    btn2.classList.add('animated-btn2-fade');

    var scroll = document.querySelector('#scroll-arrow');
    scroll.style.opacity = 1;

}

setTimeout(scrollAppearBtn, 9000);

function scrollAppearLogo() {

    var logo = document.querySelector('.animated-logo')
    logo.classList.add('animated-logo-fade');
}

setTimeout(scrollAppearLogo, 7000);

function scrollEnable() {
    var page = document.querySelector('html');
}

setTimeout(scrollEnable, 9500);

function scrollAppear() {
    var screenPosition = window.innerHeight;

    var about = document.querySelector('.animated-about');
    var aboutPosition = about.getBoundingClientRect().top;

    var about2 = document.querySelector('.animated-about2');
    var about2Position = about2.getBoundingClientRect().top;

    var txt3 = document.querySelector('.animated-txt-work');
    var txt3Position = txt3.getBoundingClientRect().top;

    var txt4 = document.querySelector('.animated-skills-txt');
    var txt4Position = txt4.getBoundingClientRect().top;

    if (aboutPosition < screenPosition) {
        about.classList.add('animated-about-fade');
    }

    if (about2Position < screenPosition) {
        about2.classList.add('animated-about2-fade');
    }
 
    if (txt3Position < screenPosition) {
        txt3.classList.add('animated-txt-work-fade');
    }

    if (txt4Position < screenPosition) {
        txt4.classList.add('animated-skills-txt-fade');
    }

    var skillsCard1 = document.querySelector('.animated-skills-card-1');
    var skillsCard1Position = skillsCard1.getBoundingClientRect().top;

    var skillsCard2 = document.querySelector('.animated-skills-card-2');
    var skillsCard2Position = skillsCard1.getBoundingClientRect().top;

    var skillsCard3 = document.querySelector('.animated-skills-card-3');
    var skillsCard3Position = skillsCard1.getBoundingClientRect().top;

    var skillsCard4 = document.querySelector('.animated-skills-card-4');
    var skillsCard4Position = skillsCard1.getBoundingClientRect().top;

    var skillsCard5 = document.querySelector('.animated-skills-card-5');
    var skillsCard5Position = skillsCard1.getBoundingClientRect().top;

    var skillsCard6 = document.querySelector('.animated-skills-card-6');
    var skillsCard6Position = skillsCard1.getBoundingClientRect().top;


    if (skillsCard1Position < screenPosition) {
        skillsCard1.classList.add('animated-skills-card-1-fade')
    }

    if (skillsCard2Position < screenPosition) {
        skillsCard2.classList.add('animated-skills-card-2-fade');
    }

    if (skillsCard3Position < screenPosition) {
        skillsCard3.classList.add('animated-skills-card-3-fade');
    }

    if (skillsCard4Position < screenPosition) {
        skillsCard4.classList.add('animated-skills-card-4-fade');
    }

    if (skillsCard5Position < screenPosition) {
        skillsCard5.classList.add('animated-skills-card-5-fade');
    }

    if (skillsCard6Position < screenPosition) {
        skillsCard6.classList.add('animated-skills-card-6-fade');
    }

    var workCard1 = document.querySelector('.animated-work-card-1');
    var workCard1Position = workCard1.getBoundingClientRect().top;

    var workCard2 = document.querySelector('.animated-work-card-2');
    var workCard2Position = workCard2.getBoundingClientRect().top;

    var workCard3 = document.querySelector('.animated-work-card-3');
    var workCard3Position = workCard3.getBoundingClientRect().top;

    if (workCard1Position < screenPosition) {
        workCard1.classList.add('animated-work-card-1-fade');
    }

    if (workCard2Position < screenPosition) {
        workCard2.classList.add('animated-work-card-2-fade');
    }

    if (workCard3Position < screenPosition) {
        workCard3.classList.add('animated-work-card-3-fade');
    }

    var contactTxt1 = document.querySelector('.animated-contact-txt');
    var contactTxt1Position = contactTxt1.getBoundingClientRect().top;

    var contactTxt2 = document.querySelector('.animated-contact-txt-2');
    var contactTxt2Position = contactTxt2.getBoundingClientRect().top;

    var contactIcon1 = document.querySelector('.animated-contact-icon1');
    var contactIcon1Position = contactIcon1.getBoundingClientRect().top;

    var contactIcon2 = document.querySelector('.animated-contact-icon2');
    var contactIcon2Position = contactIcon2.getBoundingClientRect().top;

    var contactIcon3 = document.querySelector('.animated-contact-icon3');
    var contactIcon3Position = contactIcon3.getBoundingClientRect().top;

    if (contactTxt1Position < screenPosition) {
        contactTxt1.classList.add('animated-contact-txt-fade');
    }

    if (contactTxt2Position < screenPosition) {
        contactTxt2.classList.add('animated-contact-txt-2-fade');
    }

    if (contactIcon1Position < screenPosition) {
        contactIcon1.classList.add('animated-contact-icon1-fade');
    }

    if (contactIcon2Position < screenPosition) {
        contactIcon2.classList.add('animated-contact-icon2-fade');
    }

    if (contactIcon3Position < screenPosition) {
        contactIcon3.classList.add('animated-contact-icon3-fade');
    }

}

window.addEventListener( 'scroll', scrollAppear );

