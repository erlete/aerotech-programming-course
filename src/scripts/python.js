import { setNavigationButtons } from "/scripts/modules/common_templates.js";

setNavigationButtons("/environment-setup/git", "/environment-setup/visual-studio-code/");

const stepSliderWindows = {
    name: "<code>pyenv-win</code> (Windows)",
    download_description: "No manual download is required for this software, since it is automatically downloaded during the installation process through PowerShell.",
    installation_description: `Open PowerShell <b>in administrator mode</b> and paste the following command: <pre class="select-all">Invoke-WebRequest -UseBasicParsing -Uri "https://raw.githubusercontent.com/pyenv-win/pyenv-win/master/pyenv-win/install-pyenv-win.ps1" -OutFile "./install-pyenv-win.ps1"; &"./install-pyenv-win.ps1"</pre>You can get more details on this command <a href="https://pyenv-win.github.io/pyenv-win/docs/installation.html#powershell" target="_blank">in the official software documentation page</a>. If the previous method did not work for you, <a href="https://pyenv-win.github.io/pyenv-win/docs/installation.html" target="_blank">check the other available installation methods</a>.`,
    validation_description: `Open your command line prompt and type the following command: <pre>pyenv --version</pre>If you get a response similar to <code>pyenv 3.1.1</code>, then you are good to go!`
}

let template = Handlebars.templates.setup_step_slider;
document.getElementById("setup_step_slider_windows").outerHTML = template(stepSliderWindows);

const stepSliderUNIXmacOS = {
    name: "<code>pyenv</code> (UNIX/macOS)",
    download_description: `No manual download is required for this software, since it is automatically downloaded during the installation process through <code>curl</code> (if you don't have installed <code>curl</code> already, you can do so <a href="https://everything.curl.dev/get" target="_blank">here</a>).`,
    installation_description: `Open your command line prompt and paste the following command: <pre class="select-all">curl https://pyenv.run | bash</pre>You can get more details on this command <a href="https://github.com/pyenv/pyenv#automatic-installer" target="_blank">in the official software README page</a>. If the previous method did not work for you, <a href="https://github.com/pyenv/pyenv#installation" target="_blank">check the other available installation methods</a>.`,
    validation_description: `Open your command line prompt and type the following command: <code>pyenv --version</code>. If you get a response similar to <code>pyenv 2.3.32</code>, then you are good to go!`
}

template = Handlebars.templates.setup_step_slider;
document.getElementById("setup_step_slider_unix_macos").outerHTML = template(stepSliderUNIXmacOS);

const stepSliderPython = {
    name: "Python (through <code>pyenv</code>)",
    download_description: "No manual download is required for this software, since it is automatically downloaded during the installation process through <code>pyenv</code>.",
    installation_description: `Open your command line prompt and paste the following command: <pre class="select-all">pyenv install 3.11.6</pre>After that, you should set the installed Python version as <b>global</b> (for it to be accessible from anywhere in the computer with the same command). You can do so as follows: <pre class="select-all"><code>pyenv global 3.11.6</code></pre>Feel free to explore all the functionalities of <code>pyenv</code> using <code>pyenv --help</code>.`,
    validation_description: "Open your command line prompt and type the following command: <pre class='select-all'>python --version</pre>If you get <code>Python 3.11.6</code> as response, then you are good to go!"
}

template = Handlebars.templates.setup_step_slider;
document.getElementById("setup_step_slider_python").outerHTML = template(stepSliderPython);
