// let openClose = document.querySelector('#open-close');
// let venster = document.querySelector('#venster');

// openClose.addEventListener('click', () => {
//     if (venster.style.display === 'none' || venster.style.display === '') {
//         venster.style.display = 'block';
//         openClose.innerHTML = '<u>Close</u>'
//     } else {
//         venster.style.display = 'none';
//         openClose.innerHTML = '<u>Open</u>'
//     }
// });

// let all = document.querySelectorAll('g.coating')
// let bottom = document.querySelector('g#bottom');
// let middle = document.querySelector('g#middle');
// let tops = document.querySelectorAll('g.top');
// let topcoatings = document.querySelectorAll('g.top g.coating');
// let titels = document.querySelectorAll('#titel div')
// let vensters = document.querySelectorAll('#venster div')
// let welkom = document.querySelectorAll('.welkom');
// let infos = document.querySelectorAll('.info');
// let fotos = document.querySelectorAll('.fotos');
// let brieven = document.querySelectorAll('.brieven');


// function joaat(ying, yang) {
//     ying.addEventListener('click', (e) => {
//         let coating = ying.querySelector('g.coating');
//         if (coating.classList.contains('hide')) {
//             coating.classList.remove('hide'); 
//             titels.forEach(titel => {
//                 titel.classList.remove('actief')
//             });
//             vensters.forEach(venster => {
//                 venster.classList.remove('actief')
//             });
//             welkom.forEach(w => {
//                 w.classList.add('actief') 
//             });
//         } else {
//             all.forEach(al => {
//                 al.classList.remove('hide');
//             });
//             coating.classList.add('hide');
//             titels.forEach(titel => {
//                 titel.classList.remove('actief')
//             });
//             vensters.forEach(venster => {
//                 venster.classList.remove('actief')
//             });
//             yang.forEach(y => {
//                 y.classList.add('actief') 
//             });
//         }
//     })
// }

// joaat(bottom, brieven)
// joaat(middle, fotos)

// tops.forEach(top => {

//     top.addEventListener('click', (e)=> {
//         let status
//         topcoatings.forEach(coating => {
//             if (coating.classList.contains('hide')) {
//                 status = 'hidden';
//             } else {
//                 status = 'seen'
//             }
//         });
//         if (status === 'hidden') {
//             topcoatings.forEach(coating => {
//                 coating.classList.remove('hide');  
//             });
//             titels.forEach(titel => {
//                 titel.classList.remove('actief')
//             });
//             vensters.forEach(venster => {
//                 venster.classList.remove('actief')
//             });
//             welkom.forEach(w => {
//                 w.classList.add('actief') 
//             });
//         } else {
//             all.forEach(al => {
//                 al.classList.remove('hide');
//             });
//             topcoatings.forEach(coating => {
//                 coating.classList.add('hide');  
//             });
//             titels.forEach(titel => {
//                 titel.classList.remove('actief')
//             });
//             vensters.forEach(venster => {
//                 venster.classList.remove('actief')
//             });
//             infos.forEach(y => {
//                 y.classList.add('actief') 
//             });
//         }
//     })
// });


let snelheid = 1;

let scenesBrieven = document.querySelectorAll('g#bottom>g');
let x = scenesBrieven.length - 1; // start from the last scene

let scenesDraaien = document.querySelectorAll('g#top>g');
let y = scenesDraaien.length - 1; // start from the last scene

let scenesFotos = document.querySelectorAll('g#fotos>g');
let coatingFotos = document.querySelectorAll('g#middle_coating>g:not(#totaal)');
let scenesSterrenVoor = document.querySelectorAll('g#ster_voor>g');
let scenesSterrenAchter = document.querySelectorAll('g#ster_achter>g');
let scenesKnoppen = document.querySelectorAll('g#knop>g');

let f = scenesFotos.length - 1; // start from the last scene
let c = coatingFotos.length - 1;

