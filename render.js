wahlomat = function () {
    var eig_Pkt = 0;
    var SPD = 0;
    var pkt1 = parseInt(document.querySelector('input[name=A1]:checked').value);
    var wichtig1 = parseInt(document.querySelector("input[name=W1]:checked").value);
    if (pkt1 == 6) {
        SPD += 0;
        eig_Pkt += 0;
    } else if (wichtig1 == 1) {
        SPD += 10;
        eig_Pkt = 2 * pkt1;
    } else if (wichtig1 == 0) {
        SPD += 5;
        eig_Pkt = pkt1;
    }
    var pkt2 = parseInt(document.querySelector('input[name=A2]:checked').value);
    var wichtig2 = parseInt(document.querySelector("input[name=W2]:checked").value);
    if (pkt2 == 6) {
        SPD += 0;
        eig_Pkt += 0;
    } else if (wichtig2 == 1) {
        SPD += 10;
        eig_Pkt += 2 * pkt2;
    } else if (wichtig2 == 0) {
        SPD += 5;
        eig_Pkt += pkt2;
    }
    var pkt3 = parseInt(document.querySelector('input[name=A3]:checked').value);
    var wichtig3 = parseInt(document.querySelector("input[name=W3]:checked").value);
    if (pkt3 == 6) {
        SPD += 0;
        eig_Pkt += 0;
    } else if (wichtig3 == 1) {
        SPD += 10;
        eig_Pkt += 2 * pkt3;
    } else if (wichtig3 == 0) {
        SPD += 5;
        eig_Pkt += pkt3;
    }
    var pkt4 = parseInt(document.querySelector('input[name=A4]:checked').value);
    var wichtig4 = parseInt(document.querySelector("input[name=W4]:checked").value);
    if (pkt4 == 6) {
        SPD += 0;
        eig_Pkt += 0;
    } else if (wichtig4 == 1) {
        SPD += 10;
        eig_Pkt += 2 * pkt4;
    } else if (wichtig4 == 0) {
        SPD += 5;
        eig_Pkt += pkt4;
    }
    var pkt5 = parseInt(document.querySelector('input[name=A5]:checked').value);
    var wichtig5 = parseInt(document.querySelector("input[name=W5]:checked").value);
    if (pkt5 == 6) {
        SPD += 0;
        eig_Pkt += 0;
    } else if (wichtig5 == 1) {
        SPD += 10;
        eig_Pkt += 2 * pkt5;
    } else if (wichtig5 == 0) {
        SPD += 5;
        eig_Pkt += pkt5;
    }
    var pkt6 = parseInt(document.querySelector('input[name=A6]:checked').value);
    var wichtig6 = parseInt(document.querySelector("input[name=W6]:checked").value);
    if (pkt6 == 6) {
        SPD += 0;
        eig_Pkt += 0;
    } else if (wichtig6 == 1) {
        SPD += 10;
        eig_Pkt += 2 * pkt6;
    } else if (wichtig6 == 0) {
        SPD += 5;
        eig_Pkt += pkt6;
    }
    var pkt7 = parseInt(document.querySelector('input[name=A7]:checked').value);
    var wichtig7 = parseInt(document.querySelector("input[name=W7]:checked").value);
    if (pkt7 == 6) {
        SPD += 0;
        eig_Pkt += 0;
    } else if (wichtig7 == 1) {
        SPD += 10;
        eig_Pkt += 2 * pkt7;
    } else if (wichtig7 == 0) {
        SPD += 5;
        eig_Pkt += pkt7;
    }
    var pkt8 = parseInt(document.querySelector('input[name=A8]:checked').value);
    var wichtig8 = parseInt(document.querySelector("input[name=W8]:checked").value);
    if (pkt8 == 6) {
        SPD += 0;
        eig_Pkt += 0;
    } else if (wichtig8 == 1) {
        SPD += 10;
        eig_Pkt += 2 * pkt8;
    } else if (wichtig8 == 0) {
        SPD += 5;
        eig_Pkt += pkt8;
    }
    var pkt9 = parseInt(document.querySelector('input[name=A9]:checked').value);
    var wichtig9 = parseInt(document.querySelector("input[name=W9]:checked").value);
    if (pkt9 == 6) {
        SPD += 0;
        eig_Pkt += 0;
    } else if (wichtig9 == 1) {
        SPD += 10;
        eig_Pkt += 2 * pkt9;
    } else if (wichtig9 == 0) {
        SPD += 5;
        eig_Pkt += pkt9;
    }
    var pkt10 = parseInt(document.querySelector('input[name=A10]:checked').value);
    var wichtig10 = parseInt(document.querySelector("input[name=W10]:checked").value);
    if (pkt10 == 6) {
        SPD += 0;
        eig_Pkt += 0;
    } else if (wichtig10 == 1) {
        SPD += 10;
        eig_Pkt += 2 * pkt10;
    } else if (wichtig10 == 0) {
        SPD += 5;
        eig_Pkt += pkt10;
    }
    
    var Aussage = document.querySelector("#Auswertung");
    if (SPD > 0) {
        var Prz = (eig_Pkt / SPD) * 100;
        Prz = Math.round(Prz * 100) / 100;

        if (Prz == 100) {
            Aussage.innerHTML = "<div class='header'><p id='p1'> SPD Herne Wahl-O-Mat</p><p id='p2'> So viel SPD steckt in dir...</p><img src='logo.png' style='display: block; width: 100%; grid-row-start: 1; grid-row-end: 3;'/></div><div id='weiss'><h3> Wow. Sicher, dass Du nicht mitgeschrieben hast am Wahlprogramm? Deine Posititionen entsprechen zu 100% denen der SPD in Herne. </h3></div><a href=#target2><button class='neu' onclick='hide()'>Noch einmal.</button></a><a href=mailto: amelie.menges@gmx.de> <button class='neu'> Kontaktiere uns. </button> <a>";
        } else if (Prz >= 80) {
            Aussage.innerHTML = `<div class='header'><p id='p1'> SPD Herne Wahl-O-Mat</p><p id='p2'> So viel SPD steckt in dir...</p><img src='logo.png' style='display: block; width: 100%; grid-row-start: 1; grid-row-end: 3;'/></div><div id='weiss'><h3> Sehr schön, Deine Positionen entsprechen zu ${Prz}% denen der SPD in Herne.</h3></div><a href=#target2><button class='neu' onclick='hide()'>Noch einmal.</button></a> <a href=mailto: amelie.menges@gmx.de> <button class='neu' > Kontaktiere uns. </button> <a>`;
        } else if (Prz >= 60) {
            Aussage.innerHTML = `<div class='header'><p id='p1'> SPD Herne Wahl-O-Mat</p><p id='p2'> So viel SPD steckt in dir...</p><img src='logo.png' style='display: block; width: 100%; grid-row-start: 1; grid-row-end: 3;'/></div><div id='weiss'><h3> Das sieht doch schon ganz passend aus. Deine Positionen enstprechen zu ${Prz}% denen der SPD in Herne. Schau Dir doch mal unser Wahlprogramm an, vielleicht können wir Dich ja noch mit einigen weiteren Punkten überzeugen. </h3></div><a href=#target2><button class='neu' onclick='hide()'>Noch einmal.</button></a> <a href=mailto: amelie.menges@gmx.de> <button class='neu'> Kontaktiere uns. </button> <a>`;
        } else if (Prz >= 40) {
            Aussage.innerHTML = `<div class='header'><p id='p1'> SPD Herne Wahl-O-Mat</p><p id='p2'> So viel SPD steckt in dir...</p><img src='logo.png' style='display: block; width: 100%; grid-row-start: 1; grid-row-end: 3;'/></div><div id='weiss'><h3> Da müssen wir wohl noch einige Überzeugungsarbeit bei Dir leisten. Deine Positionen entsprechen zu ${Prz}% denen der SPD in Herne. Schreib uns doch, was wir in Deinen Augen besser machen könnten. </h3></div><a href=#target2><button class='neu' onclick='hide()'>Noch einmal.</button></a> <a href=mailto: amelie.menges@gmx.de> <button class='neu'> Kontaktiere uns. </button> <a>`;
        } else if (Prz > 0) {
            Aussage.innerHTML = `<div class='header'><p id='p1'> SPD Herne Wahl-O-Mat</p><p id='p2'> So viel SPD steckt in dir...</p><img src='logo.png' style='display: block; width: 100%; grid-row-start: 1; grid-row-end: 3;'/></div><div id='weiss'><h3> Deine Positionen entsprechen zu ${Prz}% denen der SPD in Herne. Wir sind uns sicher: Da geht noch mehr. Schreib uns und lass uns diskutieren, was wir in Deinen Augen besser machen könnten. </h3></div><a href=#target2><button class='neu' onclick='hide()'>Noch einmal.</button></a> <a href=mailto: amelie.menges@gmx.de> <button class='neu'> Kontaktiere uns. </button> <a>`;
        } else {
            Aussage.innerHTML = "<div class='header'><p id='p1'> SPD Herne Wahl-O-Mat</p><p id='p2'> So viel SPD steckt in dir...</p><img src='logo.png' style='display: block; width: 100%; grid-row-start: 1; grid-row-end: 3;'/></div><div id='weiss'><h3> Bist Du Dir sicher, dass Du hier richtig bist? Deine Positionen entsprechen zu 0% denen der SPD in Herne.</h3></div><a href=#target2><button class='neu' onclick='hide()'>Noch einmal.</button></a> <a href=mailto: amelie.menges@gmx.de> <button class='neu'> Kontaktiere uns. </button> <a>"
        }
    } else {
        Aussage.innerHTML = "<div class='header'><p id='p1'> SPD Herne Wahl-O-Mat</p><p id='p2'> So viel SPD steckt in dir...</p><img src='logo.png' style='display: block; width: 100%; grid-row-start: 1; grid-row-end: 3;'/></div><div id='weiss'><h3> Dich interessiert keine der Aussagen? Schreib uns doch einmal, was Dich interessieren würde.</h3></div><a href=#target2><button class='neu' onclick='hide()'>Noch einmal.</button></a> <a href=mailto: amelie.menges@gmx.de> <button class='neu'> Kontaktiere uns. </button> <a>"
    }
    var feld = document.querySelector("#Auswertung");
    feld.style.display = "block";
    var feld = document.querySelector("#Fragen");
    feld.style.display = "none";
    var feld = document.querySelector("#Start");
    feld.style.display = "none";
}
show = function () {
    var feld = document.querySelector("#Fragen");
    feld.style.display = "block";
    var feld = document.querySelector("#Start");
    feld.style.display = "none";
    generate();
}
hide = function () {
    var feld = document.querySelector("#Fragen");
    feld.style.display = "block";
    var feld = document.querySelector("#Auswertung");
    feld.style.display = "none";
}
function generate() {
    aussagen.forEach((aussage, index) => {
        //Overelement erstellen
        var aussageElement = $("<div id='weiss'></div>")

        //Aussage einblenden
        var h1 = $("<h1 class='aussage'>" + aussage.aussage + "</h1>");
        aussageElement.append(h1);

        //Das sagte die SPD dazu
        var spddazu = $("<details></details>")
        spddazu.append($("<summary>Das sagt die SPD Herne dazu:  </summary>"));

        var container = $("<div class='container'></div>");
        container.append("<img src=" + aussage.bild_src + " alt=" + aussage.bild_alt + " class='image'/>");
        container.append("<div class='bottom'>Klick hier.</div >");

        var overlay = $("<div class='overlay'></div >");
        overlay.append("<div div class='text'>" + aussage.erklärtext + "</div>");

        container.append(overlay);
        spddazu.append(container);
        aussageElement.append(spddazu);

        //antworten radio buttons
        var antworten = $("<div id='d4'></div>");

        var texte = ["5 - Ich stimme voll zu.", "4", "3", "2", "1"
            , "0 - Ich stimme gar nicht zu.", "Überspringen."]

        texte.forEach((text, i) => {
            var value = 5 - i; //5,4,3,2,1,0,-1 => 6
            if (value == -1) value = 6; //Setz den letzten Wert auf 6
            var checked = ""
            if (value == 5) checked = "checked" //Sorgt dafür, dass nur das erste checked ist

            var checkbox = $("<label class='antworten'></label>")
            checkbox.append($("<input type='radio' name='A" + (index + 1) + "' value='" + value + "' " + checked + " />\
            "+ text + "\
            <span class= 'checkmark' ></span>\
            </label >"));
            antworten.append(checkbox);
        });

        aussageElement.append(antworten);

        //Wichtigkeit
        var wichtig = $("<div id='d1a'></div>");
        wichtig.append($("<h2>Ist Dir die Aussage besonders wichtig ?</h2 >"))

        var boxen = $("<div id='d4'></div>")
        boxen.append($("<label class='antworten'>\
            <input type = 'radio' name = 'W"+ (index + 1) + "' value = '1' checked /> Ja.\
            <span class= 'checkmark' ></span>\
            </label>"))
        boxen.append($("<label class='antworten'>\
            <input type = 'radio' name = 'W"+ (index + 1) + "' value = '0'/> Nein.\
            <span class= 'checkmark' ></span>\
            </label>"))

        wichtig.append(boxen);
        aussageElement.append(wichtig);
        //An der korrekten Stelle einfügen
        $("#aussagen").append(aussageElement);
    });
}

