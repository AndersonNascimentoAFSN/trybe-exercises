from is_even import is_even


def test_is_even_if_number_is_even_returns_true():
    assert is_even(2) is True


def test_is_even_if_number_is_old_returns_false():
    assert is_even(1) is False
