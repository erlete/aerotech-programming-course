const STEPS = [
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
