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
            Aussage.innerHTML = "<div id='weiss'><h3> Wow! Sicher, dass Du nicht mitgeschrieben hast am Wahlprogramm? Deine Antworten entsprechen zu 100 Prozent den Positionen der Herner SPD. <a href='https://www.spd.de/unterstuetzen/mitglied-werden/' target='_blank'> Hier </a> kannst du Mitglied werden, denn wir freuen uns immer über Verstärkung!</h3></div>";
        } else if (Prz >= 80) {
            Aussage.innerHTML = `<div id='weiss'><h3> Sehr schön! Deine Antworten entsprechen zu ${Prz} Prozent den Positionen der Herner SPD.</h3></div>`;
        } else if (Prz >= 60) {
            Aussage.innerHTML = `<div id='weiss'><h3> Das sieht doch schon ganz passend aus. Deine Antworten entsprechen zu ${Prz} Prozent den Positionen der Herner SPD. Schau Dir doch mal unser Kommunalwahlprogramm an, um zu entdecken, was wir gemeinsam mit den Bürgerinnen und Bürgern in Herne erreichen wollen. Vielleicht können wir Dich noch mit einigen weiteren Punkten überzeugen. </h3></div>`;
        } else if (Prz >= 40) {
            Aussage.innerHTML = `<div id='weiss'><h3> Gerne überzeugen wir Dich noch mehr von uns! Deine Antworten entsprechen zu ${Prz} Prozent den Positionen der Herner SPD. Schreib uns doch, was wir Deiner Meinung nach besser machen können oder wirf einen Blick in unser Kommunalwahlprogramm. </h3></div>`;
        } else if (Prz > 0) {
            Aussage.innerHTML = `<div id='weiss'><h3> Deine Antworten entsprechen zu ${Prz} Prozent den Positionen der Herner SPD. Wir sind uns sicher: Da geht noch mehr. Schreib uns und lass uns diskutieren, was wir in Deinen Augen besser machen können. Oder wirf einen Blick in unser Kommunalwahlprogramm, um zu entdecken, was wir gemeinsam mit den Bürgerinnen und Bürgern in Herne erreichen wollen.</h3></div>`;
        } else {
            Aussage.innerHTML = "<div id='weiss'><h3> Bist Du Dir sicher, dass Du hier richtig bist? Deine Antworten entsprechen zu 0 Prozent den Positionen der Hernre SPD.</h3></div>";
        }
    } else {
        Aussage.innerHTML = "<div id='weiss'><h3> Dich interessiert keine der Aussagen? Schreib uns doch einmal, was Dich interessieren würde.</h3></div>";
    }
    var feld = document.querySelector("#Ergebnis");
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
    var feld = document.querySelector("#Ergebnis");
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

        var container = $("<div onclick='' class='container'></div>");
        container.append("<img src=" + aussage.bild_src + " alt=" + aussage.bild_alt + " class='image'/>")

        var overlay = $("<div class='overlay'></div >");
        overlay.append("<div class='text'>" + aussage.erklärtext + "</div>");

        container.append(overlay);
        spddazu.append(container);
        aussageElement.append(spddazu);

        //antworten radio buttons
        var antworten = $("<div id='d4'></div>");

        var texte = ["5 - Ich stimme voll zu.", "4", "3", "2", "1"
            , "0 - Ich stimme gar nicht zu."]

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
        wichtig.append($("<h2>Ist Dir die Aussage besonders wichtig?</h2 >"))

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
        aussage: "Ein*e Kinderschutzbeauftragte*r soll die Arbeit aufnehmen, um Kinder in Herne zu schützen.",
        bild_src: "Ulrich.png",
        bild_alt: "Ulrich Klonki",
        erklärtext: '"Wir brauchen eine*n Kinderschutzbeauftragte*n, der*die sich unabhängig von allen Institutionen um die Schutzbedürftigkeit von Kindern und Jugendlichen kümmert. Der Schutz und die Rechte der Kinder und Jugendlichen müssen Vorrang haben." - Ulrich Klonki, Ratskandidat' 
    },
    {
        aussage: "Neubauprojekte und Sanierungen sollen klimafreundlich durchgeführt werden. Dazu gehören zum Beispiel Dachbegrünungen oder Photovoltaikanlagen.",
        bild_src: "Amelie.png",
        bild_alt: "Amelie Menges",
        erklärtext: '"Gerade in einer so dicht besiedelten Stadt wie Herne ist es wichtig, dass man neue und innovative Ideen für die Schaffung und Haltung von Wohnraum entwickelt, die auch den Umweltschutz bedenken. Das Herner Klimafolgenanpassungskonzept bietet dabei bereits einige gute Anhaltspunkte." - Amelie Menges, Kandidatin für den Bezirk Herne-Mitte' //" So wird das Stadtklima verbessert und  dass man bei Neubauten und Sanierungen immer auch den Umweltschutz bedenkt: So verbessern Dachbegrünungen das Stadtklima und stehen der Schaffung von neuem Wohnraum nicht im Weg. Denn Wohnraum muss immer auch bezahlbar sein.
    },
    {
        aussage: "Es sollen mehr Betriebsräte in Herner Unternehmen gebildet werden.",
        bild_src: "Patrick.png",
        bild_alt: "Patrick Steinbach",
        erklärtext: '"Hier kommt ein Zitat hin." - Patrick Steinbach, Ratskandidat' 
    },
    { 
        aussage: "In Herner Wohnquartieren soll der Pkw-Verkehr reduziert werden, zum Beispiel mithilfe von Tempo-30-Zonen.",
        bild_src: "Theres.png",
        bild_alt: "Theres Boneberger",
        erklärtext: '"Hier kommt ein Zitat hin." - Theres Boneberger, Ratskandidatin' 
    },
    {
        aussage: "Herner Initiativen, die historische Bildungs- und Aufklärungsarbeit über den Nationalsozialismus leisten, sollen unterstützt werden.",
        bild_src: "Flemming.png",
        bild_alt: "Flemming Menges",
        erklärtext: '"Hier kommt ein Zitat hin." - Flemming Menges, Kandidat für den Bezirk Sodingen'
    },
    {
        aussage: "Familien- und frauenbewusste Politik soll in Herner Unternehmen verankert werden.",
        bild_src: "Julia.jpg",
        bild_alt: "Julia Steinbach",
        erklärtext: '"Hier kommt ein Zitat hin." - Julia Steinbach, Ratskandidatin' 
    },
    {
        aussage: "Es sollen Mobilitätsstationen eingerichtet werden, an denen die verschiedenen Verkehrsmittel miteinander verknüpft werden.",
        bild_src: "Jürgen.png",
        bild_alt: "Jürgen Scharmacher",
        erklärtext: '"Mobilstationen dienen als sichtbare Verknüpfungspunkte zur Vernetzung mehrerer Verkehrsmittel in direkter räumlicher Verbindung. Ziel ist die Verbindung verschiedener Verkehrsmittel an dafür erkennbaren Punkten. Mobilstationen beinhalten darüber hinaus weitere Serviceangebote wie eine gute Aufenthaltsqualität, um klimafreundliche Mobilitätsangebote für die Bürgerinnen und Bürger attraktiv zu gestalten." - Jürgen Scharmacher, Ratskandidat'
    },
    {
        aussage: "Für den sozialen Wohnungsbau in Herne sollen Flächen freigehalten werden.",
        bild_src: "Elisabeth.png",
        bild_alt: "Elisabeth Majchrzak-Frensel",
        erklärtext: '"Wohnen ist ein Grundrecht. Darum müssen beste Bedingungen geschaffen werden, sozialen Wohnraum zu vermehren." - Elisabeth Majchrzak-Frensel, Ratskandidatin'
    },
    {
        aussage: "Städtische Sportanlagen sollen weiterhin kostenlos für alle zur Verfügung stehen.",
        bild_src: "Hendrik.png",
        bild_alt: "Hendrik Bollmann",
        erklärtext: '"Hier kommt ein Zitat hin." - Hendrik Bollmann, Ratskandidat'
    },
    {
        aussage: "Die interkulturelle Öffnung der Stadt Herne, ihrer Verwaltung und ihrer Tochtergesellschaften soll weiter vorangetrieben werden.",
        bild_src: "Emek.png",
        bild_alt: "Emek Öner",
        erklärtext: '"Hier kommt ein Zitat hin." - Emek Öner, Kandidatin für den Integrationsrat'
    },
]
