class Bank {
  constructor() {
    this.transactions = [];
    this.balance = 0;
  }

  deposit(amount) {
    this.balance += amount;
    const transaction = new Transaction("deposit", amount, this.balance);
    this.transactions.push(transaction);
  }
  withdrawal(amount) {
    this.balance += amount;
    const transaction = new Transaction("withdrawal", amount, this.balance);
    this.transactions.push(transaction);
  }
  print() {
    const printStatement = new BankStatement(this.transactions);
  }
}

class Transaction {
  constructor(_type, _amount, _balance, _date) {
    this.type = _type;
    this.amount = _amount;
    this.balance = _balance;
    this.date = _date;
  }
}
class BankStatement {
  constructor(_transactions) {
    this.transactions = _transactions;
  }
  print() {
    // iterate over transaction for loop
    let state = "";
    for (let transaction of this.transactions) {
      state += transaction.date;
    }
    return state;
  }
}
module.exports = { Transaction, Bank, BankStatement };
