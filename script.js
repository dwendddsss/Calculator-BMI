const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const resultDiv = document.getElementById("result");
const calculateBtn = document.getElementById("calculateBtn");

function calculateBMI() {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        resultDiv.innerText = "⚠️ Harap masukkan Berat dan Tinggi badan dengan benar!";
        return;
    }

    const bmi = weight / ((height / 100) ** 2);

    let category = "";
    if (bmi < 18.5) {
        category = "Berat Badan Kurang";
    } else if (bmi < 25) {
        category = "Berat Badan Normal";
    } else if (bmi < 30) {
        category = "Kelebihan Berat Badan";
    } else {
        category = "Obesitas";
    }

    resultDiv.innerText = `BMI Anda : ${bmi.toFixed(1)}\nKategori: ${category}`;
}

calculateBtn.addEventListener("click", calculateBMI);
