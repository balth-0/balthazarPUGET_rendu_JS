const start = document.querySelector("#start");
const timer = document.querySelector("#chrono");
const waldo = document.querySelector("#bout_waldo");
const result = document.querySelector("#regles");

let sec = 0;
let cent = 0;
let mill = 0;
let i = 0;

document.getElementById('chrono').innerHTML = `0${sec}` + ":" + `0${cent}`


waldo.style.top = `100px`;
waldo.style.left = `300px`;


start.addEventListener("click", () => {

    const y = Math.floor(Math.random() * window.innerHeight)
    waldo.style.top = `${y}px`
    const x = Math.floor(Math.random() * window.innerWidth)
    waldo.style.right = `${x}px`

});




const chrono = () => {

    setInterval(() => {
        mill++;
        if (mill > 9) {
            mill = 0;
        }
    }, 1);

    cent++;
    cent * 10;
    if (cent > 9) {
        cent = 0;
        sec++;
    }

    document.getElementById('chrono').innerHTML=
     sec < 10 ? `0${sec}` :
      ` ${sec}` + ":" + `${cent}${mill}`; // y'a une erreur qui fait que les cent et milli n'apparaissent qu'au parir de la 10 sec

    lancement = window.setTimeout("chrono();", 100);

    waldo.disabled = "";
    start.disabled = "disabled"

}






const touche = () => {

    window.clearTimeout(lancement); // pour arreter le timer
    result.innerHTML = " bravo tu as attrapé charlie en " + `${sec}` + "secondes et " + `${cent}${mill}` + "cent !!!!!";
    result.style.bold
    cent = 0;
    mill = 0;
    sec = 0;
    document.getElementById('chrono').innerHTML = `0${sec}` + ":" + `0${cent}`
    waldo.disabled = "disabled";
    start.disabled = ""
    waldo.style.top = `100px`;
   
}