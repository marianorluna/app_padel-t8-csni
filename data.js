/**********************************************************
DATOS DE LOS JUGADORES EN FORMATO JSON
La estructura es la siguiente:
    id_j    = número único identificador
    nom_j   = nombres del jugador
    ape_j   = apellidos del jugador
    rank_j  = ranking del club icaria (inicia con valor
              y luego se modifica dinámicamente)
    punt_j  = puntos obtenidos en base a los partidos
              (valor que se actualiza dinámicamente)
    nivel_j = letra que sirve para asignar grupo (A, B, C)
***********************************************************/
class Jugador
{
    constructor(id, n, a, k, j, l)
    {
        this.id_j = id;
        this.nom_j = n;
        this.ape_j = a;
        this.rank_j = k;
        this.punt_j = j;
        this.nivel_j = l;
        this.elo_j = 0;
        // this.imagen = new Image();
        // this.imagen.src = imagenes[this.id_j]
    }
};

class Pareja
{
    constructor(id, j1, j2)
    {
        this.id_p = id;
        this.j1_p = j1;
        this.j2_p = j2;
        this.punt_p = 0;
        this.elo_p = 0;
    }
};

class Grupo
{
    constructor(id, par)
    {
        this.id_g = id;
        this.par_g = par;
    }
};

class Game
{
    constructor(id, t1, t2)
    {
        this.id_pj = id;
        this.team1 = t1;
        this.team2 = t2;
        this.play = false;
    }
};

class GameTeam
{
    constructor(id, s1, s2, s3)
    {
        this.id_t = id; 
        this.sets_t = [s1, s2, s3];
        this.swin_t = 0;
        this.gwin_t = 0;
        this.win_t = false;
    }
};

class Position
{
    constructor(ord)
    {
        this.ord_po = ord;
        this.id_po = "";
        this.pj_po = 0;
        this.pg_po = 0;
        this.pp_po = 0;
        this.sf_po = 0;
        this.sc_po = 0;
        this.ds_po = 0;
        this.gf_po = 0;
        this.gc_po = 0;
        this.dg_po = 0;
        this.pts_po = 0;
        this.elo_po = 0;
    }
};

class Clasificado
{
    constructor(gr, pos, id, pts, elo)
    {
        this.gr_cl = gr;
        this.pos_cl = pos;
        this.id_cl = id;
        this.pts_cl = pts;
        this.elo_cl = elo;
    }
};

