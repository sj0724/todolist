const startButton = document.querySelector(".input-btn");
const deleteButton = document.querySelector(".dlt-btn");

function calculator(){
    const fieldValue = document.querySelector("#to-do-list");
    const fieldResult = document.querySelector(".list-result");
    if(fieldValue.value == ""){
        alert('입력되지 않았습니다.');
        fieldValue.focus();
        return false;
    }
    fieldResult.innerText = fieldValue.value;
}

function delate(){
}

startButton.addEventListener("click", calculator);
deleteButton.addEventListener("click", delate);