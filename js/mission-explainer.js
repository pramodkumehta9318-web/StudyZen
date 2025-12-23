function explainMission() {
    const risk = calculateRisk();
    let reasons = [];

    if (risk >= 70) reasons.push("High risk detected");
    if ((localStorage.getItem("studyzen-streak") || 0) == 0)
        reasons.push("Streak is zero");

    const manual = localStorage.getItem("studyzen-manual-reason");
    if (manual) reasons.push("User note: " + manual);

    alert("🤖 Mission Reasoning:\n\n" + reasons.join("\n"));
}
