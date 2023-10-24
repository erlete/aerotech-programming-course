# GitHub Desktop

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
   commit id: "Git setup"
   commit id: "Git and GitHub features"
   commit id: "GitHub Desktop setup" type: HIGHLIGHT
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

GitHub Desktop is the application interface for GitHub Web. It allows a more direct interaction between the user and GitHub/Git features that are available on the web.

I personally recommend its usage, specially for beginners, since it makes working with the interface an easy task. Using Git directly might be the cause for plenty of difficulties, yet advanced users are more than welcome to use it.

## Download

* [Windows x64 (direct download)](https://central.github.com/deployments/desktop/desktop/latest/win32)
* [Other downloads](https://desktop.github.com/)

## Installation

In order to install GitHub Desktop you only need to run the installer and add your profile configuration (your name and email). Furthermore, you might need to log in with your GitHub account in order to be able to access your remote repositories.

### Validation

You can make sure the installation was successful by searching for "GitHub Desktop" in the list of installed applications.

## Repository Setup

In order to start editing the repository and adding your own developments, you will need to clone it in your computer. You will learn how to do that in [the next chapter](./SETUP.md).

If you want to go back to [the previous chapter](../github/SETUP.md), go ahead!
