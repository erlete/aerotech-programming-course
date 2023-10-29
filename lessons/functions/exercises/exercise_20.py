def can_buy(cost: float, balance: float = 0.0) -> bool:
    """Show if you can buy a product.

    Args:
        cost (float): the cost of the product(s).
        balance (float): the money you have.
    Returns:
        bool: the result of comparing the cost and your balance.
    """
    return cost <= balance
