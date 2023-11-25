const STEPS = [
    `Open your GitHub repository URL in a web browser`,
    `If you completed the previous commit exercise, you should see the commit you just made as the latest change`,
    `On the right side of the page, click the <b>"Releases"</b> tab`,
    `Click the <b>"Create a new release"</b> button`,
    `Click the <b>"Choose a tag"</b> dropdown and input the following tag name: <code class="select-all">v0.0.1</code>. The <b>"Target"</b> dropdown should automatically be set to the <code>stable</code> branch`,
    `Set the release title to <code class="select-all">v0.0.1</code> as well`,
    `Write a brief description of the release in the <b>"Describe this release"</b> text box`,
    `Click the <b>"Publish release"</b> button`,
    `Go back to the landing page of the repository`,
    `You should see the release you just created listed under the <b>"Releases"</b> section`,
    `Click the <b>"v0.0.1"</b> link to view the release`,
    `You should see the description you wrote for the release`,
    `Click the <b>"Source code (zip)"</b> link to download the release`,
    `Open the downloaded zip file`,
    `You should see the files you committed in the previous exercise`,
    `Congratulations! You just created your first release on GitHub!`
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
