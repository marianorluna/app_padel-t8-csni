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
// *********************************************
// Variables generales Fixture
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

// IMPORTANTE PARA LOS CÁLCULOS!!!
window.addEventListener("load", groupLeaguesA() );      //carga variable: groupSubA
window.addEventListener("load", groupLeaguesB() );      //carga variable: groupSubB
window.addEventListener("load", parejasRankingA() );    //carga variable: parejasJugRankA   
window.addEventListener("load", parejasRankingB() );    //carga variable: parejasJugRankB

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

// IMPORTANTE PARA LOS CÁLCULOS!!!
window.addEventListener("load", parejasGrupoA() );      //carga variable: groupA
window.addEventListener("load", parejasGrupoB() );      //carga variable: groupB

// Programación de partidos
// Partido jugado por defecto
let gameDef = new Game(
    "P0", 
    new GameTeam("P00", 0, 0, 0), 
    new GameTeam("P00", 0, 0, 0)
    )
;
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
                game.play = false;
                //console.log("UN SET SIN DEFINIR");
            }
        }
    }
    else {
        game.play = false;
        //console.log("FALTAN INGRESAR DATOS");
    }
    if(game.team1.swin_t == 2) {
        game.play = true;
        game.team1.win_t = true;
        //console.log("GANÓ TEAM " + game.team1.id_t);
    }
    else if(game.team2.swin_t == 2) {
        game.play = true;
        game.team2.win_t = true;
        //console.log("GANÓ TEAM " + game.team2.id_t);
    }
    else {
        //console.log("NO SE HA JUGADO AÚN");
    }
};

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
        //se agregan los resultados desde el archivo data.js
        gamesA1[i].team1.sets_t[0] = resGamesA1[i].s1_t1;
        gamesA1[i].team2.sets_t[0] = resGamesA1[i].s1_t2;
        gamesA1[i].team1.sets_t[1] = resGamesA1[i].s2_t1;
        gamesA1[i].team2.sets_t[1] = resGamesA1[i].s2_t2;
        gamesA1[i].team1.sets_t[2] = resGamesA1[i].s3_t1;
        gamesA1[i].team2.sets_t[2] = resGamesA1[i].s3_t2;
        gamesA1[i].team1.gwin_t = resGamesA1[i].s1_t1 + resGamesA1[i].s2_t1 + resGamesA1[i].s3_t1;
        gamesA1[i].team2.gwin_t = resGamesA1[i].s1_t2 + resGamesA1[i].s2_t2 + resGamesA1[i].s3_t2;
        gameJ(gamesA1[i]);
    }
    return gamesA1;
};
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
        //se agregan los resultados desde el archivo data.js
        gamesA2[i].team1.sets_t[0] = resGamesA2[i].s1_t1;
        gamesA2[i].team2.sets_t[0] = resGamesA2[i].s1_t2;
        gamesA2[i].team1.sets_t[1] = resGamesA2[i].s2_t1;
        gamesA2[i].team2.sets_t[1] = resGamesA2[i].s2_t2;
        gamesA2[i].team1.sets_t[2] = resGamesA2[i].s3_t1;
        gamesA2[i].team2.sets_t[2] = resGamesA2[i].s3_t2;
        gamesA2[i].team1.gwin_t = resGamesA2[i].s1_t1 + resGamesA2[i].s2_t1 + resGamesA2[i].s3_t1;
        gamesA2[i].team2.gwin_t = resGamesA2[i].s1_t2 + resGamesA2[i].s2_t2 + resGamesA2[i].s3_t2;
        gameJ(gamesA2[i]);
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
        //se agregan los resultados desde el archivo data.js
        gamesA3[i].team1.sets_t[0] = resGamesA3[i].s1_t1;
        gamesA3[i].team2.sets_t[0] = resGamesA3[i].s1_t2;
        gamesA3[i].team1.sets_t[1] = resGamesA3[i].s2_t1;
        gamesA3[i].team2.sets_t[1] = resGamesA3[i].s2_t2;
        gamesA3[i].team1.sets_t[2] = resGamesA3[i].s3_t1;
        gamesA3[i].team2.sets_t[2] = resGamesA3[i].s3_t2;
        gamesA3[i].team1.gwin_t = resGamesA3[i].s1_t1 + resGamesA3[i].s2_t1 + resGamesA3[i].s3_t1;
        gamesA3[i].team2.gwin_t = resGamesA3[i].s1_t2 + resGamesA3[i].s2_t2 + resGamesA3[i].s3_t2;
        gameJ(gamesA3[i]);
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
        //se agregan los resultados desde el archivo data.js
        gamesA4[i].team1.sets_t[0] = resGamesA4[i].s1_t1;
        gamesA4[i].team2.sets_t[0] = resGamesA4[i].s1_t2;
        gamesA4[i].team1.sets_t[1] = resGamesA4[i].s2_t1;
        gamesA4[i].team2.sets_t[1] = resGamesA4[i].s2_t2;
        gamesA4[i].team1.sets_t[2] = resGamesA4[i].s3_t1;
        gamesA4[i].team2.sets_t[2] = resGamesA4[i].s3_t2;
        gamesA4[i].team1.gwin_t = resGamesA4[i].s1_t1 + resGamesA4[i].s2_t1 + resGamesA4[i].s3_t1;
        gamesA4[i].team2.gwin_t = resGamesA4[i].s1_t2 + resGamesA4[i].s2_t2 + resGamesA4[i].s3_t2;
        gameJ(gamesA4[i]);
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
        //se agregan los resultados desde el archivo data.js
        gamesB1[i].team1.sets_t[0] = resGamesB1[i].s1_t1;
        gamesB1[i].team2.sets_t[0] = resGamesB1[i].s1_t2;
        gamesB1[i].team1.sets_t[1] = resGamesB1[i].s2_t1;
        gamesB1[i].team2.sets_t[1] = resGamesB1[i].s2_t2;
        gamesB1[i].team1.sets_t[2] = resGamesB1[i].s3_t1;
        gamesB1[i].team2.sets_t[2] = resGamesB1[i].s3_t2;
        gamesB1[i].team1.gwin_t = resGamesB1[i].s1_t1 + resGamesB1[i].s2_t1 + resGamesB1[i].s3_t1;
        gamesB1[i].team2.gwin_t = resGamesB1[i].s1_t2 + resGamesB1[i].s2_t2 + resGamesB1[i].s3_t2;
        gameJ(gamesB1[i]);
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
        //se agregan los resultados desde el archivo data.js
        gamesB2[i].team1.sets_t[0] = resGamesB2[i].s1_t1;
        gamesB2[i].team2.sets_t[0] = resGamesB2[i].s1_t2;
        gamesB2[i].team1.sets_t[1] = resGamesB2[i].s2_t1;
        gamesB2[i].team2.sets_t[1] = resGamesB2[i].s2_t2;
        gamesB2[i].team1.sets_t[2] = resGamesB2[i].s3_t1;
        gamesB2[i].team2.sets_t[2] = resGamesB2[i].s3_t2;
        gamesB2[i].team1.gwin_t = resGamesB2[i].s1_t1 + resGamesB2[i].s2_t1 + resGamesB2[i].s3_t1;
        gamesB2[i].team2.gwin_t = resGamesB2[i].s1_t2 + resGamesB2[i].s2_t2 + resGamesB2[i].s3_t2;
        gameJ(gamesB2[i]);
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
        //se agregan los resultados desde el archivo data.js
        gamesB3[i].team1.sets_t[0] = resGamesB3[i].s1_t1;
        gamesB3[i].team2.sets_t[0] = resGamesB3[i].s1_t2;
        gamesB3[i].team1.sets_t[1] = resGamesB3[i].s2_t1;
        gamesB3[i].team2.sets_t[1] = resGamesB3[i].s2_t2;
        gamesB3[i].team1.sets_t[2] = resGamesB3[i].s3_t1;
        gamesB3[i].team2.sets_t[2] = resGamesB3[i].s3_t2;
        gamesB3[i].team1.gwin_t = resGamesB3[i].s1_t1 + resGamesB3[i].s2_t1 + resGamesB3[i].s3_t1;
        gamesB3[i].team2.gwin_t = resGamesB3[i].s1_t2 + resGamesB3[i].s2_t2 + resGamesB3[i].s3_t2;
        gameJ(gamesB3[i]);
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
        //se agregan los resultados desde el archivo data.js
        gamesB4[i].team1.sets_t[0] = resGamesB4[i].s1_t1;
        gamesB4[i].team2.sets_t[0] = resGamesB4[i].s1_t2;
        gamesB4[i].team1.sets_t[1] = resGamesB4[i].s2_t1;
        gamesB4[i].team2.sets_t[1] = resGamesB4[i].s2_t2;
        gamesB4[i].team1.sets_t[2] = resGamesB4[i].s3_t1;
        gamesB4[i].team2.sets_t[2] = resGamesB4[i].s3_t2;
        gamesB4[i].team1.gwin_t = resGamesB4[i].s1_t1 + resGamesB4[i].s2_t1 + resGamesB4[i].s3_t1;
        gamesB4[i].team2.gwin_t = resGamesB4[i].s1_t2 + resGamesB4[i].s2_t2 + resGamesB4[i].s3_t2;
        gameJ(gamesB4[i]);
    }
    return gamesB4;
};

// IMPORTANTE PARA LOS CÁLCULOS!!!
window.addEventListener("load", gameSubA1() );      //carga variable: gamesA1 (15)
window.addEventListener("load", gameSubA2() );      //carga variable: gamesA2 (15)
window.addEventListener("load", gameSubA3() );      //carga variable: gamesA3 (10)
window.addEventListener("load", gameSubA4() );      //carga variable: gamesA4 (10)
window.addEventListener("load", gameSubB1() );      //carga variable: gamesB1 (15)
window.addEventListener("load", gameSubB2() );      //carga variable: gamesB2 (15)
window.addEventListener("load", gameSubB3() );      //carga variable: gamesB3 (15)
window.addEventListener("load", gameSubB4() );      //carga variable: gamesB4 (15)

// Puntaje para ranking ELO
let puntos = [
    {pj: 2},
    {pg: 10},
    {oct_p: 10},
    {oct_g: 50},
    {cto_p: 10},
    {cto_g: 100},
    {sem_p: 10},
    {sem_g: 200},
    {fin_p: 10},
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
    new Position(1), 
    new Position(2), 
    new Position(3), 
    new Position(4), 
    new Position(5), 
    new Position(6)];
tablePosA2 = [
    new Position(1), 
    new Position(2), 
    new Position(3), 
    new Position(4), 
    new Position(5), 
    new Position(6)];
tablePosA3 = [
    new Position(1), 
    new Position(2), 
    new Position(3), 
    new Position(4), 
    new Position(5)];
tablePosA4 = [
    new Position(1), 
    new Position(2), 
    new Position(3), 
    new Position(4), 
    new Position(5)];
tablePosB1 = [
    new Position(1), 
    new Position(2), 
    new Position(3), 
    new Position(4), 
    new Position(5), 
    new Position(6)];
tablePosB2 = [
    new Position(1), 
    new Position(2), 
    new Position(3), 
    new Position(4), 
    new Position(5), 
    new Position(6)];
