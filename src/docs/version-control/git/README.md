# Git

> ***Estimated completion time: 5 minutes***

```mermaid
%%{
    init: {
        'logLevel': 'debug',
        'theme': 'forest',
        'gitGraph': {
            'showBranches': true,
            'showCommitLabel':true,
            'mainBranchName': 'main'
        }
    }
}%%

gitGraph
   commit id: "Welcome!"

   commit id: "Version control" type: HIGHLIGHT
   branch version-control
   checkout version-control
   commit id: "Git setup" type: HIGHLIGHT
   commit id: "Git and GitHub features"
   commit id: "GitHub Desktop setup"
   checkout main
   merge version-control

   commit id: "Python setup"
   branch python
   checkout python
   commit id: "Interpreter setup"
   commit id: "Package manager setup"
   commit id: "Virtual environment setup"
   checkout main
   merge python

   commit id: "Visual Studio Code"
   branch visual-studio-code
   checkout visual-studio-code
   commit id: "Editor setup"
   commit id: "Extensions setup"
   checkout main
   merge visual-studio-code

   commit id: "Python programming"
```

Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

## Download

This software can be downloaded through [its download page](https://git-scm.com/downloads). Make sure to choose the correct operating system and hardware architecture version.

## Installation

In order to install Git, it is only necessary to follow the installer procedure. **There are plenty of customization options that can be explored, but for this course it is recommended to use default settings.**

*If you are an advanced user, have specific IDE/editor customization settings or are just curious to see how things work, feel free to **carefully** explore the installation settings.*

### Validation

You can check whether Git is installed using the `git` command:

```powershell
git --version
>>> git version 2.39.2
```

If this command returns an error, it either means that Git was not installed successfully or that the `git` command is not linked to the program.

## Git and GitHub

Git is not as simple as its name. In fact, it is a very powerful tool that not many people know how to use. You will learn the basics of Git and its platform par excellence, GitHub, in [**the next chapter**](../github/README.md).

If you want to go back to [the previous chapter](/README.md), go ahead!
