// --- GLOBÁLNÍ STAV ---
const CURRENT_COURSE = { level: null, course: null, grade: null }; 

// --- ROZŠÍŘENÁ STRUKTURA DAT PRO VŠECHNY ÚROVNĚ ---
const COURSE_DATA = {
    aj: {
        anglictina: {
            title: "Anglický Jazyk",
            grades: {
                'aj_a1': { title: "Úroveň A1: Začátečník", description: "Základní fráze, sloveso 'to be', přítomný čas prostý, slovíčka (rodina, barvy)." },
                'aj_a2': { title: "Úroveň A2: Mírně pokročilý", description: "Minulý čas prostý, budoucí čas, modální slovesa (can, must), předložky." },
                'aj_b1': { title: "Úroveň B1: Středně pokročilý", description: "Předpřítomný čas, podmínkové věty (první a druhý kondicionál), trpný rod." },
                'aj_b2': { title: "Úroveň B2: Vyšší středně pokročilý", description: "Třetí kondicionál, nepřímá řeč, frázová slovesa, formální styl." }
            }
        }
    },
    zs: {
        matematika: {
            title: "Matematika ZŠ",
            grades: {
                'zs_mat_1': { title: "1. Třída", description: "Čísla do 10, sčítání/odčítání, geometrické tvary." },
                'zs_mat_2_3': { title: "2.–3. Třída", description: "Násobilka, písemné sčítání/odčítání, jednotky." },
                'zs_mat_4_5': { title: "4.–5. Třída", description: "Zlomky, desetinná čísla, obvody a obsahy." },
                'zs_mat_6_7': { title: "6.–7. Třída", description: "Celá čísla, procenta, výrazy s proměnnou." },
                'zs_mat_8_9': { title: "8.–9. Třída", description: "Mocniny, rovnice, Pythagorova věta, objemy těles." }
            }
        },
        cestina: {
            title: "Český Jazyk ZŠ",
            grades: {
                'zs_cj_1': { title: "1. Třída", description: "Čtení, psaní, velká písmena." },
                'zs_cj_2_3': { title: "2.–3. Třída", description: "Vyjmenovaná slova, podstatná jména, slovesa." },
                'zs_cj_4_5': { title: "4.–5. Třída", description: "Pravopis i/y, slovní druhy, sloh." },
                'zs_cj_6_7': { title: "6.–7. Třída", description: "Tvarosloví (skloňování, časování), větné členy." },
                'zs_cj_8_9': { title: "8.–9. Třída", description: "Skladba, souvětí, literární historie." }
            }
        }
    },
    ss: {
        matematika: {
            title: "Matematika SŠ",
            grades: {
                'ss_mat_alg': { title: "Algebra a Rovnice", description: "Komplexní čísla, logaritmické, exponenciální rovnice." },
                'ss_mat_funk': { title: "Funkce a Kalkulus", description: "Vlastnosti funkcí, grafy, goniometrie, základy derivací." },
                'ss_mat_geom': { title: "Analytická geometrie", description: "Vektory, přímka, rovina, kuželosečky." },
                'ss_mat_komb': { title: "Kombinatorika a Posloupnosti", description: "Permutace, variace, kombinace, binomická věta, posloupnosti." }
            }
        },
        cestina: {
            title: "Český jazyk a literatura SŠ",
            grades: {
                'ss_cj_styl': { title: "Jazyková kultura a Stylistika", description: "Lexikologie, sémantika, funkční styly." },
                'ss_cj_lit': { title: "Literární Historie 20. a 21. stol.", description: "Světová a česká literatura, avantgarda, postmoderna." }
            }
        }
    },
    vs: {
        matematika: {
            title: "Matematika VŠ",
            grades: {
                'vs_mat_an1': { title: "Matematická analýza I", description: "Limity, spojitost, derivace a jejich aplikace." },
                'vs_mat_la1': { title: "Lineární algebra I", description: "Matice, determinanty, soustavy rovnic, vektorové prostory." }
            }
        },
        cestina: {
            title: "Český jazyk VŠ",
            grades: {
                'vs_cj_ling': { title: "Základy lingvistiky a morfologie", description: "Fonetika, fonologie, komplexní analýza slovních druhů." },
                'vs_cj_syntax': { title: "Syntax a Historie jazyka", description: "Komplexní skladba, valenční teorie, staroslověnština." }
            }
        }
    }
};

// --- MASIVNÍ BANKA REÁLNÝCH OTÁZEK ---
// Inicializace jako prázdný objekt
const QUIZ_BANK = {}; 

