const contact = function () {
    const div = document.createElement("div");
    document.querySelector("section").appendChild(div);
    div.classList.add("contactDiv");
    div.innerHTML = "<h1>Contact us</h1> <ul><li>+12 012 91234-5678</li> <li>spastalletoemail@realemail.com</li> <li>Piazza del Duomo, 56126 Pisa PI, Italy</li></ul>";
}

export default contact;