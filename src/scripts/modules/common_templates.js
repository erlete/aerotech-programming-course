function setNavigationButtons(previous_page_link, next_page_link, element_id = "navigation_buttons") {
    let template = Handlebars.templates.navigation_buttons;
    document.getElementById(element_id).outerHTML = template({
        previous_page_link: previous_page_link,
        next_page_link: next_page_link
    });
}

export { setNavigationButtons };