// Naplnění reálnými otázkami (část)
QUIZ_BANK['aj_a1'] = [
    { question: "What is 'jablko' in English?", answers: ["Apple", "Banana", "Orange"], correct: "Apple", explanation: "'Jablko' means 'Apple'." },
    { question: "I ___ happy.", answers: ["am", "is", "are"], correct: "am", explanation: "Use 'am' with 'I'." },
    { question: "She ___ a student.", answers: ["is", "am", "are"], correct: "is", explanation: "Use 'is' with 'She'." },
    { question: "They ___ friends.", answers: ["are", "is", "am"], correct: "are", explanation: "Use 'are' with 'They'." },
    { question: "What colour is the sun?", answers: ["Yellow", "Blue", "Red"], correct: "Yellow", explanation: "The sun is typically perceived as yellow." },
    { question: "How many days are in a week?", answers: ["Seven", "Five", "Ten"], correct: "Seven", explanation: "There are 7 days in a week." },
    { question: "He ___ like milk.", answers: ["doesn't", "don't", "isn't"], correct: "doesn't", explanation: "Use 'doesn't' for he/she/it in present simple negative." },
    { question: "What is the plural of 'cat'?", answers: ["Cats", "Cates", "Caties"], correct: "Cats", explanation: "Regular plurals usually add -s." },
    { question: "'Pes' in English is?", answers: ["Dog", "Cat", "Bird"], correct: "Dog", explanation: "'Pes' means 'Dog'." },
    { question: "This ___ my book.", answers: ["is", "are", "am"], correct: "is", explanation: "'This' is singular, use 'is'." },
    { question: "___ you speak English?", answers: ["Do", "Does", "Are"], correct: "Do", explanation: "Use 'Do' to form questions with 'you' in present simple." },
    { question: "Where ___ you from?", answers: ["are", "is", "am"], correct: "are", explanation: "Use 'are' with 'you'." },
    { question: "My favorite colour ___ blue.", answers: ["is", "are", "am"], correct: "is", explanation: "'Colour' is singular." },
    { question: "What is 'voda'?", answers: ["Water", "Milk", "Juice"], correct: "Water", explanation: "'Voda' means 'Water'." },
    { question: "I ___ play the guitar.", answers: ["can", "is", "am"], correct: "can", explanation: "'Can' indicates ability." },
    { question: "___ name is John.", answers: ["My", "I", "Me"], correct: "My", explanation: "'My' is a possessive adjective." },
    { question: "It ___ raining.", answers: ["is", "are", "am"], correct: "is", explanation: "Use 'is' with 'It'." },
    { question: "We ___ hungry.", answers: ["are", "is", "am"], correct: "are", explanation: "Use 'are' with 'We'." },
    { question: "What time ___ it?", answers: ["is", "are", "do"], correct: "is", explanation: "Asking about time uses 'is'." },
    { question: "I have ___ brother.", answers: ["a", "an", "the"], correct: "a", explanation: "Use 'a' before consonant sounds." }
];
QUIZ_BANK['aj_a2'] = [
    { question: "Yesterday, I ___ to the park.", answers: ["went", "go", "goes"], correct: "went", explanation: "Past simple of 'go' is 'went'." },
    { question: "She ___ TV last night.", answers: ["watched", "watch", "watches"], correct: "watched", explanation: "Past simple regular verbs add -ed." },
    { question: "___ you see the movie?", answers: ["Did", "Do", "Does"], correct: "Did", explanation: "Use 'Did' for past simple questions." },
    { question: "They ___ happy yesterday.", answers: ["were", "was", "are"], correct: "were", explanation: "Past simple of 'are' is 'were'." },
    { question: "I ___ study for the test tomorrow.", answers: ["will", "am", "did"], correct: "will", explanation: "'Will' is used for future simple." },
    { question: "He ___ swim very well.", answers: ["can", "is", "has"], correct: "can", explanation: "'Can' expresses ability." },
    { question: "You ___ be quiet in the library.", answers: ["must", "can", "will"], correct: "must", explanation: "'Must' expresses obligation." },
    { question: "The book is ___ the table.", answers: ["on", "in", "at"], correct: "on", explanation: "'On' is used for surfaces." },
    { question: "We arrived ___ Prague.", answers: ["in", "on", "at"], correct: "in", explanation: "'In' is used for cities and countries." },
    { question: "Meet me ___ 5 PM.", answers: ["at", "on", "in"], correct: "at", explanation: "'At' is used for specific times." },
    { question: "There ___ some apples.", answers: ["are", "is", "was"], correct: "are", explanation: "Use 'are' for plural countable nouns." },
    { question: "There ___ some milk.", answers: ["is", "are", "were"], correct: "is", explanation: "Use 'is' for uncountable nouns." },
    { question: "This car is ___ than that car.", answers: ["faster", "fast", "fastest"], correct: "faster", explanation: "Comparative form for short adjectives is -er." },
    { question: "She is the ___ girl in the class.", answers: ["tallest", "taller", "tall"], correct: "tallest", explanation: "Superlative form for short adjectives is -est." },
    { question: "I didn't ___ anything.", answers: ["see", "saw", "seen"], correct: "see", explanation: "Use the base form after 'didn't'." },
    { question: "Will she ___ tomorrow?", answers: ["come", "comes", "came"], correct: "come", explanation: "Use the base form after 'will'." },
    { question: "My birthday is ___ July.", answers: ["in", "on", "at"], correct: "in", explanation: "'In' is used for months." },
    { question: "He lives ___ London.", answers: ["in", "at", "on"], correct: "in", explanation: "'In' is used for cities." },
    { question: "What ___ you do yesterday?", answers: ["did", "do", "does"], correct: "did", explanation: "Past simple question auxiliary." },
    { question: "I ___ born in 1990.", answers: ["was", "were", "am"], correct: "was", explanation: "Past simple of 'am/is' for 'I'." }
];
QUIZ_BANK['zs_mat_1'] = Array.from({ length: 20 }, (_, i) => ({ question: `Kolik je ${i % 5 + 1} + ${i % 4 + 2}?`, answers: [`${(i % 5 + 1) + (i % 4 + 2)}`, `${(i % 5 + 1) * (i % 4 + 2)}`, "10"], correct: `${(i % 5 + 1) + (i % 4 + 2)}`, explanation: "Základní sčítání do 10." }));
QUIZ_BANK['zs_mat_2_3'] = Array.from({ length: 20 }, (_, i) => ({ question: `Kolik je ${i % 9 + 2} x ${i % 8 + 2}?`, answers: [`${(i % 9 + 2) * (i % 8 + 2)}`, `${(i % 9 + 2) + (i % 8 + 2)}`, "1"], correct: `${(i % 9 + 2) * (i % 8 + 2)}`, explanation: "Procvičování násobilky." }));
QUIZ_BANK['zs_mat_4_5'] = Array.from({ length: 20 }, (_, i) => ({ question: `Převeď zlomek 1/${i%8+2} na desetinné číslo (2 des. místa).`, answers: [`${(1/(i%8+2)).toFixed(2)}`, `${(i%8+2).toFixed(2)}`, "0.50"], correct: `${(1/(i%8+2)).toFixed(2)}`, explanation: "Dělení čitatele jmenovatelem." }));
QUIZ_BANK['zs_mat_6_7'] = Array.from({ length: 20 }, (_, i) => ({ question: `Kolik je ${i*5+5}% z 200?`, answers: [`${((i*5+5)/100 * 200)}`, "100", `${200 / (i*5+5)}`], correct: `${((i*5+5)/100 * 200)}`, explanation: "1% je 2, výsledek je 2 krát počet procent." }));
QUIZ_BANK['zs_mat_8_9'] = Array.from({ length: 20 }, (_, i) => ({ question: `Vyřeš rovnici: 3x - ${i+2} = ${13-i}`, answers: ["x = 5", "x = 10", "x = (15)/3"], correct: "x = 5", explanation: "Převedením členů získáme 3x = 15, tedy x = 5." }));
QUIZ_BANK['zs_cj_2_3'] = [
    { question: "Doplň y/i: b_l", answers: ["y", "i"], correct: "y", explanation: "Vyjmenované slovo BÝT." }, { question: "Doplň y/i: m_šlenka", answers: ["y", "i"], correct: "y", explanation: "Příbuzné k vyjmenovanému slovu MYSLET." }, { question: "Doplň y/i: l_ška", answers: ["i", "y"], correct: "i", explanation: "Slovo 'liška' není vyjmenované ani příbuzné." }, { question: "Doplň y/i: s_kora", answers: ["ý", "í"], correct: "ý", explanation: "Tvrdá souhláska S." }, { question: "Doplň y/i: v_r", answers: ["ý", "í"], correct: "ý", explanation: "Vyjmenované slovo VÝR (sova)." }, { question: "Doplň y/i: ml_n", answers: ["ý", "í"], correct: "ý", explanation: "Vyjmenované slovo MLÝN." }, { question: "Doplň y/i: jaz_k", answers: ["y", "i"], correct: "y", explanation: "Vyjmenované slovo JAZYK." }, { question: "Doplň y/i: c_bulka", answers: ["i", "y"], correct: "i", explanation: "Měkká souhláska C." }, { question: "Doplň y/i: tat_nek", answers: ["í", "ý"], correct: "í", explanation: "Měkká souhláska T." }, { question: "Doplň y/i: ž_rafa", answers: ["i", "y"], correct: "i", explanation: "Měkká souhláska Ž." }, { question: "Doplň y/i: r_ba", answers: ["i", "y"], correct: "y", explanation: "Tvrdá souhláska R." }, { question: "Doplň y/i: š_ška", answers: ["i", "y"], correct: "i", explanation: "Měkká souhláska Š." }, { question: "Doplň y/i: d_ně", answers: ["y", "i"], correct: "ý", explanation: "Tvrdá souhláska D." }, { question: "Doplň y/i: n_t", answers: ["i", "y"], correct: "i", explanation: "Měkká souhláska N." }, { question: "Doplň y/i: hř_b", answers: ["i", "y"], correct: "i", explanation: "Měkká souhláska Ř." }, { question: "Doplň y/i: mot_l", answers: ["ý", "í"], correct: "ý", explanation: "Obojetná L, ale slovo 'motýl' je tvrdé." }, { question: "Doplň y/i: kl_č", answers: ["í", "ý"], correct: "í", explanation: "Měkká souhláska Č." }, { question: "Doplň y/i: p_l", answers: ["y", "i"], correct: "y", explanation: "Vyjmenované slovo PYL." }, { question: "Doplň y/i: p_vo", answers: ["i", "y"], correct: "i", explanation: "Slovo 'pivo' není vyjmenované." }, { question: "Doplň y/i: s_r", answers: ["ý", "í"], correct: "ý", explanation: "Vyjmenované slovo SÝR." },
];
QUIZ_BANK['zs_cj_4_5'] = Array.from({ length: 20 }, (_, i) => ({ question: `Urči slovní druh slova '${["pes", "běží", "rychle", "modrý", "a", "nad", "pět", "jejich", "au", "kéž"][i%10]}'`, answers: ["Podst. jm.", "Sloveso", "Příslovce", "Příd. jm.", "Spojka", "Předložka", "Číslovka", "Zájmeno", "Citoslovce", "Částice"], correct: ["Podst. jm.", "Sloveso", "Příslovce", "Příd. jm.", "Spojka", "Předložka", "Číslovka", "Zájmeno", "Citoslovce", "Částice"][i%10], explanation: "Základní rozřazování slovních druhů." }));
QUIZ_BANK['zs_cj_6_7'] = Array.from({ length: 20 }, (_, i) => ({ question: `Urči pád podstatného jména ve spojení 'bez ${["chleba", "vody", "města", "kuřete", "stavení", "písně", "kosti", "muže", "předsedy", "soudce"][i%10]}'`, answers: ["2. pád", "4. pád", "6. pád"], correct: "2. pád", explanation: "Předložka 'bez' se pojí s 2. pádem (koho, čeho?)." }));
QUIZ_BANK['zs_cj_8_9'] = (function generateZS9() {
    const items = [];
    const definitions = [
        { q: 'Co je to věta přívlastková?', a: ['Věta, která rozvíjí podstatné jméno','Věta bez přísudku','Krátká věta', 'Věta tázací'], correct: 'Věta, která rozvíjí podstatné jméno', explanation: 'Přívlastková věta rozvíjí podstatné jméno (kdo/ který).'
        }
    ];

    const correctSentences = [
        { q: 'Která věta je napsaná bez pravopisné chyby?', a: ['On šel do skoly.','On šel do školy.','On sel do školy.','On šel do skolý.'], correct: 'On šel do školy.', explanation: 'Správný tvar slova je "škola" s diakritikou a v 4. pádu "do školy".' },
        { q: 'Která z následujících vět je stylisticky správná?', a: ['Viděl jsem ho, na ulici.','Viděl jsem ho na ulici.','Na ulici jsem ho viděl,','Viděl, jsem ho na ulici.'], correct: 'Viděl jsem ho na ulici.', explanation: 'Správné pořadí slov a interpunkce.' }
    ];

    const fillIns = [
        { q: `Doplň správně: "Kniha, kterou jsem ___, byla zajímavá."`, a: ['četl','čtu','čtena','čtěl'], correct: 'četl', explanation: 'Minulý čas: četl.' },
        { q: `Doplň správně: "Budeš-li se učit, ___ zkoušku."`, a: ['uděláš','udělal','udeješ','uděláš se'], correct: 'uděláš', explanation: 'Podmínkové / budoucí vyjádření.' }
    ];

    for (let i = 0; i < 20; i++) {
        const type = i % 3; // 0:definice,1:vyber větu,2:doplň
        if (type === 0) {
            const base = definitions[i % definitions.length];
            items.push({ question: base.q, answers: base.a, correct: base.correct, explanation: base.explanation });
        } else if (type === 1) {
            const base = correctSentences[i % correctSentences.length];
            items.push({ question: base.q, answers: base.a, correct: base.correct, explanation: base.explanation });
        } else {
            const base = fillIns[i % fillIns.length];
            items.push({ question: base.q, answers: base.a, correct: base.correct, explanation: base.explanation });
        }
    }
    return items;
})();
QUIZ_BANK['ss_mat_alg'] = Array.from({ length: 20 }, (_, i) => ({ question: `Vyřešte rovnici: log₂(${i+2}x) = 5`, answers: [`x = ${32/(i+2)}`, `x = 10`, `x = 3`], correct: `x = ${32/(i+2)}`, explanation: `Definice logaritmu: ${i+2}x = 2⁵ = 32.` }));
QUIZ_BANK['ss_mat_funk'] = Array.from({ length: 20 }, (_, i) => ({ question: `Jaká je derivace funkce f(x) = x³ + ${i+1}x ?`, answers: ["3x² + "+(i+1), "3x²", "x⁴/4 + "+(i+1)+"x²/2"], correct: "3x² + "+(i+1), explanation: "Derivace xⁿ je nxⁿ⁻¹." }));
QUIZ_BANK['ss_mat_geom'] = Array.from({ length: 20 }, (_, i) => ({ question: `Jaká je vzdálenost bodů A[0, ${i}] a B[${i+3}, ${i}]?`, answers: [`${i+3}`, "0", `${Math.sqrt((i+3)**2)}`], correct: `${i+3}`, explanation: "Body leží na vodorovné přímce, vzdálenost je rozdíl x-ových souřadnic." }));
QUIZ_BANK['ss_mat_komb'] = Array.from({ length: 20 }, (_, i) => ({ question: `Kolika způsoby lze vybrat ${i%3+2} studenty ze třídy 10 studentů?`, answers: ["Kombinace", "Variace", "Permutace"], correct: "Kombinace", explanation: "Na pořadí výběru nezáleží." }));
QUIZ_BANK['ss_cj_styl'] = Array.from({ length: 20 }, (_, i) => ({ question: `Který funkční styl je typický pro zprávy v novinách?`, answers: ["Publicistický", "Odborný", "Umělecký"], correct: "Publicistický", explanation: "Cílem je informovat širokou veřejnost." }));
QUIZ_BANK['ss_cj_lit'] = Array.from({ length: 20 }, (_, i) => ({ question: `Který autor napsal dílo '${["Proměna", "Obraz Doriana Graye", "Romeo a Julie", "Krysař"][i%4]}'?`, answers: ["Kafka", "Wilde", "Shakespeare", "Dyk"], correct: ["Kafka", "Wilde", "Shakespeare", "Dyk"][i%4], explanation: "Základní přehled světové a české literatury." }));
QUIZ_BANK['vs_mat_an1'] = Array.from({ length: 20 }, (_, i) => ({ question: `Vypočtěte limitu: lim (x->0) (sin(${i+1}x) / x)`, answers: [`${i+1}`, "0", "1"], correct: `${i+1}`, explanation: "Použije se l'Hospitalovo pravidlo nebo známá limita lim (sin y / y) = 1." }));
QUIZ_BANK['vs_mat_la1'] = Array.from({ length: 20 }, (_, i) => ({ question: `Jaká je hodnost matice [[1, ${i+1}], [2, ${2*(i+1)}]]?`, answers: ["1", "2", "0"], correct: "1", explanation: "Druhý řádek je dvojnásobkem prvního, řádky jsou lineárně závislé." }));
QUIZ_BANK['vs_cj_ling'] = Array.from({ length: 20 }, (_, i) => ({ question: `Která hláska je alveolární vibrantou?`, answers: ["r", "l", "t"], correct: "r", explanation: "Typická výslovnost českého 'r'." }));
QUIZ_BANK['vs_cj_syntax'] = Array.from({ length: 20 }, (_, i) => ({ question: `Jaký typ syntaktického vztahu je mezi slovy 'zelený' a 'strom' ve spojení 'zelený strom'?`, answers: ["Kongruence", "Rekce", "Adjunce"], correct: "Kongruence", explanation: "Přídavné jméno se shoduje s podstatným jménem v rodě, čísle a pádě." }));

