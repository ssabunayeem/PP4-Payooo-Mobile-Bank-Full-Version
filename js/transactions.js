document.getElementById("show-transactions-history-button").addEventListener("click", function () {

    const transactionContainer = document.getElementById("transaction-container");

    transactionContainer.innerText = "";



    for (const data of transactionData) {

        const div = document.createElement("div");

        div.innerHTML = `
        <div class=" bg-white rounded-xl p-3 flex justify-between items-center mt-3">
              <div class="flex items-center">
                  <div class="p-3 rounded-full bg-[#f4f5f7]">
                    <img src="./assets/wallet1.png" class="mx-auto" alt="" />
                  </div>
                  <div class="ml-3">
                    <h1>${data.name}</h1>
                    <p>${data.date}</p>
                  </div>
              </div>
      
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>

        `

        transactionContainer.appendChild(div);

    }
})

