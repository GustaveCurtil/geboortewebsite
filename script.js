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

let all = document.querySelectorAll('g.coating')
let bottom = document.querySelector('g#bottom');
let middle = document.querySelector('g#middle');
let tops = document.querySelectorAll('g.top');
let topcoatings = document.querySelectorAll('g.top g.coating');
let titels = document.querySelectorAll('#titel div')
let vensters = document.querySelectorAll('#venster div')
let welkom = document.querySelectorAll('.welkom');
let infos = document.querySelectorAll('.info');
let fotos = document.querySelectorAll('.fotos');
let brieven = document.querySelectorAll('.brieven');


function joaat(ying, yang) {
    ying.addEventListener('click', (e) => {
        let coating = ying.querySelector('g.coating');
        if (coating.classList.contains('hide')) {
            coating.classList.remove('hide'); 
            titels.forEach(titel => {
                titel.classList.remove('actief')
            });
            vensters.forEach(venster => {
                venster.classList.remove('actief')
            });
            welkom.forEach(w => {
                w.classList.add('actief') 
            });
        } else {
            all.forEach(al => {
                al.classList.remove('hide');
            });
            coating.classList.add('hide');
            titels.forEach(titel => {
                titel.classList.remove('actief')
            });
            vensters.forEach(venster => {
                venster.classList.remove('actief')
            });
            yang.forEach(y => {
                y.classList.add('actief') 
            });
        }
    })
}

joaat(bottom, brieven)
joaat(middle, fotos)

tops.forEach(top => {

    top.addEventListener('click', (e)=> {
        let status
        topcoatings.forEach(coating => {
            if (coating.classList.contains('hide')) {
                status = 'hidden';
            } else {
                status = 'seen'
            }
        });
        if (status === 'hidden') {
            topcoatings.forEach(coating => {
                coating.classList.remove('hide');  
            });
            titels.forEach(titel => {
                titel.classList.remove('actief')
            });
            vensters.forEach(venster => {
                venster.classList.remove('actief')
            });
            welkom.forEach(w => {
                w.classList.add('actief') 
            });
        } else {
            all.forEach(al => {
                al.classList.remove('hide');
            });
            topcoatings.forEach(coating => {
                coating.classList.add('hide');  
            });
            titels.forEach(titel => {
                titel.classList.remove('actief')
            });
            vensters.forEach(venster => {
                venster.classList.remove('actief')
            });
            fotos.forEach(y => {
                y.classList.add('actief') 
            });
        }
    })
});

let x = 3;
let frames = document.querySelectorAll('#fotos g')
setInterval(framez, 1000);

function framez() {
    console.log('hallo');
    for (let i = 0; i < frames.length; i++) {
        console.log(frames)
        frames.forEach(fr => {
            fr.style.display = 'none';  
        });

        frames[x].style.display = 'block';
    }
    if (x > 0) {
        x = x - 1
    } else {
        x = 3;
    }
}