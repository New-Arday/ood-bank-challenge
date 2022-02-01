// imports classes
const { Bank, Transaction, BankStatement } = require("../src/bank");

describe("Bank , Transaction", function () {
  let bank, transactions, bankStatement;

  beforeEach(function () {
    bank = new Bank();
    transactions = new Transaction();
    bankStatement = new BankStatement();
  });
  it("a client makes a deposit of 1000 on 10-01-2012", function () {
    // set up
    const expected = [new Transaction("deposit", 1000, 1000)];
    // execute
    bank.deposit(1000);
    // verify
    const result = bank.transactions;
    expect(result).toEqual(expected);
  });
  it("a client makes a withdrawal of 500 on 14-01-2012", function () {
    // set up
    const expected = [new Transaction("withdrawal", 500, 500)];
    // execute
    bank.withdrawal(500);
    // verify
    const result = bank.transactions;
    expect(result).toEqual(expected);
  });
  it("print date", function () {
    // set up
    const transactions = [new Transaction("credit", 10, 10, "10/10/2022")];
    const statement = new BankStatement(transactions);
    const expected = "10/10/2022";
    const result = statement.print();

    expect(result).toEqual(expected);
  });

  it("print bank statement", function () {
    // set up
    const transactions = [new Transaction("debit", 10, 10, "14/10/2022")];

    const expected = "14/10/2022";
    const statement = new BankStatement(transactions);

    // verify
    const result = statement.print();
    expect(result).toEqual(expected);
  });
});
