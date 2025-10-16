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

// --- MASIVNÍ BANKA OTÁZEK ---
const QUIZ_BANK = {
    // Angličtina
    'aj_a1': Array.from({ length: 20 }, (_, i) => ({ question: `Otázka ${i+1} pro AJ A1`, answers: ["Správná", "Špatná A", "Špatná B", "Špatná C"], correct: "Správná", explanation: "Vysvětlení pro AJ A1." })),
    'aj_a2': Array.from({ length: 20 }, (_, i) => ({ question: `Otázka ${i+1} pro AJ A2`, answers: ["Správná", "Špatná A", "Špatná B", "Špatná C"], correct: "Správná", explanation: "Vysvětlení pro AJ A2." })),
    'aj_b1': Array.from({ length: 20 }, (_, i) => ({ question: `Otázka ${i+1} pro AJ B1`, answers: ["Správná", "Špatná A", "Špatná B", "Špatná C"], correct: "Správná", explanation: "Vysvětlení pro AJ B1." })),
    'aj_b2': Array.from({ length: 20 }, (_, i) => ({ question: `Otázka ${i+1} pro AJ B2`, answers: ["Správná", "Špatná A", "Špatná B", "Špatná C"], correct: "Správná", explanation: "Vysvětlení pro AJ B2." })),
    // ZŠ Matematika
    'zs_mat_1': Array.from({ length: 20 }, (_, i) => ({ question: `Kolik je ${i % 5 + 1} + ${i % 4 + 1}?`, answers: [`${(i % 5 + 1) + (i % 4 + 1)}`, "10", "5", "3"], correct: `${(i % 5 + 1) + (i % 4 + 1)}`, explanation: "Základní sčítání do 10." })),
    'zs_mat_2_3': Array.from({ length: 20 }, (_, i) => ({ question: `Kolik je ${i % 9 + 2} x ${i % 8 + 2}?`, answers: [`${(i % 9 + 2) * (i % 8 + 2)}`, "100", "1", "0"], correct: `${(i % 9 + 2) * (i % 8 + 2)}`, explanation: "Procvičování násobilky." })),
    'zs_mat_4_5': Array.from({ length: 20 }, (_, i) => ({ question: `Převeď zlomek 1/${i%8+2} na desetinné číslo (zaokrouhleno).`, answers: [`${(1/(i%8+2)).toFixed(2)}`, "0.5", "1.0", "0.1"], correct: `${(1/(i%8+2)).toFixed(2)}`, explanation: "Dělení a převod na desetinná čísla." })),
    'zs_mat_6_7': Array.from({ length: 20 }, (_, i) => ({ question: `Kolik je ${i*5}% z 200?`, answers: [`${(i*5)/100 * 200}`, "100", "50", "200"], correct: `${(i*5)/100 * 200}`, explanation: "Výpočet procent." })),
    'zs_mat_8_9': Array.from({ length: 20 }, (_, i) => ({ question: `Vyřeš rovnici 2x + ${i+1} = ${11+i}`, answers: ["x = 5", "x = 10", "x = 2", "x = 1"], correct: "x = 5", explanation: "Základní lineární rovnice." })),
    // ZŠ Čeština
    'zs_cj_2_3': [
        { question: "Doplň y/i: b_l", answers: ["y", "i"], correct: "y", explanation: "Vyjmenované slovo BÝT." },
        { question: "Doplň y/i: m_šlenka", answers: ["y", "i"], correct: "y", explanation: "Vyjmenované slovo MYSLET." },
        // ... dalších 18 otázek
    ],
    // ... a tak dále pro všechny ostatní kategorie. Pro zjednodušení použiji generátor placeholderů.
};

// Funkce pro naplnění zbytku banky otázek placeholdery
(function fillQuizBank() {
    for (const levelKey in COURSE_DATA) {
        const level = COURSE_DATA[levelKey];
        for (const courseKey in level) {
            const course = level[courseKey];
            for (const gradeKey in course.grades) {
                if (!QUIZ_BANK[gradeKey]) {
                    QUIZ_BANK[gradeKey] = Array.from({ length: 20 }, (_, i) => ({
                        question: `Ukázková otázka č. ${i + 1} pro ${course.grades[gradeKey].title}`,
                        answers: ["Správná odpověď", "Špatná odpověď A", "Špatná odpověď B", "Špatná odpověď C"].sort(() => Math.random() - 0.5),
                        correct: "Správná odpověď",
                        explanation: `Toto je vysvětlení pro otázku z ${course.grades[gradeKey].title}.`
                    }));
                }
            }
        }
    }
})();