tablePosB3 = [
    new Position(1), 
    new Position(2), 
    new Position(3), 
    new Position(4), 
    new Position(5), 
    new Position(6)];
tablePosB4 = [
    new Position(1), 
    new Position(2), 
    new Position(3), 
    new Position(4), 
    new Position(5), 
    new Position(6)];

function posicGA1() {
    for(let i = 0; i < tablePosA1.length; i++) {
        tablePosA1[i].ord_po = (i + 1);
        tablePosA1[i].id_po = groupA[0].par_g[i].id_p;
    }
    return tablePosA1;
}
function posicGA2() {
    for(let i = 0; i < tablePosA2.length; i++) {
        tablePosA2[i].ord_po = (i + 1);
        tablePosA2[i].id_po = groupA[1].par_g[i].id_p;
    }
    return tablePosA2;
}
function posicGA3() {
    for(let i = 0; i < tablePosA3.length; i++) {
        tablePosA3[i].ord_po = (i + 1);
        tablePosA3[i].id_po = groupA[2].par_g[i].id_p;
    }
    return tablePosA3;
}
function posicGA4() {
    for(let i = 0; i < tablePosA4.length; i++) {
        tablePosA4[i].ord_po = (i + 1);
        tablePosA4[i].id_po = groupA[3].par_g[i].id_p;
    }
    return tablePosA4;
}
function posicGB1() {
    for(let i = 0; i < tablePosB1.length; i++) {
        tablePosB1[i].ord_po = (i + 1);
        tablePosB1[i].id_po = groupB[0].par_g[i].id_p;
    }
    return tablePosB1;
}
function posicGB2() {
    for(let i = 0; i < tablePosB2.length; i++) {
        tablePosB2[i].ord_po = (i + 1);
        tablePosB2[i].id_po = groupB[1].par_g[i].id_p;
    }
    return tablePosB2;
}
function posicGB3() {
    for(let i = 0; i < tablePosB3.length; i++) {
        tablePosB3[i].ord_po = (i + 1);
        tablePosB3[i].id_po = groupB[2].par_g[i].id_p;
    }
    return tablePosB3;
}
function posicGB4() {
    for(let i = 0; i < tablePosB4.length; i++) {
        tablePosB4[i].ord_po = (i + 1);
        tablePosB4[i].id_po = groupB[3].par_g[i].id_p;
    }
    return tablePosB4;
}

// IMPORTANTE PARA LOS CÁLCULOS!!!
window.addEventListener("load", posicGA1() );      //carga variable: tablePosA1
window.addEventListener("load", posicGA2() );      //carga variable: tablePosA2
window.addEventListener("load", posicGA3() );      //carga variable: tablePosA3
window.addEventListener("load", posicGA4() );      //carga variable: tablePosA4
window.addEventListener("load", posicGB1() );      //carga variable: tablePosB1
window.addEventListener("load", posicGB2() );      //carga variable: tablePosB2
window.addEventListener("load", posicGB3() );      //carga variable: tablePosB3
window.addEventListener("load", posicGB4() );      //carga variable: tablePosB4

