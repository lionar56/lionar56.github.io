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

        var l=aussage.erklärtext.length;

        var overlay = $("<div class='overlay'></div >");
        if (l<525){
            overlay.append("<div class='text'>" + aussage.erklärtext + "</div>");
        }
        else{
            overlay.append("<div class='text2'>" + aussage.erklärtext + "</div>");
        }

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
        erklärtext: '"Wir brauchen eine*n Kinderschutzbeauftragte*n, der*die sich unabhängig von allen Institutionen um die Schutzbedürftigkeit von Kindern und Jugendlichen kümmert. Der Schutz und die Rechte der Kinder und Jugendlichen müssen Vorrang haben." - Ulrich Klonki' 
    },
    {
        aussage: "Neubauprojekte und Sanierungen sollen klimafreundlich durchgeführt werden. Dazu gehören zum Beispiel Dachbegrünungen oder Photovoltaikanlagen.",
        bild_src: "Amelie.png",
        bild_alt: "Amelie Menges",
        erklärtext: '"Gerade in einer so dicht besiedelten Stadt wie Herne ist es wichtig, dass man neue und innovative Ideen für die Schaffung und Haltung von Wohnraum entwickelt, die auch den Umweltschutz bedenken. Das Herner Klimafolgenanpassungskonzept bietet dabei bereits einige gute Anhaltspunkte." - Amelie Menges' //" So wird das Stadtklima verbessert und  dass man bei Neubauten und Sanierungen immer auch den Umweltschutz bedenkt: So verbessern Dachbegrünungen das Stadtklima und stehen der Schaffung von neuem Wohnraum nicht im Weg. Denn Wohnraum muss immer auch bezahlbar sein.
    },
    {
        aussage: "Es sollen mehr Betriebsräte in Herner Unternehmen gebildet werden.",
        bild_src: "Patrick.png",
        bild_alt: "Patrick Steinbach",
        erklärtext: '"Herne braucht mehr Betriebsräte, denn Firmen mit Betriebsrat sind durchschnittlich 18 Prozent produktiver als solche ohne. Der Grund: Arbeitnehmervertretungen erkennen Probleme im Arbeitsalltag schneller und sorgen für einen besseren Austausch zwischen Belegschaft und Management. Gerade in kleinen Bäckereien, Restaurants und Pensionen brauchen wir mehr Betriebsräte. Denn ohne das Sprachrohr der Belegschaft ziehen Beschäftigte oft den Kürzeren – von der Arbeitszeit bis zur Personalplanung. Nicht jedem Arbeitgeber, der jammert, geht es wirklich schlecht. Gerade in Krisenzeiten segeln manche unter falscher Flagge und reduzieren Belegschaft und Löhne ohne Not. Nur der Betriebsrat kann alle Informationen verlangen, um die wirkliche wirtschaftliche Situation des Unternehmens zu überprüfen. Dem einzelnen Mitarbeiter wird der Vorstand niemals die Bilanzen vorlegen. Arbeitnehmerüberwachung nimmt zu. Nur der Betriebsrat kann Videoüberwachung, Taschenkontrollen, Datenabgleiche, PC-Kontrollen und andere Maßnahmen ablehnen oder wenigstens mitgestalten" - Patrick Steinbach' 
    },
    { 
        aussage: "An Herner Schulen sollen Elternhaltestellen eingerichtet werden.",
        bild_src: "Theres.png",
        bild_alt: "Theres Boneberger",
        erklärtext: '"Kinder sollen ihren Schulweg möglichst selbständig, aber sicher bewältigen können. Wenn es doch das Auto sein muss, sind Elternhaltestellen eine sinnvolle Maßnahme, um Verkehrschaos vor den Schulen zu verhindern." - Theres Boneberger' 
    },
    {
        aussage: "Herner Initiativen, die historische Bildungs- und Aufklärungsarbeit über den Nationalsozialismus leisten, sollen unterstützt werden.",
        bild_src: "Flemming.png",
        bild_alt: "Flemming Menges",
        erklärtext: '"Die wiederholte Beschädigung des Shoah-Mahnmales in Herne macht deutlich, dass es weiterhin wichtig bleibt, gerade auch lokal Aufklärungsarbeit über den Nationalsozialismus zu leisten." - Flemming Menges'
    },
    {
        aussage: "Familien- und frauenbewusste Politik soll in Herner Unternehmen verankert werden.",
        bild_src: "Julia.png",
        bild_alt: "Julia Steinbach",
        erklärtext: '"Familien- und frauenbewusste Personalpolitik ist für die Arbeitgeber ein wichtiger Standortfaktor. Für viele neue Mitarbeiter ist es ein wesentliches Entscheidungskriterium, ob eine neue Stelle angenommen wird. Für Mütter - besonders zu Corona Zeiten - ist es sehr wichtig, flexibel zu sein. Gleitende Arbeitszeiten und Homeoffice sind heutzutage nicht nur Zukunftsmusik, sondern Voraussetzung, wenn man als Mutter oder gar als Alleinerziehende beruflich tätig sein will. Ein Großteil von Frauen arbeitet in systemrelevanten Berufen wie zum Beispiel in der Pflege oder im Einzelhandel. Jeder weiß um welche Arbeitszeiten es sich bei diesen Berufsbildern handelt. Gerade hier ist es mehr als erforderlich, die Kinderbetreuung auszuweiten. Mütter müssen die Möglichkeit haben, ihre Kinder flexibel betreuen zu lassen! Nur von 7:30 Uhr bis 16:00 Uhr Betreuungszeit - ggf. längerer Anfahrtsweg zum Arbeitsort berücksichtigt- sind überhaupt nicht ausreichend! Betriebseigene Kindergärten und Ausweitung des Betreuungsangebotes (6:00 Uhr bis 18:00 Uhr ggf. als Stempelsystem) sind unerlässlich, damit Mütter überhaupt einer Beschäftigung über Teilzeitniveau nachgehen können. Ferner brauchen wir mehr Frauen in Führungspositionen! Häufig mangelt es nicht an Bewerberinnen, sondern scheitert an der Unterdrückung der Männer! Das typische Frauenbild, die Frau, die sich um Haushalt und Kinderbetreuung kümmert, muss endlich aus den Köpfen der Männer verschwinden!" - Julia Steinbach' 
    },
    {
        aussage: "Es sollen Mobilitätsstationen eingerichtet werden, an denen die verschiedenen Verkehrsmittel miteinander verknüpft werden.",
        bild_src: "Jurgen.png",
        bild_alt: "Jürgen Scharmacher",
        erklärtext: '"Mobilstationen dienen als sichtbare Verknüpfungspunkte zur Vernetzung mehrerer Verkehrsmittel in direkter räumlicher Verbindung. Ziel ist die Verbindung verschiedener Verkehrsmittel an dafür erkennbaren Punkten. Mobilstationen beinhalten darüber hinaus weitere Serviceangebote wie eine gute Aufenthaltsqualität, um klimafreundliche Mobilitätsangebote für die Bürgerinnen und Bürger attraktiv zu gestalten." - Jürgen Scharmacher'
    },
    {
        aussage: "Für den sozialen Wohnungsbau in Herne sollen Flächen freigehalten werden.",
        bild_src: "Elisabeth.png",
        bild_alt: "Elisabeth Majchrzak-Frensel",
        erklärtext: '"Wohnen ist ein Grundrecht. Darum müssen beste Bedingungen geschaffen werden, sozialen Wohnraum zu vermehren." - Elisabeth Majchrzak-Frensel'
    },
    {
        aussage: "Städtische Sportanlagen sollen weiterhin kostenlos für alle zur Verfügung stehen.",
        bild_src: "Hendrik.png",
        bild_alt: "Hendrik Bollmann",
        erklärtext: '"Die Sportanlagen in Herne müssen weiterhin kostenlos genutzt werden können. Beim Sport wächst Gesellschaft zusammen. Das sollte nichts kosten!" - Hendrik Bollmann'
    },
    {
        aussage: "Die interkulturelle Öffnung der Stadt Herne, ihrer Verwaltung und ihrer Tochtergesellschaften soll weiter vorangetrieben werden.",
        bild_src: "Emek.png",
        bild_alt: "Emek Öner",
        erklärtext: '"Migration ist auch mit Teilhabe und Partizipation aller verbunden, wir dürfen keine Unterschiede machen und müssen jedem - unabhängig von Nationalität, Herkunft und Identität - eine Möglichkeit geben, um teilzuhaben! - Emek Öner'
    },
]
