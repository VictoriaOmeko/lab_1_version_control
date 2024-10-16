gsap.set('.main', {position: 'fixed', background: '#fff', width: '100%', maxWidth: '1200px', height: '100%', top: 0, left: '50%', x: '-50%'});
gsap.set('.scrollDist', {width: '100%', height: '200%'});

const animations = [
    {selector: '.sky', from: {y: 0}, to: {y: -200}},
    {selector: '.cloud1', from: {y: 100}, to: {y: -800}},
    {selector: '.cloud2', from: {y: -150}, to: {y: -500}},
    {selector: '.cloud3', from: {y: -50}, to: {y: -650}},
    {selector: '.mountBg', from: {y: -10}, to: {y: -100}},
    {selector: '.mountMg', from: {y: -30}, to: {y: -250}},
    {selector: '.mountFg', from: {y: -50}, to: {y: -600}}
];

gsap.timeline({scrollTrigger: {
        trigger: '.scrollDist',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1
    }}).add(animations.map(anim => gsap.fromTo(anim.selector, anim.from, anim.to, 0)));

document.getElementById('arrowBtn').addEventListener('mouseenter', () => {
    gsap.to('.arrow', {y: 10, duration: 0.8, ease: 'back.inOut(3)', overwrite: 'auto'});
});

document.getElementById('arrowBtn').addEventListener('mouseleave', () => {
    gsap.to('.arrow', {y: 0, duration: 0.5, ease: 'power3.out', overwrite: 'auto'});
});

document.getElementById('arrowBtn').addEventListener('click', () => {
    gsap.to(window, {scrollTo: innerHeight, duration: 1.5, ease: 'power1.inOut'});
});
