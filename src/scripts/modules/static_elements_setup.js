function setFooter() {
    const element = document.getElementById("footer");
    if (element) {
        element.outerHTML = Handlebars.templates.footer();
    }
}

function setCurrentYear() {
    const element = document.getElementById("current_year");
    if (element) {
        element.innerText = new Date().getFullYear();
    }
}

() => {
    setFooter();
    setCurrentYear();
}