// Doplnění generovaných otázek pro zbylé kategorie, které nemají specifické otázky
(function fillMissingQuizBanks() {
    for (const levelKey in COURSE_DATA) {
        for (const courseKey in COURSE_DATA[levelKey]) {
            for (const gradeKey in COURSE_DATA[levelKey][courseKey].grades) {
                if (!QUIZ_BANK[gradeKey] || QUIZ_BANK[gradeKey].length === 0) { // Pouze pokud banka neexistuje nebo je prázdná
                    console.log(`Generating placeholder questions for ${gradeKey}`); // Log pro kontrolu
                    QUIZ_BANK[gradeKey] = Array.from({ length: 20 }, (_, i) => ({
                        question: `Generovaná otázka č. ${i + 1} pro ${COURSE_DATA[levelKey][courseKey].grades[gradeKey].title}`,
                        answers: ["Správná volba", "Špatná volba A", "Špatná volba B", "Špatná volba C"].sort(() => Math.random() - 0.5),
                        correct: "Správná volba",
                        explanation: `Toto je vysvětlení pro otázku z tématu: ${COURSE_DATA[levelKey][courseKey].grades[gradeKey].title}.`
                    }));
                }
            }
        }
    }
})();

// --- CERMAT: realistická sada 49 otázek pro matematiku (simulace reálných typů úloh)
QUIZ_BANK['cermat_matematika'] = [
    { question: 'Určete hodnotu výrazu: 3(2x - 5) = 27. Najděte x.', answers: ['x = 7', 'x = 6', 'x = 5', 'x = 8'], correct: 'x = 7', explanation: '3(2x-5)=27 → 2x-5=9 → 2x=14 → x=7.' },
    { question: 'Kolik řešení má soustava: x + y = 4 a 2x + 2y = 8?', answers: ['Neurčitě (infinitely many)', 'Žádné', 'Jedno', 'Dva'], correct: 'Neurčitě (infinitely many)', explanation: 'Druhá rovnice je 2× první, tedy nekonečně mnoho řešení.' },
    { question: 'Průměr čísel 6, 10 a k je 9. Najděte k.', answers: ['11', '12', '10', '9'], correct: '11', explanation: 'Průměr = (6+10+k)/3 = 9 → 16+k=27 → k=11.' },
    { question: 'V pravoúhlém trojúhelníku s odvěsnami 5 a 12 vypočtěte přeponu.', answers: ['13', '17', '12', '10'], correct: '13', explanation: 'Pythagoras: sqrt(5^2+12^2)=√169=13.' },
    { question: 'Vyjádřete poměr 45 : 60 ve zlomku v základním tvaru.', answers: ['3/4', '4/3', '9/12', '15/20'], correct: '3/4', explanation: '45:60 = 45/60 = 3/4.' },
    { question: 'Řešte nerovnici: 2x - 3 < 5.', answers: ['x < 4', 'x > 4', 'x < 1', 'x > 1'], correct: 'x < 4', explanation: '2x < 8 → x < 4.' },
    { question: 'Najděte hodnotu výrazu: (x^2 - 1)/(x - 1) pro x ≠ 1.', answers: ['x + 1', 'x - 1', '1', 'x'], correct: 'x + 1', explanation: 'Rozklad: x^2-1=(x-1)(x+1) → zkrácení.' },
    { question: 'Kolik procent je 30 z 150?', answers: ['20%', '30%', '15%', '25%'], correct: '20%', explanation: '30/150=0.2=20%.' },
    { question: 'Střed úsečky mezi body A(2, -1) a B(8, 5) je:', answers: ['(5,2)', '(4,2)', '(5,-2)', '(10,4)'], correct: '(5,2)', explanation: 'Střed: ((2+8)/2,(−1+5)/2)=(5,2).' },
    { question: 'Funkce f(x)=2x+3. Najděte f(−1).', answers: ['1', '−1', '−2', '5'], correct: '1', explanation: 'f(−1)=2(−1)+3=1.' },
    { question: 'Sčtěte čísla v rozmezí 1 až 10 (součet 1+2+...+10).', answers: ['55', '50', '45', '60'], correct: '55', explanation: 'Součet aritmetické posloupnosti n(n+1)/2 = 10·11/2 = 55.' },
    { question: 'Najděte rozměry obdélníku, pokud obvod je 30 a šířka je 7. Najděte délku.', answers: ['8', '7', '9', '6'], correct: '8', explanation: '2(l+7)=30 → l+7=15 → l=8.' },
    { question: 'Řešte rovnici: x^2 - 4 = 0.', answers: ['x = ±2', 'x = 2', 'x = -2', 'x = 0'], correct: 'x = ±2', explanation: 'x^2=4 → x=2 nebo x=-2.' },
    { question: 'Počet permutací 5 prvků (pořadí záleží) je:', answers: ['120', '25', '60', '720'], correct: '120', explanation: '5! = 120.' },
    { question: 'Najděte aritmetický průměr čísel 2, 4, 6, 8.', answers: ['5', '6', '4', '10'], correct: '5', explanation: 'Průměr = (2+4+6+8)/4 = 20/4 = 5.' },
    { question: 'Úhel v trojúhelníku je 90° a druhý úhel 30°. Třetí úhel je:', answers: ['60°', '30°', '90°', '45°'], correct: '60°', explanation: 'Součet úhlů je 180° → 180−90−30=60.' },
    { question: 'Řešte: 4x + 1 = 9.', answers: ['x = 2', 'x = 3', 'x = -2', 'x = 1'], correct: 'x = 2', explanation: '4x=8 → x=2.' },
    { question: 'Převod zlomku 3/5 na desetinné číslo je:', answers: ['0.6', '0.3', '0.5', '0.75'], correct: '0.6', explanation: '3 ÷ 5 = 0.6.' },
    { question: 'Objem krychle o hraně 3 je:', answers: ['27', '9', '18', '81'], correct: '27', explanation: 'V = a^3 = 27.' },
    { question: 'Rychlost auta 90 km/h kolik km ujede za 30 minut?', answers: ['45 km', '60 km', '30 km', '90 km'], correct: '45 km', explanation: '90 km/h = 1.5 km/min → 30 min × 1.5 = 45.' },
    { question: 'Řešte logickou úlohu: Pokud platí A ⇒ B a B ⇒ C, pak platí:', answers: ['A ⇒ C', 'C ⇒ A', 'A ⇒ B is false', 'No relation'], correct: 'A ⇒ C', explanation: 'Složením implikací.' },
    { question: 'Kolik je 7*12 - 5*6?', answers: ['54', '42', '66', '36'], correct: '54', explanation: '84 - 30 = 54.' },
    { question: 'Průměr souboru čísel: 4, 9, 6 je:', answers: ['6.333', '6', '7', '5'], correct: '6.333', explanation: 'Součet 19 / 3 ≈ 6.333.' },
    { question: 'V trojúhelníku je výška 10 a základna 8. Obsah je:', answers: ['40', '18', '80', '20'], correct: '40', explanation: 'S = 1/2 · base · height = 1/2·8·10 = 40.' },
    { question: 'Řešte rovnici: 3(x - 2) = 12.', answers: ['x = 6', 'x = 8', 'x = 2', 'x = 4'], correct: 'x = 6', explanation: '3x - 6 = 12 → 3x = 18 → x = 6.' },
    { question: 'Kolik různých dvojic (a,b) s a ≠ b lze vytvořit z množiny {1,2,3}?', answers: ['6', '3', '9', '2'], correct: '6', explanation: 'Pořadí důležité: 3×2 = 6.' },
    { question: 'Najděte nejmenší společný násobek (NSN) čísel 6 a 8.', answers: ['24', '48', '14', '12'], correct: '24', explanation: '24 je nejmenší číslo dělitelné 6 i 8.' },
    { question: 'Kolik čtverců 1×1 se vejde do obdélníku 3×4?', answers: ['12', '7', '9', '6'], correct: '12', explanation: '3×4 = 12.' },
    { question: 'Pokud funkce g(x)=x^2 a h(x)=x+1, najděte (g∘h)(2).', answers: ['9', '6', '8', '4'], correct: '9', explanation: 'h(2)=3 → g(3)=9.' },
    { question: 'Vypočítejte příklad na procenta: zvýšení z 50 na 75 je o kolik procent?', answers: ['50%', '25%', '75%', '33%'], correct: '50%', explanation: 'Změna 25 z 50 → 25/50 = 0.5 = 50%.' },
    { question: 'Najděte rovnici přímky procházející body (0,1) a (1,3).', answers: ['y = 2x + 1', 'y = x + 1', 'y = 3x + 1', 'y = x - 1'], correct: 'y = 2x + 1', explanation: 'Směrnice (3-1)/(1-0)=2, průsečík 1.' },
    { question: 'Řešte: 5x = 25.', answers: ['x = 5', 'x = 25', 'x = -5', 'x = 0'], correct: 'x = 5', explanation: 'x=25/5=5.' },
    { question: 'Průměr z 10 a 20 je:', answers: ['15', '12', '10', '20'], correct: '15', explanation: 'Average of 10 and 20 is 15.' },
    { question: 'Vektorové otázky: délka vektoru (3,4) je:', answers: ['5', '7', '1', '4'], correct: '5', explanation: '√(3²+4²)=5.' },
    { question: 'Kolik je 2^5?', answers: ['32', '16', '64', '10'], correct: '32', explanation: '2^5 = 32.' },
    { question: 'Obvod kruhu s poloměrem 7 je (π≈3.14):', answers: ['≈43.96', '≈21.99', '≈14', '≈3.14'], correct: '≈43.96', explanation: '2πr ≈ 2·3.14·7 ≈ 43.96.' },
    { question: 'Kolik je 15% z 200?', answers: ['30', '20', '15', '45'], correct: '30', explanation: '0.15×200=30.' },
    { question: 'Najděte k, pokud k*4 = 2k + 12.', answers: ['6', '4', '3', '12'], correct: '6', explanation: '4k-2k=12 → 2k=12 → k=6.' },
    { question: 'Počet kombinací výběru 2 z 4 (bez pořadí) je:', answers: ['6', '12', '8', '4'], correct: '6', explanation: 'C(4,2)=6.' },
    { question: 'Délka přepony pravoúhlého trojúhelníku s odvěsnami 9 a 12 je:', answers: ['15', '21', '12', '9'], correct: '15', explanation: '√(9²+12²)=√(81+144)=√225=15.' },
    { question: 'Řešte rovnici: x/3 + 2 = 5.', answers: ['x = 9', 'x = 6', 'x = 3', 'x = 12'], correct: 'x = 9', explanation: 'x/3=3 → x=9.' },
    { question: 'Jaká je střední hodnota (medián) souboru: 1,3,7,9,11?', answers: ['7', '6', '5', '9'], correct: '7', explanation: 'Pořadí: medián je prostřední prvek = 7.' },
    { question: 'Najděte dělitele čísla 36 (jedním z nich je):', answers: ['9', '7', '5', '11'], correct: '9', explanation: '9×4=36.' },
    { question: 'Kolik je 1000 ÷ 25?', answers: ['40', '25', '400', '20'], correct: '40', explanation: '1000/25=40.' },
    { question: 'Převod 0.125 na zlomek je:', answers: ['1/8', '1/4', '1/2', '3/8'], correct: '1/8', explanation: '0.125 = 125/1000 = 1/8.' },
    { question: 'Řešte rovnici kvadratickou: x^2 - 5x + 6 = 0.', answers: ['x = 2 nebo 3', 'x = -2 nebo -3', 'x = 1', 'x = 6'], correct: 'x = 2 nebo 3', explanation: 'Rozklad (x-2)(x-3)=0.' },
    { question: 'Pokud průměr kruhu je 10, jaký je poloměr?', answers: ['5', '10', '2', '20'], correct: '5', explanation: 'Poloměr = průměr/2 = 5.' },
    { question: 'Kolik sekund je v 2 hodinách?', answers: ['7200', '3600', '1800', '14400'], correct: '7200', explanation: '2×3600 = 7200.' },
    { question: 'Jaký je střední bod úsečky mezi (−2,0) a (2,0)?', answers: ['(0,0)', '(−2,0)', '(2,0)', '(−1,0)'], correct: '(0,0)', explanation: '((−2+2)/2,0)=(0,0).' },
    { question: 'Výsledek: 9·(2+3) =', answers: ['45', '27', '25', '9'], correct: '45', explanation: '9×5=45.' },
    { question: 'Které číslo je prvočíslem?', answers: ['17', '15', '21', '27'], correct: '17', explanation: '17 má pouze dělitele 1 a 17.' },
    { question: 'Kolik je 11×11?', answers: ['121', '111', '1210', '22'], correct: '121', explanation: '11×11=121.' },
    { question: 'Pokud je vektorem (1,2) pootočen o 90°, jeho délka zůstane:', answers: ['stejná', 'větší', 'menší', '0'], correct: 'stejná', explanation: 'Rotace nemění délku vektoru.' },
    { question: 'Výpočet obsahu kruhu se vzorcem S = πr^2. Pro r=3 je S≈', answers: ['28.26', '18.84', '9.42', '31.41'], correct: '28.26', explanation: 'π·3² ≈ 3.14·9 ≈ 28.26.' }
];


