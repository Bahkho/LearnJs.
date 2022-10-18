const depositButton = document.getElementById("deposit");
const withdrawButton = document.getElementById("withdraw");
const amountInput = document.getElementById("amount");
const balanceDiv = document.getElementById("balance");
const error = document.getElementById("errors");
class Bank {
  constructor(balance) {
    this.balance = balance;
  }

  withdraw(amount) {
    // guard clause
    if (this.balance - amount <= 0) {
      error.innerText = "❌ You cannot withdraw more than what you have!";
      return;
    }

    this.balance -= amount;
    //console.log('withdrew', `$${amount}`)
    //console.log({balance: this.balance})
  }

  deposit(amount) {
    this.balance += amount;
    //console.log('deposited', `$${amount}`)
    //console.log({balance: this.balance})
  }
}
depositButton.onclick = () => {
  const amount = Number(amountInput.value);
  qaziChecking.deposit(amount);
  balanceDiv.innerText = `Balance: $${qaziChecking.balance}`;
};

withdrawButton.onclick = () => {
  const amount = Number(amountInput.value);
  qaziChecking.withdraw(amount);
  balanceDiv.innerText = `Balance: $${qaziChecking.balance}`;
};

const qaziChecking = new Bank(0);
