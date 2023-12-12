const backToTop = document.getElementById('back-to-top')
const header = document.getElementById('top-element')

backToTop.addEventListener('click', () => {

    window.scrollTo(0, 1000);
    header.focus();
})