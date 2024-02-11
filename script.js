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