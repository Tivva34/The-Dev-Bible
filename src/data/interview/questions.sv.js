export default {
  "interviewQuestions": {
    "afterLiveCodingQuestions": {
      "id": "after-live-coding",
      "title": "Efter live coding",
      "difficulty": "Interview",
      "estimatedTime": "10 min",
      "intro": "",
      "questions": [
        {
          "question": "Förbättra lösningen",
          "answer": "Jag hade först säkrat huvudflödet med tester och gått igenom edge cases. Sedan hade jag tittat på om komponenten är lätt att läsa, om interaktiva delar är tillgängliga och om någon logik borde brytas ut.",
          "followUps": [
            {
              "question": "Vad hade du gjort först?",
              "answer": "Jag hade börjat med det som minskar risk: tester för det viktigaste flödet och tydligare hantering av tomma, felaktiga eller långsamma states."
            },
            {
              "question": "Vad hade du inte ändrat?",
              "answer": "Jag hade inte gjort lösningen större bara för sakens skull. Om den är lätt att läsa och löser kravet hade jag behållit grunden och förbättrat riskerna runt den."
            },
            {
              "question": "Hur skulle du göra koden lättare att läsa?",
              "answer": "Jag hade kollat om namn på state, funktioner och komponenter förklarar vad de gör. Om en render-del är tung hade jag brutit ut den."
            }
          ]
        },
        {
          "question": "Edge cases",
          "answer": "Jag hade testat tom data, väldigt lång text, dubbla värden, snabba klick och input med extra mellanslag. Om lösningen har filter eller sortering testar jag också att de fungerar tillsammans.",
          "followUps": [
            {
              "question": "Kan du ge exempel?",
              "answer": "I en produktlista testar jag en tom produktarray, en sökning utan träffar, produkter med samma pris och att sortering fortfarande fungerar efter filtrering."
            },
            {
              "question": "Hur väljer du viktigaste edge case?",
              "answer": "Jag väljer det som mest sannolikt påverkar användaren först. I en lista är tom data och inga träffar ofta viktigare än ovanliga specialfall."
            },
            {
              "question": "Hur hanterar du felaktig input?",
              "answer": "Jag validerar nära där inputen används och ger tydlig feedback. Till exempel trim på textfält och ett meddelande om användaren försöker spara tom text."
            }
          ]
        },
        {
          "question": "Prestanda",
          "answer": "För en liten datamängd håller jag lösningen enkel. Om datan blir stor tittar jag på pagination, debouncing, memoization eller virtualisering beroende på var problemet faktiskt uppstår.",
          "followUps": [
            {
              "question": "När använder du useMemo?",
              "answer": "När en beräkning är dyr och körs ofta med samma input. Jag använder det inte automatiskt, utan när det faktiskt gör koden eller prestandan bättre."
            },
            {
              "question": "Hur märker du att det behövs optimering?",
              "answer": "Jag letar efter konkret seghet: långsam input, hackig scroll eller onödigt många renderingar. Utan ett sådant problem håller jag lösningen enkel."
            },
            {
              "question": "Vad är en enkel första åtgärd?",
              "answer": "Om sökning triggas ofta kan debounce vara en enkel förbättring. Om listan är lång kan pagination vara enklare och tydligare än att rendera allt."
            }
          ]
        },
        {
          "question": "Återanvändbarhet",
          "answer": "Jag gör den återanvändbar genom att separera vad som är data, vad som är presentation och vad som är beteende. Props passar för variation, callbacks för actions och children när innehållet ska vara flexibelt.",
          "followUps": [
            {
              "question": "Vad vill du undvika?",
              "answer": "Jag vill undvika en komponent som är för generell för tidigt. Den ska först vara tydlig för problemet den löser, sedan kan jag abstrahera när jag ser ett riktigt mönster."
            },
            {
              "question": "Hur gör du utan att överbygga?",
              "answer": "Jag låter första versionen vara specifik. När jag ser samma behov på två ställen bryter jag ut en komponent, hook eller helper med ett tydligt syfte."
            },
            {
              "question": "När passar en custom hook?",
              "answer": "När samma state-logik används på flera ställen, till exempel localStorage, fetch eller debounced search. Då kan komponenterna fokusera på UI:t."
            }
          ]
        },
        {
          "question": "Testning",
          "answer": "Jag hade testat det användaren faktiskt gör: att listan visas, att input ändrar resultatet, att knappar uppdaterar rätt state och att tomma eller felaktiga states visas tydligt.",
          "followUps": [
            {
              "question": "Unit eller integration?",
              "answer": "Ren logik kan unit-testas. För komponenter föredrar jag ofta integrationstester där man klickar och skriver som en användare, eftersom det fångar mer av det verkliga flödet."
            },
            {
              "question": "Vad testar du inte först?",
              "answer": "Jag börjar inte med implementation-detaljer som exakt vilka interna funktioner som körs. Jag testar hellre beteendet användaren märker."
            },
            {
              "question": "Hur testar du en tom lista?",
              "answer": "Jag skickar in tom data eller gör en sökning utan träffar och kontrollerar att användaren får ett tydligt meddelande i stället för en tom yta."
            }
          ]
        },
        {
          "question": "Mer tid",
          "answer": "Jag hade gjort lösningen mer robust: tester, bättre felhantering, tydligare states och en snabb accessibility-genomgång. Efter det hade jag förbättrat UI-detaljer som spacing, fokuslägen och responsivitet.",
          "followUps": [
            {
              "question": "Hur prioriterar du?",
              "answer": "Jag prioriterar först sådant som kan göra att funktionen inte går att använda. Sedan tar jag läsbarhet, tillgänglighet och polish."
            },
            {
              "question": "Vad hade du sagt om tiden tog slut?",
              "answer": "Jag hade kort sagt vad som fungerar, vad jag medvetet lämnat och vad nästa steg skulle vara. Det visar att jag har koll på lösningens status."
            },
            {
              "question": "Vad hade du dokumenterat?",
              "answer": "Jag hade inte dokumenterat självklar kod, men jag hade lämnat korta kommentarer kring svårare beslut, edge cases eller API-antaganden."
            }
          ]
        },
        {
          "question": "Loading och error",
          "answer": "Jag vill visa tre tydliga lägen: laddar, fel och data. Då förstår användaren vad som händer, och komponenten slipper hamna i ett otydligt tomt läge.",
          "followUps": [
            {
              "question": "Hur skulle du strukturera det?",
              "answer": "Jag kan ha loading som boolean, error som text eller null och data som array. I renderingen visar jag först loading, sedan error och sist innehållet."
            },
            {
              "question": "Vad visar du vid tom data?",
              "answer": "Tom data är inte samma sak som error. Jag visar ett vanligt tomt läge, till exempel 'Inga resultat', så användaren förstår att anropet lyckades."
            },
            {
              "question": "Hur undviker du blinkande UI?",
              "answer": "Jag låter loading visas bara när det faktiskt behövs och behåller gärna tidigare data tills ny data är klar om det ger en bättre upplevelse."
            }
          ]
        },
        {
          "question": "Accessibility",
          "answer": "Jag börjar med semantisk HTML. Inputs behöver labels, knappar ska vara button-element och interaktiva delar ska fungera med tangentbord. Det gör lösningen bättre utan att den behöver bli komplicerad.",
          "followUps": [
            {
              "question": "Vad kollar du snabbt?",
              "answer": "Jag kollar om man kan tabba genom UI:t, om fokus syns, om inputs har labels och om knapparnas text beskriver vad de gör."
            },
            {
              "question": "Vad är en snabb förbättring?",
              "answer": "Att lägga till riktiga labels och se till att allt klickbart är button eller link. Det är små ändringar som ofta gör stor skillnad."
            },
            {
              "question": "Vad gör du med en modal?",
              "answer": "Jag ser till att den har role dialog, tydlig rubrik, går att stänga med Escape och att fokus hamnar på ett rimligt ställe när den öppnas."
            }
          ]
        },
        {
          "question": "Debugga en bug",
          "answer": "Jag börjar med att återskapa buggen. Sedan följer jag datan: event handler, state, props och rendering. Målet är att hitta var värdet blir fel, inte bara ändra något tills felet försvinner.",
          "followUps": [
            {
              "question": "Vad säger du medan du felsöker?",
              "answer": "Nu vet jag att eventet triggas. Då kontrollerar jag om state får rätt värde. Om state är rätt tittar jag på renderingen."
            },
            {
              "question": "Hur undviker du att gissa?",
              "answer": "Jag ändrar inte flera saker samtidigt. Jag testar en hypotes i taget, till exempel först eventet, sedan state, sedan renderingen."
            },
            {
              "question": "Vad gör du efter fixen?",
              "answer": "Jag testar originalfallet igen och ett närliggande fall. Om buggen kom från ett missat edge case hade jag lagt till ett test för det."
            }
          ]
        },
        {
          "question": "Tradeoff",
          "answer": "Jag valde en rak lösning eftersom kravet är begränsat och koden blir lätt att följa. Om lösningen ska växa behöver jag lägga till mer struktur, tester och tydligare felhantering.",
          "followUps": [
            {
              "question": "När gör du lösningen mer avancerad?",
              "answer": "När kraven kräver det. Om flera komponenter delar data, om listan blir stor eller om felet påverkar användaren, då är det värt mer struktur."
            },
            {
              "question": "Hur säger du det utan att låta osäker?",
              "answer": "Jag beskriver valet tydligt: 'Jag valde den enklare lösningen här eftersom datan är liten och kravet är begränsat. Vid större data hade jag valt pagination eller virtualisering.'"
            },
            {
              "question": "Hur förklarar du en enkel lösning?",
              "answer": "Jag valde den enklare lösningen eftersom den löser kravet tydligt med låg komplexitet. Om kraven växer hade jag lagt till mer struktur, till exempel pagination, virtualisering eller tydligare uppdelning."
            }
          ]
        }
      ]
    },
    "beforeLiveCodingQuestions": {
      "id": "before-live-coding",
      "title": "Före live coding",
      "difficulty": "Interview",
      "estimatedTime": "10 min",
      "intro": "",
      "questions": [
        {
          "question": "Hur bygger du en React-komponent?",
          "answer": "Jag börjar med vad komponenten faktiskt ska visa. Om det är en lista skapar jag datan, renderar den med map och håller komponenten enkel. Behöver användaren ändra något lägger jag till state och handlers för just den interaktionen.",
          "followUps": [
            {
              "question": "Kan du ge ett konkret exempel?",
              "answer": "Om jag bygger en produktlista börjar jag med en products-array och visar namn och pris. Det räcker för att visa att grundflödet fungerar innan jag börjar tänka på input, filter eller sortering."
            },
            {
              "question": "När bryter du ut mindre komponenter?",
              "answer": "När en del får ett eget ansvar. Till exempel kan ProductCard bli en egen komponent om varje produkt får mer markup eller egen logik."
            },
            {
              "question": "Vad säger du om du börjar med hårdkodad data?",
              "answer": "Jag använder liten exempeldata för att få komponentens struktur på plats. Om datan senare kommer från API eller props kan jag byta källa utan att ändra hela renderingen."
            }
          ]
        },
        {
          "question": "Innan kodning",
          "answer": "Jag börjar med att säga vad jag tänker bygga först. Om kravet är att visa produkter fokuserar jag på just det: data, renderingen och en tydlig lista. Jag lägger inte till funktioner som inte är efterfrågade.",
          "followUps": [
            {
              "question": "Kan du utveckla?",
              "answer": "Jag börjar med en products-array och mappar ut varje produkt i JSX. Jag väljer det eftersom uppgiften bara kräver att listan syns, och då behöver jag inget extra state än."
            },
            {
              "question": "Varför inte bygga mer direkt?",
              "answer": "Jag vill visa att jag förstått beställningen. Om jag bygger sök, filter eller sortering innan det efterfrågas riskerar jag att lägga tid på fel sak."
            },
            {
              "question": "Vad gör du om kravet är otydligt?",
              "answer": "Jag frågar direkt om det som påverkar lösningen: om listan ska vara statisk, om användaren ska kunna klicka på något eller om datan kommer från ett API."
            }
          ]
        },
        {
          "question": "När useState?",
          "answer": "Jag använder useState när något i UI:t kan ändras av användaren eller av komponenten. Det kan vara texten i ett inputfält, vald kategori, en öppen modal eller en counter.",
          "followUps": [
            {
              "question": "Vad ska inte ligga i state?",
              "answer": "Sånt som kan räknas ut från annan data behöver oftast inte eget state. Om jag redan har cart kan totalen räknas från cart i stället för att sparas separat."
            },
            {
              "question": "Varför är det viktigt?",
              "answer": "Mindre duplicerad state gör att det blir färre buggar. Då finns det en tydligare källa till sanningen."
            },
            {
              "question": "Hur namnger du state?",
              "answer": "Jag försöker namnge state efter vad det betyder i UI:t, till exempel search, selectedCategory eller isOpen. Då blir JSX och handlers lättare att förstå."
            }
          ]
        },
        {
          "question": "Listor i React",
          "answer": "Jag använder map för att gå från data till JSX. Varje item ska ha en stabil key, helst ett id, så React kan känna igen raderna när listan ändras.",
          "followUps": [
            {
              "question": "Varför inte index som key?",
              "answer": "Index kan fungera för en helt statisk lista, men om listan sorteras, filtreras eller ändras kan React koppla fel state till fel rad. Ett id är säkrare."
            },
            {
              "question": "Vad händer om listan ändras?",
              "answer": "Då är det extra viktigt att key kommer från datan, till exempel product.id. React använder key för att förstå vilken rad som är vilken när ordningen eller innehållet ändras."
            },
            {
              "question": "Var lägger du listdatan?",
              "answer": "Om datan är statisk i uppgiften kan den ligga utanför komponenten. Om användaren ska ändra listan behöver den ligga i state."
            }
          ]
        },
        {
          "question": "Props vs state",
          "answer": "Props är data komponenten får från en parent. State är data komponenten själv behöver ändra, till exempel formulärtext, aktiv tab eller om en modal är öppen.",
          "followUps": [
            {
              "question": "När lyfter du state?",
              "answer": "När flera komponenter behöver samma data lyfter jag state till närmaste gemensamma parent och skickar ner värden och callbacks som props."
            },
            {
              "question": "Hur förklarar du callback props?",
              "answer": "En parent kan skicka ner en funktion som prop. Child-komponenten anropar funktionen när något händer, men parenten bestämmer vad som faktiskt ska ändras."
            },
            {
              "question": "Hur märker du att state ligger fel?",
              "answer": "Om jag skickar samma data runt på många ställen eller duplicerar den i flera komponenter är det ett tecken på att state borde flyttas upp."
            }
          ]
        },
        {
          "question": "När useEffect?",
          "answer": "Jag använder useEffect när komponenten behöver göra något utanför själva renderingen. Typiska exempel är fetch, event listeners, timers eller att synka med localStorage.",
          "followUps": [
            {
              "question": "Vad är en vanlig useEffect-miss?",
              "answer": "Att lägga logik i useEffect som egentligen kan räknas ut direkt i renderingen. Då blir komponenten svårare att följa än den behöver vara."
            },
            {
              "question": "När behövs cleanup?",
              "answer": "När effekten startar något som kan ligga kvar, till exempel en event listener, interval eller subscription. Då städar jag bort den i return-funktionen."
            },
            {
              "question": "Vad lägger du i dependency array?",
              "answer": "Jag lägger de värden som effekten använder och som kan ändras. Då körs effekten när rätt input ändras, inte på varje render av misstag."
            }
          ]
        },
        {
          "question": "Kontrollerade inputs",
          "answer": "Ett kontrollerat inputfält har value från state och uppdaterar state i onChange. Då vet React alltid vilket värde fältet har, vilket gör validering och reset enklare.",
          "followUps": [
            {
              "question": "När är det användbart?",
              "answer": "Sökfält, filter, login-formulär och validering. Så fort jag behöver reagera på vad användaren skriver är controlled input oftast rätt val."
            },
            {
              "question": "Vad är nackdelen?",
              "answer": "Man skriver lite mer kod eftersom value och onChange behövs. Fördelen är att värdet blir lätt att läsa, validera och återställa."
            },
            {
              "question": "Hur rensar du ett inputfält?",
              "answer": "Eftersom värdet ligger i state räcker det att sätta state till en tom sträng efter submit eller när användaren klickar på rensa."
            }
          ]
        },
        {
          "question": "Bryta ut komponenter",
          "answer": "Jag bryter ut en komponent när en del har ett tydligt eget ansvar eller börjar störa läsbarheten. Jag vill inte bryta ut för tidigt, men jag vill inte heller ha en komponent som gör allt.",
          "followUps": [
            {
              "question": "Vad är ett bra exempel?",
              "answer": "I en produktlista kan ProductCard brytas ut när varje produkt får bild, pris, lagerstatus och knappar. Då blir listan ansvarig för listan och kortet ansvarigt för en produkt."
            },
            {
              "question": "När väntar du med att bryta ut?",
              "answer": "Om delen bara används en gång och fortfarande är lätt att läsa låter jag den vara kvar. Jag vill inte skapa fler filer bara för att det går."
            },
            {
              "question": "Vad skickar du som props?",
              "answer": "Jag skickar bara det child-komponenten behöver visa eller trigga. Om ProductCard bara visar namn och pris skickar jag inte hela appens state."
            }
          ]
        },
        {
          "question": "CSS och layout",
          "answer": "Jag börjar med tydliga klassnamn och en layout som är lätt att läsa. Jag försöker hålla CSS:en enkel: spacing, tydliga states och responsivitet innan jag lägger tid på detaljer.",
          "followUps": [
            {
              "question": "Vad tänker du på för tillgänglighet?",
              "answer": "Jag använder rätt element först: button för klick, label för inputs och semantiska rubriker. Då får man mycket keyboard- och screen reader-stöd gratis."
            },
            {
              "question": "Hur börjar du på en liten uppgift?",
              "answer": "Jag börjar med enkel spacing, läsbar struktur och tydliga klickytor. Om uppgiften växer kan jag lägga till mer responsiv layout efter behov."
            },
            {
              "question": "Hur tänker du på tablet?",
              "answer": "Jag ser till att layouten går att läsa på mindre bredd, att knappar inte blir för små och att text inte pressar sönder kort eller kodrutor."
            }
          ]
        },
        {
          "question": "Om du fastnar",
          "answer": "Jag säger högt vad jag vet, vad jag förväntar mig ska hända och var det verkar gå fel. Sedan minskar jag problemet: loggar värden, testar en mindre del och går tillbaka till senaste fungerande steg.",
          "followUps": [
            {
              "question": "Hur förklarar du felsökningen?",
              "answer": "Jag ser att klicket går igenom, så nästa sak jag kontrollerar är om state uppdateras. Om state stämmer ligger felet troligen i renderingen."
            },
            {
              "question": "När frågar du om förtydligande?",
              "answer": "Om kravet är oklart frågar jag direkt. Om det är ett kodproblem försöker jag först isolera felet och visa vad jag redan har kontrollerat."
            },
            {
              "question": "Hur håller du dig lugn?",
              "answer": "Jag går tillbaka till det jag vet fungerar och tar ett steg i taget. Det är bättre att felsöka tydligt än att stressa fram flera ändringar samtidigt."
            }
          ]
        }
      ]
    },
    "githubRepoQuestions": {
      "id": "github-repos",
      "title": "GitHub project archetypes",
      "difficulty": "Personal",
      "estimatedTime": "15 min",
      "intro": "Fiktiva utbildningsexempel och projektarketyper som visar hur man kopplar olika typer av GitHub-repositories till konkreta tekniska styrkor (t.ex. React, API-hantering, backend, localStorage och driftsättning).",
      "projects": [
        {
          "id": "fullstack-api",
          "name": "E-Commerce REST API (Exempel)",
          "type": "Fullstack / API",
          "technologies": [
            "Node.js",
            "Express",
            "MongoDB",
            "Mongoose",
            "Swagger"
          ],
          "about": "Fiktivt utbildningsexempel på ett REST API med produktkatalog, varukorg, JWT-baserad autentisering och orderflöde. Visar hur man strukturerar routes, datamodeller och API-dokumentation.",
          "interviewAngle": "I ett API-projekt som detta lyfter jag hur backend validerar indata, hanterar skyddade rutter med tokens, och hur strukturerade HTTP-statuskoder skickas tillbaka till frontend."
        },
        {
          "id": "react-dashboard",
          "name": "Data Explorer & Dashboard (Exempel)",
          "type": "Frontend / Data",
          "technologies": [
            "React",
            "Vite",
            "REST API",
            "Framer Motion"
          ],
          "about": "Fiktivt utbildningsexempel på en React-app som konsumerar externa REST API:er med sök, filtrering, laddningsindikatorer och datavisualisering.",
          "interviewAngle": "I ett API-drivet frontend-projekt betonar jag asynkron datahämtning, hantering av fel- och laddtillstånd, samt hur UI:t byggs upp kring data från externa tjänster."
        },
        {
          "id": "store-routing",
          "name": "Multi-View Store App (Exempel)",
          "type": "Frontend / Routing",
          "technologies": [
            "React",
            "React Router",
            "Custom Hooks",
            "localStorage"
          ],
          "about": "Fiktivt utbildningsexempel på en webbapplikation med flera vyer, varukorgsflöde och beständigt state lagrat i webbläsarens localStorage.",
          "interviewAngle": "Här förklarar jag hur navigering och URL-parametrar hanteras med React Router, samt hur custom hooks kan användas för att isolera localStorage-synkning."
        },
        {
          "id": "serverless-board",
          "name": "Cloud Message Board (Exempel)",
          "type": "Serverless / Cloud",
          "technologies": [
            "React",
            "AWS API Gateway",
            "Lambda",
            "DynamoDB"
          ],
          "about": "Fiktivt utbildningsexempel på en serverlös arkitektur där frontend kommunicerar med molnfunktioner och en NoSQL-databas utan traditionell webbserver.",
          "interviewAngle": "I en serverless-arkitektur förklarar jag hur requests dirigeras genom API Gateway, hur funktioner exekveras vid behov och hur data sparas i en molndatabas."
        },
        {
          "id": "vanilla-engine",
          "name": "Logic & DOM Game Engine (Exempel)",
          "type": "JavaScript-grunder",
          "technologies": [
            "JavaScript",
            "HTML5",
            "CSS Grid",
            "State Management"
          ],
          "about": "Fiktivt utbildningsexempel på ren JavaScript-logik med interaktiv DOM-manipulering, turordningshantering och timer-baserade tillstånd utan ramverk.",
          "interviewAngle": "Ett sådant projekt är utmärkt för att visa stark förståelse för JavaScript-grunder: DOM-händelser, event loop, ren logik och strukturerad tillståndshantering."
        }
      ],
      "questions": [
        {
          "question": "Vilka typer av repositories visar bäst fullstack- eller backend-kompetens?",
          "answer": "Projekt som kombinerar ett tydligt API med databas: till exempel ett REST API i Node.js/Express med CRUD, JWT-autentisering, datamodellering i MongoDB eller SQL, eller en serverless-lösning med AWS Lambda och DynamoDB. Fokusera på att visa skyddade rutter och API-dokumentation."
        },
        {
          "question": "Vilka projekt visar bäst att du behärskar externa API:er?",
          "answer": "Projekt som konsumerar publika eller externa REST-API:er. Där kan du visa hur du hanterar asynkrona anrop, fel- och laddningsindikatorer, pagination eller sökfiltrering, samt hur du presenterar extern data i ett responsivt gränssnitt."
        },
        {
          "question": "Vilka projekt visar React Router och state över flera sidor?",
          "answer": "Projekt med flera sammanhängande vyer (t.ex. lista, detaljsida, varukorg eller kassa). De visar att du behärskar dynamiska rutter, URL-parametrar och att hålla tillstånd begripligt mellan olika vyer, gärna med synkning till localStorage."
        },
        {
          "question": "Vilket projekt visar bäst verksamhets- eller produktkänsla?",
          "answer": "En komplett företags- eller kundwebbplats. Där kan du prata om helheten: första intrycket, snabb laddtid, responsiv design, kontaktflöden, god tillgänglighet (a11y) och driftsättning med egen domän."
        },
        {
          "question": "Hur kan du prata om äldre eller enklare projekt utan att de låter svaga?",
          "answer": "Lyft vad de lärde dig och vilken progression de visar. Ett enklare JavaScript-spel visar logik och DOM-hantering; en statisk HTML/CSS-sida visar semantik och responsiv layout. Det visar att du byggt en stabil grund innan du gick vidare till större ramverk."
        },
        {
          "question": "Hur väljer du vilka GitHub-projekt du ska prata om i en intervju?",
          "answer": "Välj projekt utifrån den specifika rollen. Söker du en frontend-roll lyfter du React-appar med fokus på state, tillgänglighet och komponenter. Söker du fullstack lyfter du backend-arkitektur, API-rutter och databaser. Anpassa alltid efter arbetsgivarens behov."
        }
      ]
    },
    "portfolioBackgroundQuestions": {
      "id": "portfolio-background",
      "title": "Background and profile",
      "difficulty": "Personal",
      "estimatedTime": "10 min",
      "intro": "Pedagogiska svarsmallar som visar hur du kan formulera och strukturera svar om din bakgrund, drivkrafter och samarbetsform i en utvecklarintervju.",
      "questions": [
        {
          "question": "Kan du berätta kort om din bakgrund?",
          "answer": "Ett effektivt sätt att svara är att använda en tre-stegs-struktur: 1) Beskriv vad du fokuserar på idag (t.ex. modern frontend med React), 2) Nämn kort vad som ledde dig in på programmering (logiskt tänkande, problemlösning eller tidigare erfarenhet), och 3) Sammanfatta vad du behärskar och bygger för typ av applikationer."
        },
        {
          "question": "Hur kom du in på webbutveckling?",
          "answer": "Fokusera på det som väckte ditt intresse: berätta om drivkraften att bygga konkreta lösningar som användare interagerar med, och hur du uppskattar kombinationen av logik, komponentstruktur och användarupplevelse."
        },
        {
          "question": "Vad driver dig som utvecklare?",
          "answer": "Beskriv att din drivkraft är att ta idéer från skiss till välfungerande, robust kod. Betona att du motiveras av att lösa verkliga problem på ett tydligt sätt, skriva läsbar kod och kontinuerligt lära dig nya verktyg och mönster."
        },
        {
          "question": "Vilka tekniker känner du dig mest bekväm med?",
          "answer": "Dela upp ditt svar i två nivåer: din starka kärnkompetens (t.ex. HTML, CSS, JavaScript, React, routing och Git) och tekniker du har praktisk erfarenhet av och fortsätter utvecklas inom (t.ex. TypeScript, REST API:er, Node.js eller testning)."
        },
        {
          "question": "Hur brukar du arbeta i projekt och team?",
          "answer": "Lyft fram ett strukturerat arbetssätt: att bryta ner komplexa problem i mindre delar, arbeta iterativt, prioritera god läsbarhet och delta aktivt i kodgranskning, kunskapsdelning och tydlig kommunikation."
        },
        {
          "question": "Vad tycker du är viktigt i en bra webbupplevelse?",
          "answer": "Betona helheten: en modern lösning ska vara snabb, inkluderande och begriplig. Prata om semantisk HTML, tillgänglighet (WCAG), god prestanda, intuitiv navigering och responsiv layout för alla skärmar."
        },
        {
          "question": "Vad söker du i din nästa roll?",
          "answer": "Förklara att du söker en miljö där teknisk kvalitet, god ingenjörskultur och användarupplevelse prioriteras, och där du får bidra med engagemang samtidigt som du lär dig av erfarna kollegor i teamet."
        },
        {
          "question": "Vad utforskar du för tekniker just nu?",
          "answer": "Ge exempel på tekniker du aktivt fördjupar dig i (t.ex. TypeScript för starkare typsäkerhet, djupare state management, testning eller backend-integration) för att visa kontinuerlig nyfikenhet och självständigt lärande."
        }
      ]
    },
    "portfolioProjectQuestions": {
      "id": "portfolio-projects",
      "title": "Projects and architecture",
      "difficulty": "Architecture",
      "estimatedTime": "15 min",
      "intro": "",
      "questions": [
        {
          "question": "Fullstack-projekt (Exempel: Order-API)",
          "answer": "Som exempel på fullstack- och backend-grund brukar jag lyfta ett order-API och ett resurs-API. Där beskriver jag ett REST API för meny, kundvagn, orderflöde och status, samt hur jag tränat på CRUD, datamodellering, autentisering och skyddade endpoints.",
          "followUps": [
            {
              "question": "Vad gör ett order-API tydligt att prata om?",
              "answer": "Det gör backendflödet konkret. Jag kan förklara hur jag tänker kring routes, datamodeller och hur frontend skapar en order och får tillbaka rätt status."
            },
            {
              "question": "Vad lärde du dig av auth?",
              "answer": "Jag lärde mig att skyddade endpoints måste kontrolleras på backend. Frontend kan visa rätt UI, men backend måste avgöra om requesten faktiskt är tillåten."
            },
            {
              "question": "Hur kopplar det till frontend?",
              "answer": "Det gjorde mig bättre på att förstå vad frontend behöver från ett API: tydliga statuskoder, konsekventa svar och felmeddelanden som går att visa för användaren."
            }
          ]
        },
        {
          "question": "Kund- och verksamhetswebbplats",
          "answer": "När jag pratar om ett kund- eller verksamhetsprojekt fokuserar jag på en modern företagswebbplats byggd med React, Vite och Framer Motion, med tyngdpunkt på responsiv design, tydlig information, kontaktflöde, SEO, accessibility och deployment med egen domän.",
          "followUps": [
            {
              "question": "Vad var viktigast i projektet?",
              "answer": "Det viktigaste var att besökaren snabbt skulle förstå tjänsten och kunna ta kontakt. Därför prioriterade jag tydlig struktur, läsbar text och enkla vägar till kontakt."
            },
            {
              "question": "Vad gör ett sådant projekt annorlunda från enkla övningsuppgifter?",
              "answer": "Det behöver kännas användbart och tillförlitligt på riktigt. Jag tänker mer på helheten: första intrycket, mobilvy, kontaktflöde, prestanda och att sidan ska vara enkel att underhålla."
            },
            {
              "question": "Vad kan du prata tekniskt om?",
              "answer": "Jag kan prata om komponentstruktur, responsiv CSS, animationer med Framer Motion, SEO-grunder, accessibility och hur jag deployade sidan till en riktig domän."
            }
          ]
        },
        {
          "question": "React-projekt (Exempel: Routing, API och State)",
          "answer": "För att demonstrera React-kunskaper lyfter jag exempel med komponenter, routing, externa API-anrop, state över flera vyer och UI som byggs runt dynamisk data.",
          "followUps": [
            {
              "question": "Vilken typ av React-projekt väljer du först?",
              "answer": "Jag väljer ett API-drivet projekt om jag vill prata om asynkrona anrop, loading states och datamodeller. Jag väljer en app med routing om jag vill prata om flersidiga flöden, login och beständig lagring med localStorage."
            },
            {
              "question": "Vad visar routing-projekten?",
              "answer": "De visar att jag kan dela upp en app i flera vyer och hålla data begriplig när användaren går från lista till detaljsida eller vidare i ett flöde."
            },
            {
              "question": "Vad visar komponenttänket?",
              "answer": "Jag bygger gärna UI i mindre delar när det gör koden tydligare, till exempel kort, listor, detaljvyer och återanvändbara knappar eller layoutdelar."
            }
          ]
        },
        {
          "question": "Portfolio-webbplats",
          "answer": "Min portfolio visar hur jag presenterar projekt, teknik och kontakt på ett tydligt sätt. Jag har lagt fokus på responsiv design, tillgänglighet, SEO, prestanda och att projekten ska vara enkla att skanna.",
          "followUps": [
            {
              "question": "Vad vill du att portfolion ska visa?",
              "answer": "Den ska visa progression: att jag kan HTML/CSS, React, API:er, backendgrunder och att jag kan beskriva vad jag faktiskt byggt."
            },
            {
              "question": "Vad har du förbättrat över tid?",
              "answer": "Jag har förbättrat struktur, text, responsivitet och hur projekten presenteras. Målet är att det snabbt ska gå att förstå teknik, problem och resultat."
            },
            {
              "question": "Hur tänker du kring projekttexter?",
              "answer": "Jag försöker skriva projekttexter som är konkreta: vad jag byggde, vilka tekniker jag använde och vad projektet tränade mig på."
            }
          ]
        },
        {
          "question": "Egna verktyg och prototyper",
          "answer": "Jag bygger gärna egna verktyg och prototyper för att testa nya idéer, till exempel verktyg för realtidsöversättning i chatt och stream utilities. Där utforskar jag API-integration, JSON, polling, textbearbetning, automation och små verktyg som förbättrar arbetsflöden.",
          "followUps": [
            {
              "question": "Varför bygger du egna verktyg?",
              "answer": "Jag lär mig mycket när jag försöker lösa ett verkligt problem själv. Det tvingar mig att tänka på dataflöde, användning och vad som faktiskt gör verktyget användbart."
            },
            {
              "question": "Vad visar de projekten?",
              "answer": "De visar att jag är nyfiken och gärna testar teknik praktiskt. Jag tränar på API:er, automation och att bryta ner en idé till mindre fungerande delar."
            },
            {
              "question": "Hur väljer du vad du bygger?",
              "answer": "Jag väljer ofta idéer där jag själv ser ett behov. Då blir det lättare att förstå användarflödet och märka om lösningen faktiskt hjälper."
            }
          ]
        },
        {
          "question": "Roll i grupprojekt",
          "answer": "I grupprojekt försöker jag bidra både tekniskt och praktiskt. Jag bryter ner problem, bygger funktioner, testar flöden, hjälper till med UI och kommunicerar tydligt när något behöver ändras.",
          "followUps": [
            {
              "question": "Hur samarbetar du när något är oklart?",
              "answer": "Jag försöker formulera vad som är oklart och föreslå nästa steg. Det kan vara att dela upp en större funktion eller bestämma vilken data komponenten behöver."
            },
            {
              "question": "Hur hanterar du kod som påverkar andra?",
              "answer": "Jag försöker hålla ändringar tydliga och prata med gruppen om det påverkar gemensam struktur, routes, API-format eller komponenter som andra använder."
            },
            {
              "question": "Vad bidrar du med i team?",
              "answer": "Jag bidrar med energi, problemlösning och vilja att få saker att fungera. Jag gillar också att hjälpa till att göra lösningen mer begriplig för hela gruppen."
            }
          ]
        },
        {
          "question": "Förbättra projekten",
          "answer": "Framåt vill jag förbättra testning, accessibility, kodstruktur och prestanda i mina projekt. Jag vill också bli starkare i TypeScript, Next.js, Docker, WebSockets och backend-integration.",
          "followUps": [
            {
              "question": "Vad skulle du förbättra först?",
              "answer": "Jag skulle börja med testning och accessibility eftersom de gör projekten mer robusta och lättare att lita på. Sedan skulle jag se över struktur och prestanda."
            },
            {
              "question": "Varför TypeScript?",
              "answer": "TypeScript hjälper mig upptäcka fel tidigare och gör större kodbaser lättare att förstå. Det blir särskilt värdefullt när props, API-svar och state växer."
            },
            {
              "question": "Vad betyder bättre backend-integration?",
              "answer": "Det betyder att jag vill bli bättre på hela flödet mellan frontend och backend: request, validering, auth, felhantering och hur datan presenteras i UI:t."
            }
          ]
        }
      ]
    }
  },
  "fullstackQuestions": {
    "fullstackAfterQuestions": {
      "id": "fullstack-after",
      "title": "After fullstack",
      "difficulty": "Fullstack",
      "estimatedTime": "10 min",
      "intro": "Frågor om tradeoffs, säkerhet, felhantering och hur lösningen skulle växa i en riktig app.",
      "questions": [
        {
          "question": "Hur skulle du göra lösningen säkrare?",
          "answer": "Jag skulle se till att backend validerar all input, skyddar endpoints med auth, inte skickar känslig data till frontend och använder miljövariabler för hemligheter."
        },
        {
          "question": "Vilka statuskoder använder du?",
          "answer": "200 för lyckad hämtning, 201 när något skapas, 400 för fel input, 401 om användaren inte är inloggad, 403 om användaren saknar rättighet, 404 om resursen saknas och 500 för serverfel."
        },
        {
          "question": "Hur hanterar du fel från API:t i frontend?",
          "answer": "Jag visar loading, error och success som separata states. Om backend skickar fältspecifika fel visar jag dem nära rätt input."
        },
        {
          "question": "Hur skulle du testa flödet?",
          "answer": "Jag skulle testa API-routes för lyckade och misslyckade requests, och i frontend testa att loading, error, tom lista och submit-flöden visas korrekt."
        }
      ]
    },
    "fullstackBeforeQuestions": {
      "id": "fullstack-before",
      "title": "Before fullstack",
      "difficulty": "Fullstack",
      "estimatedTime": "10 min",
      "intro": "Frågor som ofta kommer när intervjun rör både frontend och backend.",
      "questions": [
        {
          "question": "Hur tänker du kring frontend och backend?",
          "answer": "Jag brukar dela upp ansvaret tydligt: frontend ska ge en bra användarupplevelse och skicka rätt request, backend ska validera, skydda data och svara med tydliga statuskoder."
        },
        {
          "question": "Hur designar du ett API?",
          "answer": "Jag börjar med vilka resurser appen behöver, till exempel users, products eller orders. Sedan väljer jag tydliga endpoints, rätt HTTP-metoder och svar som frontend enkelt kan använda."
        },
        {
          "question": "Var ska validering ligga?",
          "answer": "Jag kan validera i frontend för bättre UX, men backend måste alltid validera igen eftersom man aldrig kan lita på data som kommer från klienten."
        },
        {
          "question": "Hur tänker du kring auth?",
          "answer": "Frontend kan spara login-state och skicka token, men backend måste kontrollera token och avgöra om användaren får göra en viss sak."
        }
      ]
    },
    "fullstackProjectQuestions": {
      "id": "fullstack-project-angle",
      "title": "Fullstack architecture",
      "difficulty": "Personal",
      "estimatedTime": "12 min",
      "intro": "Sätt att prata om projekt där frontend, API och datalagring hänger ihop.",
      "questions": [
        {
          "question": "Hur kan du förklara en serverless molnarkitektur?",
          "answer": "Ett serverless-arkitekturmönster kombinerar React frontend med molntjänster, till exempel AWS API Gateway, Lambda och DynamoDB. Jag kan beskriva hur frontend skickar requests, hur funktionerna hanterar logik utan en traditionell server och hur datan sparas."
        },
        {
          "question": "Hur kan du lyfta ett order- eller varukorgs-API?",
          "answer": "Ett order-API visar backend-flöde med meny, cart och orders. Jag kan prata om routes, datamodeller, statuskoder och hur API:t stödjer ett e-handelsliknande flöde."
        },
        {
          "question": "Hur kan du lyfta Todo API eller MongoDB-projekt?",
          "answer": "De visar CRUD, auth, skyddade endpoints och databasstruktur. Det är bra när jag vill visa att jag förstår mer än bara UI."
        },
        {
          "question": "Vad är din styrka som frontend/fullstack junior?",
          "answer": "Jag förstår användarflödet från UI till API och databas. Jag är starkast i frontend, men jag kan bygga och resonera kring backend-delarna som behövs för en komplett app."
        }
      ]
    }
  }
};