function dataPosA1() {
    for(let j = 0; j < tablePosA1.length; j++) {
        for(let p = 0; p < gamesA1.length; p++) {
            if(gamesA1[p].play == true) {
                //suma los partidos jugados en la tabla de posiciones
                if(gamesA1[p].team1.id_t == groupA[0].par_g[j].id_p || gamesA1[p].team2.id_t == groupA[0].par_g[j].id_p) {
                    tablePosA1[j].pj_po++;
                }
                //suma los partidos ganados en la tabla de posiciones
                if( (gamesA1[p].team1.win_t == true && gamesA1[p].team1.id_t == tablePosA1[j].id_po) || (gamesA1[p].team2.win_t == true && gamesA1[p].team2.id_t == tablePosA1[j].id_po) ) {
                    tablePosA1[j].pg_po++;
                    //suma puntos por partido ganado a la tabla
                    tablePosA1[j].pts_po = tablePosA1[j].pts_po + puntos[1].pg;
                }
                //suma los partidos perdidos en la tabla de posiciones
                if( (gamesA1[p].team1.win_t == false && gamesA1[p].team1.id_t == tablePosA1[j].id_po) || (gamesA1[p].team2.win_t == false && gamesA1[p].team2.id_t == tablePosA1[j].id_po) ) {
                    tablePosA1[j].pp_po++;
                    //suma puntos por partido perdido a la tabla
                    tablePosA1[j].pts_po = tablePosA1[j].pts_po + puntos[0].pj;
                }
                //cantidad de sets y games en la tabla de posiciones
                if(gamesA1[p].team1.id_t == tablePosA1[j].id_po) {
                    //suma los set ganados
                    tablePosA1[j].sf_po = tablePosA1[j].sf_po + gamesA1[p].team1.swin_t;
                    //suma los set perdidos
                    tablePosA1[j].sc_po = tablePosA1[j].sc_po + gamesA1[p].team2.swin_t;
                    //suma los games ganados
                    for(let s = 0; s < gamesA1[p].team1.sets_t.length; s++) {
                        tablePosA1[j].gf_po = tablePosA1[j].gf_po + gamesA1[p].team1.sets_t[s];
                    }
                    //suma los games ganados
                    for(let s = 0; s < gamesA1[p].team1.sets_t.length; s++) {
                        tablePosA1[j].gc_po = tablePosA1[j].gc_po + gamesA1[p].team2.sets_t[s];
                    }
                }
                else if(gamesA1[p].team2.id_t == tablePosA1[j].id_po) {
                    //suma los set ganados
                    tablePosA1[j].sf_po = tablePosA1[j].sf_po + gamesA1[p].team2.swin_t;
                    //suma los set perdidos
                    tablePosA1[j].sc_po = tablePosA1[j].sc_po + gamesA1[p].team1.swin_t;
                    //suma los games ganados
                    for(let s = 0; s < gamesA1[p].team2.sets_t.length; s++) {
                        tablePosA1[j].gf_po = tablePosA1[j].gf_po + gamesA1[p].team2.sets_t[s];
                    }
                    //suma los games ganados
                    for(let s = 0; s < gamesA1[p].team2.sets_t.length; s++) {
                        tablePosA1[j].gc_po = tablePosA1[j].gc_po + gamesA1[p].team1.sets_t[s];
                    }
                }

            }
        }
        //suma la diferencia de sets en la tabla de posiciones
        tablePosA1[j].ds_po = tablePosA1[j].ds_po + tablePosA1[j].sf_po - tablePosA1[j].sc_po;
        //suma la diferencia de games en la tabla de posiciones
        tablePosA1[j].dg_po = tablePosA1[j].dg_po + tablePosA1[j].gf_po - tablePosA1[j].gc_po;
    }
    return tablePosA1;
}
function dataPosA2() {
    for(let j = 0; j < tablePosA2.length; j++) {
        for(let p = 0; p < gamesA2.length; p++) {
            if(gamesA2[p].play == true) {
                //suma los partidos jugados en la tabla de posiciones
                if(gamesA2[p].team1.id_t == groupA[1].par_g[j].id_p || gamesA2[p].team2.id_t == groupA[1].par_g[j].id_p) {
                    tablePosA2[j].pj_po++;
                }
                //suma los partidos ganados en la tabla de posiciones
                if( (gamesA2[p].team1.win_t == true && gamesA2[p].team1.id_t == tablePosA2[j].id_po) || (gamesA2[p].team2.win_t == true && gamesA2[p].team2.id_t == tablePosA2[j].id_po) ) {
                    tablePosA2[j].pg_po++;
                    //suma puntos por partido ganado a la tabla
                    tablePosA2[j].pts_po = tablePosA2[j].pts_po + puntos[1].pg;
                }
                //suma los partidos perdidos en la tabla de posiciones
                if( (gamesA2[p].team1.win_t == false && gamesA2[p].team1.id_t == tablePosA2[j].id_po) || (gamesA2[p].team2.win_t == false && gamesA2[p].team2.id_t == tablePosA2[j].id_po) ) {
                    tablePosA2[j].pp_po++;
                    //suma puntos por partido perdido a la tabla
                    tablePosA2[j].pts_po = tablePosA2[j].pts_po + puntos[0].pj;
                }
                //cantidad de sets y games en la tabla de posiciones
                if(gamesA2[p].team1.id_t == tablePosA2[j].id_po) {
                    //suma los set ganados
                    tablePosA2[j].sf_po = tablePosA2[j].sf_po + gamesA2[p].team1.swin_t;
                    //suma los set perdidos
                    tablePosA2[j].sc_po = tablePosA2[j].sc_po + gamesA2[p].team2.swin_t;
                    //suma los games ganados
                    for(let s = 0; s < gamesA2[p].team1.sets_t.length; s++) {
                        tablePosA2[j].gf_po = tablePosA2[j].gf_po + gamesA2[p].team1.sets_t[s];
                    }
                    //suma los games ganados
                    for(let s = 0; s < gamesA2[p].team1.sets_t.length; s++) {
                        tablePosA2[j].gc_po = tablePosA2[j].gc_po + gamesA2[p].team2.sets_t[s];
                    }
                }
                else if(gamesA2[p].team2.id_t == tablePosA2[j].id_po) {
                    //suma los set ganados
                    tablePosA2[j].sf_po = tablePosA2[j].sf_po + gamesA2[p].team2.swin_t;
                    //suma los set perdidos
                    tablePosA2[j].sc_po = tablePosA2[j].sc_po + gamesA2[p].team1.swin_t;
                    //suma los games ganados
                    for(let s = 0; s < gamesA2[p].team2.sets_t.length; s++) {
                        tablePosA2[j].gf_po = tablePosA2[j].gf_po + gamesA2[p].team2.sets_t[s];
                    }
                    //suma los games ganados
                    for(let s = 0; s < gamesA2[p].team2.sets_t.length; s++) {
                        tablePosA2[j].gc_po = tablePosA2[j].gc_po + gamesA2[p].team1.sets_t[s];
                    }
                }

            }
        }
        //suma la diferencia de sets en la tabla de posiciones
        tablePosA2[j].ds_po = tablePosA2[j].ds_po + tablePosA2[j].sf_po - tablePosA2[j].sc_po;
        //suma la diferencia de games en la tabla de posiciones
        tablePosA2[j].dg_po = tablePosA2[j].dg_po + tablePosA2[j].gf_po - tablePosA2[j].gc_po;
    }
    return tablePosA2;
}
function dataPosA3() {
    for(let j = 0; j < tablePosA3.length; j++) {
        for(let p = 0; p < gamesA3.length; p++) {
            if(gamesA3[p].play == true) {
                //suma los partidos jugados en la tabla de posiciones
                if(gamesA3[p].team1.id_t == groupA[2].par_g[j].id_p || gamesA3[p].team2.id_t == groupA[2].par_g[j].id_p) {
                    tablePosA3[j].pj_po++;
                }
                //suma los partidos ganados en la tabla de posiciones
                if( (gamesA3[p].team1.win_t == true && gamesA3[p].team1.id_t == tablePosA3[j].id_po) || (gamesA3[p].team2.win_t == true && gamesA3[p].team2.id_t == tablePosA3[j].id_po) ) {
                    tablePosA3[j].pg_po++;
                    //suma puntos por partido ganado a la tabla
                    tablePosA3[j].pts_po = tablePosA3[j].pts_po + puntos[1].pg;
                }
                //suma los partidos perdidos en la tabla de posiciones
                if( (gamesA3[p].team1.win_t == false && gamesA3[p].team1.id_t == tablePosA3[j].id_po) || (gamesA3[p].team2.win_t == false && gamesA3[p].team2.id_t == tablePosA3[j].id_po) ) {
                    tablePosA3[j].pp_po++;
                    //suma puntos por partido perdido a la tabla
                    tablePosA3[j].pts_po = tablePosA3[j].pts_po + puntos[0].pj;
                }
                //cantidad de sets y games en la tabla de posiciones
                if(gamesA3[p].team1.id_t == tablePosA3[j].id_po) {
                    //suma los set ganados
                    tablePosA3[j].sf_po = tablePosA3[j].sf_po + gamesA3[p].team1.swin_t;
                    //suma los set perdidos
                    tablePosA3[j].sc_po = tablePosA3[j].sc_po + gamesA3[p].team2.swin_t;
                    //suma los games ganados
                    for(let s = 0; s < gamesA3[p].team1.sets_t.length; s++) {
                        tablePosA3[j].gf_po = tablePosA3[j].gf_po + gamesA3[p].team1.sets_t[s];
                    }
                    //suma los games ganados
                    for(let s = 0; s < gamesA3[p].team1.sets_t.length; s++) {
                        tablePosA3[j].gc_po = tablePosA3[j].gc_po + gamesA3[p].team2.sets_t[s];
                    }
                }
                else if(gamesA3[p].team2.id_t == tablePosA3[j].id_po) {
                    //suma los set ganados
                    tablePosA3[j].sf_po = tablePosA3[j].sf_po + gamesA3[p].team2.swin_t;
                    //suma los set perdidos
                    tablePosA3[j].sc_po = tablePosA3[j].sc_po + gamesA3[p].team1.swin_t;
                    //suma los games ganados
                    for(let s = 0; s < gamesA3[p].team2.sets_t.length; s++) {
                        tablePosA3[j].gf_po = tablePosA3[j].gf_po + gamesA3[p].team2.sets_t[s];
                    }
                    //suma los games ganados
                    for(let s = 0; s < gamesA3[p].team2.sets_t.length; s++) {
                        tablePosA3[j].gc_po = tablePosA3[j].gc_po + gamesA3[p].team1.sets_t[s];
                    }
                }

            }
        }
        //suma la diferencia de sets en la tabla de posiciones
        tablePosA3[j].ds_po = tablePosA3[j].ds_po + tablePosA3[j].sf_po - tablePosA3[j].sc_po;
        //suma la diferencia de games en la tabla de posiciones
        tablePosA3[j].dg_po = tablePosA3[j].dg_po + tablePosA3[j].gf_po - tablePosA3[j].gc_po;
    }
    return tablePosA3;
}
function dataPosA4() {
    for(let j = 0; j < tablePosA4.length; j++) {
        for(let p = 0; p < gamesA4.length; p++) {
            if(gamesA4[p].play == true) {
                //suma los partidos jugados en la tabla de posiciones
                if(gamesA4[p].team1.id_t == groupA[3].par_g[j].id_p || gamesA4[p].team2.id_t == groupA[3].par_g[j].id_p) {
                    tablePosA4[j].pj_po++;
                }
                //suma los partidos ganados en la tabla de posiciones
                if( (gamesA4[p].team1.win_t == true && gamesA4[p].team1.id_t == tablePosA4[j].id_po) || (gamesA4[p].team2.win_t == true && gamesA4[p].team2.id_t == tablePosA4[j].id_po) ) {
                    tablePosA4[j].pg_po++;
                    //suma puntos por partido ganado a la tabla
                    tablePosA4[j].pts_po = tablePosA4[j].pts_po + puntos[1].pg;
                }
                //suma los partidos perdidos en la tabla de posiciones
                if( (gamesA4[p].team1.win_t == false && gamesA4[p].team1.id_t == tablePosA4[j].id_po) || (gamesA4[p].team2.win_t == false && gamesA4[p].team2.id_t == tablePosA4[j].id_po) ) {
                    tablePosA4[j].pp_po++;
                    //suma puntos por partido perdido a la tabla
                    tablePosA4[j].pts_po = tablePosA4[j].pts_po + puntos[0].pj;
                }
                //cantidad de sets y games en la tabla de posiciones
                if(gamesA4[p].team1.id_t == tablePosA4[j].id_po) {
                    //suma los set ganados
                    tablePosA4[j].sf_po = tablePosA4[j].sf_po + gamesA4[p].team1.swin_t;
                    //suma los set perdidos
                    tablePosA4[j].sc_po = tablePosA4[j].sc_po + gamesA4[p].team2.swin_t;
                    //suma los games ganados
                    for(let s = 0; s < gamesA4[p].team1.sets_t.length; s++) {
                        tablePosA4[j].gf_po = tablePosA4[j].gf_po + gamesA4[p].team1.sets_t[s];
                    }
                    //suma los games ganados
                    for(let s = 0; s < gamesA4[p].team1.sets_t.length; s++) {
                        tablePosA4[j].gc_po = tablePosA4[j].gc_po + gamesA4[p].team2.sets_t[s];
                    }
                }
                else if(gamesA4[p].team2.id_t == tablePosA4[j].id_po) {
                    //suma los set ganados
                    tablePosA4[j].sf_po = tablePosA4[j].sf_po + gamesA4[p].team2.swin_t;
                    //suma los set perdidos
                    tablePosA4[j].sc_po = tablePosA4[j].sc_po + gamesA4[p].team1.swin_t;
                    //suma los games ganados
                    for(let s = 0; s < gamesA4[p].team2.sets_t.length; s++) {
                        tablePosA4[j].gf_po = tablePosA4[j].gf_po + gamesA4[p].team2.sets_t[s];
                    }
                    //suma los games ganados
                    for(let s = 0; s < gamesA4[p].team2.sets_t.length; s++) {
                        tablePosA4[j].gc_po = tablePosA4[j].gc_po + gamesA4[p].team1.sets_t[s];
                    }
                }

            }
        }
        //suma la diferencia de sets en la tabla de posiciones
        tablePosA4[j].ds_po = tablePosA4[j].ds_po + tablePosA4[j].sf_po - tablePosA4[j].sc_po;
        //suma la diferencia de games en la tabla de posiciones
        tablePosA4[j].dg_po = tablePosA4[j].dg_po + tablePosA4[j].gf_po - tablePosA4[j].gc_po;
    }
    return tablePosA4;
}
function dataPosB1() {
    for(let j = 0; j < tablePosB1.length; j++) {
        for(let p = 0; p < gamesB1.length; p++) {
            if(gamesB1[p].play == true) {
                //suma los partidos jugados en la tabla de posiciones
                if(gamesB1[p].team1.id_t == groupB[0].par_g[j].id_p || gamesB1[p].team2.id_t == groupB[0].par_g[j].id_p) {
                    tablePosB1[j].pj_po++;
                }
                //suma los partidos ganados en la tabla de posiciones
                if( (gamesB1[p].team1.win_t == true && gamesB1[p].team1.id_t == tablePosB1[j].id_po) || (gamesB1[p].team2.win_t == true && gamesB1[p].team2.id_t == tablePosB1[j].id_po) ) {
                    tablePosB1[j].pg_po++;
                    //suma puntos por partido ganado a la tabla
                    tablePosB1[j].pts_po = tablePosB1[j].pts_po + puntos[1].pg;
                }
                //suma los partidos perdidos en la tabla de posiciones
                if( (gamesB1[p].team1.win_t == false && gamesB1[p].team1.id_t == tablePosB1[j].id_po) || (gamesB1[p].team2.win_t == false && gamesB1[p].team2.id_t == tablePosB1[j].id_po) ) {
                    tablePosB1[j].pp_po++;
                    //suma puntos por partido perdido a la tabla
                    tablePosB1[j].pts_po = tablePosB1[j].pts_po + puntos[0].pj;
                }
                //cantidad de sets y games en la tabla de posiciones
                if(gamesB1[p].team1.id_t == tablePosB1[j].id_po) {
                    //suma los set ganados
                    tablePosB1[j].sf_po = tablePosB1[j].sf_po + gamesB1[p].team1.swin_t;
                    //suma los set perdidos
                    tablePosB1[j].sc_po = tablePosB1[j].sc_po + gamesB1[p].team2.swin_t;
                    //suma los games ganados
                    for(let s = 0; s < gamesB1[p].team1.sets_t.length; s++) {
                        tablePosB1[j].gf_po = tablePosB1[j].gf_po + gamesB1[p].team1.sets_t[s];
                    }
                    //suma los games ganados
                    for(let s = 0; s < gamesB1[p].team1.sets_t.length; s++) {
                        tablePosB1[j].gc_po = tablePosB1[j].gc_po + gamesB1[p].team2.sets_t[s];
                    }
                }
                else if(gamesB1[p].team2.id_t == tablePosB1[j].id_po) {
                    //suma los set ganados
                    tablePosB1[j].sf_po = tablePosB1[j].sf_po + gamesB1[p].team2.swin_t;
                    //suma los set perdidos
                    tablePosB1[j].sc_po = tablePosB1[j].sc_po + gamesB1[p].team1.swin_t;
                    //suma los games ganados
                    for(let s = 0; s < gamesB1[p].team2.sets_t.length; s++) {
                        tablePosB1[j].gf_po = tablePosB1[j].gf_po + gamesB1[p].team2.sets_t[s];
                    }
                    //suma los games ganados
                    for(let s = 0; s < gamesB1[p].team2.sets_t.length; s++) {
                        tablePosB1[j].gc_po = tablePosB1[j].gc_po + gamesB1[p].team1.sets_t[s];
                    }
                }

            }
        }
        //suma la diferencia de sets en la tabla de posiciones
        tablePosB1[j].ds_po = tablePosB1[j].ds_po + tablePosB1[j].sf_po - tablePosB1[j].sc_po;
        //suma la diferencia de games en la tabla de posiciones
        tablePosB1[j].dg_po = tablePosB1[j].dg_po + tablePosB1[j].gf_po - tablePosB1[j].gc_po;
    }
    return tablePosB1;
}
function dataPosB2() {
    for(let j = 0; j < tablePosB2.length; j++) {
        for(let p = 0; p < gamesB2.length; p++) {
            if(gamesB2[p].play == true) {
                //suma los partidos jugados en la tabla de posiciones
                if(gamesB2[p].team1.id_t == groupB[1].par_g[j].id_p || gamesB2[p].team2.id_t == groupB[1].par_g[j].id_p) {
                    tablePosB2[j].pj_po++;
                }
                //suma los partidos ganados en la tabla de posiciones
                if( (gamesB2[p].team1.win_t == true && gamesB2[p].team1.id_t == tablePosB2[j].id_po) || (gamesB2[p].team2.win_t == true && gamesB2[p].team2.id_t == tablePosB2[j].id_po) ) {
                    tablePosB2[j].pg_po++;
                    //suma puntos por partido ganado a la tabla
                    tablePosB2[j].pts_po = tablePosB2[j].pts_po + puntos[1].pg;
                }
                //suma los partidos perdidos en la tabla de posiciones
                if( (gamesB2[p].team1.win_t == false && gamesB2[p].team1.id_t == tablePosB2[j].id_po) || (gamesB2[p].team2.win_t == false && gamesB2[p].team2.id_t == tablePosB2[j].id_po) ) {
                    tablePosB2[j].pp_po++;
                    //suma puntos por partido perdido a la tabla
                    tablePosB2[j].pts_po = tablePosB2[j].pts_po + puntos[0].pj;
                }
                //cantidad de sets y games en la tabla de posiciones
                if(gamesB2[p].team1.id_t == tablePosB2[j].id_po) {
                    //suma los set ganados
                    tablePosB2[j].sf_po = tablePosB2[j].sf_po + gamesB2[p].team1.swin_t;
                    //suma los set perdidos
                    tablePosB2[j].sc_po = tablePosB2[j].sc_po + gamesB2[p].team2.swin_t;
                    //suma los games ganados
                    for(let s = 0; s < gamesB2[p].team1.sets_t.length; s++) {
                        tablePosB2[j].gf_po = tablePosB2[j].gf_po + gamesB2[p].team1.sets_t[s];
                    }
                    //suma los games ganados
                    for(let s = 0; s < gamesB2[p].team1.sets_t.length; s++) {
                        tablePosB2[j].gc_po = tablePosB2[j].gc_po + gamesB2[p].team2.sets_t[s];
                    }
                }
                else if(gamesB2[p].team2.id_t == tablePosB2[j].id_po) {
                    //suma los set ganados
                    tablePosB2[j].sf_po = tablePosB2[j].sf_po + gamesB2[p].team2.swin_t;
                    //suma los set perdidos
                    tablePosB2[j].sc_po = tablePosB2[j].sc_po + gamesB2[p].team1.swin_t;
                    //suma los games ganados
                    for(let s = 0; s < gamesB2[p].team2.sets_t.length; s++) {
                        tablePosB2[j].gf_po = tablePosB2[j].gf_po + gamesB2[p].team2.sets_t[s];
                    }
                    //suma los games ganados
                    for(let s = 0; s < gamesB2[p].team2.sets_t.length; s++) {
                        tablePosB2[j].gc_po = tablePosB2[j].gc_po + gamesB2[p].team1.sets_t[s];
                    }
                }

            }
        }
        //suma la diferencia de sets en la tabla de posiciones
        tablePosB2[j].ds_po = tablePosB2[j].ds_po + tablePosB2[j].sf_po - tablePosB2[j].sc_po;
        //suma la diferencia de games en la tabla de posiciones
        tablePosB2[j].dg_po = tablePosB2[j].dg_po + tablePosB2[j].gf_po - tablePosB2[j].gc_po;
    }
    return tablePosB2;
}
function dataPosB3() {
    for(let j = 0; j < tablePosB3.length; j++) {
        for(let p = 0; p < gamesB3.length; p++) {
            if(gamesB3[p].play == true) {
                //suma los partidos jugados en la tabla de posiciones
                if(gamesB3[p].team1.id_t == groupB[2].par_g[j].id_p || gamesB3[p].team2.id_t == groupB[2].par_g[j].id_p) {
                    tablePosB3[j].pj_po++;
                }
                //suma los partidos ganados en la tabla de posiciones
                if( (gamesB3[p].team1.win_t == true && gamesB3[p].team1.id_t == tablePosB3[j].id_po) || (gamesB3[p].team2.win_t == true && gamesB3[p].team2.id_t == tablePosB3[j].id_po) ) {
                    tablePosB3[j].pg_po++;
                    //suma puntos por partido ganado a la tabla
                    tablePosB3[j].pts_po = tablePosB3[j].pts_po + puntos[1].pg;
                }
                //suma los partidos perdidos en la tabla de posiciones
                if( (gamesB3[p].team1.win_t == false && gamesB3[p].team1.id_t == tablePosB3[j].id_po) || (gamesB3[p].team2.win_t == false && gamesB3[p].team2.id_t == tablePosB3[j].id_po) ) {
                    tablePosB3[j].pp_po++;
                    //suma puntos por partido perdido a la tabla
                    tablePosB3[j].pts_po = tablePosB3[j].pts_po + puntos[0].pj;
                }
                //cantidad de sets y games en la tabla de posiciones
                if(gamesB3[p].team1.id_t == tablePosB3[j].id_po) {
                    //suma los set ganados
                    tablePosB3[j].sf_po = tablePosB3[j].sf_po + gamesB3[p].team1.swin_t;
                    //suma los set perdidos
                    tablePosB3[j].sc_po = tablePosB3[j].sc_po + gamesB3[p].team2.swin_t;
                    //suma los games ganados
                    for(let s = 0; s < gamesB3[p].team1.sets_t.length; s++) {
                        tablePosB3[j].gf_po = tablePosB3[j].gf_po + gamesB3[p].team1.sets_t[s];
                    }
                    //suma los games ganados
                    for(let s = 0; s < gamesB3[p].team1.sets_t.length; s++) {
                        tablePosB3[j].gc_po = tablePosB3[j].gc_po + gamesB3[p].team2.sets_t[s];
                    }
                }
                else if(gamesB3[p].team2.id_t == tablePosB3[j].id_po) {
                    //suma los set ganados
                    tablePosB3[j].sf_po = tablePosB3[j].sf_po + gamesB3[p].team2.swin_t;
                    //suma los set perdidos
                    tablePosB3[j].sc_po = tablePosB3[j].sc_po + gamesB3[p].team1.swin_t;
                    //suma los games ganados
                    for(let s = 0; s < gamesB3[p].team2.sets_t.length; s++) {
                        tablePosB3[j].gf_po = tablePosB3[j].gf_po + gamesB3[p].team2.sets_t[s];
                    }
                    //suma los games ganados
                    for(let s = 0; s < gamesB3[p].team2.sets_t.length; s++) {
                        tablePosB3[j].gc_po = tablePosB3[j].gc_po + gamesB3[p].team1.sets_t[s];
                    }
                }

            }
        }
        //suma la diferencia de sets en la tabla de posiciones
        tablePosB3[j].ds_po = tablePosB3[j].ds_po + tablePosB3[j].sf_po - tablePosB3[j].sc_po;
        //suma la diferencia de games en la tabla de posiciones
        tablePosB3[j].dg_po = tablePosB3[j].dg_po + tablePosB3[j].gf_po - tablePosB3[j].gc_po;
    }
    return tablePosB3;
}
function dataPosB4() {
    for(let j = 0; j < tablePosB4.length; j++) {
        for(let p = 0; p < gamesB4.length; p++) {
            if(gamesB4[p].play == true) {
                //suma los partidos jugados en la tabla de posiciones
                if(gamesB4[p].team1.id_t == groupB[3].par_g[j].id_p || gamesB4[p].team2.id_t == groupB[3].par_g[j].id_p) {
                    tablePosB4[j].pj_po++;
                }
                //suma los partidos ganados en la tabla de posiciones
                if( (gamesB4[p].team1.win_t == true && gamesB4[p].team1.id_t == tablePosB4[j].id_po) || (gamesB4[p].team2.win_t == true && gamesB4[p].team2.id_t == tablePosB4[j].id_po) ) {
                    tablePosB4[j].pg_po++;
                    //suma puntos por partido ganado a la tabla
                    tablePosB4[j].pts_po = tablePosB4[j].pts_po + puntos[1].pg;
                }
                //suma los partidos perdidos en la tabla de posiciones
                if( (gamesB4[p].team1.win_t == false && gamesB4[p].team1.id_t == tablePosB4[j].id_po) || (gamesB4[p].team2.win_t == false && gamesB4[p].team2.id_t == tablePosB4[j].id_po) ) {
                    tablePosB4[j].pp_po++;
                    //suma puntos por partido perdido a la tabla
                    tablePosB4[j].pts_po = tablePosB4[j].pts_po + puntos[0].pj;
                }
                //cantidad de sets y games en la tabla de posiciones
                if(gamesB4[p].team1.id_t == tablePosB4[j].id_po) {
                    //suma los set ganados
                    tablePosB4[j].sf_po = tablePosB4[j].sf_po + gamesB4[p].team1.swin_t;
                    //suma los set perdidos
                    tablePosB4[j].sc_po = tablePosB4[j].sc_po + gamesB4[p].team2.swin_t;
                    //suma los games ganados
                    for(let s = 0; s < gamesB4[p].team1.sets_t.length; s++) {
                        tablePosB4[j].gf_po = tablePosB4[j].gf_po + gamesB4[p].team1.sets_t[s];
                    }
                    //suma los games ganados
                    for(let s = 0; s < gamesB4[p].team1.sets_t.length; s++) {
                        tablePosB4[j].gc_po = tablePosB4[j].gc_po + gamesB4[p].team2.sets_t[s];
                    }
                }
                else if(gamesB4[p].team2.id_t == tablePosB4[j].id_po) {
                    //suma los set ganados
                    tablePosB4[j].sf_po = tablePosB4[j].sf_po + gamesB4[p].team2.swin_t;
                    //suma los set perdidos
                    tablePosB4[j].sc_po = tablePosB4[j].sc_po + gamesB4[p].team1.swin_t;
                    //suma los games ganados
                    for(let s = 0; s < gamesB4[p].team2.sets_t.length; s++) {
                        tablePosB4[j].gf_po = tablePosB4[j].gf_po + gamesB4[p].team2.sets_t[s];
                    }
                    //suma los games ganados
                    for(let s = 0; s < gamesB4[p].team2.sets_t.length; s++) {
                        tablePosB4[j].gc_po = tablePosB4[j].gc_po + gamesB4[p].team1.sets_t[s];
                    }
                }

            }
        }
        //suma la diferencia de sets en la tabla de posiciones
        tablePosB4[j].ds_po = tablePosB4[j].ds_po + tablePosB4[j].sf_po - tablePosB4[j].sc_po;
        //suma la diferencia de games en la tabla de posiciones
        tablePosB4[j].dg_po = tablePosB4[j].dg_po + tablePosB4[j].gf_po - tablePosB4[j].gc_po;
    }
    return tablePosB4;
}