let scenesVlaggen = document.querySelectorAll('g#vlag_achter g');
let scenesVlag = document.querySelectorAll('g#vlag_voor g');
let s = scenesVlaggen.length - 1; // start from the last scene


scenesBrieven.forEach(scene => {
    scene.style.display = 'none';
});
scenesBrieven[x].style.display = 'block';

scenesDraaien.forEach(scene => {
    scene.style.display = 'none';
});
scenesDraaien[y].style.display = 'block';

scenesFotos.forEach(scene => {
    scene.style.display = 'none';
});
scenesFotos[f].style.display = 'block';

coatingFotos.forEach(scene => {
    scene.style.opacity = 0;
});
coatingFotos[c].style.opacity = 1;

scenesSterrenVoor.forEach(scene => {
    scene.style.opacity = 0;
});
scenesSterrenVoor[c].style.opacity = 1;

scenesSterrenAchter.forEach(scene => {
    scene.style.opacity = 0;
});
scenesSterrenAchter[c].style.opacity = 1;

scenesKnoppen.forEach(scene => {
    scene.style.display = 'none';
});
scenesKnoppen[(1-c)].style.display = 'block';

scenesVlaggen.forEach(scene => {
    scene.style.display = 'none';
});
scenesVlaggen[s].style.display = 'block';

scenesVlag.forEach(scene => {
    scene.style.display = 'none';
});
scenesVlag[s].style.display = 'block';


setInterval(loopBrieven, 1200 / snelheid);
setInterval(loopFotos, 1200 / snelheid);
setInterval(loopVlaggen, 200 / snelheid);
setTimeout(function (){
    setInterval(loopDraaien, 800 / snelheid)
}, 400 / snelheid);

function loopBrieven() {
    // Hide all scenes
    scenesBrieven.forEach(scene => {
        scene.style.display = 'none';
    });

    // Show the current scene
    scenesBrieven[x].style.display = 'block';

    // Move one step backwards, wrap around if needed
    x = (x - 1)

    if (x < 0) {
        x = scenesBrieven.length - 1;
    }
}

function loopDraaien() {
    // Hide all scenes
    scenesDraaien.forEach(scene => {
        scene.style.display = 'none';
    });

    // Show the current scene
    scenesDraaien[y].style.display = 'block';

    // Move one step backwards, wrap around if needed
    y = (y - 1)

    if (y < 0) {
        y = scenesDraaien.length - 1;
    }
}

function loopFotos() {
    // Hide all scenes
    scenesFotos.forEach(scene => {
        scene.style.display = 'none';
    });
    scenesFotos[f].style.display = 'block';

    coatingFotos.forEach(scene => {
        scene.style.opacity = 0;
    });
    coatingFotos[c].style.opacity = 1;

    scenesKnoppen.forEach(scene => {
        scene.style.display = 'none';
    });
    scenesKnoppen[(1-c)].style.display = 'block';

    scenesSterrenVoor.forEach(scene => {
        scene.style.opacity = 0;
    });
    scenesSterrenVoor[c].style.opacity = 1;

    scenesSterrenAchter.forEach(scene => {
        scene.style.opacity = 0;
    });
    scenesSterrenAchter[c].style.opacity = 1;

    // Move one step backwards, wrap around if needed
    f = (f + 1)
    if (f > (scenesFotos.length -1)) {
        f = 0;
    }

    c = c + 1
    if (c > (coatingFotos.length -1)) {
        c = 0;
    }
    
}

function loopVlaggen() {
    // Hide all scenes
    scenesVlaggen.forEach(scene => {
        scene.style.display = 'none';
    });

    scenesVlag.forEach(scene => {
        scene.style.display = 'none';
    });

    // Show the current scene
    scenesVlaggen[s].style.display = 'block';
    scenesVlag[s].style.display = 'block';

    // Move one step backwards, wrap around if needed
    s = (s - 1)

    if (s < 0) {
        s = scenesVlaggen.length - 1;
    }
}