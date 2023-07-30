import pageLoad from "./pages/pageLoad";
import contact from "./pages/contact";
import menu from "./pages/menu";

pageLoad();

const disableButton = (() => {
    const btns = document.querySelectorAll("button");
    btns.forEach(btn => btn.addEventListener("click", () => {
    document.querySelectorAll("button").forEach(rem => rem.removeAttribute("disabled"));
    btn.setAttribute("disabled", "");
}));
})();


document.querySelector("#contact").addEventListener("click", () => {
    document.querySelector("section div").remove();
    contact();
    document.querySelector("footer").innerHTML = '<p>Background image by <a href="https://pixabay.com/users/pfüderi-199315/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2364221">Pfüderi</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2364221">Pixabay</a><p>';
});

document.querySelector("#menu").addEventListener("click", () => {
    document.querySelector("section div").remove();
    menu();
});

document.querySelector("#home").addEventListener("click", () => {
    document.querySelector("section div").remove();
    const main = document.createElement("div");
    main.textContent = "What do you call something that tastes like pasta, looks like pasta but isn’t pasta? An impasta.";
    main.classList.add("main");
    document.querySelector("section").appendChild(main);
    document.querySelector("footer").innerHTML = '<p>Background image by <a href="https://pixabay.com/users/pfüderi-199315/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2364221">Pfüderi</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2364221">Pixabay</a><p>';
});

