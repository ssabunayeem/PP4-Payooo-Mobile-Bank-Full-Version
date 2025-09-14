document.getElementById("btn-login").addEventListener("click", function (event) {
    event.preventDefault();

    const mobileNumber = "01673722032";
    const pinNumber = "2025";

    const inputNumber = document.getElementById("mobile-number").value;
    const inputPin = document.getElementById("pin-number").value;

    if (inputNumber === mobileNumber && inputPin === pinNumber) {
        window.location.href = "./home.html";
    }
    else {
        alert("Wrong Number or PIN");
    }
}) 