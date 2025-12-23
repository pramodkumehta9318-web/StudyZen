function generateDailyMission() {
    const risk = calculateRisk();
    let mission = "🚀 Complete 1 Pomodoro";

    if (risk >= 70) mission = "🔥 Recovery: 2 Pomodoro + revise weak subject";
    else if (risk >= 40) mission = "⚡ Stabilize: 1 Pomodoro + revise 20 min";

    localStorage.setItem("studyzen-daily-mission", mission);
    localStorage.setItem("studyzen-mission-date", new Date().toDateString());
    return mission;
}

function showDailyMission() {
    const today = new Date().toDateString();
    if (localStorage.getItem("studyzen-mission-date") === today) return;

    alert("🎯 DAILY MISSION:\n\n" + generateDailyMission());
}
