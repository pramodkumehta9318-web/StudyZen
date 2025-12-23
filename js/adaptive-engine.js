function getAdaptiveMode() {
    const risk = calculateRisk();
    let mode = "NORMAL";

    if (risk >= 80) mode = "DANGER";
    else if (risk >= 60) mode = "RECOVERY";
    else if (risk < 30) mode = "BEAST";

    localStorage.setItem("studyzen-mode", mode);
    return mode;
}

function applyAdaptiveMode() {
    alert("⚡ MODE: " + getAdaptiveMode());
}
