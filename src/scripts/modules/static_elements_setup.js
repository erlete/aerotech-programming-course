function outerHTMLSetter(elementID, templateName) {
    const element = document.getElementById(elementID);
    if (element) {
        element.outerHTML = Handlebars.templates[templateName]();
    }
}

function setCurrentYear() {
    const element = document.getElementById("current_year");
    if (element) {
        element.innerText = new Date().getFullYear();
    }
}

function main() {
    outerHTMLSetter("header", "header");
    outerHTMLSetter("footer", "footer");
    setCurrentYear();
}

main();
