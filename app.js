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
QUIZ_BANK['zs_cj_8_9'] = Array.from({ length: 20 }, (_, i) => ({ question: `Jaký druh vedlejší věty je v souvětí 'Řekl, ${["že přijde", "aby přišel", "kdo přijde", "kdy přijde", "kde byl"][i%5]}?'`, answers: ["předmětná", "podmětná", "příslovečná účelová", "přívlastková"], correct: ["předmětná", "předmětná", "předmětná", "předmětná", "předmětná"][i%5], explanation: "Ptáme se 'Řekl koho, co?' - otázka 4. pádu určuje větu předmětnou." }));
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
    modal.style.display = 'flex';
}

function hideForms() { 
    const modal = document.getElementById('auth-modal');
    if (modal) modal.style.display = 'none'; 
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
        updateNav();
        hideForms();
    } else {
        messageEl.textContent = "Nesprávné heslo.";
    }
}

function logout() { localStorage.removeItem('loggedInUser'); updateNav(); }

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
    modal.style.display = 'flex';
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

    if (!loggedInUser) {
        titleEl.textContent = "Přístup odepřen";
        detailsEl.innerHTML = "";
        warningEl.style.display = 'block';
        progressContainer.style.display = 'none';
        modal.style.display = 'flex';
        return;
    }

    const level = cardElement.getAttribute('data-level');
    const course = cardElement.getAttribute('data-course');
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

    let detailsHtml = '<ul class="grade-selection-list">';
    const user = JSON.parse(loggedInUser);
    const completedEnglishLessons = user.progress?.english || [];
    let englishLessonsTotal = 0;
    let englishLessonsCompletedCount = 0;

    for (const gradeId in courseInfo.grades) {
        if (Object.hasOwnProperty.call(courseInfo.grades, gradeId)) {
            const grade = courseInfo.grades[gradeId];
            if (!grade) continue; 

            let completedClass = '';
            if (level === 'aj') {
                englishLessonsTotal++;
                if (completedEnglishLessons.includes(gradeId)) {
                    completedClass = 'completed'; 
                    englishLessonsCompletedCount++;
                }
            }
            detailsHtml += `<li class="grade-item ${completedClass}" onclick="startQuizForGrade('${gradeId}')"><h4>${grade.title || 'Neznámá lekce'}</h4><p>${grade.description || ''}</p></li>`;
        }
    }
    detailsHtml += '</ul>';
    detailsEl.innerHTML = detailsHtml;

    if (level === 'aj') {
        const progressBar = document.getElementById('english-progress-bar');
        const progressText = document.getElementById('english-progress-text');
        if (progressBar && progressText) { // Kontrola existence elementů
            const percentage = englishLessonsTotal > 0 ? Math.round((englishLessonsCompletedCount / englishLessonsTotal) * 100) : 0;
            progressBar.value = percentage;
            progressBar.max = 100; // Zajistit, že max je 100
            progressText.textContent = `${percentage}% (${englishLessonsCompletedCount} / ${englishLessonsTotal} lekcí)`;
            progressContainer.style.display = 'block';
        } else {
             progressContainer.style.display = 'none';
        }
    } else {
        progressContainer.style.display = 'none';
    }

    modal.style.display = 'flex';
}


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
    if (courseModal) courseModal.style.display = 'none'; 

    quizModal.style.display = 'flex';
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
}

function closeQuiz() { 
    const modal = document.getElementById('quiz-modal');
    if (modal) modal.style.display = 'none'; 
}

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
            if(courseCard && document.getElementById('course-modal').style.display === 'none') { // Znovu otevřít jen pokud není kvíz aktivní
                 // Malá pauza před znovuotevřením, aby si uživatel všiml výsledku
                 setTimeout(() => openCourseModal(courseCard), 500); 
            }
        }
    }
}

// --- PROFIL ---
// (Funkce showProfile, loadProfileData, saveProfile zůstávají stejné)
function showProfile() {
    loadProfileData();
    displayFriends();
    const modal = document.getElementById('profile-modal');
    if (modal) modal.style.display = 'flex';
}

