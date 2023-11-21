import { generateURL } from "/scripts/modules/issue_report.js";

Handlebars.partials = Handlebars.templates;

let envContentCards = [
    {
        img_source: "./public/icons8/git.png",
        title: "Git setup",
        description: "How to set up Git for version control",
        issue_link: generateURL("environment", "git"),
        link: "/environment-setup/git.html"
    },
    {
        img_source: "./public/icons8/python.png",
        title: "Python setup",
        description: "How to install up Python in your system using PyEnv",
        issue_link: generateURL("environment", "python"),
        link: "/environment-setup/python.html"
    },
    {
        img_source: "./public/icons8/vscode.png",
        title: "Visual Studio Code setup",
        description: "How to set up Visual Studio Code and its extensions",
        issue_link: generateURL("environment", "vscode"),
        link: "/environment-setup/visual-studio-code.html"
    },
    {
        img_source: "./public/icons8/github-desktop.png",
        title: "GitHub Desktop setup",
        description: "How to install and configure GitHub Desktop for simpler development",
        issue_link: generateURL("environment", "ghdesktop"),
        link: "/environment-setup/github-desktop.html"
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

const verContentCards = [
    {
        img_source: "./public/icons8/repositories.png",
        title: "Repositories",
        description: "Understand what a repository is, both locally and remotely",
        issue_link: generateURL("version-control", "repositories"),
        link: "/version-control/repositories/"
    },
    {
        img_source: "./public/icons8/commits.png",
        title: "Commits",
        description: "Learn about the minimal unit of change in version control",
        issue_link: generateURL("version-control", "commits"),
        link: "/version-control/commits/"
    },
    {
        img_source: "./public/icons8/branches.png",
        title: "Branches",
        description: "Understand how branches work and how to use them",
        issue_link: generateURL("version-control", "branches"),
        link: "/version-control/branches/"
    },
    {
        img_source: "./public/icons8/forks.png",
        title: "Forks",
        description: "Learn how to fork a repository and how to use it",
        issue_link: generateURL("version-control", "forks"),
        link: "/version-control/forks/"
    },
    {
        img_source: "./public/icons8/merge-requests.png",
        title: "Merge requests",
        description: "Study how to merge requests operate and how their conflicts are resolved",
        issue_link: generateURL("version-control", "merge-requests"),
        link: "/version-control/merge-requests/"
    },
    {
        img_source: "./public/icons8/pull-requests.png",
        title: "GitHub Pull requests",
        description: "Understand why GitHub Pull Requests play a significant role in open-source projects",
        issue_link: generateURL("version-control", "pull-requests"),
        link: "/version-control/pull-requests/"
    },
    {
        img_source: "./public/icons8/issues.png",
        title: "GitHub Issues",
        description: "Learn how to create a GitHub Issue and what to include in it",
        issue_link: generateURL("version-control", "issues"),
        link: "/version-control/issues/"
    },
    {
        img_source: "./public/icons8/projects.png",
        title: "GitHub Projects",
        description: "Understand how GitHub Projects influence the development of a repository",
        issue_link: generateURL("version-control", "projects"),
        link: "/version-control/projects/"
    },
    {
        img_source: "./public/icons8/discussions.png",
        title: "GitHub Discussions",
        description: "Study how GitHub Discussions serve as a communication channel between developers",
        issue_link: generateURL("version-control", "discussions"),
        link: "/version-control/discussions/"
    },
    {
        img_source: "./public/icons8/actions.png",
        title: "GitHub Actions",
        description: "Learn the potential of GitHub Actions and how to use them",
        issue_link: generateURL("version-control", "actions"),
        link: "/version-control/actions/"
    }
];
verContentCards.forEach((card, index) => card.title = `${index + 1}. ${card.title}`);

const verContentCardsDiv = {
    title: "Progression",
    description: "The following steps will guide you through the process of understanding how version control works. It is recommended to follow them in order to understand the concepts better.",
    content_cards: verContentCards
};

template = Handlebars.templates.content_card_collection;
document.getElementById("ver_content_cards").outerHTML = template(verContentCardsDiv);

const lockedElements2 = Array.from(document.getElementsByClassName("locked"));

if (!window.location.href.includes("localhost")) {
    function disableLinks(element) {
        if (element.tagName === "A") {
            element.href = "javascript:void(0);";
            element.target = "";
        }

        for (let i = 0; i < element.children.length; i++) {
            disableLinks(element.children[i]);
        }
    }

    lockedElements2.forEach(element => disableLinks(element));

    let lockedTitles = Array.from(document.getElementsByClassName("locked-title"));
    lockedTitles.forEach(element => element.innerText += " (locked until you complete the previous steps)");
} else {
    function enableElements(element) {
        element.classList.remove("locked");

        for (let i = 0; i < element.children.length; i++) {
            enableElements(element.children[i]);
        }
    }

    lockedElements2.forEach(element => enableElements(element));
}