function ordenTableA1() {
    let table = new Array();
    table = dataPosA1();
    //ordenamiento
    table.sort(function compareNumbers(a,b) {
        //orden puntos DES
        if (a.pts_po > b.pts_po) {
            return -1;
        }
        else if (a.pts_po < b.pts_po) {
            return 1;
        }
        else if (a.pts_po == b.pts_po) {
            //orden diferencia sets DES
            if (a.ds_po > b.ds_po) {
                return -1;
            }
            else if (a.ds_po < b.ds_po) {
                return 1;
            }
            else if (a.ds_po == b.ds_po) {
                //orden diferencia games DES
                if (a.dg_po > b.dg_po) {
                    return -1;
                }
                else if (a.dg_po < b.dg_po) {
                    return 1;
                }
                return 0;
            };
        };
    });
    //cambiar id por nombre completo de la pareja
    for(let i = 0; i < tablePosA1.length; i++) {
        for(let j = 0; j < groupA[0].par_g.length; j++) {
            if(tablePosA1[i].id_po == groupA[0].par_g[j].id_p) {
                tablePosA1[i].id_po = groupA[0].par_g[j].j1_p + "<br />" + groupA[0].par_g[j].j2_p;
            }
        }
    }
    //cambiar orden de posiciones nuevamente
    for(let i = 0; i < tablePosA1.length; i++) {
        tablePosA1[i].ord_po = (i+1);
    }
    tablePosA1 = table;
    return tablePosA1;
};
function ordenTableA2() {
    let table = new Array();
    table = dataPosA2();
    //ordenamiento
    table.sort(function compareNumbers(a,b) {
        //orden puntos DES
        if (a.pts_po > b.pts_po) {
            return -1;
        }
        else if (a.pts_po < b.pts_po) {
            return 1;
        }
        else if (a.pts_po == b.pts_po) {
            //orden diferencia sets DES
            if (a.ds_po > b.ds_po) {
                return -1;
            }
            else if (a.ds_po < b.ds_po) {
                return 1;
            }
            else if (a.ds_po == b.ds_po) {
                //orden diferencia games DES
                if (a.dg_po > b.dg_po) {
                    return -1;
                }
                else if (a.dg_po < b.dg_po) {
                    return 1;
                }
                return 0;
            };
        };
    });
    //cambiar id por nombre completo de la pareja
    for(let i = 0; i < tablePosA2.length; i++) {
        for(let j = 0; j < groupA[1].par_g.length; j++) {
            if(tablePosA2[i].id_po == groupA[1].par_g[j].id_p) {
                tablePosA2[i].id_po = groupA[1].par_g[j].j1_p + "<br />" + groupA[1].par_g[j].j2_p;
            }
        }
    }
    //cambiar orden de posiciones nuevamente
    for(let i = 0; i < tablePosA2.length; i++) {
        tablePosA2[i].ord_po = (i+1);
    }
    tablePosA2 = table;
    return tablePosA2;
};
function ordenTableA3() {
    let table = new Array();
    table = dataPosA3();
    //ordenamiento
    table.sort(function compareNumbers(a,b) {
        //orden puntos DES
        if (a.pts_po > b.pts_po) {
            return -1;
        }
        else if (a.pts_po < b.pts_po) {
            return 1;
        }
        else if (a.pts_po == b.pts_po) {
            //orden diferencia sets DES
            if (a.ds_po > b.ds_po) {
                return -1;
            }
            else if (a.ds_po < b.ds_po) {
                return 1;
            }
            else if (a.ds_po == b.ds_po) {
                //orden diferencia games DES
                if (a.dg_po > b.dg_po) {
                    return -1;
                }
                else if (a.dg_po < b.dg_po) {
                    return 1;
                }
                return 0;
            };
        };
    });
    //cambiar id por nombre completo de la pareja
    for(let i = 0; i < tablePosA3.length; i++) {
        for(let j = 0; j < groupA[2].par_g.length; j++) {
            if(tablePosA3[i].id_po == groupA[2].par_g[j].id_p) {
                tablePosA3[i].id_po = groupA[2].par_g[j].j1_p + "<br />" + groupA[2].par_g[j].j2_p;
            }
        }
    }
    //cambiar orden de posiciones nuevamente
    for(let i = 0; i < tablePosA3.length; i++) {
        tablePosA3[i].ord_po = (i+1);
    }
    tablePosA3 = table;
    return tablePosA3;
};
function ordenTableA4() {
    let table = new Array();
    table = dataPosA4();
    //ordenamiento
    table.sort(function compareNumbers(a,b) {
        //orden puntos DES
        if (a.pts_po > b.pts_po) {
            return -1;
        }
        else if (a.pts_po < b.pts_po) {
            return 1;
        }
        else if (a.pts_po == b.pts_po) {
            //orden diferencia sets DES
            if (a.ds_po > b.ds_po) {
                return -1;
            }
            else if (a.ds_po < b.ds_po) {
                return 1;
            }
            else if (a.ds_po == b.ds_po) {
                //orden diferencia games DES
                if (a.dg_po > b.dg_po) {
                    return -1;
                }
                else if (a.dg_po < b.dg_po) {
                    return 1;
                }
                return 0;
            };
        };
    });
    //cambiar id por nombre completo de la pareja
    for(let i = 0; i < tablePosA4.length; i++) {
        for(let j = 0; j < groupA[3].par_g.length; j++) {
            if(tablePosA4[i].id_po == groupA[3].par_g[j].id_p) {
                tablePosA4[i].id_po = groupA[3].par_g[j].j1_p + "<br />" + groupA[3].par_g[j].j2_p;
            }
        }
    }
    //cambiar orden de posiciones nuevamente
    for(let i = 0; i < tablePosA4.length; i++) {
        tablePosA4[i].ord_po = (i+1);
    }
    tablePosA4 = table;
    return tablePosA4;
};
function ordenTableB1() {
    let table = new Array();
    table = dataPosB1();
    //ordenamiento
    table.sort(function compareNumbers(a,b) {
        //orden puntos DES
        if (a.pts_po > b.pts_po) {
            return -1;
        }
        else if (a.pts_po < b.pts_po) {
            return 1;
        }
        else if (a.pts_po == b.pts_po) {
            //orden diferencia sets DES
            if (a.ds_po > b.ds_po) {
                return -1;
            }
            else if (a.ds_po < b.ds_po) {
                return 1;
            }
            else if (a.ds_po == b.ds_po) {
                //orden diferencia games DES
                if (a.dg_po > b.dg_po) {
                    return -1;
                }
                else if (a.dg_po < b.dg_po) {
                    return 1;
                }
                return 0;
            };
        };
    });
    //cambiar id por nombre completo de la pareja
    for(let i = 0; i < tablePosB1.length; i++) {
        for(let j = 0; j < groupB[0].par_g.length; j++) {
            if(tablePosB1[i].id_po == groupB[0].par_g[j].id_p) {
                tablePosB1[i].id_po = groupB[0].par_g[j].j1_p + "<br />" + groupB[0].par_g[j].j2_p;
            }
        }
    }
    //cambiar orden de posiciones nuevamente
    for(let i = 0; i < tablePosB1.length; i++) {
        tablePosB1[i].ord_po = (i+1);
    }
    tablePosB1 = table;
    return tablePosB1;
};
function ordenTableB2() {
    let table = new Array();
    table = dataPosB2();
    //ordenamiento
    table.sort(function compareNumbers(a,b) {
        //orden puntos DES
        if (a.pts_po > b.pts_po) {
            return -1;
        }
        else if (a.pts_po < b.pts_po) {
            return 1;
        }
        else if (a.pts_po == b.pts_po) {
            //orden diferencia sets DES
            if (a.ds_po > b.ds_po) {
                return -1;
            }
            else if (a.ds_po < b.ds_po) {
                return 1;
            }
            else if (a.ds_po == b.ds_po) {
                //orden diferencia games DES
                if (a.dg_po > b.dg_po) {
                    return -1;
                }
                else if (a.dg_po < b.dg_po) {
                    return 1;
                }
                return 0;
            };
        };
    });
    //cambiar id por nombre completo de la pareja
    for(let i = 0; i < tablePosB2.length; i++) {
        for(let j = 0; j < groupB[1].par_g.length; j++) {
            if(tablePosB2[i].id_po == groupB[1].par_g[j].id_p) {
                tablePosB2[i].id_po = groupB[1].par_g[j].j1_p + "<br />" + groupB[1].par_g[j].j2_p;
            }
        }
    }
    //cambiar orden de posiciones nuevamente
    for(let i = 0; i < tablePosB2.length; i++) {
        tablePosB2[i].ord_po = (i+1);
    }
    tablePosB2 = table;
    return tablePosB2;
};
function ordenTableB3() {
    let table = new Array();
    table = dataPosB3();
    //ordenamiento
    table.sort(function compareNumbers(a,b) {
        //orden puntos DES
        if (a.pts_po > b.pts_po) {
            return -1;
        }
        else if (a.pts_po < b.pts_po) {
            return 1;
        }
        else if (a.pts_po == b.pts_po) {
            //orden diferencia sets DES
            if (a.ds_po > b.ds_po) {
                return -1;
            }
            else if (a.ds_po < b.ds_po) {
                return 1;
            }
            else if (a.ds_po == b.ds_po) {
                //orden diferencia games DES
                if (a.dg_po > b.dg_po) {
                    return -1;
                }
                else if (a.dg_po < b.dg_po) {
                    return 1;
                }
                return 0;
            };
        };
    });
    //cambiar id por nombre completo de la pareja
    for(let i = 0; i < tablePosB3.length; i++) {
        for(let j = 0; j < groupB[2].par_g.length; j++) {
            if(tablePosB3[i].id_po == groupB[2].par_g[j].id_p) {
                tablePosB3[i].id_po = groupB[2].par_g[j].j1_p + "<br />" + groupB[2].par_g[j].j2_p;
            }
        }
    }
    //cambiar orden de posiciones nuevamente
    for(let i = 0; i < tablePosB3.length; i++) {
        tablePosB3[i].ord_po = (i+1);
    }
    tablePosB3 = table;
    return tablePosB3;
};
function ordenTableB4() {
    let table = new Array();
    table = dataPosB4();
    //ordenamiento
    table.sort(function compareNumbers(a,b) {
        //orden puntos DES
        if (a.pts_po > b.pts_po) {
            return -1;
        }
        else if (a.pts_po < b.pts_po) {
            return 1;
        }
        else if (a.pts_po == b.pts_po) {
            //orden diferencia sets DES
            if (a.ds_po > b.ds_po) {
                return -1;
            }
            else if (a.ds_po < b.ds_po) {
                return 1;
            }
            else if (a.ds_po == b.ds_po) {
                //orden diferencia games DES
                if (a.dg_po > b.dg_po) {
                    return -1;
                }
                else if (a.dg_po < b.dg_po) {
                    return 1;
                }
                return 0;
            };
        };
    });
    //cambiar id por nombre completo de la pareja
    for(let i = 0; i < tablePosB4.length; i++) {
        for(let j = 0; j < groupB[3].par_g.length; j++) {
            if(tablePosB4[i].id_po == groupB[3].par_g[j].id_p) {
                tablePosB4[i].id_po = groupB[3].par_g[j].j1_p + "<br />" + groupB[3].par_g[j].j2_p;
            }
        }
    }
    //cambiar orden de posiciones nuevamente
    for(let i = 0; i < tablePosB4.length; i++) {
        tablePosB4[i].ord_po = (i+1);
    }
    tablePosB4 = table;
    return tablePosB4;
};

