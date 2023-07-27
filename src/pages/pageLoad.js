const pageLoad = function (){
    const content = document.querySelector("#content");
    const header = document.createElement("header");
    const main = document.createElement("section");
    const footer = document.createElement("footer");

    header.textContent = "header";
    main.textContent = "main";
    footer.textContent = "footer";

    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer);
}

export default pageLoad;