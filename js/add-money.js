const pin = 2025;
const transactionData = [];

//  add money
document.getElementById("add-money-btn").addEventListener("click", function (event) {
    event.preventDefault();

    const bank = getInputValue("bank");
    const accountNumber = document.getElementById("account-number").value;
    const addMoney = getInputValue("add-amount");
    const pinNumber = getInputValue("add-pin");
    const balance = getInnerText("balance");


    if (pinNumber !== pin) {
        alert("Invalid Pin Number");
        return;
    }
    if (accountNumber.length !== 11) {
        alert("Invalid Account Number");
        return;
    }
    if (addMoney <= 0) {
        alert("Invalid Amount");
        return;
    }


    const newBalance = balance + addMoney;
    document.getElementById("balance").innerText = newBalance;



    // store transaction history data to array

    const data = {
        name: "Add Money",
        date: new Date().toLocaleTimeString()
    }

    transactionData.push(data);
    console.log(transactionData);


})