// --- NASTAVENÍ A TÉMA ---
function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme', !isDark);
    localStorage.setItem('themePreference', isDark ? 'dark' : 'light');
}

function loadTheme() {
    const preference = localStorage.getItem('themePreference');
    if (!document.body) return; 
    document.body.classList.remove('dark-theme', 'light-theme'); // Nejprve odstraníme obě třídy
    if (preference === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.add('light-theme'); // Výchozí je light
    }
}

function toggleSettings() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.style.width = sidebar.style.width === '280px' ? '0' : '280px';
}

// --- AUTENTIFIKACE ---
function getUsers() { return JSON.parse(localStorage.getItem('users')) || []; }
function saveUsers(users) { localStorage.setItem('users', JSON.stringify(users)); }

function showForm(formType) {
    const modal = document.getElementById('auth-modal');
    if (!modal) return;
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const authMessage = document.getElementById('auth-message');
    if (!loginForm || !registerForm || !authMessage) return; // Kontrola existence elementů

    loginForm.style.display = formType === 'login' ? 'block' : 'none';
    registerForm.style.display = formType === 'register' ? 'block' : 'none';
    authMessage.textContent = '';
    // show modal with fade
    if (modal) modal.classList.add('show');
}

function hideForms() {
    const modal = document.getElementById('auth-modal');
    if (modal) modal.classList.remove('show');
}

// No-op placeholder for starfield initialization. Kept to avoid runtime errors
// where ensureStarfield() calls remained after the background was removed.
function ensureStarfield() { /* intentionally empty */ }

// Generic modal helpers to keep show/hide consistent across the app
function showModal(id) {
    const m = document.getElementById(id);
    if (m) m.classList.add('show');
}

function hideModal(id) {
    const m = document.getElementById(id);
    if (m) m.classList.remove('show');
}

function handleRegister(event) {
    event.preventDefault();
    const jmenoInput = document.getElementById('register-jmeno');
    const emailInput = document.getElementById('register-email');
    const passwordInput = document.getElementById('register-password');
    const messageEl = document.getElementById('auth-message');
    if (!jmenoInput || !emailInput || !passwordInput || !messageEl) return; // Kontrola

    const jmeno = jmenoInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    
    let users = getUsers();
    const newUsername = jmeno.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');

    if (!jmeno || !email || !password) { messageEl.textContent = "Všechna pole jsou povinná."; return; }
    if (users.find(user => user.email === email)) { messageEl.textContent = "Uživatel s tímto emailem již existuje!"; return; }
    if (users.find(user => user.username === newUsername)) { messageEl.textContent = `Uživatelské jméno '${newUsername}' je již zabrané. Zvolte jiné jméno.`; return; }

    users.push({ 
        jmeno, email, password, username: newUsername, 
        profile: { nickname: jmeno, picture: '' },
        progress: { english: [] }, 
        friends: [] 
    });
    saveUsers(users);
    messageEl.textContent = "Registrace úspěšná! Můžete se přihlásit.";
    messageEl.style.color = "var(--color-accent)";
    setTimeout(() => showForm('login'), 1500);
}

function handleLogin(event) {
    event.preventDefault();
    const emailInput = document.getElementById('login-email');
    const passwordInput = document.getElementById('login-password');
    const messageEl = document.getElementById('auth-message');
    if (!emailInput || !passwordInput || !messageEl) return; // Kontrola

    const email = emailInput.value;
    const password = passwordInput.value;
    const users = getUsers();
    const userIndex = users.findIndex(u => u.email === email);
    
    if (userIndex === -1) { messageEl.textContent = "Email nebyl nalezen."; return; }
    
    const user = users[userIndex];
    if (user.password === password) {
        let updated = false;
        if (!user.profile) { user.profile = { nickname: user.jmeno, picture: '' }; updated = true; }
        if (!user.progress) { user.progress = { english: [] }; updated = true; }
        if (!user.friends) { user.friends = []; updated = true; }
        
        if (updated) {
            users[userIndex] = user;
            saveUsers(users);
        }

        localStorage.setItem('loggedInUser', JSON.stringify(user)); 
        // mark user online in status map
        const map = getStatusMap(); map[user.username] = 'online'; saveStatusMap(map);
        updateNav();
        hideForms();
    } else {
        messageEl.textContent = "Nesprávné heslo.";
    }
}

