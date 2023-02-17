from ..header import report

try:
    from ...lesson_1.exercise_1 import a  # type: ignore

except ImportError:
    report(1, "You have not defined variable `a`")

else:
    class TestExercise1:
        def test(self):
            assert a == 1
