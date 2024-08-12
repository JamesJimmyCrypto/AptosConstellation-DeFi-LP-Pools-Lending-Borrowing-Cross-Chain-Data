module LendingBorrowing {
    use 0x1::Signer;
    use 0x1::Token;

    // A struct to track borrowed assets
    struct Loan {
        collateral: Token,
        borrowed: Token,
        amount: u64,
    }

    public fun borrow(
        owner: &signer,
        collateral: Token,
        borrowed: Token,
        amount: u64,
    ): Loan {
        assert!(Token::is_valid(&collateral), 1);
        assert!(Token::is_valid(&borrowed), 2);

        Loan {
            collateral,
            borrowed,
            amount,
        }
    }

    public fun repay(
        loan: &mut Loan,
        amount: u64,
    ) {
        loan.amount = loan.amount - amount;
    }
}