// IMPORTANTE PARA LOS CÁLCULOS!!!
window.addEventListener("load", ordenTableA1() );      //carga variable: tablePosA1
window.addEventListener("load", ordenTableA2() );      //carga variable: tablePosA2
window.addEventListener("load", ordenTableA3() );      //carga variable: tablePosA3
window.addEventListener("load", ordenTableA4() );      //carga variable: tablePosA4
window.addEventListener("load", ordenTableB1() );      //carga variable: tablePosB1
window.addEventListener("load", ordenTableB2() );      //carga variable: tablePosB2
window.addEventListener("load", ordenTableB3() );      //carga variable: tablePosB3
window.addEventListener("load", ordenTableB4() );      //carga variable: tablePosB4

// *********************************************
//Incluir datos en HTML
let innerDataPosA1 = document.getElementsByClassName("posGruA1");
let innerDataPosA2 = document.getElementsByClassName("posGruA2");
let innerDataPosA3 = document.getElementsByClassName("posGruA3");
let innerDataPosA4 = document.getElementsByClassName("posGruA4");
let innerDataPosB1 = document.getElementsByClassName("posGruB1");
let innerDataPosB2 = document.getElementsByClassName("posGruB2");
let innerDataPosB3 = document.getElementsByClassName("posGruB3");
let innerDataPosB4 = document.getElementsByClassName("posGruB4");

