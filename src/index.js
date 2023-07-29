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


const contactButton = document.querySelector("#contact");
/* contactButton.addEventListener("click", contact); */