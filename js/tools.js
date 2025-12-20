// 🛠 QUICK TOOLS LOGIC

// -------- Percentage Calculator --------
const calcPercentBtn = document.getElementById("calcPercent");
const percentResult = document.getElementById("percentResult");

calcPercentBtn.addEventListener("click", () => {
    const total = parseFloat(document.getElementById("percentTotal").value);
    const obtained = parseFloat(document.getElementById("percentObtained").value);

    if (isNaN(total) || isNaN(obtained) || total <= 0) {
        percentResult.innerText = "Enter valid numbers!";
        return;
    }

    const percent = (obtained / total) * 100;
    percentResult.innerText = `Result: ${percent.toFixed(2)}%`;
});

// -------- Unit Converter --------
const convertUnitBtn = document.getElementById("convertUnit");
const unitResult = document.getElementById("unitResult");

convertUnitBtn.addEventListener("click", () => {
    const value = parseFloat(document.getElementById("unitInput").value);
    const type = document.getElementById("unitType").value;

    if (isNaN(value)) {
        unitResult.innerText = "Enter a valid number!";
        return;
    }

    let result;
    switch (type) {
        case "kgToGram": result = value * 1000 + " g"; break;
        case "gramToKg": result = value / 1000 + " kg"; break;
        case "meterToCm": result = value * 100 + " cm"; break;
        case "cmToMeter": result = value / 100 + " m"; break;
        case "hourToMin": result = value * 60 + " min"; break;
        case "minToHour": result = value / 60 + " hr"; break;
        default: result = "Invalid conversion";
    }

    unitResult.innerText = `Result: ${result}`;
});

// -------- Age Calculator --------
const calcAgeBtn = document.getElementById("calcAge");
const ageResult = document.getElementById("ageResult");

calcAgeBtn.addEventListener("click", () => {
    const birthDate = new Date(document.getElementById("birthDate").value);
    if (birthDate == "Invalid Date") {
        ageResult.innerText = "Enter valid birth date!";
        return;
    }

    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    ageResult.innerText = `Age: ${age} years`;
});

// -------- Marks → Percentage --------
const marksBtn = document.getElementById("marksPercentBtn");
const marksResult = document.getElementById("marksPercentResult");

marksBtn.addEventListener("click", () => {
    const obtained = parseFloat(document.getElementById("marksObtained").value);
    const total = parseFloat(document.getElementById("marksTotal").value);

    if (isNaN(obtained) || isNaN(total) || total <= 0) {
        marksResult.innerText = "Enter valid numbers!";
        return;
    }

    const percent = (obtained / total) * 100;
    marksResult.innerText = `Percentage: ${percent.toFixed(2)}%`;
});
