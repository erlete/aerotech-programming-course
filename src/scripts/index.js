import { generateURL } from "./modules/issue_report.js";

Handlebars.partials = Handlebars.templates;

let envContentCards = [
    {
        img_source: "./public/icons8/git.png",
        title: "Git setup",
        description: "How to set up Git for version control",
        issue_link: generateURL("environment", "git"),
        link: "/environment-setup/git"
    },
    {
        img_source: "./public/icons8/python.png",
        title: "Python setup",
        description: "How to install up Python in your system using PyEnv",
        issue_link: generateURL("environment", "python"),
        link: "/environment-setup/python"
    },
    {
        img_source: "./public/icons8/vscode.png",
        title: "Visual Studio Code setup",
        description: "How to set up Visual Studio Code and its extensions",
        issue_link: generateURL("environment", "vscode"),
        link: "/environment-setup/visual-studio-code"
    },
    {
        img_source: "./public/icons8/github-desktop.png",
        title: "GitHub Desktop setup",
        description: "How to install and configure GitHub Desktop for simpler development",
        issue_link: generateURL("environment", "ghdesktop"),
        link: "/environment-setup/github-desktop"
    }
];
envContentCards.forEach((card, index) => card.title = `${index + 1}. ${card.title}`);

const envContentCardsDiv = {
    title: "Progression",
    description: "The following steps will guide you through the process of setting up your environment. Try to follow them in order to avoid any configuration issues.",
    content_cards: envContentCards
};

let template = Handlebars.templates.content_card_collection;
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
        description: "Understand different operators and operation preference",
        issue_link: generateURL("python", "operators"),
        link: ""
    },
    {
        img_source: "./public/icons8/conditional-structures.png",
        title: "Conditional structures",
        description: "Study conditional structures syntax and usage",
        issue_link: generateURL("python", "conditional"),
        link: ""
    },
    {
        img_source: "./public/icons8/iteration-structures.png",
        title: "Iteration structures",
        description: "Study iteration structures syntax and usage",
        issue_link: generateURL("python", "iteration"),
        link: ""
    },
    {
        img_source: "./public/icons8/functions.png",
        title: "Functions",
        description: "Understand how functions work and how to create custom ones",
        issue_link: generateURL("python", "functions"),
        link: ""
    },
    {
        img_source: "./public/icons8/classes.png",
        title: "Classes",
        description: "Learn about classes and the OOP paradigm in Python",
        issue_link: generateURL("python", "classes"),
        link: ""
    },
    {
        img_source: "./public/icons8/exceptions.png",
        title: "Exceptions",
        description: "Understand how exceptions work and how to handle them",
        issue_link: generateURL("python", "exceptions"),
        link: ""
    },
    {
        img_source: "./public/icons8/libraries.png",
        title: "Libraries",
        description: "Discover some of the most useful libraries in Python and learn to use them",
        issue_link: generateURL("python", "libraries"),
        link: ""
    },
    {
        img_source: "./public/icons8/code-style.png",
        title: "Code style",
        description: "Learn how to style your code to make it more readable and maintainable",
        issue_link: generateURL("python", "code"),
        link: ""
    },
    {
        img_source: "./public/icons8/project.png",
        title: "Project",
        description: "Apply your knowledge to a real-world project",
        issue_link: generateURL("python", "project"),
        link: ""
    }
];
pyContentCards.forEach((card, index) => card.title = `${index + 1}. ${card.title}`);

const pyContentCardsDiv = {
    title: "Progression",
    description: "The following steps will guide you through the process of learning Python up to an intermediate level. Try to follow them in order to avoid any confusion.",
    content_cards: pyContentCards
};

template = Handlebars.templates.content_card_collection;
document.getElementById("py_content_cards").outerHTML = template(pyContentCardsDiv);
