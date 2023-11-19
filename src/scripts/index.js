import { generateURL } from "./issue_report.js";

Handlebars.partials = Handlebars.templates;

const content_cards = [
    {
        img_source: "./public/icons8/git.png",
        title: "Git setup",
        description: "How to set up Git for version control",
        issue_link: generateURL("environment", "git"),
        link: ""
    },
    {
        img_source: "./public/icons8/python.png",
        title: "Python setup",
        description: "How to install up Python in your system using PyEnv",
        issue_link: generateURL("environment", "python"),
        link: ""
    },
    {
        img_source: "./public/icons8/vscode.png",
        title: "Visual Studio Code setup",
        description: "How to set up Visual Studio Code and its extensions",
        issue_link: generateURL("environment", "vscode"),
        link: ""
    },
    {
        img_source: "./public/icons8/github-desktop.png",
        title: "GitHub Desktop setup",
        description: "How to install and configure GitHub Desktop for simpler development",
        issue_link: generateURL("environment", "ghdesktop"),
        link: ""
    }
];

const environmentSetup = {
    title: "Progression steps",
    description: "The following steps will guide you through the process of setting up your environment. Try to follow them in order to avoid any issues.",
    content_cards: content_cards
};

let template = Handlebars.templates.content_card_div;
document.getElementById("env_content_cards").outerHTML = template(environmentSetup);


