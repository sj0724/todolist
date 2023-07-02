const startButton = document.querySelector(".input-btn");
const deleteButton = document.querySelector(".dlt-btn");
const checkBox = document.querySelector(".info")

function calculator(){
    const fieldValue = document.querySelector("#to_do_list");

    let paragraph = document.createElement('p');
    paragraph.innerHTML = fieldValue.value;

    tdContainer.appendChild(paragraph);

    fieldValue.value = "";
    fieldValue.focus();

    deleteButton.addEventListener("click", function(){
        tdContainer.removeChild(paragraph);
    });

}

startButton.addEventListener("click", calculator);
