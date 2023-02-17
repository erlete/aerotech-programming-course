"""Container module for import error handling.

Authors:
    Paulo Sanchez (@erlete)
"""

from typing import Optional, Union

from colorama import Fore


def banner(text: Optional[str] = None) -> None:
    """Generate a banner with optional centered text.

    Args:
        text (Optional[str], optional): the text to display. Defaults to None.
    """
    padding = 90
    if text is None:
        text = ''
    else:
        text = f" {Fore.WHITE}{text.strip()}{Fore.RED} "
        padding += 10

    print(
        f"{Fore.RED}{text.center(padding, '=')}{Fore.RESET}"
    )


def report(exercise_no: Union[int, float], report: str) -> None:
    """Generate a report using banners.

    Args:
        exercise_no (float): number of the exercise.
        report (str): message to display.
    """
    print('\n')
    banner()
    banner(f"Exercise {exercise_no} report")
    banner()
    banner(report)
    banner()
    print()
