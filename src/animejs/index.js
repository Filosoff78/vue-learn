import anime from 'animejs';

export function translate(element, type, setting) {
    if(type === 'wood'){
        anime({
            targets: element,
            translateY: 65 + setting,
            duration: 500,
            easing: 'linear'
        });
    }
    if(type === 'wheels'){
        anime({
            targets: element,
            rotate: 360,
            loop: true,
            easing: 'linear',
        });
    }

}
export function numberAnimation(el, endValue, incrementor, duration) {
    anime({
        targets: el,
        textContent: endValue,
        round: 1,
        easing: 'easeInOutQuad',
        duration: 4000,
    });
}