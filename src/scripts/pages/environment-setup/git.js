import { setNavigationButtons } from "/scripts/modules/common_templates.js";

setNavigationButtons("/", "/environment-setup/python.html");

const stepSlider = {
    name: "Git",
    download_description: `Head to <a href="https://git-scm.com/downloads" target="_blank">Git's download page</a> and download the installer. Make sure to select the correct operating system and architecture.`,
    installation_description: `<b>Follow the default installer procedure.</b> There are plenty of customization options, but I personally recommend to keep them as they are. If you are an experienced user, feel free to customize the installation to your liking, but embrace any possible consequences.`,
    validation_description: `Open your command line prompt and type: <pre>git --version</pre>If you get a response similar to <code>git version 2.39.2</code>, then you are good to go!`
}

let template = Handlebars.templates.setup_step_slider;
document.getElementById("setup_step_slider").outerHTML = template(stepSlider);

const gitForm = document.getElementById("git-form");
const gitAnswer = document.getElementById("git-form-answer");

gitForm.addEventListener("click", () => {
    let checked = 0;
    for (let i = 0; i < gitForm.length; i++) {
        if (gitForm[i].checked) {
            checked++;
        }
    }

    if (checked == 0) {
        gitAnswer.innerHTML = "You haven't checked any statements, so it seems like you do not need Git. That's great! But you are going to install it anyway, so let's get to it.";
    } else if (checked == 1) {
        gitAnswer.innerHTML = "You already need Git! See what I mean?";
    } else if (checked == 3) {
        gitAnswer.innerHTML = "You are starting to <em>seriously</em> need Git.";
    } else if (checked == 5) {
        gitAnswer.innerHTML = "You <b>really</b> need Git. Go install it.";
    } else if (checked == 7) {
        gitAnswer.innerHTML = "You need Git so much that you are going to install it right now."
    } else if (checked == 9) {
        gitAnswer.innerHTML = "<em>Just install it already and leave me alone.</em>";
    } else if (checked == 10) {
        gitAnswer.innerHTML = "<b>You are just clicking everything, aren't you? Click this one then...</b>";

        // Rickroll time, baby!
        setTimeout(() => {
            window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        }, 3000);
    }
});
