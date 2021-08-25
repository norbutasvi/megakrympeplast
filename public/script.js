
window.addEventListener('load', () => {
    
    // SECTIONS
    const sections = [];
    sections.push(document.querySelector('.section__col-2'));
    sections.push(document.querySelector('.section__product'));
    sections.push(document.querySelector('.section__gallery'));
    sections.push(document.querySelector('.section__contact'));

    // BUTTONS
    const buttons = [];
    buttons.push(document.querySelector('#home'));
    buttons.push(document.querySelector('#product'));
    buttons.push(document.querySelector('#gallery'));
    // buttons.push(document.querySelector('#portfolio'));
    // buttons.push(document.querySelector('#process'));
    buttons.push(document.querySelector('#contact'));


    function resetColors() {
        buttons.forEach(section => {
            section.style.background = 'transparent';
        })
    }

    const options = {
        root: null,
        threshold: 0,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver(function(entries,observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                resetColors();
                if (entry.target.classList.contains('section__col-2')) {
                    const home = document.querySelector('#home');
                    home.style.background = '#B96400';
                }
                if (entry.target.classList.contains('section__product')) {
                    const home = document.querySelector('#product');
                    home.style.background = '#B96400';
                }
                if (entry.target.classList.contains('section__gallery')) {
                    const home = document.querySelector('#gallery');
                    home.style.background = '#B96400';
                }
                if (entry.target.classList.contains('section__contact')) {
                    const home = document.querySelector('#contact');
                    home.style.background = '#B96400';
                }
                
            } else {
                if (entry.target.classList.contains('section__col-2')) {
                    const home = document.querySelector('#home');
                    home.style.background = 'transparent';
                }
                if (entry.target.classList.contains('section__product')) {
                    const home = document.querySelector('#product');
                    home.style.background = 'transparent';
                }
                if (entry.target.classList.contains('section__gallery')) {
                    const home = document.querySelector('#gallery');
                    home.style.background = 'transparent';
                }
                if (entry.target.classList.contains('section__contact')) {
                    const home = document.querySelector('#contact');
                    home.style.background = 'transparent';
                }
            }
        })
    }, options);

    // OBSERVE
    sections.forEach(section => {
        observer.observe(section)
    });

    // FIXING TEXTAREA
    const formBlock = document.querySelector('.info-box');
    const height = formBlock.scrollHeight;

    const textArea = document.querySelector('#message');
    textArea.style.height = (height-60.8)+'px';

    // RESPONSIVE NAV
    const menuButton = document.querySelector('#menu-button');
    const aside = document.querySelector('aside');
    // })

})