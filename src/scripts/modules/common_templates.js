function setNavigationButtons(previousPageLink, nextPageLink, elementID = "navigation_buttons") {
    let template = Handlebars.templates.navigation_buttons;
    document.getElementById(elementID).outerHTML = template({
        previous_page_link: previousPageLink,
        next_page_link: nextPageLink
    });
}
