const menu = function () {
    const div = document.createElement("div");
    document.querySelector("section").appendChild(div);
    div.classList.add("menuDiv");
    div.innerHTML = '<div><img src="../src/imgs/lasagna.jpg" alt="lasagna">Yummy Lasagna hmm 😋</div> <div><img src="../src/imgs/spaghetti.jpg" alt="spaghetti">What’s the most relaxing type of pasta? Spa-ghetti</div> <div><img src="../src/imgs/gnocchi.jpg" alt="gnocchi">Would you, would you eat this Gnocchi?</div> <div><img src="../src/imgs/ravioli.jpg" alt="ravioli">Imagine if we ate Ravioli together 😳</div>'

    const footer = document.querySelector("footer");
    footer.innerHTML = '<p>Lasagna image by <a href="https://pixabay.com/users/hansuan_fabregas-2902307/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7577748">HANSUAN FABREGAS</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7577748">Pixabay</a></p> <p>Spaghetti image by <a href="https://pixabay.com/users/joshuemd-230533/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=329521">joshuemd</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=329521">Pixabay</a></p> <p>Gnocchi image by <a href="https://pixabay.com/users/emma-pat-10852979/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5364564">Emma Pitti</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5364564">Pixabay</a></p> <p>Ravioli image by <a href="https://pixabay.com/users/sheprayedforhim-28828657/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7379303">Isco Mo</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7379303">Pixabay</a></p>'
}

export default menu;