//****************************
//****************************
//Datos de todos los jugadores
let dataJugadores = [
    {   
        id_j: "ic001",
        nom_j: "Adolf",
        ape_j: "",
        rank_j: 60,
        punt_j: 0,
        nivel_j: "B"
    },
    {   
        id_j: "ic002",
        nom_j: "Adri",
        ape_j: "",
        rank_j: 53,
        punt_j: 0,
        nivel_j: "B"
    },
    {
        id_j: "ic003",
        nom_j: "Albert",
        ape_j: "",
        rank_j: 35,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic004",
        nom_j: "Albert",
        ape_j: "G.",
        rank_j: 71,
        punt_j: 0,
        nivel_j: "B"
    },
    {
        id_j: "ic005",
        nom_j: "Alessio",
        ape_j: "",
        rank_j: 78,
        punt_j: 0,
        nivel_j: "B"
    },
    {
        id_j: "ic006",
        nom_j: "Alex",
        ape_j: "Salat",
        rank_j: 86,
        punt_j: 0,
        nivel_j: "B"
    },
    {
        id_j: "ic007",
        nom_j: "Alfred",
        ape_j: "",
        rank_j: 19,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic008",
        nom_j: "Andreu",
        ape_j: "",
        rank_j: 7,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic009",
        nom_j: "Ángel",
        ape_j: "",
        rank_j: 64,
        punt_j: 0,
        nivel_j: "B"
    },
    {
        id_j: "ic010",
        nom_j: "Antonio",
        ape_j: "F.",
        rank_j: 68,
        punt_j: 0,
        nivel_j: "B"
    },
    {
        id_j: "ic011",
        nom_j: "Borja",
        ape_j: "",
        rank_j: 49,
        punt_j: 0,
        nivel_j: "B"
    },
    {
        id_j: "ic012",
        nom_j: "David",
        ape_j: "C.",
        rank_j: 1,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic013",
        nom_j: "Carles",
        ape_j: "V.",
        rank_j: 91,
        punt_j: 0,
        nivel_j: "B"
    },
    {
        id_j: "ic014",
        nom_j: "Christian",
        ape_j: "",
        rank_j: 8,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic015",
        nom_j: "Christian",
        ape_j: "O.",
        rank_j: 72,
        punt_j: 0,
        nivel_j: "B"
    },
    {
        id_j: "ic016",
        nom_j: "David",
        ape_j: "S.",
        rank_j: 16,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic017",
        nom_j: "Damián",
        ape_j: "",
        rank_j: 44,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic018",
        nom_j: "Dennis",
        ape_j: "Park",
        rank_j: 43,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic019",
        nom_j: "Eduard",
        ape_j: "P.",
        rank_j: 21,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic020",
        nom_j: "Eduard",
        ape_j: "V.",
        rank_j: 92,
        punt_j: 0,
        nivel_j: "B"
    },
    {
        id_j: "ic021",
        nom_j: "Esteban",
        ape_j: "",
        rank_j: 63,
        punt_j: 0,
        nivel_j: "B"
    },
    {
        id_j: "ic022",
        nom_j: "Ferran",
        ape_j: "",
        rank_j: 20,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic023",
        nom_j: "Fran",
        ape_j: "",
        rank_j: 41,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic024",
        nom_j: "Francesco",
        ape_j: "",
        rank_j: 65,
        punt_j: 0,
        nivel_j: "B"
    },
    {
        id_j: "ic025",
        nom_j: "Gabriel",
        ape_j: "",
        rank_j: 70,
        punt_j: 0,
        nivel_j: "B"
    },
    {
        id_j: "ic026",
        nom_j: "Galo",
        ape_j: "",
        rank_j: 2,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic027",
        nom_j: "Gerard",
        ape_j: "",
        rank_j: 79,
        punt_j: 0,
        nivel_j: "B"
    },
    {
        id_j: "ic028",
        nom_j: "Guille",
        ape_j: "",
        rank_j: 76,
        punt_j: 0,
        nivel_j: "B"
    },
    {
        id_j: "ic029",
        nom_j: "Henrik",
        ape_j: "",
        rank_j: 9,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic030",
        nom_j: "Igor",
        ape_j: "",
        rank_j: 54,
        punt_j: 0,
        nivel_j: "B"
    },
    {
        id_j: "ic031",
        nom_j: "Iñaki",
        ape_j: "F.",
        rank_j: 67,
        punt_j: 0,
        nivel_j: "B"
    },
    {
        id_j: "ic032",
        nom_j: "Iván",
        ape_j: "M.",
        rank_j: 37,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic033",
        nom_j: "Javier",
        ape_j: "Picón",
        rank_j: 58,
        punt_j: 0,
        nivel_j: "B"
    },
    {
        id_j: "ic034",
        nom_j: "Jaime",
        ape_j: "C.",
        rank_j: 40,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic035",
        nom_j: "Jaume",
        ape_j: "E.",
        rank_j: 56,
        punt_j: 0,
        nivel_j: "B"
    },
    {
        id_j: "ic036",
        nom_j: "Jaume",
        ape_j: "P.",
        rank_j: 31,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic037",
        nom_j: "Javier",
        ape_j: "M.",
        rank_j: 59,
        punt_j: 0,
        nivel_j: "B"
    },
    {
        id_j: "ic038",
        nom_j: "Jean P.",
        ape_j: "",
        rank_j: 32,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic039",
        nom_j: "Jesús",
        ape_j: "",
        rank_j: 15,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic040",
        nom_j: "Joan F.",
        ape_j: "",
        rank_j: 57,
        punt_j: 0,
        nivel_j: "B"
    },
    {
        id_j: "ic041",
        nom_j: "Joan",
        ape_j: "H.",
        rank_j: 87,
        punt_j: 0,
        nivel_j: "B"
    },
    {
        id_j: "ic042",
        nom_j: "Jordi",
        ape_j: "",
        rank_j: 5,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic043",
        nom_j: "Jordi",
        ape_j: "G.",
        rank_j: 33,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic044",
        nom_j: "Jordi",
        ape_j: "M.",
        rank_j: 52,
        punt_j: 0,
        nivel_j: "B"
    },
    {
        id_j: "ic045",
        nom_j: "Jordi",
        ape_j: "More",
        rank_j: 73,
        punt_j: 0,
        nivel_j: "B"
    },
    {
        id_j: "ic046",
        nom_j: "Jordi",
        ape_j: "P.",
        rank_j: 46,
        punt_j: 0,
        nivel_j: "B"
    },
    {
        id_j: "ic047",
        nom_j: "Jordi",
        ape_j: "Ríos",
        rank_j: 45,
        punt_j: 0,
        nivel_j: "B"
    },
    {
        id_j: "ic048",
        nom_j: "Jordi",
        ape_j: "V.",
        rank_j: 23,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic049",
        nom_j: "Jose",
        ape_j: "",
        rank_j: 55,
        punt_j: 0,
        nivel_j: "B"
    },
    {
        id_j: "ic050",
        nom_j: "Josep",
        ape_j: "Antón",
        rank_j: 90,
        punt_j: 0,
        nivel_j: "B"
    },
    {
        id_j: "ic051",
        nom_j: "Juanma",
        ape_j: "",
        rank_j: 12,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic052",
        nom_j: "Lluis",
        ape_j: "D.",
        rank_j: 88,
        punt_j: 0,
        nivel_j: "B"
    },
    {
        id_j: "ic053",
        nom_j: "Manel",
        ape_j: "",
        rank_j: 81,
        punt_j: 0,
        nivel_j: "B"
    },
    {
        id_j: "ic054",
        nom_j: "Manolo",
        ape_j: "",
        rank_j: 17,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic055",
        nom_j: "Manuel",
        ape_j: "",
        rank_j: 82,
        punt_j: 0,
        nivel_j: "B"
    },
    {
        id_j: "ic056",
        nom_j: "Mariano",
        ape_j: "",
        rank_j: 50,
        punt_j: 0,
        nivel_j: "B"
    },
    {
        id_j: "ic057",
        nom_j: "Mariano",
        ape_j: "L.",
        rank_j: 38,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic058",
        nom_j: "Mario",
        ape_j: "",
        rank_j: 13,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic059",
        nom_j: "Michele",
        ape_j: "",
        rank_j: 77,
        punt_j: 0,
        nivel_j: "B"
    },
    {
        id_j: "ic060",
        nom_j: "Nacho",
        ape_j: "",
        rank_j: 25,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic061",
        nom_j: "Nico",
        ape_j: "",
        rank_j: 61,
        punt_j: 0,
        nivel_j: "B"
    },
    {
        id_j: "ic062",
        nom_j: "Oriol",
        ape_j: "A.",
        rank_j: 89,
        punt_j: 0,
        nivel_j: "B"
    },
    {
        id_j: "ic063",
        nom_j: "Oriol",
        ape_j: "C.",
        rank_j: 47,
        punt_j: 0,
        nivel_j: "B"
    },
    {
        id_j: "ic064",
        nom_j: "Oriol",
        ape_j: "J.",
        rank_j: 85,
        punt_j: 0,
        nivel_j: "B"
    },
    {
        id_j: "ic065",
        nom_j: "Pablo",
        ape_j: "M.",
        rank_j: 51,
        punt_j: 0,
        nivel_j: "B"
    },
    {
        id_j: "ic066",
        nom_j: "Paco",
        ape_j: "A.",
        rank_j: 29,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic067",
        nom_j: "Pau",
        ape_j: "Co.",
        rank_j: 28,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic068",
        nom_j: "Pedro",
        ape_j: "",
        rank_j: 22,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic069",
        nom_j: "Javi",
        ape_j: "Peso",
        rank_j: 3,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic070",
        nom_j: "Quique",
        ape_j: "A.",
        rank_j: 30,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic071",
        nom_j: "Rafa",
        ape_j: "",
        rank_j: 75,
        punt_j: 0,
        nivel_j: "B"
    },
    {
        id_j: "ic072",
        nom_j: "Ramón",
        ape_j: "M.",
        rank_j: 18,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic073",
        nom_j: "Renzo",
        ape_j: "",
        rank_j: 36,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic074",
        nom_j: "Ricardo",
        ape_j: "",
        rank_j: 24,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic075",
        nom_j: "Roger",
        ape_j: "",
        rank_j: 62,
        punt_j: 0,
        nivel_j: "B"
    },
    {
        id_j: "ic076",
        nom_j: "Roger",
        ape_j: "Salvat",
        rank_j: 48,
        punt_j: 0,
        nivel_j: "B"
    },
    {
        id_j: "ic077",
        nom_j: "Sam",
        ape_j: "",
        rank_j: 11,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic078",
        nom_j: "Sebastián",
        ape_j: "",
        rank_j: 69,
        punt_j: 0,
        nivel_j: "B"
    },
    {
        id_j: "ic079",
        nom_j: "Sergi",
        ape_j: "",
        rank_j: 80,
        punt_j: 0,
        nivel_j: "B"
    },
    {
        id_j: "ic080",
        nom_j: "Silvan",
        ape_j: "",
        rank_j: 14,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic081",
        nom_j: "Sito",
        ape_j: "",
        rank_j: 84,
        punt_j: 0,
        nivel_j: "B"
    },
    {
        id_j: "ic082",
        nom_j: "Gorka",
        ape_j: "Tapia",
        rank_j: 4,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic083",
        nom_j: "Thomas",
        ape_j: "",
        rank_j: 34,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic084",
        nom_j: "Ton",
        ape_j: "Paloma",
        rank_j: 74,
        punt_j: 0,
        nivel_j: "B"
    },
    {
        id_j: "ic085",
        nom_j: "Toni",
        ape_j: "",
        rank_j: 83,
        punt_j: 0,
        nivel_j: "B"
    },
    {
        id_j: "ic086",
        nom_j: "Toni",
        ape_j: "M.",
        rank_j: 10,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic087",
        nom_j: "Uri",
        ape_j: "",
        rank_j: 27,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic088",
        nom_j: "Valdi",
        ape_j: "",
        rank_j: 26,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic089",
        nom_j: "Vicent",
        ape_j: "",
        rank_j: 39,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic090",
        nom_j: "Víctor",
        ape_j: "B.",
        rank_j: 42,
        punt_j: 0,
        nivel_j: "A"
    },
    {
        id_j: "ic091",
        nom_j: "Víctor",
        ape_j: "P.",
        rank_j: 66,
        punt_j: 0,
        nivel_j: "B"
    },
    {
        id_j: "ic092",
        nom_j: "Xavi",
        ape_j: "Olmo",
        rank_j: 6,
        punt_j: 0,
        nivel_j: "A"
    },
];
//****************************
//****************************
//RESULTADOS DE LOS GRUPOS
//Resultados Grupo A1
let resGamesA1 = [
    {
        //Partido P1
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P2
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P3
        //Set1
        s1_t1: 3,
        s1_t2: 6,
        //Set2
        s2_t1: 3,
        s2_t2: 6,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P4
        //Set1
        s1_t1: 6,
        s1_t2: 2,
        //Set2
        s2_t1: 6,
        s2_t2: 1,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P5
        //Set1
        s1_t1: 6,
        s1_t2: 3,
        //Set2
        s2_t1: 1,
        s2_t2: 6,
        //Set3
        s3_t1: 6,
        s3_t2: 1
    },
    {
        //Partido P6
        //Set1
        s1_t1: 6,
        s1_t2: 3,
        //Set2
        s2_t1: 6,
        s2_t2: 4,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P7
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P8
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P9
        //Set1
        s1_t1: 6,
        s1_t2: 3,
        //Set2
        s2_t1: 4,
        s2_t2: 6,
        //Set3
        s3_t1: 4,
        s3_t2: 6
    },
    {
        //Partido P10
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P11
        //Set1
        s1_t1: 6,
        s1_t2: 1,
        //Set2
        s2_t1: 6,
        s2_t2: 3,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P12
        //Set1
        s1_t1: 2,
        s1_t2: 6,
        //Set2
        s2_t1: 6,
        s2_t2: 2,
        //Set3
        s3_t1: 6,
        s3_t2: 1
    },
    {
        //Partido P13
        //Set1
        s1_t1: 6,
        s1_t2: 2,
        //Set2
        s2_t1: 6,
        s2_t2: 2,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P14
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P15
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    }
];
//Resultados Grupo A2
let resGamesA2 = [
    {
        //Partido P1
        //Set1
        s1_t1: 4,
        s1_t2: 6,
        //Set2
        s2_t1: 3,
        s2_t2: 6,
        //Set3
        s3_t1: 6,
        s3_t2: 2
    },
    {
        //Partido P2
        //Set1
        s1_t1: 6,
        s1_t2: 3,
        //Set2
        s2_t1: 6,
        s2_t2: 4,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P3
        //Set1
        s1_t1: 6,
        s1_t2: 4,
        //Set2
        s2_t1: 6,
        s2_t2: 3,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P4
        //Set1
        s1_t1: 7,
        s1_t2: 5,
        //Set2
        s2_t1: 6,
        s2_t2: 2,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P5
        //Set1
        s1_t1: 6,
        s1_t2: 0,
        //Set2
        s2_t1: 7,
        s2_t2: 6,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P6
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P7
        //Set1
        s1_t1: 6,
        s1_t2: 2,
        //Set2
        s2_t1: 6,
        s2_t2: 1,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P8
        //Set1
        s1_t1: 6,
        s1_t2: 1,
        //Set2
        s2_t1: 6,
        s2_t2: 1,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P9
        //Set1
        s1_t1: 6,
        s1_t2: 0,
        //Set2
        s2_t1: 6,
        s2_t2: 1,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P10
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P11
        //Set1
        s1_t1: 4,
        s1_t2: 6,
        //Set2
        s2_t1: 3,
        s2_t2: 6,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P12
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P13
        //Set1
        s1_t1: 3,
        s1_t2: 6,
        //Set2
        s2_t1: 4,
        s2_t2: 6,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P14
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P15
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    }
];
//Resultados Grupo A3
let resGamesA3 = [
    {
        //Partido P1
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P2
        //Set1
        s1_t1: 6,
        s1_t2: 4,
        //Set2
        s2_t1: 6,
        s2_t2: 4,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P3
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P4
        //Set1
        s1_t1: 4,
        s1_t2: 6,
        //Set2
        s2_t1: 6,
        s2_t2: 4,
        //Set3
        s3_t1: 6,
        s3_t2: 1
    },
    {
        //Partido P5
        //Set1
        s1_t1: 6,
        s1_t2: 1,
        //Set2
        s2_t1: 6,
        s2_t2: 1,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P6
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P7
        //Set1
        s1_t1: 6,
        s1_t2: 1,
        //Set2
        s2_t1: 6,
        s2_t2: 2,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P8
        //Set1
        s1_t1: 6,
        s1_t2: 4,
        //Set2
        s2_t1: 7,
        s2_t2: 5,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P9
        //Set1
        s1_t1: 6,
        s1_t2: 3,
        //Set2
        s2_t1: 6,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P10
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    }
];
//Resultados Grupo A3
let resGamesA4 = [
    {
        //Partido P1
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P2
        //Set1
        s1_t1: 6,
        s1_t2: 4,
        //Set2
        s2_t1: 6,
        s2_t2: 2,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P3
        //Set1
        s1_t1: 6,
        s1_t2: 1,
        //Set2
        s2_t1: 6,
        s2_t2: 1,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P4
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P5
        //Set1
        s1_t1: 6,
        s1_t2: 1,
        //Set2
        s2_t1: 6,
        s2_t2: 2,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P6
        //Set1
        s1_t1: 6,
        s1_t2: 2,
        //Set2
        s2_t1: 7,
        s2_t2: 5,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P7
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P8
        //Set1
        s1_t1: 6,
        s1_t2: 4,
        //Set2
        s2_t1: 7,
        s2_t2: 5,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P9
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P10
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    }
];
//Resultados Grupo B1
let resGamesB1 = [
    {
        //Partido P1
        //Set1
        s1_t1: 2,
        s1_t2: 6,
        //Set2
        s2_t1: 6,
        s2_t2: 2,
        //Set3
        s3_t1: 6,
        s3_t2: 2
    },
    {
        //Partido P2
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P3
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P4
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P5
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P6
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P7
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P8
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P9
        //Set1
        s1_t1: 1,
        s1_t2: 6,
        //Set2
        s2_t1: 5,
        s2_t2: 7,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P10
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P11
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P12
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P13
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P14
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P15
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    }
];
//Resultados Grupo B2
let resGamesB2 = [
    {
        //Partido P1
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P2
        //Set1
        s1_t1: 3,
        s1_t2: 6,
        //Set2
        s2_t1: 3,
        s2_t2: 6,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P3
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P4
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P5
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P6
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P7
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P8
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P9
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P10
        //Set1
        s1_t1: 6,
        s1_t2: 4,
        //Set2
        s2_t1: 3,
        s2_t2: 6,
        //Set3
        s3_t1: 6,
        s3_t2: 4
    },
    {
        //Partido P11
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P12
        //Set1
        s1_t1: 6,
        s1_t2: 1,
        //Set2
        s2_t1: 6,
        s2_t2: 4,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P13
        //Set1
        s1_t1: 1,
        s1_t2: 6,
        //Set2
        s2_t1: 0,
        s2_t2: 6,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P14
        //Set1
        s1_t1: 3,
        s1_t2: 6,
        //Set2
        s2_t1: 1,
        s2_t2: 6,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P15
        //Set1
        s1_t1: 6,
        s1_t2: 3,
        //Set2
        s2_t1: 6,
        s2_t2: 3,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    }
];
//Resultados Grupo B3
let resGamesB3 = [
    {
        //Partido P1
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P2
        //Set1
        s1_t1: 1,
        s1_t2: 6,
        //Set2
        s2_t1: 3,
        s2_t2: 6,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P3
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P4
        //Set1
        s1_t1: 3,
        s1_t2: 6,
        //Set2
        s2_t1: 7,
        s2_t2: 5,
        //Set3
        s3_t1: 1,
        s3_t2: 6
    },
    {
        //Partido P5
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P6
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P7
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P8
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P9
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P10
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P11
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P12
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P13
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P14
        //Set1
        s1_t1: 7,
        s1_t2: 6,
        //Set2
        s2_t1: 3,
        s2_t2: 6,
        //Set3
        s3_t1: 6,
        s3_t2: 7
    },
    {
        //Partido P15
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    }
];
//Resultados Grupo B4
let resGamesB4 = [
    {
        //Partido P1
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P2
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P3
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P4
        //Set1
        s1_t1: 3,
        s1_t2: 6,
        //Set2
        s2_t1: 6,
        s2_t2: 7,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P5
        //Set1
        s1_t1: 6,
        s1_t2: 2,
        //Set2
        s2_t1: 6,
        s2_t2: 1,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P6
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P7
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P8
        //Set1
        s1_t1: 6,
        s1_t2: 7,
        //Set2
        s2_t1: 7,
        s2_t2: 5,
        //Set3
        s3_t1: 2,
        s3_t2: 6
    },
    {
        //Partido P9
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P10
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P11
        //Set1
        s1_t1: 4,
        s1_t2: 6,
        //Set2
        s2_t1: 3,
        s2_t2: 6,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P12
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P13
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P14
        //Set1
        s1_t1: 6,
        s1_t2: 0,
        //Set2
        s2_t1: 6,
        s2_t2: 2,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //Partido P15
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    }
];

