import { setNavigationButtons, setTitle } from "/scripts/modules/common_templates.js";

setTitle("Visual Studio Code Setup", "A powerful, open source editor suitable most development needs");
setNavigationButtons("/environment-setup/python.html", "/environment-setup/github-desktop.html");

Handlebars.partials = Handlebars.templates;

const stepSlider = {
    name: "Visual Studio Code",
    download_description: `Head to <a href="https://code.visualstudio.com/download" target="_blank">VSCode's download page</a> and download the installer. Make sure to select the correct operating system and architecture.`,
    installation_description: `Follow the installer procedure and <b>make sure to check all the "Other" options</b>: <ul class="mt-2"><li><input onclick="return false;" checked=true type="checkbox" name="step-1" class="w-4 h-4 m-2 text-secondary-800 bg-text border-text rounded focus:ring-0 focus:ring-color-secondary-50" /><label for="step-1">Add <b>"Open with Code"</b> action (both of them)</label></li><li><input onclick="return false;" checked=true type="checkbox" name="step-2" class="w-4 h-4 m-2 text-secondary-800 bg-text border-text rounded focus:ring-0 focus:ring-color-secondary-50" /><label for="step-2"><b>Register Code as an editor for supported file types</b></label></li><li><input onclick="return false;" checked=true type="checkbox" name="step-4" class="w-4 h-4 m-2 text-secondary-800 bg-text border-text rounded focus:ring-0 focus:ring-color-secondary-50" /><label for="step-3"><b>Add to PATH</b></label></li></ul>`,
    validation_description: `I mean... what do you expect to see here? I hope you can test whether you have installed the application all by yourself. If not, you might want to consider a career change.`
}

let template = Handlebars.templates.setup_step_slider;
document.getElementById("setup_step_slider").innerHTML = template(stepSlider);

const stepCollection = {
    title: "VSCode Python profile setup",
    step_collection: [
        {
            title: `Open VSCode <a class="font-bold" href="https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette" target="_blank">Command Palette</a>`,
            body: `Press <code>Ctrl + Shift + P</code> `
        },
        {
            title: `Access the profile import command`,
            body: `Type <code class="select-all">Profiles: Import Profile...</code> and hit enter`
        },
        {
            title: `Copy link (hard)`,
            body: `<div class="mt-2" x-data="{ copyText: 'https://gist.github.com/erlete/43bffa5292ed5474b116a877129da049', copyNotification: false, copyToClipboard() { navigator.clipboard.writeText(this.copyText); this.copyNotification = true; let that = this; } }" class="relative z-20 flex items-center"> <button @click="copyToClipboard();" class="flex items-center justify-center w-auto h-8 px-3 py-1 text-xs bg-secondary-950 border rounded-md cursor-pointer hover:bg-secondary-800 text-primary-500 transition-all duration-300 group"> <span x-show="!copyNotification">Click me!</span> <svg x-show="!copyNotification" class="w-4 h-4 ml-1.5 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" /> </svg> <span x-show="copyNotification" class="tracking-tight text-green-400" x-cloak>Copied!</span> <svg x-show="copyNotification" class="w-4 h-4 ml-1.5 text-green-400 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" x-cloak> <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" /> </svg> </button> </div>`
        },
        {
            title: `Paste link in Command Palette and hit enter`,
            body: `Come on, do it. I believe in you`
        },
        {
            title: `Click the big button`,
            body: `Click on <code>Create Profile</code> from the sidebar`
        },
        {
            title: `Select profile`,
            body: `Click the <b>"Settings"</b> icon (bottom left corner), then on <b>"Profiles"</b> and select <b>"Python"</b>`
        },
        {
            title: `That's it`,
            body: `Now you just need to wait for extensions to download and install. Note that you might need to sign in with GitHub for some of them. Just click some buttons`
        }
    ]
};
stepCollection.step_collection.forEach((step, index) => step.index = index + 1);

template = Handlebars.templates.step_collection;
document.getElementById("extensions_setup").innerHTML = template(stepCollection);
