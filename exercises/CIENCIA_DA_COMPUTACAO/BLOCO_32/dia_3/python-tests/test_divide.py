import pytest
from divide import divide


def test_divide_throws_exception_when_dividing_by_zero():
    with pytest.raises(ZeroDivisionError, match="division by zero"):
        divide(2, 0)
