const data = 
{
    top: [
        {
            img: "chess.jpg",
            link: "https://wychess.herokuapp.com",
            description: "Internetowa aplikacja do gry w szachy online napisana w ramach mojej pracy inżynierskiej. Użytkownik ma możliwość utworzenia swojego własnego pokoju do gry z odpowiadającymi mu zasadami, lub dołączenia do jednej z gier widocznych w lobby. W pokoju gry znajdziemy tabelę z historią ruchów oraz czat dla graczy. Podczas wykonywania ruchu, na planszy wyświetlać się będą podpowiedzi dotyczące możliwych posunięć. Gracz ma również możliwość narysowania na planszy widocznych tylko dla siebie oznaczeń pomagających w planowaniu strategii.<hr>Aplikacja została napisana w Node.js z wykorzystaniem TypeScript oraz protokołu websocket. Więcej o niej można przeczytać w mojej <a href='https://drive.google.com/file/d/1NvgSnEXCiFX5BQyd0aXRFHLt0gL1IgoX/view?usp=sharing'>[Pracy Inżynierskiej]</a>."
        },
        {
            img: "biliard.jpg",
            link: "https://karpff.github.io/biliard/",
            description: "Symulacja stołu bilardowego, którą stworzyłem w ramach projektu na zajęcia z <i>Grafiki i Wizualizacji</i>. Moją pierwszą styczność z grafiką 3D w przeglądarce ułatwiła biblioteka <i>three.js</i>, która dostarcza narzędzia przydatne przy pracy z obiektami 3D. Fizykę gry napisałem od zera w czystym JS. Więcej o tym projekcie można dowiedzieć się ze <a href='https://drive.google.com/file/d/16L6pjrRiR_W_1cwQ59zOBLxGqIZ58zH8/view?usp=sharing'>[sprawozdania]</a> które napisałem na potrzeby zajęć. <hr>Sterowanie: środkowy przycisk myszki, scroll oraz strzałki - praca kamerą; klawisze 1-5 oraz tylda - ustawienia cieni; plus, minus oraz klawiatura numeryczna - sterowanie światłem; R - reset."
        },
        {
            img: "space-invaders.jpg",
            link: "https://karpff.github.io/space-invaders/",
            description: "Moja wersja kultowej gry <i>Space Invaders</i> stworzona z użyciem JavaScript i technologii Canvas. Z początku starałem się wiernie oddać oryginalną grę z 1978, lecz ostatecznie zdecydowałem się na dodanie własnego twistu w postaci wzmocnień, które okazjonalnie wypadają z pokonanych wrogów. Gra posiada pełne udźwiękowienie."
        },
        {
            img: "arkanoid.jpg",
            link: "https://karpff.github.io/arkanoid/",
            description: "Gra Arkanoid napisana na zajęcia z Programowania Interaktywnej Grafiki Komputerowej. Na grę składa się parę poziomów. Występują na nich cegiełki o różnym stopniu twardości oraz cegiełki specjalne z których wypadają rozmaite wzmocnienia."
        },
        {
            img: "statki.jpg",
            link: "https://karpff.github.io/statki/",
            description: "Jednoosobowa gra Statki (znana również jako Bitwa Morska) napisana na zajęcia z Języków Interpretowanych. Gracz ma możliwość rozstawienia swoich okrętów, a następnie na zmianę z graczem komputerowym ostrzeliwuje statki przeciwnika. Gracz komputerowy posiada własnoręcznie napisane, zaawansowane AI, które pozwala mu grać na wysokim poziomie."
        },
        {
            img: "game-of-life.jpg",
            link: "https://karpff.github.io/game-of-life/",
            description: "John Conway's Game of Life napisana w JavaScript na zajęcia z Języków Interpretowanych. Poza zabawą ze standardową wersją popularnego algorytmu, umożliwia również wprowadzenie własnych reguł gry, które skutkują generacją niestandardowych kształtów."
        },
        {
            img: "curve.jpg",
            link: "https://karpff.github.io/curve/",
            description: "Próba odtworzenia dwuosobowej gry przeglądarkowej <i>Curve Fever</i>, która cieszyła się dużą popularnością w czasie mojej nauki w technikum. W grze poruszamy się po powierzchni 2D, zostawiając za sobą długi ogon niczym w grze <i>Snake</i>. Celem jest unikanie rozbicia się oraz wyeliminowanie przeciwnika używając swojego ogona. Pomóc nam w tym mogą wzmocnienia pojawiające się na ekranie."
        },
        {
            img: "skeleton-rush.jpg",
            link: "https://karpff.github.io/skeleton-rush/",
            description: "Prosta gra typu tower defence, w której bronimy się przed atakiem kościejów używając naszego kursora, min oraz wieżyczek. Początkowo miała być to jedynie próba animacji z wykorzystaniem sprite, lecz z czasem przekształciła się ona w to czym jest dzisiaj."
        },
        {
            img: "attractor.jpg",
            link: "https://karpff.github.io/attractor/1600.html",
            description: "Prosta, acz zaskakująco satysfakcjonująca, interaktywna symulacja przyciągania i odpychania obiektów.<hr>Sterowanie: lewy i prawy przycisk myszy - przyciąganie i odpychanie; plus i minus - zmiana siły przyciągania i odpychania; nawiasy ( i ) - kontrola oporu powietrza; spacja - powrót do ustawienia początkowego."
        },
        {
            img: "tanks.jpg",
            link: "https://karpff.github.io/tanks/",
            description: "Dwuosobowa gra \"Czołgi\" stworzona w 0 godzin na <a href='http://0hgame.eu'>[0h GameJam]</a> (w dzień zmiany czasu pomiędzy 2:00 a 2:00). Sterowanie: Gracz 1 - WSAD, J, L, Spacja; Gracz 2 - Strzałki, num1, num3, num0. W ramach nauki protokołu websocket utworzyłem również prowizoryczną <a href='https://tanks-0h.herokuapp.com'>[Wersję online multiplayer]</a> umożliwiającą grę przez internet."
        }
    ],
    middle: [
        {
            description: "Cząsteczkowa symulacja cieczy utworzona w <i>Processing</i> - środowisku opartym na języku Java. Odwzorowuje zachowanie cieczy symulując działajace na cząsteczki czynniki takie jak grawitacja, ciśnienie i lepkość. Podobnie jak większość moich prac, została ona napisana od zera, bez użycia żadnych silników fizycznych. Na dwóch pierwszych gifach jasność cząsteczki jest zależna od ciśnienia, a na ostatnim od prędkości. W ostatniej wersji można również popychać cząsteczki przy użyciu myszki.",
            imgs: ["fluid2.gif","fluid3.gif","bloomwaves.gif"]
        },
        {
            description: "Bot na aplikacjię czatową <i>Discord</i> napisany w Node.js. Posiada podstawową funkcjonalność taką jak zwracanie losowych wartości, pokazywanie podglądu koloru, czy postowanie awatara użytkownika; ale również zaawansowaną, do której zalicza się tworzenie głosowań/ankiet i wyświetlanie ich wyników w formie wykresu słupkowego, tworzenie humorystycznych grafik z użyciem awatara użytkownika, a nawet granie z użytkownikiem w kółko i krzyżyk na mistrzowskim poziomie.",
            imgs: ["vento3.png","vento1.png","vento2.png"]
        },
        {
            description: "Bot wspomagający nauczanie zdalne za pośrednictwem platformy <i>Discord</i> napisany w Node.js. Z pomocą bota można: tworzyć kursy i dodawać do nich uczniów; wystawiać plusy oraz oceny używając reakcji; sprawdzać listę obecności; wyświetlać plan zajęć pobrany ze strony uczelni; wyświetlać wiadomości RSS pobrane ze strony uczelni; wyświetlać statystyki dotyczące kursu oraz poszczególnych uczniów; wyświetlać wykresy obrazujące oceny, ich wagi i obecność.<hr>Więcej o tym projekcie można przeczytać w <a href='https://drive.google.com/file/d/1hpXEUPDXtc4WCl235AE-QR1XVCYBS8r9/view?usp=sharing'>[dokumentacji]</a>.",
            imgs: ["scholar1.png","scholar2.png","scholar3.png"]
        },
        {
            description: "Baza danych przedstawiająca działanie kina, stworzona w ramach projektu z <i>Baz Danych</i>. Zawiera zaawansowane zapytania, oraz elementy takie jak widoki, sekwencje, wyzwalacze, procedury i funkcje. Projekt ten otrzymał trzeci najwyższy wynik na roku. <br><a href='https://drive.google.com/file/d/139En-SvEANUHQ3v-0nhYT_PVLgGHEpSM/view?usp=sharing'>[PDF przedstawiający projekt]</a> | <a href='https://drive.google.com/file/d/1yUTsxUOo8hCsG_EzleVkHaIueuLcaJQ5/view?usp=sharing'>[Plik .sql]</a>",
            imgs: []
        }
    ],
    bottom: [
        {
            img: "rectangle-filling.jpg",
            link: "https://karpff.github.io/rectangle-filling/",
            description: "Rectangle Filling<br><a href='https://twitter.com/beesandbombs/status/1185211600522874880'>[Inspiracja]</a>"
        },
        {
            img: "cannon.jpg",
            link: "https://karpff.github.io/cannon/",
            description: "Sztuczne Ognie"
        },
        {
            img: "lazors.jpg",
            link: "https://karpff.github.io/lazors/",
            description: "Laserowa Wieża"
        },
        {
            img: "pipes.jpg",
            link: "https://karpff.github.io/pipes/",
            description: "2D Pipes"
        },
        {
            img: "12symmetry.jpg",
            link: "https://karpff.github.io/12symmetry/",
            description: "Symetryczny Paint"
        },
        {
            img: "web.jpg",
            link: "https://karpff.github.io/web/",
            description: "Falująca Siatka"
        },
        {
            img: "clock.jpg",
            link: "https://karpff.github.io/clock/",
            description: "Zegarowy Zegar <br><a href='https://thumbs.gfycat.com/PlumpPlainBuzzard-size_restricted.gif'>[Inspiracja]</a>"
        },
        {
            img: "kura.jpg",
            link: "https://karpff.github.io/kura/",
            description: "Kurzy Żyroskop<br><a href='https://www.youtube.com/watch?v=nLwML2PagbY'>[Inspiracja]</a>"
        },
        {
            img: "memory.jpg",
            link: "https://karpff.github.io/memory/",
            description: "Gra <i>Memory</i>"
        },
        {
            img: "squares-and-triangles.jpg",
            link: "https://karpff.github.io/squares-and-triangles/",
            description: "Trójkąty i Kwadraty"
        },
        {
            img: "point-wave.jpg",
            link: "https://karpff.github.io/point-wave/",
            description: "Falujące Punkty"
        },
        {
            img: "circle-packing.jpg",
            link: "https://karpff.github.io/Circle-Packing/",
            description: "Circle Packing"
        }
    ]
}