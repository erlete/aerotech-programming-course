function setNavigationButtons(previousPageLink, nextPageLink, elementID = "navigation_buttons") {
    let template = Handlebars.templates.navigation_buttons;
    document.getElementById(elementID).innerHTML = template({
        previous_page_link: previousPageLink,
        next_page_link: nextPageLink
    });
}

function setTitle(title, subtitle, elementID = "title") {
    let template = Handlebars.templates.title;
    document.getElementById(elementID).innerHTML = template({
        title: title,
        subtitle: subtitle
    });
}

export { setNavigationButtons, setTitle };

