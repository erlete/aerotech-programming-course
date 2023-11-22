import { setTitle } from "/scripts/modules/common_templates.js";

setTitle("Section Exercise", "Complete the Environment Setup section by deploying a local server in a local copy of the course repository using Python")

const STEPS = [
    `<a href="https://github.com/signup" target="_blank">Create a new GitHub</a> account. If you are already registered, <a href="https://github.com/login" target="_blank">log into your profile</a>. Each GitHub account needs to have a recognizable display name (the @username can be whichever you want). For example, <a href="https://github.com/erlete" target="_blank">"Paulo Sánchez (@erlete)"</a> is a decent display name; <a href="https://github.com/lkubi" target="_blank">"Luis Pérez (@lkubi)"</a> is also good, even though the username is a bit more complex. However, just take a look at <a href="https://github.com/what-a-stupid-username" target="_blank">"@What-a-stupid-username"</a>`,
    `Open <a href="https://github.com/erlete/aerotech-programming-course/" target="_blank">this repository in GitHub</a>`,
    `Click on the <b>"Fork"</b> button and select the <b>"Copy the <code>stable</code> branch only"</b> option, then click on <b>"Create Fork"</b>`,
    `Open <b>GitHub Desktop</b>. If you have not installed the application, go back to the <a href="/environment-setup/github-desktop.html" target="_blank">GitHub Desktop setup chapter</a> and perform a new GitHub Desktop installation`,
    `Click on <b>"File"</b> > <b>"Clone Repository..."</b>`,
    `Select the forked repository and click on <b>"Clone"</b>. If there are any errors during the step, go back to the <a href="/environment-setup/git.html" target="_blank">Git setup chapter</a> and perform a new Git installation`,
    `Select the "I'll be using this fork... <b>For my own purposes"</b> option and click on <b>"Continue"</b>`,
    `Click on the <b>"Open in Visual Studio Code"</b> button located in the middle of the screen or press <code>Ctrl</code> + <code>Shift</code> + <code>A</code>`,
    `Make sure to select the <b>"Python"</b> profile from VSCode settings. If you don't remember how to select a profile, go back to the <a href="/environment-setup/visual-studio-code.html" target="_blank">VSCode setup chapter</a> and review the "VSCode Python profile setup" section`,
    `Open up the VSCode Command Palette (<code>Ctrl</code> + <code>Shift</code> + <code>P</code>) and type <code>"Python: Select Interpreter"</code>`,
    `Select the <b>"Python 3.11.6"</b> interpreter (the one whose path contains a reference to <code>pyenv</code>). If you don't see this interpreter, go back to the <a href="/environment-setup/python.html" target="_blank">Python setup chapter</a> and perform a new Python installation`,
    `On the menu bar, click on <b>"Terminal"</b> > <b>"New Terminal"</b> to open up a new terminal in the root of the repository`,
    `Make sure your <code>python</code> alias is pointing to the same interpreter you selected in the previous step. You can do this by running <code class="select-all">python --version</code>. The output must be <code>Python 3.11.6</code>. If that's not the case, go back to the <a href="/environment-setup/python.html" target="_blank">Python setup chapter</a> and review how to set a global <code>pyenv</code> Python version`,
    `Run <code class="select-all">python -m http.server 1234 --directory src</code> to start a local web server. If a pop up requesting network access appears, click on <b>"Allow"</b>. Make sure not to close the terminal window. If you do, you will need to start the local server again`,
    `Open <a href="http://localhost:1234" target="_blank">http://localhost:1234</a> in your browser. You should see the landing page of the website, but this time it's being served directly from the local repository files in your PC`,
    `That's it! <b>From now on, you will use the local server to navigate through the website.</b> This means you can close this window and navigate to the first section of the <b>"Version control"</b> chapter from the landing page you just served`
]

let stepText = document.getElementById("step-text");
let currentStep = 0;

stepText.innerHTML = STEPS[currentStep];

async function previousStep() {
    if (currentStep > 0) {
        currentStep--;

        stepText.style.opacity = 0;
        setTimeout(() => {
            stepText.innerHTML = STEPS[currentStep];
            setTimeout(() => {

                stepText.style.opacity = 1;
            }, 300);
        }, 300);
    }
}

function nextStep() {
    if (currentStep < STEPS.length - 1) {
        currentStep++;

        stepText.style.opacity = 0;
        setTimeout(() => {
            stepText.innerHTML = STEPS[currentStep];

            setTimeout(() => {
                stepText.style.opacity = 1;
            }, 300);
        }, 300);
    }
}
