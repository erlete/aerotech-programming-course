# Python

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

   commit id: "Version control"
   branch version-control
   checkout version-control
   commit id: "Git setup"
   commit id: "Git and GitHub features"
   commit id: "GitHub Desktop setup"
   checkout course-progress
   merge version-control

   commit id: "Python setup" type: HIGHLIGHT
   branch python
   checkout python
   commit id: "Interpreter setup" type: HIGHLIGHT
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

Python is a programming language that lets you work quickly and integrate systems more effectively. It is a high-level, interpreted, interactive and object-oriented scripting language. Python is designed to be highly readable. It uses English keywords frequently where as other languages use punctuation, and it has fewer syntactical constructions than other languages.

There are plenty of Python versions, yet the 3.11.2 will be used for the tutorial.

## Download

* [Windows x64 (direct download)](https://www.python.org/ftp/python/3.11.2/python-3.11.2-amd64.exe)
* [Other downloads](https://www.python.org/downloads/release/python-3112/)

## Installation

First of all, **do not install Python without customizing the process**. Check the "Add python.exe to PATH" box and click on "Customize installation".

![1-initial-screen](/.media/python/interpreter/installers/1-initial-screen.png)

![2-path](/.media/python/interpreter/installers/2-path.png)

Be sure to select all the optional features. They will include the documentation for the standard library, the Python package manager (`pip`), the graphical interface support (`tcl/tk`), and the Python development environment (`IDLE`). The test suite is not relevant for this matter, but install it as well. Click on "Next" to continue.

![3-optional-features](/.media/python/interpreter/installers/3-optional-features.png)

Check the Python file association and shortcut creation boxes. Also add the Python installation directory to the PATH environment variable. Standard library precompilation and debugging symbols are not explicitly required, but they are recommended. Click on "Install" to continue.

![4-advanced-options](/.media/python/interpreter/installers/4-advanced-options.png)

### Validation

You can check whether Python is installed using the `python` command:

```powershell
python --version
>>> Python 3.11.2
```

If this command returns an error, it either means that Python was not installed successfully or that the `python` command is not linked to the program.

## Python packages

The Python language relies on collaborative development for additional functionality, which is manifested in the form of packages. You will learn about package installation in [the next chapter](../packages/README.md).

If you want to go back to [the previous chapter](/docs/version-control/github-desktop/README.md), go ahead!