// --- NASTAVENÍ A TÉMA ---
function toggleTheme() { document.body.classList.toggle('dark-theme'); }
function toggleSettings() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.width = sidebar.style.width === '280px' ? '0' : '280px';
}


// --- AUTENTIFIKACE ---
function getUsers() { return JSON.parse(localStorage.getItem('users')) || []; }
function saveUsers(users) { localStorage.setItem('users', JSON.stringify(users)); }

function showForm(formType) {
    const modal = document.getElementById('auth-modal');
    document.getElementById('login-form').style.display = formType === 'login' ? 'block' : 'none';
    document.getElementById('register-form').style.display = formType === 'register' ? 'block' : 'none';
    document.getElementById('auth-message').textContent = ''; 
    modal.style.display = 'flex';
}

function hideForms() { document.getElementById('auth-modal').style.display = 'none'; }

function handleRegister(event) {
    event.preventDefault();
    const jmeno = document.getElementById('register-jmeno').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const messageEl = document.getElementById('auth-message');
    
    let users = getUsers();
    const newUsername = jmeno.toLowerCase().replace(/\s/g, '_');

    if (users.find(user => user.email === email)) {
        messageEl.textContent = "Uživatel s tímto emailem již existuje!"; return;
    }
    if (users.find(user => user.username === newUsername)) {
        messageEl.textContent = "Toto uživatelské jméno je již zabrané."; return;
    }

    users.push({ jmeno, email, password, username: newUsername, profile: { nickname: jmeno, picture: '' } });
    saveUsers(users);
    messageEl.textContent = "Registrace úspěšná! Můžete se přihlásit.";
    messageEl.style.color = "var(--color-accent)";
    setTimeout(() => showForm('login'), 1500);
}

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const messageEl = document.getElementById('auth-message');
    
    const users = getUsers();
    const user = users.find(u => u.email === email);
    
    if (!user) { messageEl.textContent = "Email nebyl nalezen."; return; }
    if (user.password === password) {
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
    document.getElementById('auth-link').style.display = user ? 'none' : 'inline-block';
    document.getElementById('profile-nav-link').style.display = user ? 'inline-block' : 'none';
    document.getElementById('logout-link').style.display = user ? 'inline-block' : 'none';
}


// --- VÝBĚR KURZU A KVÍZU ---
function openCourseModal(cardElement) {
    if (!localStorage.getItem('loggedInUser')) {
        const modal = document.getElementById('course-modal');
        document.getElementById('course-title').textContent = "Přístup odepřen";
        document.getElementById('course-details').innerHTML = "";
        document.getElementById('auth-warning').style.display = 'block';
        modal.style.display = 'flex';
        return;
    }

    const level = cardElement.getAttribute('data-level');
    const course = cardElement.getAttribute('data-course');
    const courseInfo = COURSE_DATA[level]?.[course];
    
    if (!courseInfo) return;

    CURRENT_COURSE.level = level;
    CURRENT_COURSE.course = course;

    const modal = document.getElementById('course-modal');
    document.getElementById('course-title').textContent = `Vyber úroveň pro: ${courseInfo.title}`;
    document.getElementById('auth-warning').style.display = 'none';

    let detailsHtml = '<ul class="grade-selection-list">';
    for (const gradeId in courseInfo.grades) {
        const grade = courseInfo.grades[gradeId];
        detailsHtml += `
            <li class="grade-item" onclick="startQuizForGrade('${gradeId}')">
                <h4>${grade.title}</h4>
                <p>${grade.description}</p>
            </li>
        `;
    }
    detailsHtml += '</ul>';
    
    document.getElementById('course-details').innerHTML = detailsHtml;
    modal.style.display = 'flex';
}

