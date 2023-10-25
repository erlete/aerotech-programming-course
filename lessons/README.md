# Python Programming

In this part of the course you will learn the basics of Python programming, from data types to scientific packages.

The contents of the course are distributed in lessons, grouped by topic (functions, conditional structures, exceptions...) in the form of [Jupyter Notebooks](https://jupyter.org/). These are the elements that you will discover through the lessons:

- **Theory blocks**: information regarding the current study topic.
- **Code blocks**: embedded scripts that can be executed by clicking the "Play" button on its upper-left corner. These blocks are not meant to be modified.
- **Playgrounds**: code blocks intended for you to modify and explore a specific functionality.
- **Exercises**: sets of instructions that describe the structure of a practical exercise, which you must solve.

## Exercises

Exercises will contain links to **dedicated scripts** (files where you will need to add your own code). They will also contain instructions on how to execute **tests** over said scripts, which will automatically determine where you are failing, or just verify that your solution is right.

### Tests

In order to execute tests, you will need to execute a specific task that evaluates the exercise, for example, here is the description for exercise 4:

> _Exercise 4: Type casting_
>
> Initial data:
>
> - Variable `value` with value `123`.
>
> Steps:
>
> 1. Create a variable named `casted` that contains the value of the `value` variable casted to a string.
>
> - Click here to open the script in the editor
> - Test the script using `Ctrl + Shift + P` > `Tasks: Run Task` > `Test exercise`

In order to test the exercise, just open Visual Studio Code command palette using `Ctrl + Shift + P`, search for `Tasks: Run Task` and select `Test exercise`. Note that you must be focused on the exercise script in order to test it. Attempting to test any other script that is not an exercise will result in a warning saying you cannot do so.

Last step is to press enter and the test will be executed in a dedicated terminal window. Here is what you would see when you still have not modified exercise 4:

```powershell
=========================================================================== test session starts ============================================================================
collected 1 item

lessons\solutions\solution_tests\test_exercise_04.py F

================================================================================= FAILURES =================================================================================
V:\development\repositories\basic-formation-courses\lessons\solutions\solution_tests\test_exercise_04.py:12: AssertionError: You have not defined the variable `casted`.
========================================================================= short test summary info ==========================================================================
FAILED lessons/solutions/solution_tests/test_exercise_04.py::test - AssertionError: You have not defined the variable `casted`.
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! stopping after 1 failures !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
============================================================================ 1 failed in 0.10s =============================================================================
```

The relevant part of this report is the line above all the exclamation marks. If you read it carefully, you will notice it says *"You have not defined the variable `casted`."*. This is self explanatory. If you then add the variable casted, but the value is not right, you will receive the following report:

```powershell
=========================================================================== test session starts ============================================================================
collected 1 item

lessons\solutions\solution_tests\test_exercise_04.py F

================================================================================= FAILURES =================================================================================
V:\development\repositories\basic-formation-courses\lessons\solutions\solution_tests\test_exercise_04.py:14: AssertionError: The variable `casted` has the wrong value.
========================================================================= short test summary info ==========================================================================
FAILED lessons/solutions/solution_tests/test_exercise_04.py::test - AssertionError: The variable `casted` has the wrong value.
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! stopping after 1 failures !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
============================================================================ 1 failed in 0.16s =============================================================================
```

The error now says *"The variable `casted` has the wrong value."*. Finally, if you set the right value, you will receive the following report:

```powershell
=========================================================================== test session starts ============================================================================
collected 1 item

lessons\solutions\solution_tests\test_exercise_04.py .

============================================================================ 1 passed in 0.18s =============================================================================
```

As you can imagine, *"passed"* means that you successfully completed the exercise. There are multiple error variants, depending on the feedback required for each exercise. There can even be errors that are not defined in the tests (i.e. syntax errors). **Always make sure to read the error messages at least two times**.

### Troubleshooting

Due to the fact that the testing method depends on a high number of factors, such as multiple software versions and operating systems, the task might fail. In that case, just [open this file](/.vscode/tasks_fixer.py), replace the `INTERPRETER` variable **value** with the path to your Python interpreter (should look somewhat like "C:/Users/your_user/.../versions/3.11.4/python.exe") and execute the script with `Ctrl + Shift + P` > `Python: Run Python File in Terminal` and hit enter. Nothing should happen, but the next time you run an exercise test task, it will most probably work.

## Progress tracking

In order to track your progress through the course, you will need to commit changes to the repository. Specifically, you will need to create a dedicated branch **that matches the name of the lesson**, for example, in order to solve the exercises in the `data-types` lesson directory you will need to create a branch named `data-types` and set it as active. After that, you can start adding commits, preferably **one per solved exercise**, since the objective is to practice commit creation.

https://user-images.githubusercontent.com/76848729/223303969-d4fd2eba-8e04-4fc2-b56b-fa8197feab40.mp4

_If the video is not rendered properly, open the file on the web browser._

Finally, once you complete the lesson, you will need to create a PR that merges your branch into `stable` (**in your fork, not to the original repository!!**). That PR will automatically execute complex combined tests for all the exercises. **Make sure none of them fail by testing them first via Visual Studio Code tests**. You can assign yourself to the PR and even label it if you want.

https://user-images.githubusercontent.com/76848729/223303973-cafb2f42-68c3-46e5-bd15-b23b4a08233f.mp4

_If the video is not rendered properly, open the file on the web browser._

## Let's go!

Now you are ready to take on the lessons and exercises, so go ahead and dive into [the first lesson](./introduction.ipynb).
