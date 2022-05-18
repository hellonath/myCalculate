// DOM
const touches = [...document.querySelectorAll('.bouton')];
/* console.log("------ console 1", touches); */
const listeKeycode = touches.map(touche => touche.dataset.key);
    /* console.log("------- console 2", touche); */
    /* console.log("------- console 3", touche.dataset.key); */

const ecran = document.querySelector('.ecran');
// console.log(listeKeycode);
/* Touche 6 : keycode 102 */


/* Dès qu'il y aura une touche qui sera appuyée un évènement sera affiché à l'écran */
document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString(); /* toString pr convertir en phrase */
    calculer(valeur);
    /* console.log(valeur, typeof valeur); typeof pr voir de quel type est la donnée valeur */
});


/* Dès qu'il y aura un clique sur une touche un évènement sera affiché à l'écran */
document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur);
});


/* Fonction calculer */
const calculer = (valeur) => {
    if (listeKeycode.includes(valeur)) {
        switch (valeur) {
            case '8':
                ecran.textContent = "";
                break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default: 
                const indexKeycode = listeKeycode.indexOf(valeur);
                const touche = touches[indexKeycode];
                ecran.textContent += touche.innerHTML;
        }
    }

};

window.addEventListener('error', (e) => {
    alert ('Une erreur est survenue dans votre calcul: ' + e.message)
})

