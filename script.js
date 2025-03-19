let currentLesson = 0;
let lessons = [];

// Charger les leçons dynamiquement depuis une API (à remplacer par une API réelle)
fetch("https://api.example.com/cpp-lessons") // Remplacer par une API réelle
    .then(response => response.json())
    .then(data => {
        lessons = data;
        afficherLecon();
    })
    .catch(error => console.error("Erreur de chargement des leçons :", error));

function afficherLecon() {
    if (currentLesson < lessons.length) {
        document.getElementById("lessonTitle").innerText = lessons[currentLesson].title;
        document.getElementById("lessonContent").innerText = lessons[currentLesson].content;

        if (lessons[currentLesson].code) {
            document.getElementById("lessonCode").style.display = "block";
            document.getElementById("lessonCode").innerText = lessons[currentLesson].code;
        } else {
            document.getElementById("lessonCode").style.display = "none";
        }
    } else {
        document.getElementById("lessonTitle").innerText = "🎉 Bravo !";
        document.getElementById("lessonContent").innerText = "Tu as complété toutes les leçons !";
        document.getElementById("lessonCode").style.display = "none";
        document.getElementById("nextLesson").style.display = "none";
    }
}

function prochaineLecon() {
    currentLesson++;
    afficherLecon();
}

function afficherLecons() {
    alert("📖 Fonctionnalité en cours de développement !");
}

function afficherExercices() {
    alert("📝 Fonctionnalité en cours de développement !");
}

function afficherProgression() {
    alert("🏆 Fonctionnalité en cours de développement !");
}