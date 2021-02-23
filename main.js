// Validación PWA
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Registro de SW exitoso', reg))
      .catch(err => console.warn('Error al tratar de registrar el sw', err))
}

// Variables generales
let jugadores = [];
for(let i = 0; i<dataJugadores.length; i++) {
    jugadores.push (
        new Jugador (
            dataJugadores[i].id_j, dataJugadores[i].nom_j, dataJugadores[i].ape_j, dataJugadores[i].rank_j, dataJugadores[i].punt_j, dataJugadores[i].nivel_j)
    ) + "<br>"
};
let jugadoresRanking = [];
let parejasJugRankA = [];
let parejasJugRankB = [];
let grupoA = [];
let grupoB = [];
let puntos = [
    {pj: 5},
    {pg: 10},
    {oct_p: 20},
    {oct_g: 50},
    {cto_p: 30},
    {cto_g: 100},
    {sem_p: 40},
    {sem_g: 200},
    {fin_p: 50},
    {fin_g: 500}
];

// Variables de Jugadores y Datos
// let datoTablaA = new Array();
// let dato2 = document.getElementById("j2");
// let dato3 = document.getElementById("j3");
// dato2.innerHTML = "1";
// dato3.innerHTML = "David Caballero";
// console.log(ordenarJugRank());
// console.log(jugadoresRanking[5].nom_j);

function ordenarJugRank() {
    jugadoresRanking = jugadores;
    jugadoresRanking.sort(function compareNumbers(a,b) {
        if (a.rank_j > b.rank_j) {
            return 1;
        }
        if (a.rank_j < b.rank_j) {
            return -1;
        }
        return 0;
    });
    return jugadoresRanking;
};

function parejasRankingA() {
    ordenarJugRank();
    for(let i = 0; i<jugadoresRanking.length; i++) {
        if (i == 0 && jugadoresRanking[i].nivel_j == "A") {
            parejasJugRankA.push (
                new Pareja (
                    jugadoresRanking[i].nom_j + " " + jugadoresRanking[i].ape_j,
                    jugadoresRanking[i+1].nom_j + " " + jugadoresRanking[i+1].ape_j,
                )
            ) + "<br>"
        }
        else if (i == 2 && jugadoresRanking[i].nivel_j == "A") {
            parejasJugRankA.push (
                new Pareja (
                    jugadoresRanking[i].nom_j + " " + jugadoresRanking[i].ape_j,
                    jugadoresRanking[i+1].nom_j + " " + jugadoresRanking[i+1].ape_j
                )
            ) + "<br>"
        }
        else if (i % 2 == 0 && jugadoresRanking[i].nivel_j == "A") {
            parejasJugRankA.push (
                new Pareja (
                    jugadoresRanking[i].nom_j + " " + jugadoresRanking[i].ape_j,
                    jugadoresRanking[i+1].nom_j + " " + jugadoresRanking[i+1].ape_j
                )
            ) + "<br>"
        }
    };
    return parejasJugRankA;
}

function parejasRankingB() {
    ordenarJugRank();
    for(let i = 0; i<jugadoresRanking.length; i++) {
        if (i == 0 && jugadoresRanking[i].nivel_j == "B") {
            parejasJugRankB.push (
                new Pareja (
                    jugadoresRanking[i].nom_j + " " + jugadoresRanking[i].ape_j,
                    jugadoresRanking[i+1].nom_j + " " + jugadoresRanking[i+1].ape_j
                )
            ) + "<br>"
        }
        else if (i == 2 && jugadoresRanking[i].nivel_j == "B") {
            parejasJugRankB.push (
                new Pareja (
                    jugadoresRanking[i].nom_j + " " + jugadoresRanking[i].ape_j,
                    jugadoresRanking[i+1].nom_j + " " + jugadoresRanking[i+1].ape_j
                )
            ) + "<br>"
        }
        else if (i % 2 == 0 && jugadoresRanking[i].nivel_j == "B") {
            parejasJugRankB.push (
                new Pareja (
                    jugadoresRanking[i].nom_j + " " + jugadoresRanking[i].ape_j,
                    jugadoresRanking[i+1].nom_j + " " + jugadoresRanking[i+1].ape_j
                )
            ) + "<br>"
        }
    };
    return parejasJugRankB;
}