function logout() {
    const logged = JSON.parse(localStorage.getItem('loggedInUser'));
    if (logged && logged.username) {
        const map = getStatusMap(); map[logged.username] = 'offline'; saveStatusMap(map);
    }
    localStorage.removeItem('loggedInUser');
    updateNav();
    // refresh friends display in case profile modal is open
    if (document.getElementById('profile-modal')?.classList.contains('show')) displayFriends();
}

function updateNav() {
    const user = localStorage.getItem('loggedInUser');
    const authLink = document.getElementById('auth-link');
    const profileLink = document.getElementById('profile-nav-link');
    const logoutLink = document.getElementById('logout-link');

    // Kontrola existence všech elementů
    if(authLink && profileLink && logoutLink) { 
        authLink.style.display = user ? 'none' : 'inline-block';
        profileLink.style.display = user ? 'inline-block' : 'none';
        logoutLink.style.display = user ? 'inline-block' : 'none';
    }
}


function showForgotPasswordForm() {
    hideForms();
    const modal = document.getElementById('forgot-password-modal');
    if (!modal) return;
    const messageEl = document.getElementById('forgot-message');
    const emailInput = document.getElementById('forgot-email');
    if (messageEl) messageEl.textContent = '';
    if (emailInput) emailInput.value = '';
    if (modal) modal.classList.add('show');
}

function handleForgotPassword(event) {
    event.preventDefault();
    const emailInput = document.getElementById('forgot-email');
    const messageEl = document.getElementById('forgot-message');
    if (!emailInput || !messageEl) return; // Kontrola

    const email = emailInput.value;
    const userExists = getUsers().some(u => u.email === email); 
    if (userExists) {
        messageEl.textContent = `Instrukce pro obnovu hesla byly (jakože) odeslány na ${email}.`;
        messageEl.style.color = 'var(--color-accent)'; // Změna barvy pro úspěch
    } else {
        messageEl.textContent = `Uživatel s emailem ${email} nebyl nalezen.`;
        messageEl.style.color = 'var(--color-danger)';
    }
}


// --- VÝBĚR KURZU A KVÍZU ---
function openCourseModal(cardElement) {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const modal = document.getElementById('course-modal');
    const titleEl = document.getElementById('course-title');
    const detailsEl = document.getElementById('course-details');
    const warningEl = document.getElementById('auth-warning');
    const progressContainer = document.getElementById('english-progress-bar-container');

    if (!modal || !titleEl || !detailsEl || !warningEl || !progressContainer) return;

    // ensure background is present under UI
    ensureStarfield();

    const level = cardElement.getAttribute('data-level');
    const course = cardElement.getAttribute('data-course');

    // If user clicked Angličtina (Duolingo-style), redirect to dedicated page
    if (level === 'aj' && course === 'anglictina') {
        // make sure user is allowed
        if (!loggedInUser) {
            titleEl.textContent = "Přístup odepřen";
            detailsEl.innerHTML = "";
            warningEl.style.display = 'block';
            progressContainer.style.display = 'none';
            if (modal) modal.classList.add('show');
            return;
        }
        window.location.href = 'english.html';
        return;
    }

    // Special handling for CERMAT (these courses are not in COURSE_DATA)
    if (level === 'cermat') {
        // If user not logged in, show warning same as other courses
        if (!loggedInUser) {
            titleEl.textContent = "Přístup odepřen";
            detailsEl.innerHTML = "";
            warningEl.style.display = 'block';
            progressContainer.style.display = 'none';
            if (modal) modal.classList.add('show');
            return;
        }

        warningEl.style.display = 'none';

        // Prepare CERMAT questions (convert to standard QUIZ_BANK format)
        const cardTitle = cardElement.querySelector('h4')?.textContent || `${course} CERMAT`;
        let raw = [];
        if (course === 'matematika') {
            raw = [
                { q: "Kolik je 7 * 8?", a: ["54","56","64","58"], correct: 1, explanation: "Základní násobení." },
                { q: "Řešte rovnici: 2x + 3 = 11", a: ["4","5","6","7"], correct: 0, explanation: "2x = 8 => x = 4." },
                { q: "Jaký je průměr 10, 15, 20?", a: ["15","16","17","18"], correct: 0, explanation: "Součet 45 / 3 = 15." }
            ];
        } else if (course === 'cestina') {
            raw = [
                { q: "Které slovo je správně napsáno?", a: ["Být či nebýt","Byt či nebýt","Být či nebýtť","Bít či nebýt"], correct: 0, explanation: "Správná konvence psaní." },
                { q: "Vyber synonyma slova 'rychlý':", a: ["pomalý, líný","hned, svižný","rychlý, svižný","pomalu, rychle"], correct: 2, explanation: "Synonyma: rychlý - svižný." },
                { q: "Co je podmět ve větě: 'Pes běží v parku'?", a: ["Pes","běží","v parku","žádné"], correct: 0, explanation: "Podmět je 'Pes'." }
            ];
        }

        // Convert to unified format used by displayQuiz
        const converted = raw.map(item => ({
            question: item.q || item.question,
            answers: Array.isArray(item.a) ? item.a : (Array.isArray(item.answers) ? item.answers : []),
            correct: (Array.isArray(item.a) && typeof item.correct === 'number') ? item.a[item.correct] : item.correct || item.correctAnswer || '',
            explanation: item.explanation || ''
        }));

        // Set title and open quiz UI
        const quizTitleEl = document.getElementById('quiz-title');
        if (quizTitleEl) quizTitleEl.textContent = `${cardTitle} — CERMAT kvíz`;
        // Hide course modal and show quiz
        if (modal) modal.classList.remove('show');
        displayQuiz(converted);
        return;
    }

    // Non-CERMAT courses: existing behaviour
    if (!loggedInUser) {
        titleEl.textContent = "Přístup odepřen";
        detailsEl.innerHTML = "";
        warningEl.style.display = 'block';
        progressContainer.style.display = 'none';
        if (modal) modal.classList.add('show');
        return;
    }

    const courseInfo = COURSE_DATA[level]?.[course];
    if (!courseInfo || !courseInfo.grades) {
        console.error("Chyba: Data kurzu nenalezena nebo nekompletní pro", level, course);
        alert("Nastala chyba při načítání kurzu.");
        return;
    }

    CURRENT_COURSE.level = level;
    CURRENT_COURSE.course = course;

    titleEl.textContent = `Vyber úroveň pro: ${courseInfo.title}`;
    warningEl.style.display = 'none';

    let detailsHtml = '';
    const user = JSON.parse(loggedInUser);
    const completedEnglishLessons = user.progress?.english || [];
    let englishLessonsTotal = 0;
    let englishLessonsCompletedCount = 0;

    // Render grade/level list for the selected course
    if (courseInfo && courseInfo.grades) {
        detailsHtml += '<ul class="grade-selection-list">';
        for (const gradeId in courseInfo.grades) {
            if (Object.hasOwnProperty.call(courseInfo.grades, gradeId)) {
                const grade = courseInfo.grades[gradeId];
                if (!grade) continue;
                detailsHtml += `<li class="grade-item" onclick="startQuizForGrade('${gradeId}')"><h4>${grade.title || 'Neznámá lekce'}</h4><p>${grade.description || ''}</p></li>`;
            }
        }
        detailsHtml += '</ul>';
        detailsEl.innerHTML = detailsHtml;
        progressContainer.style.display = 'none';
    }

    if (modal) modal.classList.add('show');
}

// Generátor jednoduchých otázek pro anglické topicy (můžeš nahradit reálnými otázkami)
function generateTopicQuestions(topic) {
    const base = [];
    if (topic === 'family') {
        base.push({ question: "What is 'matka' in English?", answers: ["Mother","Father","Sister","Brother"], correct: "Mother", explanation: "Matka = Mother." });
        base.push({ question: "He is my ___ (bratr)", answers: ["sister","father","brother","mother"], correct: "brother", explanation: "Brother = bratr." });
    } else if (topic === 'daily') {
        base.push({ question: "I ___ to school every day.", answers: ["go","goes","gone","going"], correct: "go", explanation: "Use base form with I/you/we/they." });
        base.push({ question: "She ___ breakfast at 7.", answers: ["eat","eats","ate","eating"], correct: "eats", explanation: "Third person singular adds -s." });
    } else if (topic === 'food') {
        base.push({ question: "I would like a ___ of pizza.", answers: ["slice","slices","sliceing","sliced"], correct: "slice", explanation: "Countable: a slice of pizza." });
        base.push({ question: "Which is a vegetable?", answers: ["Apple","Carrot","Cake","Ice"], correct: "Carrot", explanation: "Carrot is a vegetable." });
    } else if (topic === 'travel') {
        base.push({ question: "How do you get to Prague?", answers: ["By plane","On foot","In the sea","By telepathy"], correct: "By plane", explanation: "Typical transport method." });
        base.push({ question: "Which phrase asks for directions?", answers: ["Where is the station?","I like trains.","It's raining.","Good night."], correct: "Where is the station?", explanation: "Asking for location." });
    } else if (topic === 'complex') {
        base.push({ question: "If I had more time, I ___ travel more.", answers: ["would","will","do","did"], correct: "would", explanation: "Second conditional uses would + base verb." });
        base.push({ question: "She said that she ___ the book.", answers: ["had read","has read","reads","read"], correct: "had read", explanation: "Reported speech uses past perfect for earlier action." });
    }
    // Duplicate / extend to reach 10 questions per topic by simple variations
    while(base.length < 10) {
        const sample = base[base.length % (base.length || 1)];
        base.push({ question: sample.question + ' (variant)', answers: sample.answers, correct: sample.correct, explanation: sample.explanation });
    }
    return base.slice(0,10);
}

