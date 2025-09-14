const pin = 2025;

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


    const newBalance = balance + addMoney;
    document.getElementById("balance").innerText = newBalance;


})