import pageLoad from "./pages/pageLoad";
import contact from "./pages/contact";

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
});

document.querySelector("#menu").addEventListener("click", () => {
    document.querySelector("section div").remove();
});

document.querySelector("#home").addEventListener("click", () => {
    document.querySelector("section div").remove();
    const main = document.createElement("div");
    main.textContent = "What do you call something that tastes like pasta, looks like pasta but isn’t pasta? An impasta.";
    main.classList.add("main");
    document.querySelector("section").appendChild(main);
});

