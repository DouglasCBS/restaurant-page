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
    footer.textContent = "Photo by Pixabay: https://www.pexels.com/photo/yellow-pasta-beside-onions-47306/";

    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer);
    main.appendChild(div);
}

export default pageLoad;