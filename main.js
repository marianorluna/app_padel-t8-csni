// Validación PWA
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Registro de SW exitoso', reg))
      .catch(err => console.warn('Error al tratar de registrar el sw', err))
}

// Permisos para notificaciones
var button = document.getElementById("but-notif");
button.addEventListener('click', function(e) {
    Notification.requestPermission().then(function(result) {
        if(result === 'granted') {
            actualNotification();
        }
    });
});

// Notificaciones
var notif;
function actualNotification() {
    var notifTitle = "VIII Torneo de Pádel CSNI, bienvenido.";
    var notifBody = "Has actualizado el sistema de notificaciones. A partir de ahora estarás al tanto de las últimas noticias.";
    var notifImg = './img/icon_64.png';
    var options = {
        body: notifBody,
        icon: notifImg
    }
    notif = new Notification(notifTitle, options);
    //setTimeout(actualNotification, 30000);
};

// ***********************************************
// ***********************************************

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
};
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
};
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
};
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
};
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
};
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
};
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
};
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
};
function tradENG() {
    ingresar();
    for(let i = 0; i < textosID.length; i++) {
        textosID[i].innerHTML = textosENG[i];
    }
};
function tradCAT() {
    ingresar();
    for(let i = 0; i < textosID.length; i++) {
        textosID[i].innerHTML = textosCAT[i];
    }
};

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
};


// *********************************************
// *********************************************
// Variables generales
let jugadores = new Array();
for(let i = 0; i<dataJugadores.length; i++) {
    jugadores.push (
        new Jugador (
            dataJugadores[i].id_j, dataJugadores[i].nom_j, dataJugadores[i].ape_j, dataJugadores[i].rank_j, dataJugadores[i].punt_j, dataJugadores[i].nivel_j)
    )
};

// Funciones de Fixtures
let jugadoresRanking = new Array();
let parejasJugRankA = new Array();
let parejasJugRankB = new Array();
let idParejasA = new Array();
for(let i = 1; i<41; i++) {
    if(i<10) {
        idParejasA.push("A0" + i);
    }
    else if(i>=10) {
        idParejasA.push("A" + i);
    }
};
let idParejasB = new Array();
for(let i = 1; i<41; i++) {
    if(i<10) {
        idParejasB.push("B0" + i);
    }
    else if(i>=10) {
        idParejasB.push("B" + i);
    }
};
let leagues = ["A","B"];
let groups = [1,2,3,4];
let groupSubA = new Array();
let groupSubB = new Array();
let groupA = new Array();
let groupB = new Array();

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
    ordenarJugRank();   //variable jugadoresRanking ordenada asc
    for(let i = 0; i<jugadoresRanking.length; i++)
        {
        if (i === 0 && jugadoresRanking[i].nivel_j === "A") {
            parejasJugRankA.push (
                new Pareja(
                    "",
                    jugadoresRanking[i].nom_j + " " + jugadoresRanking[i].ape_j,
                    jugadoresRanking[i+1].nom_j + " " + jugadoresRanking[i+1].ape_j
                )
            )
        }
        else if (i === 2 && jugadoresRanking[i].nivel_j === "A") {
            parejasJugRankA.push (
                new Pareja (
                    "",
                    (jugadoresRanking[i].nom_j + " " + jugadoresRanking[i].ape_j),
                    (jugadoresRanking[i+1].nom_j + " " + jugadoresRanking[i+1].ape_j)
                )
            )
        }
        else if (i % 2 === 0 && jugadoresRanking[i].nivel_j === "A") {
            parejasJugRankA.push (
                new Pareja (
                    "",
                    jugadoresRanking[i].nom_j + " " + jugadoresRanking[i].ape_j,
                    jugadoresRanking[i+1].nom_j + " " + jugadoresRanking[i+1].ape_j
                )
            )
        }
    for(let j = 0; j<parejasJugRankA.length; j++) {
        parejasJugRankA[j].id_p = idParejasA[j];
    }
    };
    return parejasJugRankA;
};

