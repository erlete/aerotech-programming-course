from .header import report

try:
    from ..exercise_1 import my_first_variable  # type: ignore

except ImportError:
    report(1, "You have not defined variable `my_first_variable`")

else:

    class TestExercise1:

        def test(self):
            assert my_first_variable == 69, "The value of `my_first_variable` is not correct"
