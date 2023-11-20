import { setNavigationButtons } from "/scripts/modules/common_templates.js";

setNavigationButtons("/environment-setup/python", "/environment-setup/github-desktop/");

const stepSlider = {
    name: "Visual Studio Code",
    download_description: `Head to <a href="https://code.visualstudio.com/download" target="_blank">VSCode's download page</a> and download the installer. Make sure to select the correct operating system and architecture.`,
    installation_description: `Follow the installed procedure and <b>make sure to check all the "Other" options</b>: <ul class="list-disc ml-8"><li class="mt-2"><b>Add "Open with Code" action</b> (both of them)</li><li><b>Register Code as an editor for supported file types</b></li><li><b>Add to PATH</b></li></ul>`,
    validation_description: `I mean... what do you expect to see here? I hope you can test whether you have installed the application all by yourself. If not, you might want to consider a career change.`
}

let template = Handlebars.templates.setup_step_slider;
document.getElementById("setup_step_slider").outerHTML = template(stepSlider);
