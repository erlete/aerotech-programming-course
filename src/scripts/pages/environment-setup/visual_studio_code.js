import { setNavigationButtons } from "/scripts/modules/common_templates.js";

setNavigationButtons("/environment-setup/python", "/environment-setup/github-desktop/");

const stepSlider = {
    name: "Visual Studio Code",
    download_description: `Head to <a href="https://code.visualstudio.com/download" target="_blank">VSCode's download page</a> and download the installer. Make sure to select the correct operating system and architecture.`,
    installation_description: `Follow the installer procedure and <b>make sure to check all the "Other" options</b>: <ul class="mt-2"><li><input onclick="return false;" checked=true type="checkbox" name="step-1" class="w-4 h-4 m-2 text-secondary-800 bg-text border-text rounded focus:ring-0 focus:ring-color-secondary-50" /><label for="step-1">Add <b>"Open with Code"</b> action (both of them)</label></li><li><input onclick="return false;" checked=true type="checkbox" name="step-2" class="w-4 h-4 m-2 text-secondary-800 bg-text border-text rounded focus:ring-0 focus:ring-color-secondary-50" /><label for="step-2"><b>Register Code as an editor for supported file types</b></label></li><li><input onclick="return false;" checked=true type="checkbox" name="step-4" class="w-4 h-4 m-2 text-secondary-800 bg-text border-text rounded focus:ring-0 focus:ring-color-secondary-50" /><label for="step-3"><b>Add to PATH</b></label></li></ul>`,
    validation_description: `I mean... what do you expect to see here? I hope you can test whether you have installed the application all by yourself. If not, you might want to consider a career change.`
}

let template = Handlebars.templates.setup_step_slider;
document.getElementById("setup_step_slider").outerHTML = template(stepSlider);



