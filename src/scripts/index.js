import { generateURL } from "./modules/issue_report.js";

Handlebars.partials = Handlebars.templates;

const envContentCards = [
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

const envContentCardsDiv = {
    title: "Progression steps",
    description: "The following steps will guide you through the process of setting up your environment. Try to follow them in order to avoid any issues.",
    content_cards: envContentCards
};

let template = Handlebars.templates.content_card_div;
document.getElementById("env_content_cards").outerHTML = template(envContentCardsDiv);

const pyContentCards = [
    {
        img_source: "./public/icons8/data-types.png",
        title: "Data types",
        description: "Learn about the different data types in Python",
        issue_link: generateURL("python", "data"),
        link: ""
    },
    {
        img_source: "./public/icons8/operators.png",
        title: "Operators",
        description: "Learn about the different operators in Python",
        issue_link: generateURL("python", "operators"),
        link: ""
    },
    {
        img_source: "./public/icons8/conditional-structures.png",
        title: "Conditional structures",
        description: "Learn about the different conditional structures in Python",
        issue_link: generateURL("python", "conditional"),
        link: ""
    },
    {
        img_source: "./public/icons8/iteration-structures.png",
        title: "Iteration structures",
        description: "Learn about the different iteration structures in Python",
        issue_link: generateURL("python", "iteration"),
        link: ""
    },
    {
        img_source: "./public/icons8/functions.png",
        title: "Functions",
        description: "Learn about the different functions in Python",
        issue_link: generateURL("python", "functions"),
        link: ""
    },
    {
        img_source: "./public/icons8/classes.png",
        title: "Classes",
        description: "Learn about the different classes in Python",
        issue_link: generateURL("python", "classes"),
        link: ""
    },
    {
        img_source: "./public/icons8/exceptions.png",
        title: "Exceptions",
        description: "Learn about the different exceptions in Python",
        issue_link: generateURL("python", "exceptions"),
        link: ""
    },
    {
        img_source: "./public/icons8/libraries.png",
        title: "Libraries",
        description: "Learn about the different libraries in Python",
        issue_link: generateURL("python", "libraries"),
        link: ""
    },
    {
        img_source: "./public/icons8/code-style.png",
        title: "Code style",
        description: "Learn about the different code styles in Python",
        issue_link: generateURL("python", "codestyle"),
        link: ""
    }
];

const pyContentCardsDiv = {
    title: "Progression steps",
    description: "The following steps will guide you through the process of learning Python. Try to follow them in order to avoid any issues.",
    content_cards: pyContentCards
};

template = Handlebars.templates.content_card_div;
document.getElementById("py_content_cards").outerHTML = template(pyContentCardsDiv);