function loadProfileData() {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!user) return;
    const profile = user.profile || { nickname: user.jmeno, picture: '' }; 
    const nicknameInput = document.getElementById('profile-nickname');
    const picPreview = document.getElementById('profile-pic-preview');
    if (nicknameInput) nicknameInput.value = profile.nickname || user.jmeno;
    if (picPreview) picPreview.src = profile.picture || 'https://via.placeholder.com/150/0000FF/FFFFFF?text=P';
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
        alert('Profil aktualizován!');
    } else {
        alert('Chyba při ukládání profilu.');
    }
}


// --- PŘÁTELÉ (Simulace) ---
function displayFriends() {
    const friendsListDiv = document.getElementById('friends-list');
    const currentUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!currentUser || !friendsListDiv) return;

    const friends = currentUser.friends || [];
    friendsListDiv.innerHTML = ''; 

    if (friends.length === 0) {
        friendsListDiv.innerHTML = '<p style="color: var(--text-secondary);">Zatím nemáte žádné přátele.</p>';
        return;
    }

    friends.forEach(friend => {
        const item = document.createElement('div');
        item.className = 'friend-item';
        const isOnline = Math.random() < 0.3; 
        const statusClass = isOnline ? 'online' : 'offline';
        const statusText = isOnline ? 'Online' : 'Offline';

        item.innerHTML = `
            <span>${friend.username}</span>
            <div>
                <span class="friend-status ${statusClass}">${statusText}</span>
                <button title="Otevřít chat (simulace)" onclick="openChat('${friend.username}')">💬</button>
                <button title="Odebrat přítele (simulace)" onclick="removeFriend('${friend.username}')">❌</button>
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
    modal.style.display = 'flex';
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
             if(document.getElementById('profile-modal').style.display === 'flex') {
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

// --- CHAT (Simulace) ---
let currentChatFriend = null;
function openChat(friendUsername) {
    currentChatFriend = friendUsername;
    const chatModal = document.getElementById('chat-modal');
    if (!chatModal) return;
    const chatNameEl = document.getElementById('chat-with-name');
    const messagesDiv = document.getElementById('chat-messages');
    const inputEl = document.getElementById('chat-input');
    if (!chatNameEl || !messagesDiv || !inputEl) return;

    chatNameEl.textContent = `Chat s ${friendUsername}`;
    messagesDiv.innerHTML = `<p style="color: var(--text-secondary); text-align: center;"><i>Toto je pouze simulace chatu. Zprávy se neukládají ani neodesílají.</i></p>`;
    inputEl.value = '';
    chatModal.style.display = 'flex';
}

function sendChatMessage() {
     const input = document.getElementById('chat-input');
     const messagesDiv = document.getElementById('chat-messages');
     if (!input || !messagesDiv) return;
     const messageText = input.value.trim();
     if (messageText === '') return;

     const messageElement = document.createElement('p');
     messageElement.textContent = `Já: ${messageText}`;
     messageElement.style.textAlign = 'right'; 
     
     const initialMessage = messagesDiv.querySelector('p i');
     if(initialMessage) initialMessage.parentElement.remove();

     messagesDiv.appendChild(messageElement);
     input.value = '';
     messagesDiv.scrollTop = messagesDiv.scrollHeight;

     setTimeout(() => {
         const replyElement = document.createElement('p');
         replyElement.textContent = `${currentChatFriend}: Ok! (simulovaná odpověď)`;
         replyElement.style.textAlign = 'left';
         messagesDiv.appendChild(replyElement);
         messagesDiv.scrollTop = messagesDiv.scrollHeight;
     }, 1500);
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

window.onclick = function(event) {
    const sidebar = document.getElementById('sidebar');
    const menuBtn = document.getElementById('menu-btn');
    if (sidebar && menuBtn && sidebar.style.width === '280px' && !sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
        toggleSettings();
    }
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}
