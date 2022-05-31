gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    //toggleActions: "restart pause resume pause",
    scroller: ".container"
});

/*========= SECTION 1 =========*/
gsap.fromTo(".one--top img", { opacity: 0, y: -50 }, {
    scrollTrigger: ".one",
    opacity: 1,
    y: 0,
    delay: 0.5,
    ease: Power0.easeNone
});

gsap.fromTo(".one--center img", { opacity: 0, x: -50 }, {
    scrollTrigger: ".one",
    opacity: 1,
    x: 0,
    delay: 0.5,
    ease: Power0.easeNone
});

gsap.fromTo(".one--bottom img", { opacity: 0, y: 50 }, {
    scrollTrigger: ".one",
    opacity: 1,
    y: 0,
    delay: 0.5,
    ease: Power0.easeNone
});

/*========= SECTION 2 =========*/
gsap.fromTo(".two--top img", { opacity: 0, y: -50 }, {
    scrollTrigger: ".two",
    opacity: 1,
    y: 0,
    delay: 0.5,
    ease: Power0.easeNone
});

gsap.fromTo(".two--center--top img", { opacity: 0, x: -50 }, {
    scrollTrigger: ".two",
    opacity: 1,
    x: 0,
    delay: 0.5,
    ease: Power0.easeNone
});

gsap.fromTo(".two--center--bottom img", { opacity: 0, x: 50 }, {
    scrollTrigger: ".two",
    opacity: 1,
    x: 0,
    delay: 0.5,
    ease: Power0.easeNone
});

gsap.fromTo(".two--bottom img", { opacity: 0, y: 50 }, {
    scrollTrigger: ".two",
    opacity: 1,
    y: 0,
    delay: 0.5,
    ease: Power0.easeNone
});

/*========= SECTION 3 =========*/
gsap.fromTo(".three--top img", { opacity: 0, y: -50 }, {
    scrollTrigger: ".three",
    opacity: 1,
    y: 0,
    delay: 0.5,
    ease: Power0.easeNone
});

gsap.fromTo(".three--center img", { opacity: 0, x: -50 }, {
    scrollTrigger: ".three",
    opacity: 1,
    x: 0,
    delay: 0.5,
    ease: Power0.easeNone
});

gsap.fromTo(".three--bottom img", { opacity: 0, y: 50 }, {
    scrollTrigger: ".three",
    opacity: 1,
    y: 0,
    delay: 0.5,
    ease: Power0.easeNone
});



/*========= FOOTER =========*/
gsap.fromTo("footer p", { opacity: 0, y: 50 }, {
    scrollTrigger: ".one",
    opacity: 1,
    y: 0,
    delay: 0.5,
    ease: Power0.easeNone
});