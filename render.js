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
    var Aussage = document.querySelector("#Auswertung");
    if (SPD > 0) {
        var Prz = (eig_Pkt / SPD) * 100;
        Prz = Math.round(Prz * 100) / 100;

        if (Prz == 100) {
            Aussage.innerHTML = "<div id='d1'><h3> Wow. Sicher, dass Du nicht mitgeschrieben hast am Wahlprogramm? Deine Posititionen entsprechen zu 100% denen der SPD in Herne. </h3></div><a href=#target2><button class='neu' onclick='hide()'>Noch einmal.</button></a><a href=mailto: amelie.menges@gmx.de> <button class='neu'> Kontaktiere uns. </button> <a>";
        } else if (Prz >= 80) {
            Aussage.innerHTML = `<div id='d1'><h3> Sehr schön, Deine Positionen entsprechen zu ${Prz}% denen der SPD in Herne.</h3></div><a href=#target2><button class='neu' onclick='hide()'>Noch einmal.</button></a> <a href=mailto: amelie.menges@gmx.de> <button class='neu' > Kontaktiere uns. </button> <a>`;
        } else if (Prz >= 60) {
            Aussage.innerHTML = `<div id='d1'><h3> Das sieht doch schon ganz passend aus. Deine Positionen enstprechen zu ${Prz}% denen der SPD in Herne. Schau Dir doch mal unser Wahlprogramm an, vielleicht können wir Dich ja noch mit einigen weiteren Punkten überzeugen. </h3></div><a href=#target2><button class='neu' onclick='hide()'>Noch einmal.</button></a> <a href=mailto: amelie.menges@gmx.de> <button class='neu'> Kontaktiere uns. </button> <a>`;
        } else if (Prz >= 40) {
            Aussage.innerHTML = `<div id='d1'><h3> Da müssen wir wohl noch einige Überzeugungsarbeit bei Dir leisten. Deine Positionen entsprechen zu ${Prz}% denen der SPD in Herne. Schreib uns doch, was wir in Deinen Augen besser machen könnten. </h3></div><a href=#target2><button class='neu' onclick='hide()'>Noch einmal.</button></a> <a href=mailto: amelie.menges@gmx.de> <button class='neu'> Kontaktiere uns. </button> <a>`;
        } else if (Prz > 0) {
            Aussage.innerHTML = `<div id='d1'><h3> Deine Positionen entsprechen zu ${Prz}% denen der SPD in Herne. Wir sind uns sicher: Da geht noch mehr. Schreib uns und lass uns diskutieren, was wir in Deinen Augen besser machen könnten. </h3></div><a href=#target2><button class='neu' onclick='hide()'>Noch einmal.</button></a> <a href=mailto: amelie.menges@gmx.de> <button class='neu'> Kontaktiere uns. </button> <a>`;
        } else {
            Aussage.innerHTML = "<div id='d1'><h3> Bist Du Dir sicher, dass Du hier richtig bist? Deine Positionen entsprechen zu 0% denen der SPD in Herne.</h3></div><a href=#target2><button class='neu' onclick='hide()'>Noch einmal.</button></a> <a href=mailto: amelie.menges@gmx.de> <button class='neu'> Kontaktiere uns. </button> <a>"
        }
    } else {
        Aussage.innerHTML = "<div id='d1'><h3> Dich interessiert keine der Aussagen? Schreib uns doch einmal, was Dich interessieren würde.</h3></div><a href=#target2><button class='neu' onclick='hide()'>Noch einmal.</button></a> <a href=mailto: amelie.menges@gmx.de> <button class='neu'> Kontaktiere uns. </button> <a>"
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
}
hide = function () {
    var feld = document.querySelector("#Fragen");
    feld.style.display = "block";
    var feld = document.querySelector("#Auswertung");
    feld.style.display = "none";
}