//Cambiar encabezados
function includeHeadbPosA1() {
    innerDataPosA1[0].children[0].innerHTML = "Posiciones Grupo A1";
    innerDataPosA1[0].children[1].innerHTML = "N°";
    innerDataPosA1[0].children[2].innerHTML = "Team";
    innerDataPosA1[0].children[3].innerHTML = "PJ";
    innerDataPosA1[0].children[4].innerHTML = "PG";
    innerDataPosA1[0].children[5].innerHTML = "PP";
    innerDataPosA1[0].children[6].innerHTML = "SG";
    innerDataPosA1[0].children[7].innerHTML = "DS";
    innerDataPosA1[0].children[8].innerHTML = "DG";
}
function includeHeadbPosA2() {
    innerDataPosA2[0].children[0].innerHTML = "Posiciones Grupo A2";
    innerDataPosA2[0].children[1].innerHTML = "N°";
    innerDataPosA2[0].children[2].innerHTML = "Team";
    innerDataPosA2[0].children[3].innerHTML = "PJ";
    innerDataPosA2[0].children[4].innerHTML = "PG";
    innerDataPosA2[0].children[5].innerHTML = "PP";
    innerDataPosA2[0].children[6].innerHTML = "SG";
    innerDataPosA2[0].children[7].innerHTML = "DS";
    innerDataPosA2[0].children[8].innerHTML = "DG";
}
function includeHeadbPosA3() {
    innerDataPosA3[0].children[0].innerHTML = "Posiciones Grupo A3";
    innerDataPosA3[0].children[1].innerHTML = "N°";
    innerDataPosA3[0].children[2].innerHTML = "Team";
    innerDataPosA3[0].children[3].innerHTML = "PJ";
    innerDataPosA3[0].children[4].innerHTML = "PG";
    innerDataPosA3[0].children[5].innerHTML = "PP";
    innerDataPosA3[0].children[6].innerHTML = "SG";
    innerDataPosA3[0].children[7].innerHTML = "DS";
    innerDataPosA3[0].children[8].innerHTML = "DG";
}
function includeHeadbPosA4() {
    innerDataPosA4[0].children[0].innerHTML = "Posiciones Grupo A4";
    innerDataPosA4[0].children[1].innerHTML = "N°";
    innerDataPosA4[0].children[2].innerHTML = "Team";
    innerDataPosA4[0].children[3].innerHTML = "PJ";
    innerDataPosA4[0].children[4].innerHTML = "PG";
    innerDataPosA4[0].children[5].innerHTML = "PP";
    innerDataPosA4[0].children[6].innerHTML = "SG";
    innerDataPosA4[0].children[7].innerHTML = "DS";
    innerDataPosA4[0].children[8].innerHTML = "DG";
}
function includeHeadbPosB1() {
    innerDataPosB1[0].children[0].innerHTML = "Posiciones Grupo B1";
    innerDataPosB1[0].children[1].innerHTML = "N°";
    innerDataPosB1[0].children[2].innerHTML = "Team";
    innerDataPosB1[0].children[3].innerHTML = "PJ";
    innerDataPosB1[0].children[4].innerHTML = "PG";
    innerDataPosB1[0].children[5].innerHTML = "PP";
    innerDataPosB1[0].children[6].innerHTML = "SG";
    innerDataPosB1[0].children[7].innerHTML = "DS";
    innerDataPosB1[0].children[8].innerHTML = "DG";
}
function includeHeadbPosB2() {
    innerDataPosB2[0].children[0].innerHTML = "Posiciones Grupo B2";
    innerDataPosB2[0].children[1].innerHTML = "N°";
    innerDataPosB2[0].children[2].innerHTML = "Team";
    innerDataPosB2[0].children[3].innerHTML = "PJ";
    innerDataPosB2[0].children[4].innerHTML = "PG";
    innerDataPosB2[0].children[5].innerHTML = "PP";
    innerDataPosB2[0].children[6].innerHTML = "SG";
    innerDataPosB2[0].children[7].innerHTML = "DS";
    innerDataPosB2[0].children[8].innerHTML = "DG";
}
function includeHeadbPosB3() {
    innerDataPosB3[0].children[0].innerHTML = "Posiciones Grupo B3";
    innerDataPosB3[0].children[1].innerHTML = "N°";
    innerDataPosB3[0].children[2].innerHTML = "Team";
    innerDataPosB3[0].children[3].innerHTML = "PJ";
    innerDataPosB3[0].children[4].innerHTML = "PG";
    innerDataPosB3[0].children[5].innerHTML = "PP";
    innerDataPosB3[0].children[6].innerHTML = "SG";
    innerDataPosB3[0].children[7].innerHTML = "DS";
    innerDataPosB3[0].children[8].innerHTML = "DG";
}
function includeHeadbPosB4() {
    innerDataPosB4[0].children[0].innerHTML = "Posiciones Grupo B4";
    innerDataPosB4[0].children[1].innerHTML = "N°";
    innerDataPosB4[0].children[2].innerHTML = "Team";
    innerDataPosB4[0].children[3].innerHTML = "PJ";
    innerDataPosB4[0].children[4].innerHTML = "PG";
    innerDataPosB4[0].children[5].innerHTML = "PP";
    innerDataPosB4[0].children[6].innerHTML = "SG";
    innerDataPosB4[0].children[7].innerHTML = "DS";
    innerDataPosB4[0].children[8].innerHTML = "DG";
}