// --- GENEROVANÉ 50 ANGLICKÝCH LEKCÍ (Duolingo-like) ---
// Rozdělení témat: 1-10 family, 11-20 daily, 21-30 food, 31-40 travel, 41-50 complex



function startQuizForGrade(gradeId) {
    CURRENT_COURSE.grade = gradeId;
    const allQuestions = QUIZ_BANK[gradeId] || [];
    if (allQuestions.length === 0) { alert("Pro tuto lekci/ročník bohužel zatím nemáme otázky."); return; }
    
    // Zajistíme výběr maximálně 20 otázek
    const selectedQuestions = allQuestions.sort(() => 0.5 - Math.random()).slice(0, 20); 
    
    const courseInfo = COURSE_DATA[CURRENT_COURSE.level]?.[CURRENT_COURSE.course];
    const gradeInfo = courseInfo?.grades?.[gradeId];
    const quizTitleEl = document.getElementById('quiz-title');

    if (!gradeInfo || !quizTitleEl) {
        alert("Chyba při načítání informací o kvízu.");
        return;
    }

    quizTitleEl.textContent = `Kvíz: ${gradeInfo.title}`;
    displayQuiz(selectedQuestions);
}


function displayQuiz(questions) {
    const quizModal = document.getElementById('quiz-modal');
    const quizContainer = document.getElementById('quiz-container');
    const resultsDiv = document.getElementById('quiz-results');
    const submitBtn = document.getElementById('submit-quiz-btn');

    if (!quizModal || !quizContainer || !resultsDiv || !submitBtn) return; 

    quizContainer.innerHTML = ''; 
    quizContainer.scrollTop = 0; 
    resultsDiv.style.display = 'none';
    submitBtn.style.display = 'block';
    submitBtn.disabled = false;
    submitBtn.textContent = 'Odeslat kvíz';
    
    questions.forEach((q, index) => {
        // Zajištění, že q.answers je pole
        const answersArray = Array.isArray(q.answers) ? q.answers : [];
        const shuffledAnswers = [...answersArray].sort(() => Math.random() - 0.5); 
        const answersHtml = shuffledAnswers.map(answer => `<label><input type="radio" name="question${index}" value="${answer}"> ${answer}</label>`).join('');
        quizContainer.innerHTML += `
            <div class="quiz-question" id="q-container-${index}">
                <p><strong>Otázka ${index + 1}:</strong> ${q.question || 'Chybí text otázky'}</p>
                <div class="answers">${answersHtml}</div>
                <div class="explanation-box" id="explanation-${index}"></div>
            </div>`;
    });

    // Skrytí modalu kurzu PŘED zobrazením kvízu
    const courseModal = document.getElementById('course-modal');
    if (courseModal) courseModal.classList.remove('show');

    // Ensure starfield is active behind modals/menu
    ensureStarfield();

    // Disable closing quiz until all questions are answered and submit pressed
    quizModal.dataset.locked = 'true';
    if (quizModal) quizModal.classList.add('show');
    submitBtn.onclick = () => submitQuiz(questions);
}


function submitQuiz(questions) {
    let score = 0;
    let answeredCount = 0;
    questions.forEach((q, index) => {
        const container = document.getElementById(`q-container-${index}`);
        const selected = container?.querySelector(`input[name="question${index}"]:checked`); // Bezpečnější výběr
        const explanationBox = document.getElementById(`explanation-${index}`);
        
        container?.querySelectorAll('input[type="radio"]').forEach(radio => radio.disabled = true);

        const correctValue = q.correct; 

        // Označování odpovědí
        const labels = container?.querySelectorAll('.answers label');
        labels?.forEach(label => {
            const input = label.querySelector('input');
            if (input?.value === correctValue) {
                label.classList.add('correct-answer'); // Vždy označ správnou
            }
            if (selected && input === selected && selected.value !== correctValue) {
                label.classList.add('incorrect-answer'); // Označ špatně vybranou
            }
        });

        if (selected) {
            answeredCount++;
            if (selected.value === correctValue) {
                score++;
            } 
        } 
        
        if (explanationBox) { // Zobrazit vysvětlení, pokud existuje
             explanationBox.innerHTML = `<strong>Správná odpověď: ${correctValue || 'N/A'}</strong>. ${q.explanation || ''}`;
             explanationBox.style.display = 'block';
        }
    });

    const resultsDiv = document.getElementById('quiz-results');
    if (resultsDiv) {
        const percentage = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;
        resultsDiv.innerHTML = `<h3>Vaše skóre: ${score} z ${questions.length} (${percentage}%)</h3>`;
        resultsDiv.style.display = 'block';
    }
    
    const submitBtn = document.getElementById('submit-quiz-btn');
    if (submitBtn) {
        submitBtn.disabled = true; 
        submitBtn.textContent = 'Kvíz dokončen';
    }

    if (CURRENT_COURSE.level === 'aj' && score / questions.length >= 0.7) { // Podmínka úspěchu 70%
        updateEnglishProgress(CURRENT_COURSE.grade);
    }

    // Unlock quiz modal after submission so it can be closed
    const quizModal = document.getElementById('quiz-modal');
    if (quizModal) quizModal.dataset.locked = 'false';
}

function closeQuiz() {
    const modal = document.getElementById('quiz-modal');
    if (!modal) return;
    // If modal is locked (quiz in progress), show confirm dialog instead of closing directly
    if (modal.dataset.locked === 'true') {
        showQuizExitConfirm();
        return;
    }
    modal.classList.remove('show');
}

// Intercept modal close clicks for quiz modal (also ensure clicking backdrop won't close quiz while locked)
document.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList && target.classList.contains('modal')) {
        // clicked backdrop
        if (target.id === 'quiz-modal' && target.dataset.locked === 'true') {
            e.stopPropagation();
            // ignore backdrop close
            return;
        }
    }
});

// Small helper to check all questions are answered and enable submit button
function checkAllAnswered() {
    const quizModal = document.getElementById('quiz-modal');
    if (!quizModal) return;
    const submitBtn = document.getElementById('submit-quiz-btn');
    const inputs = quizModal.querySelectorAll('.quiz-container input[type="radio"]');
    const questionCount = new Set(Array.from(inputs).map(i => i.name)).size;
    const answeredQuestions = new Set(Array.from(inputs).filter(i => i.checked).map(i => i.name)).size;
    // Enable submit only if answeredQuestions === number of distinct question names
    if (submitBtn) submitBtn.disabled = (answeredQuestions < questionCount || questionCount === 0);
}

// QUIZ EXIT CONFIRMATION HANDLERS
function showQuizExitConfirm() {
    const confirmModal = document.getElementById('quiz-exit-confirm-modal');
    if (confirmModal) confirmModal.classList.add('show');
}
function hideQuizExitConfirm() {
    const confirmModal = document.getElementById('quiz-exit-confirm-modal');
    if (confirmModal) confirmModal.classList.remove('show');
}
function confirmQuitQuiz() {
    // Force close quiz and clear any partial answers
    const quizModal = document.getElementById('quiz-modal');
    const quizContainer = document.getElementById('quiz-container');
    if (quizContainer) quizContainer.innerHTML = '';
    if (quizModal) {
        quizModal.dataset.locked = 'false';
        quizModal.classList.remove('show');
    }
    hideQuizExitConfirm();
}

// Observe changes in quiz container to update submit button state
const quizObserver = new MutationObserver(() => checkAllAnswered());
const quizRoot = document.getElementById('quiz-container');
if (quizRoot) quizObserver.observe(quizRoot, { childList: true, subtree: true });

// Enable interactive checking for radio clicks
document.addEventListener('change', (e) => {
    if (e.target && e.target.matches('.quiz-container input[type="radio"]')) {
        checkAllAnswered();
    }
});

// Lightweight background starfield canvas (bottom layer).
// background starfield removed per request

// --- ANGLIČTINA PROGRESS ---
function updateEnglishProgress(lessonId) {
    let users = getUsers();
    let currentUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!currentUser || !lessonId) return; 

    const userIndex = users.findIndex(u => u.email === currentUser.email);
    if (userIndex !== -1) {
        if (!users[userIndex].progress) users[userIndex].progress = { english: [] };
        if (!users[userIndex].progress.english) users[userIndex].progress.english = [];
        
        if (!users[userIndex].progress.english.includes(lessonId)) {
            users[userIndex].progress.english.push(lessonId);
            saveUsers(users);
            currentUser.progress = users[userIndex].progress; 
            localStorage.setItem('loggedInUser', JSON.stringify(currentUser));
            console.log(`Lekce ${lessonId} uložena jako splněná.`);
            // Znovuotevření modalu s kurzy pro aktualizaci zobrazení progressu
            const courseCard = document.querySelector(`.karta-kurzu[data-level="aj"][data-course="anglictina"]`);
          if (courseCard && !document.getElementById('course-modal').classList.contains('show')) { // Znovu otevřít jen pokud není kvíz aktivní
                 // Malá pauza před znovuotevřením, aby si uživatel všiml výsledku
                 setTimeout(() => openCourseModal(courseCard), 500); 
            }
            // Award XP for completing an English lesson
            awardXPToCurrentUser(10); // default 10 XP per lesson (can tune)
            showXPToast(10);
        }
    }
}

// XP / Level helpers
function getXPMap() { return JSON.parse(localStorage.getItem('xpMap') || '{}'); }
function saveXPMap(m) { localStorage.setItem('xpMap', JSON.stringify(m)); }
function awardXPToCurrentUser(amount) {
    if (!amount || amount <= 0) return;
    const logged = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!logged) return;
    const xpMap = getXPMap();
    xpMap[logged.username] = (xpMap[logged.username] || 0) + amount;
    saveXPMap(xpMap);
    // Also reflect in user object so profile shows updated level immediately
    let users = getUsers();
    const idx = users.findIndex(u => u.email === logged.email);
    if (idx !== -1) {
        users[idx].xp = xpMap[logged.username];
        saveUsers(users);
        logged.xp = xpMap[logged.username];
        localStorage.setItem('loggedInUser', JSON.stringify(logged));
    }
}

