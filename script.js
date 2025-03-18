let questions = [
    { question: "Quelle commande permet d'afficher du texte en C++ ?", answer: "cout", code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Bonjour, C++ !"; \n    return 0;\n}` },
    { question: "Quel type permet de stocker un nombre entier ?", answer: "int", code: `int nombre = 10;\ncout << "Le nombre est " << nombre;` },
    { question: "Quel mot-clé définit une variable décimale ?", answer: "float", code: `float pi = 3.14;\ncout << "La valeur de Pi est " << pi;` },
    { question: "Quel mot-clé est utilisé pour une boucle ?", answer: "for", code: `for(int i = 0; i < 5; i++) {\n    cout << "i = " << i << endl;\n}` },
    { question: "Comment définir une fonction en C++ ?", answer: "void", code: `void direBonjour() {\n    cout << "Bonjour !";\n}` }
];

let niveau = 0;
let score = 0;

function verifierCode() {
    let code = document.getElementById("codeInput").value.trim().toLowerCase();
    let message = document.getElementById("message");
    let exempleCode = document.getElementById("exempleCode");
    let question = document.getElementById("question");
    let scoreDisplay = document.getElementById("score");

    if (code === questions[niveau].answer) {
        score += 10;
        message.innerHTML = "✅ Bonne réponse ! " + questions[niveau].answer + " est correct !";
        message.style.color = "green";
        exempleCode.style.display = "block";
        exempleCode.innerText = questions[niveau].code;
        
        niveau++;
        if (niveau < questions.length) {
            setTimeout(() => {
                question.innerHTML = questions[niveau].question;
                document.getElementById("codeInput").value = "";
                exempleCode.style.display = "none";
            }, 3000);
        } else {
            message.innerHTML += "<br><br> 🎉 Félicitations ! Tu as complété tous les défis !";
        }
    } else {
        message.innerHTML = "❌ Mauvaise réponse, essaie encore !";
        message.style.color = "red";
    }

    scoreDisplay.innerHTML = "Score : " + score;
}