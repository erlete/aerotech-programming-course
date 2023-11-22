function innerHTMLSetter(elementID, templateName) {
    const element = document.getElementById(elementID);
    if (element) {
        element.innerHTML = Handlebars.templates[templateName]();
    }
}

function setCurrentYear() {
    const element = document.getElementById("current_year");
    if (element) {
        element.innerText = new Date().getFullYear();
    }
}

function main() {
    innerHTMLSetter("header", "header");
    innerHTMLSetter("footer", "footer");
    innerHTMLSetter("background", "background");
    setCurrentYear();
}

main();
