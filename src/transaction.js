const Bank = require("../src/bank");
class Transaction {
  constructor(_type, _amount, _balance) {
    this.type = _type;
    this.amount = _amount;
    this.balance = _balance;
    this.date = new Date();
  }
}
module.export = Transaction;