function showXPToast(amount) {
    const t = document.createElement('div');
    t.className = 'xp-toast';
    t.textContent = `+${amount} XP`;
    Object.assign(t.style, { position: 'fixed', right: '16px', top: '16px', background: '#1e7e34', color: '#eaffea', padding: '8px 12px', borderRadius: '6px', boxShadow: '0 4px 10px rgba(0,0,0,0.2)', zIndex: 9999 });
    document.body.appendChild(t);
    setTimeout(() => { t.style.opacity = '0'; t.style.transition = 'opacity 600ms'; }, 1400);
    setTimeout(() => t.remove(), 2200);
}

// --- PROFIL ---
// (Funkce showProfile, loadProfileData, saveProfile zůstávají stejné)
function showProfile() {
    loadProfileData();
    displayFriends();
    const modal = document.getElementById('profile-modal');
    if (modal) {
        modal.classList.add('show');
    }
}

function loadProfileData() {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!user) return;
    const profile = user.profile || { nickname: user.jmeno, picture: '' }; 
    const nicknameInput = document.getElementById('profile-nickname');
    const picPreview = document.getElementById('profile-pic-preview');
    if (nicknameInput) nicknameInput.value = profile.nickname || user.jmeno;
    if (picPreview) picPreview.src = profile.picture || 'https://via.placeholder.com/150/0000FF/FFFFFF?text=P';

    // Render level box
    const levelBox = document.getElementById('profile-level-box');
    if (levelBox) {
        const xpMap = getXPMap();
        const xp = xpMap[user.username] || user.xp || 0;
        const level = Math.floor(xp / 100) + 1; // example: every 100 XP = new level
        const next = level * 100;
        levelBox.innerHTML = `<div class="level-pill" style="background:#f0f4ff;padding:6px 10px;border-radius:8px;border:1px solid #d0d8ff;display:flex;align-items:center;gap:8px;">
            <strong>Level ${level}</strong>
            <small style="color:var(--text-secondary);">(${xp} XP)</small>
            <button class="btn-secondary" style="margin-left:8px;" onclick="showRankDetails(${xp}, ${next})">Zobrazit</button>
        </div>`;
    }
}

function showRankDetails(currentXp, nextThreshold) {
    const modal = document.getElementById('rank-details-modal');
    const body = document.getElementById('rank-details-body');
    if (!modal || !body) return;
    const needed = Math.max(0, nextThreshold - currentXp);
    body.innerHTML = `<p>Máte <strong>${currentXp} XP</strong>.</p>
        <p>Body do dalšího levelu: <strong>${needed} XP</strong></p>
        <p><a href="#" onclick="hideModal('rank-details-modal')">Zavřít</a></p>`;
    modal.classList.add('show');
}

function saveProfile() {
    const newNickname = document.getElementById('profile-nickname').value;
    const newPicSrc = document.getElementById('profile-pic-preview').src;
    let users = getUsers();
    let currentUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!currentUser) return; 
    const userIndex = users.findIndex(u => u.email === currentUser.email);

    if (userIndex !== -1) {
        if (!users[userIndex].profile) users[userIndex].profile = {}; 
        users[userIndex].profile.nickname = newNickname;
        users[userIndex].profile.picture = newPicSrc;
        saveUsers(users);
        currentUser.profile = users[userIndex].profile;
        localStorage.setItem('loggedInUser', JSON.stringify(currentUser));
        // show small in-modal confirmation (we'll use the new confirm modal to finalize)
        const mini = document.createElement('div');
        mini.className = 'mini-save-notice';
        mini.textContent = 'Profil byl aktualizován.';
        mini.style.position = 'fixed';
        mini.style.left = '50%';
        mini.style.top = '12%';
        mini.style.transform = 'translateX(-50%)';
        mini.style.background = 'var(--background-secondary)';
        mini.style.padding = '10px 16px';
        mini.style.borderRadius = '8px';
        mini.style.boxShadow = 'var(--hover-shadow)';
        document.body.appendChild(mini);
        setTimeout(() => { mini.remove(); }, 1800);
    } else {
        alert('Chyba při ukládání profilu.');
    }
}

// Show confirmation modal before saving profile
function showProfileConfirm() {
    const modal = document.getElementById('profile-confirm-modal');
    if (modal) modal.classList.add('show');
}

function hideProfileConfirm() {
    const modal = document.getElementById('profile-confirm-modal');
    if (modal) modal.classList.remove('show');
}

function confirmSaveProfile() {
    // call existing saveProfile function to perform save
    hideProfileConfirm();
    saveProfile();
    // close profile modal with fade
    const profileModal = document.getElementById('profile-modal');
    if (profileModal) profileModal.classList.remove('show');
}


// --- PŘÁTELÉ ---
function displayFriends() {
    const friendsListDiv = document.getElementById('friends-list');
    const currentUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!currentUser || !friendsListDiv) return;
    // Show actual friend list using registered users and a status map
    const friends = currentUser.friends || [];
    friendsListDiv.innerHTML = '';

    if (friends.length === 0) {
        friendsListDiv.innerHTML = '<p style="color: var(--text-secondary);">Zatím nemáte žádné přátele.</p>';
        return;
    }

    // Load all users to map friendly display names
    const allUsers = getUsers();
    const statusMap = getStatusMap(); // { username: 'online'|'offline' }

    friends.forEach(friend => {
        const item = document.createElement('div');
        item.className = 'friend-item';
        const userInfo = allUsers.find(u => u.username === friend.username) || { jmeno: friend.username, username: friend.username };
        const isOnline = statusMap[userInfo.username] === 'online' || false;
        const statusClass = isOnline ? 'online' : 'offline';
        const statusText = isOnline ? 'Online' : 'Offline';

        item.innerHTML = `
            <span>${userInfo.jmeno} (${userInfo.username})</span>
            <div>
                <span class="friend-status ${statusClass}">${statusText}</span>
                <button title="Otevřít chat" onclick="openChat('${userInfo.username}')">💬</button>
                <button title="Odebrat přítele" onclick="removeFriend('${userInfo.username}')">❌</button>
            </div>
        `;
        friendsListDiv.appendChild(item);
    });
}

function showAddFriend() {
    const modal = document.getElementById('add-friend-modal');
    const searchInput = document.getElementById('friend-search');
    const resultsDiv = document.getElementById('search-results');
    if (!modal || !searchInput || !resultsDiv) return;
    searchInput.value = '';
    resultsDiv.innerHTML = '';
    displayAllUsers(); 
    modal.classList.add('show');
}

function displayAllUsers() {
    const resultsDiv = document.getElementById('search-results');
    resultsDiv.innerHTML = ''; 
    const allUsers = getUsers();
    const currentUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!currentUser) return;

    const otherUsers = allUsers.filter(user => user.username !== currentUser.username);

    if (otherUsers.length === 0) {
        resultsDiv.innerHTML = '<p style="color: var(--text-secondary);">Nejsou registrováni žádní další uživatelé.</p>';
        return;
    }
    
    const currentUserFriendsUsernames = (currentUser.friends || []).map(f => f.username); // Jen username přátel

    otherUsers.forEach(user => {
        const item = document.createElement('div');
        item.className = 'search-result-item';
        
        let buttonHtml = `<button onclick="sendFriendRequest('${user.username}')">Přidat</button>`;
        if (currentUserFriendsUsernames.includes(user.username)) {
             // Zde bychom mohli rozlišit stavy 'pending' vs 'accepted', ale pro jednoduchost stačí 'Přidáno'
             buttonHtml = `<button disabled>Přidáno</button>`;
        }

        item.innerHTML = `
            <span>${user.jmeno} (${user.username})</span>
            ${buttonHtml}
        `;
        resultsDiv.appendChild(item);
    });
}


function searchUsers() {
    const searchTerm = document.getElementById('friend-search').value.toLowerCase();
    const resultsDiv = document.getElementById('search-results');
    resultsDiv.innerHTML = '';
    
    if (searchTerm.length === 0) { displayAllUsers(); return; }
    if (searchTerm.length < 1) return; // Umožníme hledání od 1 znaku

    const allUsers = getUsers();
    const currentUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!currentUser) return;
    
    const results = allUsers.filter(user => 
        user.username !== currentUser.username && 
        (user.username.toLowerCase().includes(searchTerm) || user.jmeno.toLowerCase().includes(searchTerm))
    );

    if (results.length === 0) {
        resultsDiv.innerHTML = '<p style="color: var(--text-secondary);">Nikdo nebyl nalezen.</p>';
        return;
    }
    
    const currentUserFriendsUsernames = (currentUser.friends || []).map(f => f.username);

    results.forEach(user => {
        const item = document.createElement('div');
        item.className = 'search-result-item';
        let buttonHtml = `<button onclick="sendFriendRequest('${user.username}')">Přidat</button>`;
        if (currentUserFriendsUsernames.includes(user.username)) {
             buttonHtml = `<button disabled>Přidáno</button>`;
        }
        item.innerHTML = `<span>${user.jmeno} (${user.username})</span> ${buttonHtml}`;
        resultsDiv.appendChild(item);
    });
}

