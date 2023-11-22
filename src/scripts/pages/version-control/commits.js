const STEPS = [
    `Make sure both <b>GitHub Desktop</b> and <b>Visual Studio Code</b> are open. The repository should be open in both applications`,
    `From VSCode, open the <code>.user-path</code> file located inside the <code>src</code> directory`,
    `From the VSCode <a href="https://code.visualstudio.com/docs/getstarted/userinterface" target="_blank">Explorer Side Bar view</a>, right-click on the <code>src</code> directory and select <b>"Copy Path"</b> (not "Copy Relative Path"!)`,
    `Paste the path into the <code>.user-path</code> file and save it`,
    `Switch to the <b>GitHub Desktop</b> app`,
    `You will see that the <code>src/.user-path</code> file has been modified`,
    `Select the change (if it's not already selected) and enter a commit Summary (title)`,
    `Click the <b>"Commit to <code>stable</code>"</b> button`,
    `Click the <b>"Push origin"</b> button`,
    `That's it, you have made your first commit and pushed it to the remote GitHub server! It's really that easy`
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
