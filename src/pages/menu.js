import lasagna from "../imgs/lasagna.jpg"
import spaghetti from "../imgs/spaghetti.jpg"
import gnocchi from "../imgs/gnocchi.jpg"
import ravioli from "../imgs/ravioli.jpg"

const insertLasagna = new Image();
insertLasagna.src = lasagna;
const insertSpaghetti = new Image();
insertSpaghetti.src = spaghetti;
const insertGnocchi = new Image();
insertGnocchi.src = gnocchi;
const insertRavioli = new Image();
insertRavioli.src = ravioli;

const menu = function () {
    const div = document.createElement("div");
    document.querySelector("section").appendChild(div);
    div.classList.add("menuDiv");

    const lasagnaDiv = document.createElement("div");
    div.appendChild(lasagnaDiv);
    lasagnaDiv.textContent = "Yummy Lasagna hmm 😋";
    lasagnaDiv.appendChild(insertLasagna);

    const spaghettiDiv = document.createElement("div");
    div.appendChild(spaghettiDiv);
    spaghettiDiv.textContent = "What’s the most relaxing type of pasta? Spa-ghetti";
    spaghettiDiv.appendChild(insertSpaghetti);

    const gnocchiDiv = document.createElement("div");
    div.appendChild(gnocchiDiv);
    gnocchiDiv.textContent = "Would you, would you eat this Gnocchi?";
    gnocchiDiv.appendChild(insertGnocchi);

    const ravioliDiv = document.createElement("div");
    div.appendChild(ravioliDiv);
    ravioliDiv.textContent = "Imagine if we ate Ravioli together 😳";
    ravioliDiv.appendChild(insertRavioli);

    const footer = document.querySelector("footer");
    footer.innerHTML = '<p>Lasagna image by <a href="https://pixabay.com/users/hansuan_fabregas-2902307/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7577748">HANSUAN FABREGAS</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7577748">Pixabay</a></p> <p>Spaghetti image by <a href="https://pixabay.com/users/joshuemd-230533/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=329521">joshuemd</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=329521">Pixabay</a></p> <p>Gnocchi image by <a href="https://pixabay.com/users/emma-pat-10852979/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5364564">Emma Pitti</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5364564">Pixabay</a></p> <p>Ravioli image by <a href="https://pixabay.com/users/sheprayedforhim-28828657/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7379303">Isco Mo</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7379303">Pixabay</a></p>'
}

export default menu;