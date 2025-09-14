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
    if (balance < cashOut || cashOut <= 0) {
        alert("Not Enough Balance");
        return;
    }


    const newBalance = balance - cashOut;
    document.getElementById("balance").innerText = newBalance;





    // store transaction history data to array

    const data = {
        name: "Cash Out",
        date: new Date().toLocaleTimeString()
    }

    transactionData.push(data);
    console.log(transactionData);


})