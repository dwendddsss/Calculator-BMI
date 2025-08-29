const weightInput = document.getElementById("weight")
const heightInput = document.getElementById("height")
const resultDiv = document.getElementById("result")
const calculateBtn = document.getElementById("calcuteBtn")

function calculateBtn() {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

}

if (isNaN(weight) || isNaN (height) || weight <= 0 || height <= 0) {
    resultDiv.innerText = "Harap masukkan Berat dan Tinggi badan dengan benar!";
    return;
}