function parejasRankingB() {
    ordenarJugRank();   //variable jugadoresRanking ordenada asc
    for(let i = 0; i<jugadoresRanking.length; i++)
        {
        if (i == 0 && jugadoresRanking[i].nivel_j === "B") {
            parejasJugRankB.push (
                new Pareja (
                    "",
                    jugadoresRanking[i].nom_j + " " + jugadoresRanking[i].ape_j,
                    jugadoresRanking[i+1].nom_j + " " + jugadoresRanking[i+1].ape_j
                )
            )
        }
        else if (i == 2 && jugadoresRanking[i].nivel_j === "B") {
            parejasJugRankB.push (
                new Pareja (
                    "",
                    jugadoresRanking[i].nom_j + " " + jugadoresRanking[i].ape_j,
                    jugadoresRanking[i+1].nom_j + " " + jugadoresRanking[i+1].ape_j
                )
            )
        }
        else if (i % 2 == 0 && jugadoresRanking[i].nivel_j === "B") {
            parejasJugRankB.push (
                new Pareja (
                    "",
                    jugadoresRanking[i].nom_j + " " + jugadoresRanking[i].ape_j,
                    jugadoresRanking[i+1].nom_j + " " + jugadoresRanking[i+1].ape_j
                )
            )
        }
    for(let j = 0; j<parejasJugRankB.length; j++) {
        parejasJugRankB[j].id_p = idParejasB[j];
    }
    };
    return parejasJugRankB;
};

function groupLeaguesA() {
    for(let g=0; g<groups.length; g++) {
        groupSubA.push(leagues[0]+groups[g]);
    }
    return groupSubA;
};
function groupLeaguesB() {
    for(let j=0; j<groups.length; j++) {
        groupSubB.push(leagues[1]+groups[j]);
    }
    return groupSubB;
};

// IMPORTANTE PARA LOS CÁLCULOS, DESPUÉS SE DEBE GENERAR UN EVENTO INICIAL DE WINDOWS!!!
console.log( groupLeaguesA() );     //carga variable: groupSubA
console.log( groupLeaguesB() );     //carga variable: groupSubB
console.log( parejasRankingA() );   //carga variable: parejasJugRankA
console.log( parejasRankingB() );   //carga variable: parejasJugRankB

function parejasGrupoA() {
    if(groupSubA.length > 0) {
        for(let sg = 0; sg < groupSubA.length; sg++) {
            groupA.push( new Grupo(groupSubA[sg], new Array()) );
            if(sg == 0) {
                for(let i = 0; i < parejasJugRankA.length; i=i+4) {
                    groupA[sg].par_g.push(parejasJugRankA[i]);
                }
            }
            else if(sg == 1) {
                for(let i = 1; i < parejasJugRankA.length; i=i+4) {
                    groupA[sg].par_g.push(parejasJugRankA[i]);
                }
            }
            else if(sg == 2) {
                for(let i = 2; i < parejasJugRankA.length; i=i+4) {
                    groupA[sg].par_g.push(parejasJugRankA[i]);
                }
            }
            else if(sg == 3) {
                for(let i = 3; i < parejasJugRankA.length; i=i+4) {
                    groupA[sg].par_g.push(parejasJugRankA[i]);
                }
            }
        };
    };
    return groupA;
};

function parejasGrupoB() {
    if(groupSubB.length > 0) {
        for(let sg = 0; sg < groupSubB.length; sg++) {
            groupB.push( new Grupo(groupSubB[sg], new Array()) );
            if(sg == 0) {
                for(let i = 0; i < parejasJugRankB.length; i=i+4) {
                    groupB[sg].par_g.push(parejasJugRankB[i]);
                }
            }
            else if(sg == 1) {
                for(let i = 1; i < parejasJugRankB.length; i=i+4) {
                    groupB[sg].par_g.push(parejasJugRankB[i]);
                }
            }
            else if(sg == 2) {
                for(let i = 2; i < parejasJugRankB.length; i=i+4) {
                    groupB[sg].par_g.push(parejasJugRankB[i]);
                }
            }
            else if(sg == 3) {
                for(let i = 3; i < parejasJugRankB.length; i=i+4) {
                    groupB[sg].par_g.push(parejasJugRankB[i]);
                }
            }
        };
    };
    return groupB;
};

// IMPORTANTE PARA LOS CÁLCULOS, DESPUÉS SE DEBE GENERAR UN EVENTO INICIAL DE WINDOWS!!!
console.log( parejasGrupoA() );
console.log( parejasGrupoB() );

// Programación de partidos

// Partido jugado
let gamePru1 = new Game("P1", new GameTeam("P08", 6, 7, 0), new GameTeam("P12", 7, 9, 0));
let gameDef = new Game("P0", new GameTeam("P00", 0, 0, 0), new GameTeam("P00", 0, 0, 0));

