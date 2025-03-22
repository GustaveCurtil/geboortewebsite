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

let elementen = document.querySelectorAll('g');
let titels = document.querySelectorAll('#titel div')
let vensters = document.querySelectorAll('#venster div')
let welkom = document.querySelectorAll('.welkom');
let infos = document.querySelectorAll('.info');
let fotos = document.querySelectorAll('.fotos');
let brieven = document.querySelectorAll('.brieven');

elementen.forEach(element => {
    element.addEventListener('click', () => {
        const isActive = element.classList.contains('actief');
        elementen.forEach(el => el.classList.remove('actief'));
        if (!isActive) {
            element.classList.add('actief');
            if (element.id === 'bottom') {
                console.log('yo')
                titels.forEach(titel => {
                    titel.classList.remove('actief')
                });
                vensters.forEach(venster => {
                    venster.classList.remove('actief')
                });
                brieven.forEach(brief => {
                    brief.classList.add('actief') 
                });
            } else if (element.id === 'middle') {
                titels.forEach(titel => {
                    titel.classList.remove('actief')
                });
                vensters.forEach(venster => {
                    venster.classList.remove('actief')
                });
                fotos.forEach(foto => {
                    foto.classList.add('actief') 
                });
            } else if (element.id === 'top') {
                titels.forEach(titel => {
                    titel.classList.remove('actief')
                });
                vensters.forEach(venster => {
                    venster.classList.remove('actief')
                });
                infos.forEach(info => {
                    info.classList.add('actief') 
                });
            }
        } else if (isActive) {
            titels.forEach(titel => {
                titel.classList.remove('actief')
            });
            vensters.forEach(venster => {
                venster.classList.remove('actief')
            });
            welkom.forEach(w => {
                w.classList.add('actief') 
            });
        }
    });
});