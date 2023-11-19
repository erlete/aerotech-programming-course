const BASEURL = "https://github.com/erlete/aerotech-programming-course/issues/new?assignees=erlete&labels=bug&milestone=User%20Reports&title=%5BUC%5D+%3Cissue+title+goes+here%3E&body="
const BODY = {
    header: `## Description

<Clear and concise description of what the bug is>

## Course area

`,
    footer: `
## Steps to reproduce the behavior

1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

## Expected behavior

<A clear and concise description of what you expected to happen>

## Screenshots

<Add screenshots to help explain your problem if needed>

## Desktop (complete the following information):

    - **OS w/version (e.g. \`Windows 11\`, \`macOS Catalina\`...)**:
    - **Browser w/version (e.g. \`Chrome 109.0.5414.165\`, \`Safari 17.1\`, ...)**:
    - **Python version (e.g. \`3.11.6\`):

## Additional context

<Add any other context about the problem here>
`
}

function generateChecklist(main, secondary) {
    main = main.toLowerCase();
    secondary = secondary.toLowerCase();

    return `- [${main == "general" ? "x" : " "}] General
- [${main == "environment" ? "x" : " "}] Environment setup
    - [${secondary == "git" ? "x" : " "}] Git
    - [${secondary == "python" ? "x" : " "}] Python
    - [${secondary == "vscode" ? "x" : " "}] VSCode
    - [${secondary == "ghdesktop" ? "x" : " "}] GitHub Desktop
- [${main == "python" ? "x" : " "}] Python programming
    - [${secondary == "data" ? "x" : " "}] Data types
    - [${secondary == "operators" ? "x" : " "}] Operators
    - [${secondary == "conditional" ? "x" : " "}] Conditional structures
    - [${secondary == "iteration" ? "x" : " "}] Iteration structures
    - [${secondary == "functions" ? "x" : " "}] Functions
    - [${secondary == "classes" ? "x" : " "}] Classes
    - [${secondary == "exceptions" ? "x" : " "}] Exceptions
    - [${secondary == "libraries" ? "x" : " "}] Libraries
    - [${secondary == "code" ? "x" : " "}] Code style
`
}

function generateURL(main, secondary) {
    return BASEURL + encodeURIComponent(BODY.header + generateChecklist(main, secondary) + BODY.footer);
}

export { generateURL };