//Inlcuir los HTML de las tablas de posiciones
function includeDataPosA1() {
    //cambiar encabezados
    includeHeadbPosA1();
    //hacer los innerHTML en tabla
    for(let i = 0; i < tablePosA1.length; i++) {
        innerDataPosA1[0].children[(i+9)].innerHTML = tablePosA1[i].ord_po;
    };
    for(let i = 0; i < tablePosA1.length; i++) {
        innerDataPosA1[0].children[(i+15)].innerHTML = tablePosA1[i].id_po;
    };
    for(let i = 0; i < tablePosA1.length; i++) {
        innerDataPosA1[0].children[(i+21)].innerHTML = tablePosA1[i].pj_po;
    };
    for(let i = 0; i < tablePosA1.length; i++) {
        innerDataPosA1[0].children[(i+27)].innerHTML = tablePosA1[i].pg_po;
    };
    for(let i = 0; i < tablePosA1.length; i++) {
        innerDataPosA1[0].children[(i+33)].innerHTML = tablePosA1[i].pp_po;
    };
    for(let i = 0; i < tablePosA1.length; i++) {
        innerDataPosA1[0].children[(i+39)].innerHTML = tablePosA1[i].sf_po;
    };
    for(let i = 0; i < tablePosA1.length; i++) {
        innerDataPosA1[0].children[(i+45)].innerHTML = tablePosA1[i].ds_po;
    };
    for(let i = 0; i < tablePosA1.length; i++) {
        innerDataPosA1[0].children[(i+51)].innerHTML = tablePosA1[i].dg_po;
    };
}
function includeDataPosA2() {
    //cambiar encabezados
    includeHeadbPosA2();
    //hacer los innerHTML en tabla
    for(let i = 0; i < tablePosA2.length; i++) {
        innerDataPosA2[0].children[(i+9)].innerHTML = tablePosA2[i].ord_po;
    };
    for(let i = 0; i < tablePosA2.length; i++) {
        innerDataPosA2[0].children[(i+15)].innerHTML = tablePosA2[i].id_po;
    };
    for(let i = 0; i < tablePosA2.length; i++) {
        innerDataPosA2[0].children[(i+21)].innerHTML = tablePosA2[i].pj_po;
    };
    for(let i = 0; i < tablePosA2.length; i++) {
        innerDataPosA2[0].children[(i+27)].innerHTML = tablePosA2[i].pg_po;
    };
    for(let i = 0; i < tablePosA2.length; i++) {
        innerDataPosA2[0].children[(i+33)].innerHTML = tablePosA2[i].pp_po;
    };
    for(let i = 0; i < tablePosA2.length; i++) {
        innerDataPosA2[0].children[(i+39)].innerHTML = tablePosA2[i].sf_po;
    };
    for(let i = 0; i < tablePosA2.length; i++) {
        innerDataPosA2[0].children[(i+45)].innerHTML = tablePosA2[i].ds_po;
    };
    for(let i = 0; i < tablePosA2.length; i++) {
        innerDataPosA2[0].children[(i+51)].innerHTML = tablePosA2[i].dg_po;
    };
}
function includeDataPosA3() {
    //cambiar encabezados
    includeHeadbPosA3();
    //hacer los innerHTML en tabla
    for(let i = 0; i < tablePosA3.length; i++) {
        innerDataPosA3[0].children[(i+9)].innerHTML = tablePosA3[i].ord_po;
    };
    for(let i = 0; i < tablePosA3.length; i++) {
        innerDataPosA3[0].children[(i+14)].innerHTML = tablePosA3[i].id_po;
    };
    for(let i = 0; i < tablePosA3.length; i++) {
        innerDataPosA3[0].children[(i+19)].innerHTML = tablePosA3[i].pj_po;
    };
    for(let i = 0; i < tablePosA3.length; i++) {
        innerDataPosA3[0].children[(i+24)].innerHTML = tablePosA3[i].pg_po;
    };
    for(let i = 0; i < tablePosA3.length; i++) {
        innerDataPosA3[0].children[(i+29)].innerHTML = tablePosA3[i].pp_po;
    };
    for(let i = 0; i < tablePosA3.length; i++) {
        innerDataPosA3[0].children[(i+34)].innerHTML = tablePosA3[i].sf_po;
    };
    for(let i = 0; i < tablePosA3.length; i++) {
        innerDataPosA3[0].children[(i+39)].innerHTML = tablePosA3[i].ds_po;
    };
    for(let i = 0; i < tablePosA3.length; i++) {
        innerDataPosA3[0].children[(i+44)].innerHTML = tablePosA3[i].dg_po;
    };
}
function includeDataPosA4() {
    //cambiar encabezados
    includeHeadbPosA4();
    //hacer los innerHTML en tabla
    for(let i = 0; i < tablePosA4.length; i++) {
        innerDataPosA4[0].children[(i+9)].innerHTML = tablePosA4[i].ord_po;
    };
    for(let i = 0; i < tablePosA4.length; i++) {
        innerDataPosA4[0].children[(i+14)].innerHTML = tablePosA4[i].id_po;
    };
    for(let i = 0; i < tablePosA4.length; i++) {
        innerDataPosA4[0].children[(i+19)].innerHTML = tablePosA4[i].pj_po;
    };
    for(let i = 0; i < tablePosA4.length; i++) {
        innerDataPosA4[0].children[(i+24)].innerHTML = tablePosA4[i].pg_po;
    };
    for(let i = 0; i < tablePosA4.length; i++) {
        innerDataPosA4[0].children[(i+29)].innerHTML = tablePosA4[i].pp_po;
    };
    for(let i = 0; i < tablePosA4.length; i++) {
        innerDataPosA4[0].children[(i+34)].innerHTML = tablePosA4[i].sf_po;
    };
    for(let i = 0; i < tablePosA4.length; i++) {
        innerDataPosA4[0].children[(i+39)].innerHTML = tablePosA4[i].ds_po;
    };
    for(let i = 0; i < tablePosA4.length; i++) {
        innerDataPosA4[0].children[(i+44)].innerHTML = tablePosA4[i].dg_po;
    };
}
function includeDataPosB1() {
    //cambiar encabezados
    includeHeadbPosB1();
    //hacer los innerHTML en tabla
    for(let i = 0; i < tablePosB1.length; i++) {
        innerDataPosB1[0].children[(i+9)].innerHTML = tablePosB1[i].ord_po;
    };
    for(let i = 0; i < tablePosB1.length; i++) {
        innerDataPosB1[0].children[(i+15)].innerHTML = tablePosB1[i].id_po;
    };
    for(let i = 0; i < tablePosB1.length; i++) {
        innerDataPosB1[0].children[(i+21)].innerHTML = tablePosB1[i].pj_po;
    };
    for(let i = 0; i < tablePosB1.length; i++) {
        innerDataPosB1[0].children[(i+27)].innerHTML = tablePosB1[i].pg_po;
    };
    for(let i = 0; i < tablePosB1.length; i++) {
        innerDataPosB1[0].children[(i+33)].innerHTML = tablePosB1[i].pp_po;
    };
    for(let i = 0; i < tablePosB1.length; i++) {
        innerDataPosB1[0].children[(i+39)].innerHTML = tablePosB1[i].sf_po;
    };
    for(let i = 0; i < tablePosB1.length; i++) {
        innerDataPosB1[0].children[(i+45)].innerHTML = tablePosB1[i].ds_po;
    };
    for(let i = 0; i < tablePosB1.length; i++) {
        innerDataPosB1[0].children[(i+51)].innerHTML = tablePosB1[i].dg_po;
    };
}
function includeDataPosB2() {
    //cambiar encabezados
    includeHeadbPosB2();
    //hacer los innerHTML en tabla
    for(let i = 0; i < tablePosB2.length; i++) {
        innerDataPosB2[0].children[(i+9)].innerHTML = tablePosB2[i].ord_po;
    };
    for(let i = 0; i < tablePosB2.length; i++) {
        innerDataPosB2[0].children[(i+15)].innerHTML = tablePosB2[i].id_po;
    };
    for(let i = 0; i < tablePosB2.length; i++) {
        innerDataPosB2[0].children[(i+21)].innerHTML = tablePosB2[i].pj_po;
    };
    for(let i = 0; i < tablePosB2.length; i++) {
        innerDataPosB2[0].children[(i+27)].innerHTML = tablePosB2[i].pg_po;
    };
    for(let i = 0; i < tablePosB2.length; i++) {
        innerDataPosB2[0].children[(i+33)].innerHTML = tablePosB2[i].pp_po;
    };
    for(let i = 0; i < tablePosB2.length; i++) {
        innerDataPosB2[0].children[(i+39)].innerHTML = tablePosB2[i].sf_po;
    };
    for(let i = 0; i < tablePosB2.length; i++) {
        innerDataPosB2[0].children[(i+45)].innerHTML = tablePosB2[i].ds_po;
    };
    for(let i = 0; i < tablePosB2.length; i++) {
        innerDataPosB2[0].children[(i+51)].innerHTML = tablePosB2[i].dg_po;
    };
}
function includeDataPosB3() {
    //cambiar encabezados
    includeHeadbPosB3();
    //hacer los innerHTML en tabla
    for(let i = 0; i < tablePosB3.length; i++) {
        innerDataPosB3[0].children[(i+9)].innerHTML = tablePosB3[i].ord_po;
    };
    for(let i = 0; i < tablePosB3.length; i++) {
        innerDataPosB3[0].children[(i+15)].innerHTML = tablePosB3[i].id_po;
    };
    for(let i = 0; i < tablePosB3.length; i++) {
        innerDataPosB3[0].children[(i+21)].innerHTML = tablePosB3[i].pj_po;
    };
    for(let i = 0; i < tablePosB3.length; i++) {
        innerDataPosB3[0].children[(i+27)].innerHTML = tablePosB3[i].pg_po;
    };
    for(let i = 0; i < tablePosB3.length; i++) {
        innerDataPosB3[0].children[(i+33)].innerHTML = tablePosB3[i].pp_po;
    };
    for(let i = 0; i < tablePosB3.length; i++) {
        innerDataPosB3[0].children[(i+39)].innerHTML = tablePosB3[i].sf_po;
    };
    for(let i = 0; i < tablePosB3.length; i++) {
        innerDataPosB3[0].children[(i+45)].innerHTML = tablePosB3[i].ds_po;
    };
    for(let i = 0; i < tablePosB3.length; i++) {
        innerDataPosB3[0].children[(i+51)].innerHTML = tablePosB3[i].dg_po;
    };
}
function includeDataPosB4() {
    //cambiar encabezados
    includeHeadbPosB4();
    //hacer los innerHTML en tabla
    for(let i = 0; i < tablePosB4.length; i++) {
        innerDataPosB4[0].children[(i+9)].innerHTML = tablePosB4[i].ord_po;
    };
    for(let i = 0; i < tablePosB4.length; i++) {
        innerDataPosB4[0].children[(i+15)].innerHTML = tablePosB4[i].id_po;
    };
    for(let i = 0; i < tablePosB4.length; i++) {
        innerDataPosB4[0].children[(i+21)].innerHTML = tablePosB4[i].pj_po;
    };
    for(let i = 0; i < tablePosB4.length; i++) {
        innerDataPosB4[0].children[(i+27)].innerHTML = tablePosB4[i].pg_po;
    };
    for(let i = 0; i < tablePosB4.length; i++) {
        innerDataPosB4[0].children[(i+33)].innerHTML = tablePosB4[i].pp_po;
    };
    for(let i = 0; i < tablePosB4.length; i++) {
        innerDataPosB4[0].children[(i+39)].innerHTML = tablePosB4[i].sf_po;
    };
    for(let i = 0; i < tablePosB4.length; i++) {
        innerDataPosB4[0].children[(i+45)].innerHTML = tablePosB4[i].ds_po;
    };
    for(let i = 0; i < tablePosB4.length; i++) {
        innerDataPosB4[0].children[(i+51)].innerHTML = tablePosB4[i].dg_po;
    };
}

// IMPORTANTE PARA LOS CÁLCULOS!!!
window.addEventListener("load", includeDataPosA1() );      //inners en A1
window.addEventListener("load", includeDataPosA2() );      //inners en A2
window.addEventListener("load", includeDataPosA3() );      //inners en A3
window.addEventListener("load", includeDataPosA4() );      //inners en A4
window.addEventListener("load", includeDataPosB1() );      //inners en B1
window.addEventListener("load", includeDataPosB2() );      //inners en B2
window.addEventListener("load", includeDataPosB3() );      //inners en B3
window.addEventListener("load", includeDataPosB4() );      //inners en B4

//Incluir resultados en HTML
let innerResA1 = document.getElementsByClassName("resA1");
let innerResA2 = document.getElementsByClassName("resA2");
let innerResA3 = document.getElementsByClassName("resA3");
let innerResA4 = document.getElementsByClassName("resA4");
let innerResB1 = document.getElementsByClassName("resB1");
let innerResB2 = document.getElementsByClassName("resB2");
let innerResB3 = document.getElementsByClassName("resB3");
let innerResB4 = document.getElementsByClassName("resB4");

