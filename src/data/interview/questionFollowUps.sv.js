// src/data/interview/questionFollowUps.sv.js
export const followUpTemplatesSv = {
  React: [
    {
      question: "Varför valde du den komponentstrukturen?",
      answer:
        "Jag ville hålla ansvaret tydligt: en del för data/logik och en del för det som renderas. Om komponenten växer kan jag bryta ut mindre delar.",
    },
    {
      question: "När hade du brutit ut detta till en egen komponent?",
      answer:
        "När JSX börjar bli svår att läsa, eller när samma del behövs på fler ställen.",
    },
  ],
  State: [
    {
      question: "Varför behöver detta vara state?",
      answer:
        "För att värdet kan ändras av användaren och UI:t behöver renderas om när värdet ändras.",
    },
    {
      question: "Kunde detta vara props istället?",
      answer:
        "Ja, om värdet ägs av en parent-komponent. State passar när komponenten själv ansvarar för förändringen.",
    },
  ],
  API: [
    {
      question: "Hur hanterar du om API:t misslyckas?",
      answer:
        "Jag separerar loading, error och data så användaren får tydlig feedback och appen inte bara blir tom.",
    },
    {
      question: "Varför hämtar du datan där?",
      answer:
        "Jag hämtar den där komponenten behöver datan. Om fler delar behöver samma data hade jag lyft upp logiken eller använt en gemensam lösning.",
    },
  ],
  Form: [
    {
      question: "Varför använder du kontrollerade inputs?",
      answer:
        "Då ligger värdet i React-state och jag kan validera, rensa och skicka formuläret på ett tydligt sätt.",
    },
    {
      question: "Var ska valideringen ligga?",
      answer:
        "Frontend-validering ger bättre UX, men backend måste alltid validera igen eftersom klientdata inte går att lita på.",
    },
  ],
  CSS: [
    {
      question: "Hur gör du detta responsivt?",
      answer:
        "Jag använder flex/grid med rimliga min- och maxbredder, och justerar layouten vid de brytpunkter där innehållet faktiskt behöver det.",
    },
    {
      question: "Hur undviker du att CSS blir svår att ändra?",
      answer:
        "Jag håller selektorer enkla, använder tydliga klassnamn och låter komponentens struktur styra stylingen.",
    },
  ],
  Test: [
    {
      question: "Vad testar du först?",
      answer:
        "Jag testar huvudflödet först: att rätt saker renderas och att användarens viktigaste actions ger rätt resultat.",
    },
    {
      question: "Vilka edge cases är viktigast?",
      answer:
        "Tom data, fel från API, långa texter, snabba klick och kombinationer av filter eller state.",
    },
  ],
  A11y: [
    {
      question: "Vad är viktigast för accessibility här?",
      answer:
        "Semantisk HTML, tydliga labels, keyboard navigation och att interaktiva element faktiskt är knappar eller länkar.",
    },
    {
      question: "Hur skulle du testa det snabbt?",
      answer:
        "Jag skulle tabba igenom UI:t, kontrollera labels och se att det går att förstå och använda utan mus.",
    },
  ],
  Debug: [
    {
      question: "Vad kontrollerar du först?",
      answer:
        "Jag försöker återskapa buggen och kollar sedan om props, state eller event handlern får fel värde.",
    },
    {
      question: "Hur vet du att du fixat rätt sak?",
      answer:
        "Jag testar samma steg som skapade buggen och gärna ett närliggande edge case så jag inte bara fixat symptomet.",
    },
  ],
  Prestanda: [
    {
      question: "När blir prestanda ett problem?",
      answer:
        "Ofta först vid stora listor, dyra beräkningar eller onödiga renderingar. Då kan pagination, memoization eller virtualisering hjälpa.",
    },
    {
      question: "Skulle du optimera direkt?",
      answer:
        "Nej, jag börjar med en tydlig lösning och optimerar när jag ser ett faktiskt problem eller vet att datan blir stor.",
    },
  ],
  Backend: [
    {
      question: "Vad måste backend kontrollera?",
      answer:
        "Backend måste validera input, kontrollera auth och avgöra om användaren har rätt att göra actionen.",
    },
    {
      question: "Vilka statuskoder hade du använt?",
      answer:
        "200 för lyckat, 201 när något skapas, 400 för fel input, 401/403 för auth och 500 för serverfel.",
    },
  ],
  Projekt: [
    {
      question: "Vad var din roll i projektet?",
      answer:
        "Jag kan beskriva vilka delar jag byggde, vilka tekniska val jag gjorde och vad jag lärde mig av problemen som dök upp.",
    },
    {
      question: "Vad skulle du förbättra idag?",
      answer:
        "Jag skulle titta på testning, accessibility, kodstruktur och om något kan göras mer robust eller återanvändbart.",
    },
  ],
  Personligt: [
    {
      question: "Hur kopplar du detta till rollen?",
      answer:
        "Jag försöker visa hur min erfarenhet matchar jobbet: problemlösning, React, API-tänk och viljan att lära mig i team.",
    },
    {
      question: "Kan du ge ett konkret exempel?",
      answer:
        "Ja, jag brukar koppla svaret till ett projekt där jag faktiskt byggt något liknande och kan beskriva resultatet.",
    },
  ],
  Allmänt: [
    {
      question: "Kan du utveckla?",
      answer:
        "Ett konkret exempel är en lista, ett formulär eller ett API-anrop. Jag börjar med den minsta lösningen som löser kravet tydligt, och låter extra logik vänta tills den faktiskt ingår i uppgiften.",
    },
  ],
};