//****************************
//****************************
//FINALES GRUPO A
//Cuadros Finales - Octavos A
let res8FA = [
    {
        //8F1
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //8F2
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //8F3
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //8F4
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //8F5
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //8F6
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //8F7
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //8F8
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    }
];
//Cuadros Finales - Cuartos A
let res4FA = [
    {
        //4F1
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //4F2
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //4F3
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //4F4
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    }
];
//Cuadros Finales - Semifinal A
let res2FA = [
    {
        //SF1
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //SF2
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    }
];
//Cuadros Finales - Final A
let res1FA = [
    {
        //F1
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    }
];
//****************************
//****************************
//FINALES GRUPO B
//Cuadros Finales - Octavos B
let res8FB = [
    {
        //8F1
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //8F2
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //8F3
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //8F4
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //8F5
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //8F6
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //8F7
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //8F8
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    }
];
//Cuadros Finales - Cuartos B
let res4FB = [
    {
        //4F1
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //4F2
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //4F3
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //4F4
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    }
];
//Cuadros Finales - Semifinal B
let res2FB = [
    {
        //SF1
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    },
    {
        //SF2
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    }
];
//Cuadros Finales - Final B
let res1FB = [
    {
        //F1
        //Set1
        s1_t1: 0,
        s1_t2: 0,
        //Set2
        s2_t1: 0,
        s2_t2: 0,
        //Set3
        s3_t1: 0,
        s3_t2: 0
    }
];
//****************************
//****************************