function startQuizForGrade(gradeId) {
    CURRENT_COURSE.grade = gradeId;
    const allQuestions = QUIZ_BANK[gradeId] || [];

    if (allQuestions.length === 0) {
        alert("Pro tento ročník bohužel zatím nemáme otázky.");
        return;
    }
    
    // Náhodný výběr 20 otázek
    const selectedQuestions = allQuestions.sort(() => 0.5 - Math.random()).slice(0, 20);
    
    const courseInfo = COURSE_DATA[CURRENT_COURSE.level][CURRENT_COURSE.course];
    const gradeInfo = courseInfo.grades[gradeId];

    document.getElementById('quiz-title').textContent = `Kvíz: ${gradeInfo.title}`;
    displayQuiz(selectedQuestions);
}

function displayQuiz(questions) {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';
    document.getElementById('quiz-results').style.display = 'none';
    document.getElementById('submit-quiz-btn').style.display = 'block';
    
    questions.forEach((q, index) => {
        const answersHtml = q.answers.map(answer => `<label><input type="radio" name="question${index}" value="${answer}"> ${answer}</label>`).join('');
        quizContainer.innerHTML += `
            <div class="quiz-question" id="q-container-${index}">
                <p><strong>Otázka ${index + 1}:</strong> ${q.question}</p>
                <div class="answers" style="display: flex; flex-direction: column;">${answersHtml}</div>
                <div class="explanation-box" id="explanation-${index}"></div>
            </div>`;
    });

    document.getElementById('course-modal').style.display = 'none';
    document.getElementById('quiz-modal').style.display = 'flex';
    document.getElementById('submit-quiz-btn').onclick = () => submitQuiz(questions);
}

function submitQuiz(questions) {
    let score = 0;
    questions.forEach((q, index) => {
        const container = document.getElementById(`q-container-${index}`);
        const selected = container.querySelector(`input[name="question${index}"]:checked`);
        const explanationBox = document.getElementById(`explanation-${index}`);

        if (selected?.value === q.correct) {
            score++;
            container.querySelector('p').classList.add('correct-answer');
        } else {
            container.querySelector('p').classList.add('incorrect-answer');
        }
        
        explanationBox.innerHTML = `<strong>Správná odpověď: ${q.correct}</strong>. ${q.explanation}`;
        explanationBox.style.display = 'block';
    });
    document.getElementById('quiz-results').innerHTML = `<h3>Vaše skóre: ${score} z ${questions.length}</h3>`;
    document.getElementById('quiz-results').style.display = 'block';
    document.getElementById('submit-quiz-btn').style.display = 'none';
}

function closeQuiz() { document.getElementById('quiz-modal').style.display = 'none'; }


// --- PROFIL ---
function showProfile() {
    loadProfileData();
    document.getElementById('profile-modal').style.display = 'flex';
}

function loadProfileData() {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!user || !user.profile) return;
    document.getElementById('profile-nickname').value = user.profile.nickname || user.jmeno;
    document.getElementById('profile-pic-preview').src = user.profile.picture || 'https://via.placeholder.com/150/0000FF/FFFFFF?text=P';
}

function saveProfile() {
    const newNickname = document.getElementById('profile-nickname').value;
    const newPicSrc = document.getElementById('profile-pic-preview').src;
    
    let users = getUsers();
    let currentUser = JSON.parse(localStorage.getItem('loggedInUser'));
    const userIndex = users.findIndex(u => u.email === currentUser.email);

    if (userIndex !== -1) {
        users[userIndex].profile = { nickname: newNickname, picture: newPicSrc };
        saveUsers(users);
        localStorage.setItem('loggedInUser', JSON.stringify(users[userIndex]));
        alert('Profil aktualizován!');
        document.getElementById('profile-modal').style.display = 'none';
    }
}

// --- INICIALIZACE A LISTENERY ---
document.addEventListener('DOMContentLoaded', () => {
    updateNav();
    document.getElementById('profile-pic-upload').addEventListener('change', event => {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = e => { document.getElementById('profile-pic-preview').src = e.target.result; }
            reader.readAsDataURL(event.target.files[0]);
        }
    });
});

window.onclick = function(event) {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.width === '280px' && !sidebar.contains(event.target) && !document.getElementById('menu-btn').contains(event.target)) {
        toggleSettings();
    }
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}