function gameJ(eG = gameDef) {
    let game = eG;
    if(game.team1.sets_t[0] != 0 || game.team2.sets_t[0] != 0) {
        for(let i = 0; i < 3; i++) {
            if(game.team1.sets_t[i] > game.team2.sets_t[i]) {
                game.team1.swin_t += 1;
            }
            else if(game.team1.sets_t[i] < game.team2.sets_t[i]) {
                game.team2.swin_t += 1;
            }
            else {
                console.log("UN SET SIN DEFINIR");
            }
        }
    }
    else {
        console.log("FALTAN INGRESAR DATOS");
    }
    if(game.team1.swin_t == 2) {
        game.team1.win_t = true;
        console.log("GANÓ TEAM " + game.team1.id_t);
    }
    else if(game.team2.swin_t == 2) {
        game.team2.win_t = true;
        console.log("GANÓ TEAM " + game.team2.id_t);
    }
    else {
        console.log("NO SE HA JUGADO AÚN");
    }
    return "RESULTADO: " + game.team1.sets_t[0]+"/"+game.team2.sets_t[0]+" "+game.team1.sets_t[1]+"/"+game.team2.sets_t[1]+" "+game.team1.sets_t[2]+"/"+game.team2.sets_t[2];
};

console.log( gameJ(  ));

// Partidos grupos
let gamesA1 = new Array();
let gamesA2 = new Array();
let gamesA3 = new Array();
let gamesA4 = new Array();
let gamesB1 = new Array();
let gamesB2 = new Array();
let gamesB3 = new Array();
let gamesB4 = new Array();

function gameSubA1() {
    if(groupA[0].par_g.length != 0) {
        for(let i = 0; i < groupA[0].par_g.length; i++) {
            for(let j = 0; j < groupA[0].par_g.length; j++) {
                if(groupA[0].par_g[i].id_p != groupA[0].par_g[j].id_p && groupA[0].par_g[i].id_p < groupA[0].par_g[j].id_p) {
                    gamesA1.push(new Game("", new GameTeam( groupA[0].par_g[i].id_p, 0, 0, 0 ),  new GameTeam( groupA[0].par_g[j].id_p, 0, 0, 0 ) ) );
                }
            }
        }
    }
    for(let i = 0; i < gamesA1.length; i++) {
        gamesA1[i].id_pj = "P" + (i+1);
    }
    return gamesA1;
};

// function gameSubA1() {
//     if(groupA[0].par_g.length != 0) {
//         for(let i = 0; i < groupA[0].par_g.length; i++) {
//             for(let j = 0; j < groupA[0].par_g.length; j++) {
//                 if(groupA[0].par_g[i].id_p != groupA[0].par_g[j].id_p && groupA[0].par_g[i].id_p < groupA[0].par_g[j].id_p) {
//                     gamesA1.push(new Game("", new GameTeam( groupA[0].par_g[i].id_p, 0, 0, 0 ),  new GameTeam( groupA[0].par_g[j].id_p, 0, 0, 0 ) ) );
//                 }
//             }
//         }
//     }
//     for(let i = 0; i < gamesA1.length; i++) {
//         gamesA1[i].id_pj = "P" + (i+1);
//     }
//     return gamesA1;
// };

