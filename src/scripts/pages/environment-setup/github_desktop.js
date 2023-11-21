import { setNavigationButtons } from "/scripts/modules/common_templates.js";

setNavigationButtons("/environment-setup/visual-studio-code.html", "/");

const stepSlider = {
    name: "GitHub Desktop",
    download_description: `Head to <a href="https://desktop.github.com" target="_blank">GitHub Desktop download page</a> and download the installer. Make sure to select the correct operating system and architecture.`,
    installation_description: `<b>Follow the default installer procedure.</b> If you are prompted to log in, use the same credentials as you would use to log in to GitHub.`,
    validation_description: `Since GitHub Desktop is a GUI application, you can validate the installation by opening the it.`
}

let template = Handlebars.templates.setup_step_slider;
document.getElementById("setup_step_slider").outerHTML = template(stepSlider);
