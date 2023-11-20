import { setNavigationButtons } from "/scripts/modules/common_templates.js";

setNavigationButtons("/environment-setup/git", "/environment-setup/visual-studio-code/");

const stepSliderWindows = {
    name: "<code>pyenv-win</code> (Windows)",
    download_description: "No manual download is required for this software, since it is automatically downloaded during the installation process through PowerShell.",
    installation_description: `In order to install <code>pyenv-win</code>, open PowerShell in administrator mode and paste the following command: <pre class="select-all"><code>Invoke-WebRequest -UseBasicParsing -Uri "https://raw.githubusercontent.com/pyenv-win/pyenv-win/master/pyenv-win/install-pyenv-win.ps1" -OutFile "./install-pyenv-win.ps1"; &"./install-pyenv-win.ps1"</code></pre>You can get more details on this command <a href="https://pyenv-win.github.io/pyenv-win/docs/installation.html#powershell" target="_blank" class="font-bold font-indigo-800">in the official software documentation page</a>. If the previous method did not work for you, <a href="https://pyenv-win.github.io/pyenv-win/docs/installation.html" target="_blank" class="font-bold font-indigo-800">check the other available installation methods</a>.`,
    validation_description: `In order to validate your <code>pyenv</code> installation, you just need to open up your command line prompt and type <code>pyenv --version</code>. If you get a response similar to <code>pyenv 3.1.1</code>, then you are good to go!`
}

let template = Handlebars.templates.setup_step_slider;
document.getElementById("setup_step_slider_windows").outerHTML = template(stepSliderWindows);

const stepSliderUNIXmacOS = {
    name: "<code>pyenv</code> (UNIX/macOS)",
    download_description: `No manual download is required for this software, since it is automatically downloaded during the installation process through <code>curl</code> (if you don't have installed <code>curl</code> already, you can do so <a href="https://everything.curl.dev/get" target="_blank" class="font-bold font-indigo-800">here</a>).`,
    installation_description: `In order to install <code>pyenv</code>, open your command line prompt and paste the following command: <pre class="select-all"><code>curl https://pyenv.run | bash</code></pre>You can get more details on this command <a href="https://github.com/pyenv/pyenv#automatic-installer" target="_blank" class="font-bold font-indigo-800">in the official software README page</a>. If the previous method did not work for you, <a href="https://github.com/pyenv/pyenv#installation" target="_blank" class="font-bold font-indigo-800">check the other available installation methods</a>.`,
    validation_description: `In order to validate your <code>pyenv</code> installation, you just need to open up your command line prompt and type <code>pyenv --version</code>. If you get a response similar to <code>pyenv 2.3.32</code>, then you are good to go!`
}

template = Handlebars.templates.setup_step_slider;
document.getElementById("setup_step_slider_unix_macos").outerHTML = template(stepSliderUNIXmacOS);
