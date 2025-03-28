let openClose = document.querySelector('#open-close');
let balken = document.querySelectorAll('.balk');
let venster = document.querySelector('#venster');
let statusVenster = window.getComputedStyle(venster).display;
let statusMenu


document.addEventListener('DOMContentLoaded', () => {
    if (sessionStorage.getItem("statusmenu")) {
        statusMenu = sessionStorage.getItem("statusmenu")
    } else {
        statusMenu = 'welkom'
    }
    console.log(sessionStorage.getItem("statusvenster"))
    if (sessionStorage.getItem("statusvenster")) {
        statusVenster = sessionStorage.getItem("statusvenster");
    }
    console.log(statusVenster)
    menu();

    balken.forEach(balk => {
        balk.addEventListener('click', () => {
            if (statusVenster === 'none') {
                statusVenster = 'open' 
                venster.style.display = 'block';
                openClose.innerHTML = '<u>CLOSE</u>';
            } else {
                statusVenster = 'none' 
                venster.style.display = 'none';
                openClose.innerHTML = '<u>OPEN</u>';
            }
            sessionStorage.setItem("statusvenster", statusVenster);
            console.log(statusVenster)
        }); 
    });
});



let snelheid = 0.5;

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


setInterval(loopBrieven, 800 / snelheid);
setInterval(loopFotos, 800 / snelheid);
setInterval(loopVlaggen, 200 / snelheid);
setTimeout(function (){
    setInterval(loopDraaien, 800 / snelheid)
}, 0 / snelheid);

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

let upperInfo = document.querySelector('#top_info');
let upper = document.querySelector('#top');
let middle = document.querySelector('#middle');
let bottom = document.querySelector('#bottom');

let coatings = document.querySelectorAll('svg>g:nth-child(even)');
let upperInfoCoating = document.querySelector('#top_info_coating');
let upperCoating = document.querySelector('#top_coating');
let middleCoating = document.querySelector('#middle_coating');
let bottomCoating = document.querySelector('#bottom_coating');

let titels = document.querySelectorAll('.balk>div')
let welkom = document.querySelector('.balk .welkom');
let infos = document.querySelector('.balk .info');
let fotos = document.querySelector('.balk .fotos');
let brieven = document.querySelector('.balk .brieven');

let vensters = document.querySelectorAll('#venster div');
let welkomVenster = document.querySelector('#venster .welkom');
let infosVenster = document.querySelector('#venster .info');
let fotosVenster = document.querySelector('#venster .fotos');
let brievenVenster = document.querySelector('#venster .brieven');

upperInfo.addEventListener('click', (e) => {
    if (infos.classList.contains('actief')) {
        statusMenu = 'welkom';
        menu(true);
    } else {
        statusMenu = 'info';
        statusVenster = 'open'
        menu();
    }
})

upper.addEventListener('click', (e) => {
    if (infos.classList.contains('actief')) {
        statusMenu = 'welkom';
        menu(true);
    } else {
        statusMenu = 'info';
        statusVenster = 'open'
        menu()
    }
})

middle.addEventListener('click', (e) => {
    if (fotos.classList.contains('actief')) {
        statusMenu = 'welkom';
        menu(true);
    } else {
        statusMenu = 'polaroid'
                statusVenster = 'open'
        menu();
    }
})

bottom.addEventListener('click', (e) => {
    if (brieven.classList.contains('actief')) {
        statusMenu = 'welkom';
        menu(true);
    } else {
        statusMenu = 'post';
        statusVenster = 'open'
        menu();
    }
})

function menu(neutroaal) {
    titels.forEach(titel => {
        titel.classList.remove('actief');
    });
    vensters.forEach(venster => {
        venster.classList.remove('actief');
    });
    coatings.forEach(coating => {
        coating.classList.remove('hide');
    });
    balken.forEach(balk => {
        balk.style.backgroundColor = ""; 
    });
    console.log(statusMenu)

    if (statusMenu === 'welkom') {
        welkom.classList.add('actief');
        welkomVenster.classList.add('actief');
        coatings.forEach(coating => {
            coating.classList.add('hide');
        });
        balken.forEach(balk => {
            balk.style.backgroundColor = ""; 
        });
        venster.style.backgroundColor = "rgb(255, 255, 255, 0.9)";
    } else if (statusMenu === 'info') {
        infos.classList.add('actief');
        infosVenster.classList.add('actief');
        upperInfoCoating.classList.add('hide');
        upperCoating.classList.add('hide');
        balken.forEach(balk => {
            balk.style.backgroundColor = "rgb(179, 207, 238)"; 
        });
        venster.style.backgroundColor = "hsl(212, 63.40%, 95%, 90%)";
    } else if (statusMenu === 'polaroid') {
        fotos.classList.add('actief');
        fotosVenster.classList.add('actief');
        middleCoating.classList.add('hide');
        balken.forEach(balk => {
            balk.style.backgroundColor = "hsl(45, 97.60%, 51.40%)"; 
        });
        venster.style.backgroundColor = "hsla(45, 97.60%, 95%, 90%)";
    } else if (statusMenu === 'post') {
        brieven.classList.add('actief');
        brievenVenster.classList.add('actief');
        bottomCoating.classList.add('hide');
        balken.forEach(balk => {
            balk.style.backgroundColor = "hsl(359, 78.20%, 69.40%)";
        });
        venster.style.backgroundColor = "hsla(359, 78.20%, 95%, 90%)";
    } 

    if (!neutroaal) {
        if (statusVenster === 'none') { 
            venster.style.display = 'none';
            openClose.innerHTML = '<u>OPEN</u>';
        } else { 
            venster.style.display = 'block';
            openClose.innerHTML = '<u>CLOSE</u>';
        }
        sessionStorage.setItem("statusvenster", statusVenster);
        console.log(statusVenster)
    }

    sessionStorage.setItem("statusmenu", statusMenu);
}


let booty = document.querySelector('svg');
let bootah = document.querySelector('#tekening');

booty.addEventListener('click', (e) => {

    if (e.target !== booty) return;

    statusMenu = 'welkom';
    menu(true);
})

bootah.addEventListener('click', (e) => {

    if (e.target !== bootah) return;

    statusMenu = 'welkom';
    menu(true);
})
