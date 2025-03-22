let openClose = document.querySelector('#open-close');
let venster = document.querySelector('#venster');

openClose.addEventListener('click', () => {
    if (venster.style.display === 'none' || venster.style.display === '') {
        venster.style.display = 'block';
        openClose.innerHTML = '<u>Close</u>'
    } else {
        venster.style.display = 'none';
        openClose.innerHTML = '<u>Open</u>'
    }
});