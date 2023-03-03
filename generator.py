import json
from pprint import pprint

with open(".vscode/tasks.json", mode='r', encoding="utf-8") as f:
    data = json.load(f)

tasks = {
    "version": "2.0.0",
    "tasks": []
}

def get_mod(i: int) -> dict[str, str]:
    i = str(i).zfill(2)
    return {
        "label": f"Test exercise {i}",
        "type": "shell",
        "windows": {
            "command": "python",
            "args": [
                "-m",
                "pytest",
                f"lessons\\solutions\\solution_tests\\test_exercise_{i}.py",
                "--capture=no",
                "--no-header",
                "--verbosity=0",
                "-r=fEX",
                "--disable-warnings",
                "--tb=line",
                "--show-capture=all",
                "--assert=plain",
                "--maxfail=1"
            ]
        },
        "linux": {
            "command": "python3",
            "args": [
                "-m",
                "pytest",
                f"lessons/solutions/solution_tests/test_exercise_{i}.py",
                "--capture=no",
                "--no-header",
                "--verbosity=0",
                "-r=fEX",
                "--disable-warnings",
                "--tb=line",
                "--show-capture=all",
                "--assert=plain",
                "--maxfail=1"
            ]
        },
        "osx": {
            "command": "python3",
            "args": [
                "-m",
                "pytest",
                f"lessons/solutions/solution_tests/test_exercise_{i}.py",
                "--capture=no",
                "--no-header",
                "--verbosity=0",
                "-r=fEX",
                "--disable-warnings",
                "--tb=line",
                "--show-capture=all",
                "--assert=plain",
                "--maxfail=1"
            ]
        },
        "problemMatcher": [],
        "presentation": {
            "echo": False,
            "reveal": "always",
            "focus": True,
            "panel": "shared",
            "showReuseMessage": False,
            "clear": True
        }
    }

for i in range(1, 21):
    tasks["tasks"].append(get_mod(i))

with open("out.json", mode='w', encoding="utf-8") as f:
    json.dump(tasks, f)

pprint(tasks)