export const portfolioBackgroundFollowUpsSv = {
  "Kan du berätta kort om din bakgrund?": [
    {
      question: "Vad fick dig att välja webbutveckling?",
      answer:
        "Jag fastnade för kombinationen av problemlösning, kreativitet och att snabbt kunna bygga något som andra kan använda.",
    },
    {
      question: "Hur märks din game development-bakgrund idag?",
      answer:
        "Den har gett mig vana att tänka i logik, interaktion och användarens upplevelse, vilket passar bra även i frontend.",
    },
  ],
  "Hur kom du in på webbutveckling?": [
    {
      question: "Vad tycker du bäst om inom utveckling?",
      answer:
        "Jag trivs bäst med att bygga det användaren ser och gör: UI, flöden och att lösa riktiga problem på ett tydligt sätt.",
    },
    {
      question: "Vad tog du med dig från tidigare erfarenheter?",
      answer:
        "Jag tog med mig problemlösning, tålamod och känslan för hur små interaktioner påverkar upplevelsen.",
    },
  ],
  "Vad driver dig som utvecklare?": [
    {
      question: "Vad motiverar dig när något är svårt?",
      answer:
        "Jag gillar att bryta ner problemet, testa mig fram och se när bitarna börjar falla på plats.",
    },
    {
      question: "Hur lär du dig nya saker?",
      answer:
        "Jag lär mig bäst genom att bygga något konkret, läsa på när jag fastnar och sedan förbättra lösningen steg för steg.",
    },
  ],
  "Vilka tekniker känner du dig mest bekväm med?": [
    {
      question: "Vilken teknik vill du bli starkare i?",
      answer:
        "Jag vill bli ännu tryggare i TypeScript, backend-integration, testning och större React-strukturer.",
    },
    {
      question: "Hur håller du dina kunskaper aktuella?",
      answer:
        "Jag bygger egna projekt, läser dokumentation och försöker förstå varför ett verktyg används, inte bara hur man skriver syntaxen.",
    },
  ],
  "Hur brukar du arbeta i projekt och team?": [
    {
      question: "Hur fungerar du i team?",
      answer:
        "Jag försöker vara tydlig, fråga när något är oklart och bidra både med kod och med att hålla arbetet strukturerat.",
    },
    {
      question: "Hur hanterar du feedback?",
      answer:
        "Jag ser feedback som ett sätt att förbättra lösningen. Jag försöker förstå poängen bakom kommentaren och justera därefter.",
    },
  ],
  "Vad tycker du är viktigt i en bra webbupplevelse?": [
    {
      question: "Vad prioriterar du först?",
      answer:
        "Först att användaren förstår vad som går att göra och att flödet fungerar. Sedan tittar jag på responsivitet, tillgänglighet och polish.",
    },
    {
      question: "Hur tänker du kring design och kod?",
      answer:
        "Jag ser dem som nära kopplade. Bra kod ska stödja en tydlig upplevelse, och bra UI ska vara lätt att använda.",
    },
  ],
  "Vad söker du i din nästa roll?": [
    {
      question: "Vilken typ av team passar dig?",
      answer:
        "Ett team där man samarbetar, ger feedback och där jag får växa genom att både bidra och lära av mer erfarna utvecklare.",
    },
    {
      question: "Vad kan du bidra med som junior?",
      answer:
        "Jag bidrar med nyfikenhet, energi, vilja att lära och en vana att bygga projekt från idé till fungerande lösning.",
    },
  ],
  "Vad utforskar du för tekniker just nu?": [
    {
      question: "Varför just de teknikerna?",
      answer:
        "De hjälper mig bygga mer kompletta appar: TypeScript för tryggare kod, backend/API för helheten och testning för stabilitet.",
    },
    {
      question: "Hur kopplar det till rollen du söker?",
      answer:
        "Det visar att jag vill fortsätta växa mot frontend/fullstack och förstå hela flödet från UI till data.",
    },
  ],
};

