"""VSCode task Python executable fixer.

This script is responsible for fixing issues related to the Python interpreter
executable path used in the VSCode tasks.json file. This should only be used
in case the default options fail, which is unlikely to happen.

If default methods fail, just get your Python interpreter executable path,
which looks somewhat like "C:/Users/your_user/.../python.exe" and paste it
as value for the INTERPRETER variable below.

Author:
    Paulo Sanchez (@erlete)
"""

import re

INTERPRETER = "INTERPRETER_PATH_GOES_HERE"

# Read data from tasks.json:
with open(".vscode/tasks.json", mode="r", encoding="utf-8") as fp:
    data = fp.read()

# Write replaced data to tasks.json:
with open(".vscode/tasks.json", mode="w", encoding="utf-8") as fp:
    fp.write(re.sub(
        r"(\"python\"|\"python3\"|\"py\")",
        f"\"{INTERPRETER}\"",
        data,
        flags=re.MULTILINE | re.IGNORECASE
    ))
