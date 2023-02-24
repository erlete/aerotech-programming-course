# Git

```mermaid
%%{
    init: {
        'logLevel': 'debug',
        'theme': 'forest',
        'gitGraph': {
            'showBranches': true,
            'showCommitLabel':true,
            'mainBranchName': 'course-progress'
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
   checkout course-progress
   merge version-control

   commit id: "Python setup"
   branch python
   checkout python
   commit id: "Interpreter setup"
   commit id: "Package manager setup"
   commit id: "Virtual environment setup"
   checkout course-progress
   merge python

   commit id: "Visual Studio Code"
   branch visual-studio-code
   checkout visual-studio-code
   commit id: "Editor setup"
   commit id: "Extensions setup"
   checkout course-progress
   merge visual-studio-code

   commit id: "Python programming"
```

Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

## Installation

| Operating system | Architecture | Portable | Installer |
| :--------------: | :----------: | :------: | :-------: |
| Windows          | x32          | No       | [Download](https://github.com/git-for-windows/git/releases/download/v2.39.1.windows.1/Git-2.39.1-32-bit.exe) |
| Windows          | x32          | Yes      | [Download](https://github.com/git-for-windows/git/releases/download/v2.39.1.windows.1/Git-2.39.1-64-bit.exe) |
| Windows          | x64          | No       | [Download](https://github.com/git-for-windows/git/releases/download/v2.39.1.windows.1/PortableGit-2.39.1-32-bit.7z.exe) |
| Windows          | x64          | Yes      | [Download](https://github.com/git-for-windows/git/releases/download/v2.39.1.windows.1/PortableGit-2.39.1-64-bit.7z.exe) |
| macOS            | -            | -        | [Package manager installation instructions](https://git-scm.com/download/mac) |
| Linux            | -            | -        | [Package manager installation instructions](https://git-scm.com/download/linux) |

## Installation Instructions

In order to install Git, it is only necessary to follow the installer procedure. There are plenty of customization options that can be explored, but for this course it is recommended to use default settings.

## Next steps

- [Return to the GitHub tutorial](../github/README.md#repositories-git)
