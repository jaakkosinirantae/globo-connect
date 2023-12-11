// Filename: complexCode.js
// Description: This complex code demonstrates a sophisticated and elaborate implementation of a banking system.

// Define Account class
class Account {
  constructor(accountNumber, accountHolder, balance) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  // Deposit funds into account
  deposit(amount) {
    this.balance += amount;
    return `Successfully deposited ${amount} into account ${this.accountNumber}. New balance: ${this.balance}`;
  }

  // Withdraw funds from account
  withdraw(amount) {
    if (this.balance < amount) {
      return `Insufficient funds in account ${this.accountNumber}. Current balance: ${this.balance}`;
    }
    this.balance -= amount;
    return `Successfully withdrew ${amount} from account ${this.accountNumber}. New balance: ${this.balance}`;
  }

  // Transfer funds to another account
  transfer(amount, targetAccount) {
    if (this.balance < amount) {
      return `Insufficient funds in account ${this.accountNumber}. Current balance: ${this.balance}`;
    }

    this.balance -= amount;
    targetAccount.balance += amount;
    return `Successfully transferred ${amount} from account ${this.accountNumber} to account ${targetAccount.accountNumber}`;
  }
}

// Define Bank class
class Bank {
  constructor(bankName) {
    this.bankName = bankName;
    this.accounts = [];
  }

  // Create a new account
  createAccount(accountNumber, accountHolder, initialDeposit) {
    const newAccount = new Account(accountNumber, accountHolder, initialDeposit);
    this.accounts.push(newAccount);
    return `New account created in bank ${this.bankName}. Account number: ${newAccount.accountNumber}`;
  }

  // Find account by account number
  findAccount(accountNumber) {
    const account = this.accounts.find((a) => a.accountNumber === accountNumber);
    if (!account) {
      return `Account ${accountNumber} not found in bank ${this.bankName}`;
    }
    return account;
  }
}

// Create a new bank
const myBank = new Bank("My Bank");

// Create accounts
console.log(myBank.createAccount("A001", "Alice", 1000));
console.log(myBank.createAccount("B002", "Bob", 500));
console.log(myBank.createAccount("C003", "Charlie", 2000));

// Deposit into Alice's account
const aliceAccount = myBank.findAccount("A001");
console.log(aliceAccount.deposit(500));

// Withdraw from Charlie's account
const charlieAccount = myBank.findAccount("C003");
console.log(charlieAccount.withdraw(100));

// Transfer funds from Bob to Alice
const bobAccount = myBank.findAccount("B002");
console.log(bobAccount.transfer(200, aliceAccount));

// Print final account balances
console.log("Final account balances:");
myBank.accounts.forEach((account) => {
  console.log(`Account ${account.accountNumber}: ${account.balance}`);
});