var aussagen = [
    {
        aussage: "Die Bildung von Betriebsräten sollte angeregt werden, z.B. durch die Einrichtung des 'Runder Tisch Mitbestimmung'.",
        bild_src: "hans.jpg",
        bild_alt: "Hans",
        erklärtext: '"Hier kommt ein Zitat hin." - Hans Peter'
    },
    {
        aussage: "Das Einschulungsalter sollte flexibler geregelt werden können.",
        bild_src: "hans.jpg",
        bild_alt: "Hans",
        erklärtext: '"Hier kommt ein Zitat hin." - Hans Peter'
    },
    { 
        aussage: "Es sollte ein Eltern-/Familienbonusheft eingeführt werden.",
        bild_src: "hans.jpg",
        bild_alt: "Hans",
        erklärtext: '"Hier kommt ein Zitat hin." - Hans Peter'
    },
    {
        aussage: "Ein Kinderschutzbeauftragter, eine Kinderschutzbeautragte sollte eingesetzt werden.",
        bild_src: "hans.jpg",
        bild_alt: "Hans",
        erklärtext: '"Hier kommt ein Zitat hin." - Hans Peter'
    },
    {
        aussage: "Neubauprojekte und Sanierungen sollen klimarelevant durchgeführt werden, z.B. durch Dachbegrünung oder Photovoltaikanlagen.",
        bild_src: "hans.jpg",
        bild_alt: "Hans",
        erklärtext: '"Hier kommt ein Zitat hin." - Hans Peter'
    },
    {
        aussage: "Familien- und frauenbewusste Politik sollte in kommunalen Unternehmen verankert werden.",
        bild_src: "hans.jpg",
        bild_alt: "Hans",
        erklärtext: '"Hier kommt ein Zitat hin." - Hans Peter'
    },
    {
        aussage: "In Wohnquartieren sollte der PkW-Vekehr reduziert weden, z.B. durch Schaffung von Tempo 30-Zonen.",
        bild_src: "hans.jpg",
        bild_alt: "Hans",
        erklärtext: '"Hier kommt ein Zitat hin." - Hans Peter'
    },
    {
        aussage: "Für den sozialen Wohnungsbau sollten Flächen vorgehalten werden.",
        bild_src: "hans.jpg",
        bild_alt: "Hans",
        erklärtext: '"Hier kommt ein Zitat hin." - Hans Peter'
    },
    {
        aussage: "Die interkulturelle Öffnung der Verwaltung und ihrer Tochtergesellschaften sollte weiter vorangetrieben werden.",
        bild_src: "hans.jpg",
        bild_alt: "Hans",
        erklärtext: '"Hier kommt ein Zitat hin." - Hans Peter'
    },
    {
        aussage: "Es sollte mehr Ladeinfrastruktur für E-Fahrzeuge geschaffen werden.",
        bild_src: "hans.jpg",
        bild_alt: "Hans",
        erklärtext: '"Hier kommt ein Zitat hin." - Hans Peter'
    },
]
