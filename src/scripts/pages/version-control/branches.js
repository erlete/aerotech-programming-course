const STEPS = [
    `Open GitHub Desktop and make sure the <code>stable</code> branch is active`,
    `Click the <b>"Fetch origin"</b> button. You should not have any pending changes to commit`,
    `Click the <b>"Current branch"</b> dropdown and select <b>"New Branch"</b>`,
    `Name the branch <code>dev</code>, select <b>"Create branch based on... <code>stable</code>"</b> and then click on <b>"Create branch"</b>`,
    `Click on <b>"Publish branch"</b>`,
    `Go to Visual Studio Code and check that the lower left corner says <code>dev</code>. This means that the branch has been created and activated successfully`,
    `Open your GitHub repository landing page and make sure that the <code>dev</code> branch is listed on the branch dropdown (if you had the repository page open before creating the branch, you may need to refresh the page)`,
    `Go back to GitHub Desktop and click on the branch dropdown, then select <code>stable</code>`,
    `Done! Now you know how to create, publish and switch between branches using GitHub Desktop`
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
