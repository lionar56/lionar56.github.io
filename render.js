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
    var body = document.querySelector('body');
    console.log(body)
    if (SPD > 0) {
        var Prz = (eig_Pkt / SPD) * 100;
        Prz = Math.round(Prz * 100) / 100;
        if (Prz == 100) {
            Aussage.innerHTML = "<div id='weiss'><h3> Wow! Sicher, dass du nicht mitgeschrieben hast am Wahlprogramm? Deine Antworten entsprechen zu 100 Prozent den Positionen der NRW SPD. <a href='https://www.spd.de/unterstuetzen/mitglied-werden/' target='_blank'> Hier </a> kannst du Mitglied werden, denn wir freuen uns immer über Verstärkung!</h3></div>";
        } else if (Prz >= 80) {
            Aussage.innerHTML = `<div id='weiss'><h3> Sehr schön! Deine Antworten entsprechen zu ${Prz} Prozent den Positionen der NRW SPD.</h3></div >`;
        } else if (Prz >= 60) {
            Aussage.innerHTML = `<div id='weiss'><h3> Das sieht doch schon ganz passend aus. Deine Antworten entsprechen zu ${Prz} Prozent den Positionen der NRW SPD. Schau dir doch mal unser Wahlprogramm an, um zu entdecken, was wir gemeinsam mit den Bürgerinnen und Bürgern in Herne erreichen wollen. Vielleicht können wir dich noch mit einigen weiteren Punkten überzeugen. </h3></div >`;
        } else if (Prz >= 40) {
            Aussage.innerHTML = `<div id='weiss'><h3> Gerne überzeugen wir dich noch mehr von uns! Deine Antworten entsprechen zu ${Prz} Prozent den Positionen der NRW SPD. Schreib uns doch, was wir deiner Meinung nach besser machen können oder wirf einen Blick in unser Wahlprogramm. </h3></div >`;
        } else if (Prz > 0) {
            Aussage.innerHTML = `<div id='weiss'><h3> Deine Antworten entsprechen zu ${Prz} Prozent den Positionen der NRW SPD. Wir sind uns sicher: Da geht noch mehr. Schreib uns und lass uns diskutieren, was wir in deinen Augen besser machen können. Oder wirf einen Blick in unser Kommunalwahlprogramm, um zu entdecken, was wir gemeinsam mit den Bürgerinnen und Bürgern in Herne erreichen wollen.</h3>\
            </div >`;
        } else {
            Aussage.innerHTML = `<div id='weiss'><h3> Fabian, bist du es? Deine Positionen entsprechen zu ${Prz} Prozent denen der NRW SPD.</h3></div >`;
        }
    } else {
        Aussage.innerHTML = "<div id='weiss'><h3> Dich interessiert keine der Aussagen? Schreib uns doch einmal, was dich interessieren würde.</h3></div >";
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
        spddazu.append($("<summary>Das sagt Alexander Vogt dazu:  </summary>"));

        var container = $("<div onclick='' class='container'></div>");
        container.append("<img src=" + aussage.bild_src + " alt=" + aussage.bild_alt + " class='image'/>")

        var l = aussage.erklärtext.length;

        var overlay = $("<div class='overlay'></div >");
        if (l < 525) {
            overlay.append("<div class='text'>" + aussage.erklärtext + "</div>");
        }
        else {
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
        wichtig.append($("<h2>Ist dir die Aussage besonders wichtig?</h2 >"))

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
        aussage: "Die Bevölkerung in der Nähe von Windenergieanlagen soll von vergünstigten Strompreisen profitieren oder sich finanziell an den Anlagen beteiligen können.",
        bild_src: "alex1.png",
        bild_alt: "Alexander Vogt",
        erklärtext: '"Der Bürger*innenwindpark in Coesfeld ist ein Vorzeigebeispiel, wie Klimaschutz zu einem Gewinn für alle werden kann. Windenergieanlagen zu einem Gemeinschaftsprojekt zu machen, löst Widerstände auf und schafft bessere Lebensbedingungen für die Menschen vor Ort. Solche Projekte, von denen Bürgerinnen und Bürger profitieren, müssen wir weiter vorantreiben.'
    },
    {
        aussage: "Lärmschutzwände entlang von Autobahnen und Gleisen sollen mit Photovoltaikpanels ausgestattet werden.",
        bild_src: "alex2.png",
        bild_alt: "Alexander Vogt",
        erklärtext: '"Wir wollen Solaranlagen nicht nur auf möglichst viele Dächer bringen, sondern denken zur Rettung unseres Klimas noch weiter. Lärmschutzwände entlang von Autobahnen und Gleisen sind eine innovative Möglichkeit, um systematisch Chancen für mehr erneuerbare Stromproduktion zu nutzen.' 
    },
    {
        aussage: "Es soll eine Ausbildungsplatzgarantie in Nordrhein-Westfalen eingeführt werden, finanziert indem Betriebe, die nicht ausbilden, die Kosten tragen.",
        bild_src: "alex3.png",
        bild_alt: "Alexander Vogt",
        erklärtext: '"Eine gute Ausbildung ist ein überzeugender Weg zu einem Leben in Zufriedenheit. Mit der Ausbildungsplatzgarantie wollen wir Anreize für mehr Ausbildungsplätze schaffen. So stärken wir die Konkurrenzfähigkeit ausbildender Betriebe und helfen ihnen beim wirtschaftlichen Erfolg."'
    },
    {
        aussage: "Die Anwendung der Mietpreisbremse soll erleichtert werden.",
        bild_src: "alex4.png",
        bild_alt: "Alexander Vogt",
        erklärtext: '"Wir wollen Nordrhein-Westfalen zum Mieter*innenschutzland machen. Damit die Mietpreisbremse und andere Instrumente zur Bekämpfung der Mietpreisspirale nicht ausgebremst, sondern genutzt werden können, müssen Kommunen mehr Handlungsmöglichkeiten bei der Ausweisung von angespannten Wohnungsmärkten erhalten."'
    },
    {
        aussage: "Das Fach Sozialwissenschaften soll wieder eingeführt werden.",
        bild_src: "alex5.png",
        bild_alt: "Alexander Vogt",
        erklärtext: '"Zentrales Instrument zur Stärkung der Demokratie ist die politische Bildung. Sie muss in der Kita beginnen, in allen Schulformen fortgesetzt werden und fester Bestandteil der Weiterbildung sein. Dazu gehört auch das Fach Sozialwissenschaften, das wir in bewährter Form wieder einführen wollen."'
    },
    {
        aussage: "Das aktive Wahlrecht für Landtagswahlen soll auf 16 Jahre herabgesenkt werden und das kommunale Wahlrecht auch auf Ausländer und Ausländerinnen aus Nicht-EU-Staaten erweitert werden.",
        bild_src: "alex6.png",
        bild_alt: "Alexander Vogt",
        erklärtext: '"Der Schlüssel zur politischen Teilhabe ist das Wahlrecht. Mit der Absenkung des Wahlalters bei Landtagswahlen auf 16 Jahre und der Erweiterung des kommunalen Wahlrechts auf Menschen aus Nicht-EU-Staaten wollen wir die Wahlbeteiligung erhöhen und damit die politische Beteiligung stärken."'
    },
    {
        aussage: "Für Schüler*innen soll ein kostenfreies Ticket eingeführt werden.",
        bild_src: "alex7.png",
        bild_alt: "Alexander Vogt",
        erklärtext: '"Mit der Einführung eines kostenfreien Tickets für Schüler*innen wollen wir nicht nur die Schulträger, Kommunen und Verkehrsunternehmen von erheblicher Bürokratie entlasten, sondern auch die umweltfreundliche Mobilität von Kindesbeinen an stärken."'
    },
    {
        aussage: "Ein unabhängiger Polizeibeauftragter soll als Ansprechpartner für Menschen innerhalb und außerhalb der Polizei zur Verfügung steht.",
        bild_src: "alex8.png",
        bild_alt: "Alexander Vogt",
        erklärtext: '"Die Nähe zu den Bürger*innen als Ansprechpartnerin unterstreicht den Politikansatz der SPD. Mit einer*einem unabhängigen Polizeibeauftragten wollen wir eine*n Ansprechpartner*in einsetzen, um Konflikte zu schlichten und das Vertrauen zwischen Polizei und Bürger*innen zu stärken."'
    },
    {
        aussage: "Das bestehende Versammlungsgesetz soll durch ein Versammlungsfreiheitsgesetz ersetzt werden.",
        bild_src: "alex9.png",
        bild_alt: "Alexander Vogt",
        erklärtext: '"Wir brauchen eine kritische Bestandsaufnahme der eingriffsintensiven „Sicherheitsgesetze“ der letzten Jahre. Der Eingriff in unsere Grundrechte darf sich nur auf unbedingt notwendige Maßnahmen begrenzen. Dazu wollen wir ein neues Versammlungsfreiheitsgesetz auf den Weg bringen."'
    },
    {
        aussage: "Auf Landesebene soll eine Antidiskriminierungsstelle eingerichtet werden.",
        bild_src: "alex10.png",
        bild_alt: "Alexander Vogt",
        erklärtext: '"Das Ziel der SPD ist eine diskriminierungsfreie und chancengerechte Gesellschaft. Neben der Etablierung eines Antidiskriminierungsgesetzes wollen wir auf Landesebene eine Antidiskriminierungsstelle einrichten. Diese soll netzwerkartig beratend, forschend und vor allem öffentlichkeitswirksam tätig sein."'
    }
]