function sendFriendRequest(targetUsername) {
    alert(`Žádost o přátelství byla (jakože) odeslána uživateli ${targetUsername}.`);
    let users = getUsers();
    let currentUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!currentUser) return;
    const userIndex = users.findIndex(u => u.email === currentUser.email);
    if (userIndex !== -1) {
         if (!users[userIndex].friends) users[userIndex].friends = [];
         if (!users[userIndex].friends.some(f => f.username === targetUsername)) {
             users[userIndex].friends.push({ username: targetUsername, status: 'pending_sent' }); 
             saveUsers(users);
             currentUser.friends = users[userIndex].friends;
             localStorage.setItem('loggedInUser', JSON.stringify(currentUser));
             
             // Aktualizace tlačítka v seznamu bez nutnosti nového hledání
             const searchButton = document.querySelector(`#search-results .search-result-item button[onclick="sendFriendRequest('${targetUsername}')"]`);
             if (searchButton) {
                 searchButton.textContent = 'Žádost odeslána';
                 searchButton.disabled = true;
                 searchButton.onclick = null; // Odstranit onclick
             }
             if(document.getElementById('profile-modal').classList.contains('show')) {
                 displayFriends();
             }
         }
    }
}

function removeFriend(username) {
    if (confirm(`Opravdu chcete odebrat ${username} z přátel?`)) {
         let users = getUsers();
         let currentUser = JSON.parse(localStorage.getItem('loggedInUser'));
          if (!currentUser) return;
         const userIndex = users.findIndex(u => u.email === currentUser.email);
         if (userIndex !== -1 && users[userIndex].friends) {
            users[userIndex].friends = users[userIndex].friends.filter(f => f.username !== username);
            saveUsers(users);
            currentUser.friends = users[userIndex].friends;
            localStorage.setItem('loggedInUser', JSON.stringify(currentUser));
            displayFriends(); 
            alert(`${username} byl odebrán.`);
         }
    }
}

// --- CHAT ---
let currentChatFriend = null;
function openChat(friendUsername) {
    currentChatFriend = friendUsername;
    const chatModal = document.getElementById('chat-modal');
    if (!chatModal) return;
    const chatNameEl = document.getElementById('chat-with-name');
    const messagesDiv = document.getElementById('chat-messages');
    const inputEl = document.getElementById('chat-input');
    if (!chatNameEl || !messagesDiv || !inputEl) return;

    const allUsers = getUsers();
    const friendInfo = allUsers.find(u => u.username === friendUsername) || { jmeno: friendUsername, username: friendUsername };
    chatNameEl.textContent = `Chat s ${friendInfo.jmeno} (${friendInfo.username})`;

    // Load stored conversation (key: convo_{user}_{friend})
    const logged = JSON.parse(localStorage.getItem('loggedInUser'));
    const myUsername = logged?.username;
    const convo = getConversation(myUsername, friendUsername);
    messagesDiv.innerHTML = '';
    if (convo && convo.length > 0) {
        convo.forEach(msg => {
            const p = document.createElement('p');
            p.textContent = `${msg.from === myUsername ? 'Já' : friendInfo.jmeno}: ${msg.text}`;
            p.style.textAlign = msg.from === myUsername ? 'right' : 'left';
            messagesDiv.appendChild(p);
        });
    } else {
        messagesDiv.innerHTML = `<p style="color: var(--text-secondary); text-align: center;"><i>Zde začíná konverzace.</i></p>`;
    }
    inputEl.value = '';
    chatModal.classList.add('show');
}

function sendChatMessage() {
     const input = document.getElementById('chat-input');
     const messagesDiv = document.getElementById('chat-messages');
     if (!input || !messagesDiv) return;
     const messageText = input.value.trim();
     if (messageText === '') return;

     const logged = JSON.parse(localStorage.getItem('loggedInUser'));
     const myUsername = logged?.username;
     if (!myUsername || !currentChatFriend) return;

     // Remove placeholder if present
     const initialMessage = messagesDiv.querySelector('p i');
     if(initialMessage) initialMessage.parentElement.remove();

     // Append to UI
     const messageElement = document.createElement('p');
     messageElement.textContent = `Já: ${messageText}`;
     messageElement.style.textAlign = 'right';
     messagesDiv.appendChild(messageElement);
     messagesDiv.scrollTop = messagesDiv.scrollHeight;

     // Persist message in conversation
     appendToConversation(myUsername, currentChatFriend, { from: myUsername, to: currentChatFriend, text: messageText, time: Date.now() });

     input.value = '';
}

// --- STATUS & CONVERSATIONS STORAGE HELPERS ---
function getStatusMap() {
    return JSON.parse(localStorage.getItem('statusMap') || '{}');
}
function saveStatusMap(map) {
    localStorage.setItem('statusMap', JSON.stringify(map));
}

function getConversation(userA, userB) {
    if (!userA || !userB) return [];
    const key = `convo_${[userA,userB].sort().join('__')}`;
    return JSON.parse(localStorage.getItem(key) || '[]');
}
function saveConversation(userA, userB, messages) {
    const key = `convo_${[userA,userB].sort().join('__')}`;
    localStorage.setItem(key, JSON.stringify(messages));
}
function appendToConversation(userA, userB, message) {
    const convo = getConversation(userA, userB) || [];
    convo.push(message);
    saveConversation(userA, userB, convo);
}

// --- INICIALIZACE A GLOBÁLNÍ LISTENERY ---
document.addEventListener('DOMContentLoaded', () => {
    loadTheme(); 
    updateNav(); 
    const profilePicUpload = document.getElementById('profile-pic-upload');
    if(profilePicUpload) {
        profilePicUpload.addEventListener('change', event => {
            if (event.target.files && event.target.files[0]) {
                const reader = new FileReader();
                reader.onload = e => { 
                    const preview = document.getElementById('profile-pic-preview');
                    if (preview) preview.src = e.target.result; 
                }
                reader.readAsDataURL(event.target.files[0]);
            }
        });
    }
});

// If navigated from english.html with selected lesson, start that lesson automatically
document.addEventListener('DOMContentLoaded', () => {
    const sel = localStorage.getItem('english_selected_lesson');
    if (!sel) return;
    localStorage.removeItem('english_selected_lesson');
    const logged = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!logged) { alert('Pro spuštění lekce se musíte přihlásit.'); return; }

    // generate a set of questions for the selected lesson
    // choose topic based on lesson number distribution
    const lessonMatch = sel.match(/aj_lesson_(\d+)/);
    const n = lessonMatch ? parseInt(lessonMatch[1], 10) : 1;
    let topic = 'family';
    if (n <= 10) topic = 'family';
    else if (n <= 20) topic = 'daily';
    else if (n <= 30) topic = 'food';
    else if (n <= 40) topic = 'travel';
    else topic = 'complex';

    const questions = generateTopicQuestions(topic).slice(0, 10).map((q) => ({ question: q.question, answers: q.answers, correct: q.correct, explanation: q.explanation }));

    // Set current course info for progress tracking
    CURRENT_COURSE.level = 'aj';
    CURRENT_COURSE.course = 'anglictina';
    CURRENT_COURSE.grade = sel;

    const quizTitleEl = document.getElementById('quiz-title');
    if (quizTitleEl) quizTitleEl.textContent = `Angličtina — Lekce ${n}`;
    displayQuiz(questions);
});

window.onclick = function(event) {
    const sidebar = document.getElementById('sidebar');
    const menuBtn = document.getElementById('menu-btn');
    if (sidebar && menuBtn && sidebar.style.width === '280px' && !sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
        toggleSettings();
    }
    if (event.target.classList && event.target.classList.contains('modal')) {
        // If quiz modal is locked, prevent backdrop click from closing it
        if (event.target.id === 'quiz-modal' && event.target.dataset.locked === 'true') {
            return;
        }
        event.target.classList.remove('show');
    }
}

// --- NOVÝ STATUS V PROFILU ---
// Při otevření profilu nastavíme select
function loadProfileStatus() {
    const statusSelect = document.getElementById('profile-status');
    if (!statusSelect) {
        const profileSection = document.querySelector('.profile-section');
        const selectHTML = `
            <label for="profile-status">Status:</label>
            <select id="profile-status">
                <option value="student">Student</option>
                <option value="teacher">Učitel</option>
                <option value="applicant">Uchazeč</option>
            </select>
        `;
        profileSection.insertAdjacentHTML('beforeend', selectHTML);
    }
    const savedStatus = localStorage.getItem('status') || 'student';
    document.getElementById('profile-status').value = savedStatus;
}

// Uložení statusu při ukládání profilu
const originalSaveProfile = saveProfile;
saveProfile = function() {
    const status = document.getElementById('profile-status').value;
    localStorage.setItem('status', status);
    if (originalSaveProfile) originalSaveProfile();
};

// --- NOVÝ CERMAT BOX VE VÝBĚRU KURZŮ ---
function addCermatCourse() {
    const courseSelection = document.querySelector('.course-selection');

    // vytvoření boxu podobně jako u ostatních
    const cermatGroupHTML = `
        <div class="course-group cermat-group">
            <h3>📝 CERMAT</h3>
            <div class="course-grid">
                <div class="course-card" data-level="cermat" data-course="matematika" onclick="openCourseModal(this)">
                    <span class="course-icon">📊</span>
                    <h4>Matematika CERMAT</h4>
                    <p>Příprava na maturitu podle CERMAT standardů.</p>
                </div>
                <div class="course-card" data-level="cermat" data-course="cestina" onclick="openCourseModal(this)">
                    <span class="course-icon">📝</span>
                    <h4>Český Jazyk CERMAT</h4>
                    <p>Příprava na maturitu z českého jazyka podle CERMAT.</p>
                </div>
            </div>
        </div>
    `;
    courseSelection.insertAdjacentHTML('beforeend', cermatGroupHTML);
}

// --- SPUŠTĚNÍ NA NAČTENÍ STRÁNKY ---
document.addEventListener('DOMContentLoaded', () => {
    loadProfileStatus();
    addCermatCourse();
});





// --- ÚPRAVA saveProfile ---
// Zavření profilu po uložení
const originalSaveProfile2 = saveProfile;
saveProfile = function() {
    const status = document.getElementById('profile-status').value;
    localStorage.setItem('status', status);
    if (originalSaveProfile2) originalSaveProfile2();

    // Zavřít modal
    const profileModal = document.getElementById('profile-modal');
    if(profileModal) profileModal.classList.remove('show');
};
