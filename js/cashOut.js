//  cash Out
document.getElementById("withdraw-btn").addEventListener("click", function (event) {
    event.preventDefault();

    const agentNumber = document.getElementById("agent-number").value;
    const cashOut = getInputValue("withdraw-amount");
    const pinNumber = getInputValue("cash-out-pin");
    const balance = getInnerText("balance");


    if (pinNumber !== pin) {
        alert("Invalid Pin Number");
        return;
    }
    if (agentNumber.length !== 11) {
        alert("Invalid Agent Number");
        return;
    }
    if (balance < cashOut) {
        alert("Not Enough Balance");
        return;
    }


    const newBalance = balance - cashOut;
    document.getElementById("balance").innerText = newBalance;


})