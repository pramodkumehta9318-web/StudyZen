function calculateRisk() {
    let risk = 0;

    const last = localStorage.getItem("studyzen-last-study-date");
    if (!last) risk += 40;
    else {
        const diff = (new Date() - new Date(last)) / 86400000;
        if (diff >= 3) risk += 40;
        else if (diff >= 2) risk += 25;
    }

    const breaks = Number(localStorage.getItem("studyzen-break-count")) || 0;
    if (breaks > 6) risk += 20;

    const streak = Number(localStorage.getItem("studyzen-streak")) || 0;
    if (streak === 0) risk += 20;

    return Math.min(risk, 100);
}

function showRiskAlert() {
    const r = calculateRisk();
    if (r >= 60) alert(`⚠️ Mission Failure Risk: ${r}%`);
}