//Resultados de ejemplo GA1
// //Resultados Grupo A1
// let resGamesA1 = [
//     {
//         //Partido P1
//         //Set1
//         s1_t1: 6,
//         s1_t2: 4,
//         //Set2
//         s2_t1: 5,
//         s2_t2: 7,
//         //Set3
//         s3_t1: 7,
//         s3_t2: 6
//     },
//     {
//         //Partido P2
//         //Set1
//         s1_t1: 6,
//         s1_t2: 1,
//         //Set2
//         s2_t1: 6,
//         s2_t2: 2,
//         //Set3
//         s3_t1: 0,
//         s3_t2: 0
//     },
//     {
//         //Partido P3
//         //Set1
//         s1_t1: 5,
//         s1_t2: 7,
//         //Set2
//         s2_t1: 4,
//         s2_t2: 6,
//         //Set3
//         s3_t1: 0,
//         s3_t2: 0
//     },
//     {
//         //Partido P4
//         //Set1
//         s1_t1: 6,
//         s1_t2: 0,
//         //Set2
//         s2_t1: 5,
//         s2_t2: 7,
//         //Set3
//         s3_t1: 6,
//         s3_t2: 1
//     },
//     {
//         //Partido P5
//         //Set1
//         s1_t1: 7,
//         s1_t2: 6,
//         //Set2
//         s2_t1: 7,
//         s2_t2: 6,
//         //Set3
//         s3_t1: 0,
//         s3_t2: 0
//     },
//     {
//         //Partido P6
//         //Set1
//         s1_t1: 3,
//         s1_t2: 6,
//         //Set2
//         s2_t1: 6,
//         s2_t2: 4,
//         //Set3
//         s3_t1: 7,
//         s3_t2: 6
//     },
//     {
//         //Partido P7
//         //Set1
//         s1_t1: 1,
//         s1_t2: 6,
//         //Set2
//         s2_t1: 1,
//         s2_t2: 6,
//         //Set3
//         s3_t1: 0,
//         s3_t2: 0
//     },
//     {
//         //Partido P8
//         //Set1
//         s1_t1: 2,
//         s1_t2: 6,
//         //Set2
//         s2_t1: 6,
//         s2_t2: 4,
//         //Set3
//         s3_t1: 6,
//         s3_t2: 4
//     },
//     {
//         //Partido P9
//         //Set1
//         s1_t1: 3,
//         s1_t2: 6,
//         //Set2
//         s2_t1: 5,
//         s2_t2: 7,
//         //Set3
//         s3_t1: 0,
//         s3_t2: 0
//     },
//     {
//         //Partido P10
//         //Set1
//         s1_t1: 5,
//         s1_t2: 7,
//         //Set2
//         s2_t1: 5,
//         s2_t2: 7,
//         //Set3
//         s3_t1: 0,
//         s3_t2: 0
//     },
//     {
//         //Partido P11
//         //Set1
//         s1_t1: 6,
//         s1_t2: 3,
//         //Set2
//         s2_t1: 6,
//         s2_t2: 4,
//         //Set3
//         s3_t1: 0,
//         s3_t2: 0
//     },
//     {
//         //Partido P12
//         //Set1
//         s1_t1: 7,
//         s1_t2: 6,
//         //Set2
//         s2_t1: 1,
//         s2_t2: 6,
//         //Set3
//         s3_t1: 7,
//         s3_t2: 6
//     },
//     {
//         //Partido P13
//         //Set1
//         s1_t1: 6,
//         s1_t2: 0,
//         //Set2
//         s2_t1: 6,
//         s2_t2: 4,
//         //Set3
//         s3_t1: 0,
//         s3_t2: 0
//     },
//     {
//         //Partido P14
//         //Set1
//         s1_t1: 6,
//         s1_t2: 0,
//         //Set2
//         s2_t1: 4,
//         s2_t2: 6,
//         //Set3
//         s3_t1: 6,
//         s3_t2: 7
//     },
//     {
//         //Partido P15
//         //Set1
//         s1_t1: 6,
//         s1_t2: 3,
//         //Set2
//         s2_t1: 6,
//         s2_t2: 4,
//         //Set3
//         s3_t1: 0,
//         s3_t2: 0
//     }
// ];