function gameSubA2() {
    if(groupA[1].par_g.length != 0) {
        for(let i = 0; i < groupA[1].par_g.length; i++) {
            for(let j = 0; j < groupA[1].par_g.length; j++) {
                if(groupA[1].par_g[i].id_p != groupA[1].par_g[j].id_p && groupA[1].par_g[i].id_p < groupA[1].par_g[j].id_p) {
                    gamesA2.push(new Game("", new GameTeam( groupA[1].par_g[i].id_p, 0, 0, 0 ),  new GameTeam( groupA[1].par_g[j].id_p, 0, 0, 0 ) ) );
                }
            }
        }
    }
    for(let i = 0; i < gamesA2.length; i++) {
        gamesA2[i].id_pj = "P" + (i+1);
    }
    return gamesA2;
};
function gameSubA3() {
    if(groupA[2].par_g.length != 0) {
        for(let i = 0; i < groupA[2].par_g.length; i++) {
            for(let j = 0; j < groupA[2].par_g.length; j++) {
                if(groupA[2].par_g[i].id_p != groupA[2].par_g[j].id_p && groupA[2].par_g[i].id_p < groupA[2].par_g[j].id_p) {
                    gamesA3.push(new Game("", new GameTeam( groupA[2].par_g[i].id_p, 0, 0, 0 ),  new GameTeam( groupA[2].par_g[j].id_p, 0, 0, 0 ) ) );
                }
            }
        }
    }
    for(let i = 0; i < gamesA3.length; i++) {
        gamesA3[i].id_pj = "P" + (i+1);
    }
    return gamesA3;
};
function gameSubA4() {
    if(groupA[3].par_g.length != 0) {
        for(let i = 0; i < groupA[3].par_g.length; i++) {
            for(let j = 0; j < groupA[3].par_g.length; j++) {
                if(groupA[3].par_g[i].id_p != groupA[3].par_g[j].id_p && groupA[3].par_g[i].id_p < groupA[3].par_g[j].id_p) {
                    gamesA4.push(new Game("", new GameTeam( groupA[3].par_g[i].id_p, 0, 0, 0 ),  new GameTeam( groupA[3].par_g[j].id_p, 0, 0, 0 ) ) );
                }
            }
        }
    }
    for(let i = 0; i < gamesA4.length; i++) {
        gamesA4[i].id_pj = "P" + (i+1);
    }
    return gamesA4;
};
function gameSubB1() {
    if(groupB[0].par_g.length != 0) {
        for(let i = 0; i < groupB[0].par_g.length; i++) {
            for(let j = 0; j < groupB[0].par_g.length; j++) {
                if(groupB[0].par_g[i].id_p != groupB[0].par_g[j].id_p && groupB[0].par_g[i].id_p < groupB[0].par_g[j].id_p) {
                    gamesB1.push(new Game("", new GameTeam( groupB[0].par_g[i].id_p, 0, 0, 0 ),  new GameTeam( groupB[0].par_g[j].id_p, 0, 0, 0 ) ) );
                }
            }
        }
    }
    for(let i = 0; i < gamesB1.length; i++) {
        gamesB1[i].id_pj = "P" + (i+1);
    }
    return gamesB1;
};
function gameSubB2() {
    if(groupB[1].par_g.length != 0) {
        for(let i = 0; i < groupB[1].par_g.length; i++) {
            for(let j = 0; j < groupB[1].par_g.length; j++) {
                if(groupB[1].par_g[i].id_p != groupB[1].par_g[j].id_p && groupB[1].par_g[i].id_p < groupB[1].par_g[j].id_p) {
                    gamesB2.push(new Game("", new GameTeam( groupB[1].par_g[i].id_p, 0, 0, 0 ),  new GameTeam( groupB[1].par_g[j].id_p, 0, 0, 0 ) ) );
                }
            }
        }
    }
    for(let i = 0; i < gamesB2.length; i++) {
        gamesB2[i].id_pj = "P" + (i+1);
    }
    return gamesB2;
};
function gameSubB3() {
    if(groupB[2].par_g.length != 0) {
        for(let i = 0; i < groupB[2].par_g.length; i++) {
            for(let j = 0; j < groupB[2].par_g.length; j++) {
                if(groupB[2].par_g[i].id_p != groupB[2].par_g[j].id_p && groupB[2].par_g[i].id_p < groupB[2].par_g[j].id_p) {
                    gamesB3.push(new Game("", new GameTeam( groupB[2].par_g[i].id_p, 0, 0, 0 ),  new GameTeam( groupB[2].par_g[j].id_p, 0, 0, 0 ) ) );
                }
            }
        }
    }
    for(let i = 0; i < gamesB3.length; i++) {
        gamesB3[i].id_pj = "P" + (i+1);
    }
    return gamesB3;
};
function gameSubB4() {
    if(groupB[3].par_g.length != 0) {
        for(let i = 0; i < groupB[3].par_g.length; i++) {
            for(let j = 0; j < groupB[3].par_g.length; j++) {
                if(groupB[3].par_g[i].id_p != groupB[3].par_g[j].id_p && groupB[3].par_g[i].id_p < groupB[3].par_g[j].id_p) {
                    gamesB4.push(new Game("", new GameTeam( groupB[3].par_g[i].id_p, 0, 0, 0 ),  new GameTeam( groupB[3].par_g[j].id_p, 0, 0, 0 ) ) );
                }
            }
        }
    }
    for(let i = 0; i < gamesB4.length; i++) {
        gamesB4[i].id_pj = "P" + (i+1);
    }
    return gamesB4;
};