function parejasGrupoA() {
    for(let g = 0; g < 4; g++) {
        grupoA["A" + (g+1)] = new Array ();
        if((g+1)==1) {
            for(let i = 0; i < parejasJugRankA.length; i=i+4) {
                grupoA["A" + (g+1)].push(parejasJugRankA[i]);
            }
        }
        else if((g+1)==2) {
            for(let i = 1; i < parejasJugRankA.length; i=i+4) {
                grupoA["A" + (g+1)].push(parejasJugRankA[i]);
            }
        }
        else if((g+1)==3) {
            for(let i = 2; i < parejasJugRankA.length; i=i+4) {
                grupoA["A" + (g+1)].push(parejasJugRankA[i]);
            }
        }
        else if((g+1)==4) {
            for(let i = 3; i < parejasJugRankA.length; i=i+4) {
                grupoA["A" + (g+1)].push(parejasJugRankA[i]);
            }
        }
    }
    return grupoA;
};

function parejasGrupoB() {
    for(let g = 0; g < 4; g++) {
        grupoB["B" + (g+1)] = new Array ();
        if((g+1)==1) {
            for(let i = 0; i < parejasJugRankB.length; i=i+4) {
                grupoB["B" + (g+1)].push(parejasJugRankB[i]);
            }
        }
        else if((g+1)==2) {
            for(let i = 1; i < parejasJugRankB.length; i=i+4) {
                grupoB["B" + (g+1)].push(parejasJugRankB[i]);
            }
        }
        else if((g+1)==3) {
            for(let i = 2; i < parejasJugRankB.length; i=i+4) {
                grupoB["B" + (g+1)].push(parejasJugRankB[i]);
            }
        }
        else if((g+1)==4) {
            for(let i = 3; i < parejasJugRankB.length; i=i+4) {
                grupoB["B" + (g+1)].push(parejasJugRankB[i]);
            }
        }
    }
    return grupoB;
};

// PESTAÑAS
// Pestañas de Estadísticas: Grupos, Resultados y Posiciones
function openPest1(evt, pestName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks1");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(pestName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen1").click();

// Pestañas de Resultados de los 8 Grupos
function openPest2(evt, pestName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent2");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks2");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(pestName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen2").click();

// Pestañas de Información General y Noticias
function openPest3(evt, pestName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent3");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks3");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(pestName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen3").click();

// Pestañas de Posiciones
function openPest4(evt, pestName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent4");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks4");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(pestName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen4").click();

// Pestañas de Grupos A y B de Finales
function openPest5(evt, pestName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent5");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks5");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(pestName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen5").click();

// Pestañas Cuadros Finales Grupo A
function openPest6(evt, pestName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent6");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks6");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(pestName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen6").click();

// Pestañas Cuadros Finales Grupo B
function openPest7(evt, pestName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent7");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks7");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(pestName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen7").click();

// Traducciones
let langESP = document.getElementById("t-esp");
let langENG = document.getElementById("t-eng");
let langCAT = document.getElementById("t-cat");

function tradESP() {
    ingresar();
    for(let i = 0; i < textosID.length; i++) {
        textosID[i].innerHTML = textosESP[i];
    }
}
function tradENG() {
    ingresar();
    for(let i = 0; i < textosID.length; i++) {
        textosID[i].innerHTML = textosENG[i];
    }
}
function tradCAT() {
    ingresar();
    for(let i = 0; i < textosID.length; i++) {
        textosID[i].innerHTML = textosCAT[i];
    }
}

// Menú de lenguajes
const world = document.querySelector('.world');
const lang = document.querySelector('.lang-opc');

world.addEventListener('click', ()=>{
    lang.classList.toggle("spread")
});

window.addEventListener('click', e =>{
    if(lang.classList.contains('spread') 
        && e.target != lang && e.target != world){
        console.log('cerrar')
        lang.classList.toggle("spread")
    }
});

// Portada principal
function ingresar() {
    div = document.getElementById('front-index');
    div.style.display = 'none';
}

//window.addEventListener("load", tradESP());
//console.log(typeof(datosPlayers));
// console.log(jugadores.length + " jugadores inscriptos");
// console.log(parejasRankingA());
// console.log(parejasRankingB());
// console.log(parejasGrupoA());
// console.log(parejasGrupoB());
// console.log(puntos[4].cto_p);

// let tra0001 = document.getElementById("but-pest-01");
// tra0001.innerHTML = "gato";

// let trad1 = document.getElementById("title-h1");
// trad1 = trad1.innerHTML;
// console.log(trad1);
// window.addEventListener("load", tradENG());