let a = document.querySelectorAll('.HoverAnimation');
let b = document.querySelectorAll('.Animate');

a.forEach((e,index) => {
    e.addEventListener('mouseenter', () => {
        b[index].style.top = '0';
    });
    e.addEventListener('mouseleave', () => {
        b[index].style.top = '100%';
    });
});

let mDivOne = document.querySelector('.mDivOne');
let mDivTwo = document.querySelector('.mDivTwo');

gsap.to('.mDivOne p', {
    x: 80, scrollTrigger: {
        trigger: ".mDivOne",
        scroll: "body",
        scrub: 5,
        start: "top 60%",
        end: "-10% 14%",
    }
})

gsap.to('.mDivTwo p', {
    x: 80, scrollTrigger: {
        trigger: ".mDivTwo",
        scroll: "body",
        scrub: 5,
        start: "top 60%",
        end: "-15% 14%",
    }
})