console.log( gameSubA1() );

// Puntaje para ranking ELO

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

// Tablas de Posiciones
let tablePosA1 = new Array(6);
let tablePosA2 = new Array(6);
let tablePosA3 = new Array(5);
let tablePosA4 = new Array(5);
let tablePosB1 = new Array(6);
let tablePosB2 = new Array(6);
let tablePosB3 = new Array(6);
let tablePosB4 = new Array(6);

tablePosA1 = [
    new Position(1, "G00", 0, 0, 0, 0, 0, 0), 
    new Position(2, "G00", 0, 0, 0, 0, 0, 0), 
    new Position(3, "G00", 0, 0, 0, 0, 0, 0), 
    new Position(4, "G00", 0, 0, 0, 0, 0, 0), 
    new Position(5, "G00", 0, 0, 0, 0, 0, 0), 
    new Position(6, "G00", 0, 0, 0, 0, 0, 0)];
tablePosA2 = [
    new Position(1, "G00", 0, 0, 0, 0, 0, 0), 
    new Position(2, "G00", 0, 0, 0, 0, 0, 0), 
    new Position(3, "G00", 0, 0, 0, 0, 0, 0), 
    new Position(4, "G00", 0, 0, 0, 0, 0, 0), 
    new Position(5, "G00", 0, 0, 0, 0, 0, 0), 
    new Position(6, "G00", 0, 0, 0, 0, 0, 0)];
tablePosA3 = [
    new Position(1, "G00", 0, 0, 0, 0, 0, 0), 
    new Position(2, "G00", 0, 0, 0, 0, 0, 0), 
    new Position(3, "G00", 0, 0, 0, 0, 0, 0), 
    new Position(4, "G00", 0, 0, 0, 0, 0, 0), 
    new Position(5, "G00", 0, 0, 0, 0, 0, 0)];
tablePosA4 = [
    new Position(1, "G00", 0, 0, 0, 0, 0, 0), 
    new Position(2, "G00", 0, 0, 0, 0, 0, 0), 
    new Position(3, "G00", 0, 0, 0, 0, 0, 0), 
    new Position(4, "G00", 0, 0, 0, 0, 0, 0), 
    new Position(5, "G00", 0, 0, 0, 0, 0, 0)];
tablePosB1 = [
    new Position(1, "G00", 0, 0, 0, 0, 0, 0), 
    new Position(2, "G00", 0, 0, 0, 0, 0, 0), 
    new Position(3, "G00", 0, 0, 0, 0, 0, 0), 
    new Position(4, "G00", 0, 0, 0, 0, 0, 0), 
    new Position(5, "G00", 0, 0, 0, 0, 0, 0), 
    new Position(6, "G00", 0, 0, 0, 0, 0, 0)];
tablePosB2 = [
    new Position(1, "G00", 0, 0, 0, 0, 0, 0), 
    new Position(2, "G00", 0, 0, 0, 0, 0, 0), 
    new Position(3, "G00", 0, 0, 0, 0, 0, 0), 
    new Position(4, "G00", 0, 0, 0, 0, 0, 0), 
    new Position(5, "G00", 0, 0, 0, 0, 0, 0), 
    new Position(6, "G00", 0, 0, 0, 0, 0, 0)];
tablePosB3 = [
    new Position(1, "G00", 0, 0, 0, 0, 0, 0), 
    new Position(2, "G00", 0, 0, 0, 0, 0, 0), 
    new Position(3, "G00", 0, 0, 0, 0, 0, 0), 
    new Position(4, "G00", 0, 0, 0, 0, 0, 0), 
    new Position(5, "G00", 0, 0, 0, 0, 0, 0), 
    new Position(6, "G00", 0, 0, 0, 0, 0, 0)];
tablePosB4 = [
    new Position(1, "G00", 0, 0, 0, 0, 0, 0), 
    new Position(2, "G00", 0, 0, 0, 0, 0, 0), 
    new Position(3, "G00", 0, 0, 0, 0, 0, 0), 
    new Position(4, "G00", 0, 0, 0, 0, 0, 0), 
    new Position(5, "G00", 0, 0, 0, 0, 0, 0), 
    new Position(6, "G00", 0, 0, 0, 0, 0, 0)];

function datosPorGrupo() {

}

console.log(tablePosA1);
console.log(tablePosA2[3].ord_po);
console.log( datosPorGrupo() );

// *********************************************
// *********************************************