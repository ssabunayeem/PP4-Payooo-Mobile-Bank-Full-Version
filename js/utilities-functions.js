function getInputValue(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getInnerText(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}





// -----------------show from section show button hover effect ------- toggle function-------------


// hide all and show selected from 
function showSectionById(id) {
    const allForm = document.getElementsByClassName("form");

    for (const form of allForm) {
        form.classList.add("hidden");
    }

    document.getElementById(id).classList.remove("hidden");

}



// hover blue effect button
function btnHover(id) {
    const allBtn = document.getElementsByClassName("form-btn");

    for (const btn of allBtn) {
        btn.classList.remove("border-blue-500", "bg-blue-50")
        btn.classList.add("border-gray-300")
    }

    document.getElementById(id).classList.remove("border-gray-300");
    document.getElementById(id).classList.add("border-blue-500", "bg-blue-50");
}



// log out

document.getElementById("log-out").addEventListener("click", function () {
    window.location.href = "../index.html"
})