function includeResA1() {
    //hacer los innerHTML de los ids
    for(let j = 0; j < gamesA1.length; j++) {
        innerResA1[0].children[j].children[1].innerHTML = gamesA1[j].team1.id_t;
        innerResA1[0].children[j].children[2].innerHTML = gamesA1[j].team2.id_t;
    }
    //hacer los innerHTML en los resultados
    for(let i = 0; i < innerResA1[0].children.length; i++) {
        innerResA1[0].children[i].children[3].innerHTML = resGamesA1[i].s1_t1;
        innerResA1[0].children[i].children[4].innerHTML = resGamesA1[i].s1_t2;
        innerResA1[0].children[i].children[5].innerHTML = resGamesA1[i].s2_t1;
        innerResA1[0].children[i].children[6].innerHTML = resGamesA1[i].s2_t2;
        innerResA1[0].children[i].children[7].innerHTML = resGamesA1[i].s3_t1;
        innerResA1[0].children[i].children[8].innerHTML = resGamesA1[i].s3_t2;
    }
    //cambiar id por nombre completo de la pareja
    for(let i = 0; i < gamesA1.length; i++) {
        for(let j = 0; j < groupA[0].par_g.length; j++) {
            if(innerResA1[0].children[i].children[1].innerHTML == groupA[0].par_g[j].id_p) {
                innerResA1[0].children[i].children[1].innerHTML = groupA[0].par_g[j].j1_p + "<br />" + groupA[0].par_g[j].j2_p;
            }
            if(innerResA1[0].children[i].children[2].innerHTML == groupA[0].par_g[j].id_p) {
                innerResA1[0].children[i].children[2].innerHTML = groupA[0].par_g[j].j1_p + "<br />" + groupA[0].par_g[j].j2_p;
            }
        }
    }
};
function includeResA2() {
    //hacer los innerHTML de los ids
    for(let j = 0; j < gamesA2.length; j++) {
        innerResA2[0].children[j].children[1].innerHTML = gamesA2[j].team1.id_t;
        innerResA2[0].children[j].children[2].innerHTML = gamesA2[j].team2.id_t;
    }
    //hacer los innerHTML en los resultados
    for(let i = 0; i < innerResA2[0].children.length; i++) {
        innerResA2[0].children[i].children[3].innerHTML = resGamesA2[i].s1_t1;
        innerResA2[0].children[i].children[4].innerHTML = resGamesA2[i].s1_t2;
        innerResA2[0].children[i].children[5].innerHTML = resGamesA2[i].s2_t1;
        innerResA2[0].children[i].children[6].innerHTML = resGamesA2[i].s2_t2;
        innerResA2[0].children[i].children[7].innerHTML = resGamesA2[i].s3_t1;
        innerResA2[0].children[i].children[8].innerHTML = resGamesA2[i].s3_t2;
    }
    //cambiar id por nombre completo de la pareja
    for(let i = 0; i < gamesA2.length; i++) {
        for(let j = 0; j < groupA[1].par_g.length; j++) {
            if(innerResA2[0].children[i].children[1].innerHTML == groupA[1].par_g[j].id_p) {
                innerResA2[0].children[i].children[1].innerHTML = groupA[1].par_g[j].j1_p + "<br />" + groupA[1].par_g[j].j2_p;
            }
            if(innerResA2[0].children[i].children[2].innerHTML == groupA[1].par_g[j].id_p) {
                innerResA2[0].children[i].children[2].innerHTML = groupA[1].par_g[j].j1_p + "<br />" + groupA[1].par_g[j].j2_p;
            }
        }
    }
};
function includeResA3() {
    //hacer los innerHTML de los ids
    for(let j = 0; j < gamesA3.length; j++) {
        innerResA3[0].children[j].children[1].innerHTML = gamesA3[j].team1.id_t;
        innerResA3[0].children[j].children[2].innerHTML = gamesA3[j].team2.id_t;
    }
    //hacer los innerHTML en los resultados
    for(let i = 0; i < innerResA3[0].children.length; i++) {
        innerResA3[0].children[i].children[3].innerHTML = resGamesA3[i].s1_t1;
        innerResA3[0].children[i].children[4].innerHTML = resGamesA3[i].s1_t2;
        innerResA3[0].children[i].children[5].innerHTML = resGamesA3[i].s2_t1;
        innerResA3[0].children[i].children[6].innerHTML = resGamesA3[i].s2_t2;
        innerResA3[0].children[i].children[7].innerHTML = resGamesA3[i].s3_t1;
        innerResA3[0].children[i].children[8].innerHTML = resGamesA3[i].s3_t2;
    }
    //cambiar id por nombre completo de la pareja
    for(let i = 0; i < gamesA3.length; i++) {
        for(let j = 0; j < groupA[2].par_g.length; j++) {
            if(innerResA3[0].children[i].children[1].innerHTML == groupA[2].par_g[j].id_p) {
                innerResA3[0].children[i].children[1].innerHTML = groupA[2].par_g[j].j1_p + "<br />" + groupA[2].par_g[j].j2_p;
            }
            if(innerResA3[0].children[i].children[2].innerHTML == groupA[2].par_g[j].id_p) {
                innerResA3[0].children[i].children[2].innerHTML = groupA[2].par_g[j].j1_p + "<br />" + groupA[2].par_g[j].j2_p;
            }
        }
    }
};
function includeResA4() {
    //hacer los innerHTML de los ids
    for(let j = 0; j < gamesA4.length; j++) {
        innerResA4[0].children[j].children[1].innerHTML = gamesA4[j].team1.id_t;
        innerResA4[0].children[j].children[2].innerHTML = gamesA4[j].team2.id_t;
    }
    //hacer los innerHTML en los resultados
    for(let i = 0; i < innerResA4[0].children.length; i++) {
        innerResA4[0].children[i].children[3].innerHTML = resGamesA4[i].s1_t1;
        innerResA4[0].children[i].children[4].innerHTML = resGamesA4[i].s1_t2;
        innerResA4[0].children[i].children[5].innerHTML = resGamesA4[i].s2_t1;
        innerResA4[0].children[i].children[6].innerHTML = resGamesA4[i].s2_t2;
        innerResA4[0].children[i].children[7].innerHTML = resGamesA4[i].s3_t1;
        innerResA4[0].children[i].children[8].innerHTML = resGamesA4[i].s3_t2;
    }
    //cambiar id por nombre completo de la pareja
    for(let i = 0; i < gamesA4.length; i++) {
        for(let j = 0; j < groupA[3].par_g.length; j++) {
            if(innerResA4[0].children[i].children[1].innerHTML == groupA[3].par_g[j].id_p) {
                innerResA4[0].children[i].children[1].innerHTML = groupA[3].par_g[j].j1_p + "<br />" + groupA[3].par_g[j].j2_p;
            }
            if(innerResA4[0].children[i].children[2].innerHTML == groupA[3].par_g[j].id_p) {
                innerResA4[0].children[i].children[2].innerHTML = groupA[3].par_g[j].j1_p + "<br />" + groupA[3].par_g[j].j2_p;
            }
        }
    }
};
function includeResB1() {
    //hacer los innerHTML de los ids
    for(let j = 0; j < gamesB1.length; j++) {
        innerResB1[0].children[j].children[1].innerHTML = gamesB1[j].team1.id_t;
        innerResB1[0].children[j].children[2].innerHTML = gamesB1[j].team2.id_t;
    }
    //hacer los innerHTML en los resultados
    for(let i = 0; i < innerResB1[0].children.length; i++) {
        innerResB1[0].children[i].children[3].innerHTML = resGamesB1[i].s1_t1;
        innerResB1[0].children[i].children[4].innerHTML = resGamesB1[i].s1_t2;
        innerResB1[0].children[i].children[5].innerHTML = resGamesB1[i].s2_t1;
        innerResB1[0].children[i].children[6].innerHTML = resGamesB1[i].s2_t2;
        innerResB1[0].children[i].children[7].innerHTML = resGamesB1[i].s3_t1;
        innerResB1[0].children[i].children[8].innerHTML = resGamesB1[i].s3_t2;
    }
    //cambiar id por nombre completo de la pareja
    for(let i = 0; i < gamesB1.length; i++) {
        for(let j = 0; j < groupB[0].par_g.length; j++) {
            if(innerResB1[0].children[i].children[1].innerHTML == groupB[0].par_g[j].id_p) {
                innerResB1[0].children[i].children[1].innerHTML = groupB[0].par_g[j].j1_p + "<br />" + groupB[0].par_g[j].j2_p;
            }
            if(innerResB1[0].children[i].children[2].innerHTML == groupB[0].par_g[j].id_p) {
                innerResB1[0].children[i].children[2].innerHTML = groupB[0].par_g[j].j1_p + "<br />" + groupB[0].par_g[j].j2_p;
            }
        }
    }
};
function includeResB2() {
    //hacer los innerHTML de los ids
    for(let j = 0; j < gamesB2.length; j++) {
        innerResB2[0].children[j].children[1].innerHTML = gamesB2[j].team1.id_t;
        innerResB2[0].children[j].children[2].innerHTML = gamesB2[j].team2.id_t;
    }
    //hacer los innerHTML en los resultados
    for(let i = 0; i < innerResB2[0].children.length; i++) {
        innerResB2[0].children[i].children[3].innerHTML = resGamesB2[i].s1_t1;
        innerResB2[0].children[i].children[4].innerHTML = resGamesB2[i].s1_t2;
        innerResB2[0].children[i].children[5].innerHTML = resGamesB2[i].s2_t1;
        innerResB2[0].children[i].children[6].innerHTML = resGamesB2[i].s2_t2;
        innerResB2[0].children[i].children[7].innerHTML = resGamesB2[i].s3_t1;
        innerResB2[0].children[i].children[8].innerHTML = resGamesB2[i].s3_t2;
    }
    //cambiar id por nombre completo de la pareja
    for(let i = 0; i < gamesB2.length; i++) {
        for(let j = 0; j < groupB[1].par_g.length; j++) {
            if(innerResB2[0].children[i].children[1].innerHTML == groupB[1].par_g[j].id_p) {
                innerResB2[0].children[i].children[1].innerHTML = groupB[1].par_g[j].j1_p + "<br />" + groupB[1].par_g[j].j2_p;
            }
            if(innerResB2[0].children[i].children[2].innerHTML == groupB[1].par_g[j].id_p) {
                innerResB2[0].children[i].children[2].innerHTML = groupB[1].par_g[j].j1_p + "<br />" + groupB[1].par_g[j].j2_p;
            }
        }
    }
};
function includeResB3() {
    //hacer los innerHTML de los ids
    for(let j = 0; j < gamesB3.length; j++) {
        innerResB3[0].children[j].children[1].innerHTML = gamesB3[j].team1.id_t;
        innerResB3[0].children[j].children[2].innerHTML = gamesB3[j].team2.id_t;
    }
    //hacer los innerHTML en los resultados
    for(let i = 0; i < innerResB3[0].children.length; i++) {
        innerResB3[0].children[i].children[3].innerHTML = resGamesB3[i].s1_t1;
        innerResB3[0].children[i].children[4].innerHTML = resGamesB3[i].s1_t2;
        innerResB3[0].children[i].children[5].innerHTML = resGamesB3[i].s2_t1;
        innerResB3[0].children[i].children[6].innerHTML = resGamesB3[i].s2_t2;
        innerResB3[0].children[i].children[7].innerHTML = resGamesB3[i].s3_t1;
        innerResB3[0].children[i].children[8].innerHTML = resGamesB3[i].s3_t2;
    }
    //cambiar id por nombre completo de la pareja
    for(let i = 0; i < gamesB3.length; i++) {
        for(let j = 0; j < groupB[2].par_g.length; j++) {
            if(innerResB3[0].children[i].children[1].innerHTML == groupB[2].par_g[j].id_p) {
                innerResB3[0].children[i].children[1].innerHTML = groupB[2].par_g[j].j1_p + "<br />" + groupB[2].par_g[j].j2_p;
            }
            if(innerResB3[0].children[i].children[2].innerHTML == groupB[2].par_g[j].id_p) {
                innerResB3[0].children[i].children[2].innerHTML = groupB[2].par_g[j].j1_p + "<br />" + groupB[2].par_g[j].j2_p;
            }
        }
    }
};
function includeResB4() {
    //hacer los innerHTML de los ids
    for(let j = 0; j < gamesB4.length; j++) {
        innerResB4[0].children[j].children[1].innerHTML = gamesB4[j].team1.id_t;
        innerResB4[0].children[j].children[2].innerHTML = gamesB4[j].team2.id_t;
    }
    //hacer los innerHTML en los resultados
    for(let i = 0; i < innerResB4[0].children.length; i++) {
        innerResB4[0].children[i].children[3].innerHTML = resGamesB4[i].s1_t1;
        innerResB4[0].children[i].children[4].innerHTML = resGamesB4[i].s1_t2;
        innerResB4[0].children[i].children[5].innerHTML = resGamesB4[i].s2_t1;
        innerResB4[0].children[i].children[6].innerHTML = resGamesB4[i].s2_t2;
        innerResB4[0].children[i].children[7].innerHTML = resGamesB4[i].s3_t1;
        innerResB4[0].children[i].children[8].innerHTML = resGamesB4[i].s3_t2;
    }
    //cambiar id por nombre completo de la pareja
    for(let i = 0; i < gamesB4.length; i++) {
        for(let j = 0; j < groupB[3].par_g.length; j++) {
            if(innerResB4[0].children[i].children[1].innerHTML == groupB[3].par_g[j].id_p) {
                innerResB4[0].children[i].children[1].innerHTML = groupB[3].par_g[j].j1_p + "<br />" + groupB[3].par_g[j].j2_p;
            }
            if(innerResB4[0].children[i].children[2].innerHTML == groupB[3].par_g[j].id_p) {
                innerResB4[0].children[i].children[2].innerHTML = groupB[3].par_g[j].j1_p + "<br />" + groupB[3].par_g[j].j2_p;
            }
        }
    }
};

// IMPORTANTE PARA LOS CÁLCULOS!!!
window.addEventListener("load", includeResA1() );      //inners res A1
window.addEventListener("load", includeResA2() );      //inners res A2
window.addEventListener("load", includeResA3() );      //inners res A3
window.addEventListener("load", includeResA4() );      //inners res A4
window.addEventListener("load", includeResB1() );      //inners res B1
window.addEventListener("load", includeResB2() );      //inners res B2
window.addEventListener("load", includeResB3() );      //inners res B3
window.addEventListener("load", includeResB4() );      //inners res B4

// *********************************************
// *********************************************
// *********************************************