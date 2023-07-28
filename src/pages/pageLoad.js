const pageLoad = function (){
    const content = document.querySelector("#content");
    const header = document.createElement("header");
    const main = document.createElement("section");
    const footer = document.createElement("footer");
    const div = document.createElement("div");
    div.classList.add("main");

    header.textContent = "Spastalleto";
    div.textContent = "What do you call something that tastes like pasta, looks like pasta but isn’t pasta? An impasta."
    /* main.textContent = "main"; */
    footer.innerHTML = '<p>Image by <a href="https://pixabay.com/users/pfüderi-199315/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2364221">Pfüderi</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2364221">Pixabay</a><p>';

    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer);
    main.appendChild(div);
}

export default pageLoad;