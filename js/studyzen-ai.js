// 🤖 STUDYZEN AI – RULE BASED CONTROLLER

function sendAI() {
    const input = document.getElementById("aiInput");
    const chatBox = document.getElementById("aiMessages");

    let msg = input.value.trim().toLowerCase();
    if (!msg) return;

    // show user message
    chatBox.innerHTML += `<div style="text-align:right;margin:6px 0;">${msg}</div>`;
    input.value = "";

    let reply = "🤖 Samajh nahi aaya. 'help' likho commands ke liye.";

    /* ---------------- STUDY SUGGESTIONS ---------------- */
    if (msg.includes("aaj") && msg.includes("padhna")) {
        reply = "📚 Aaj Maths revise karo + Science numericals. Pomodoro use karo 🔥";
    }

    /* ---------------- POMODORO / FOCUS ---------------- */
    else if (msg.includes("pomodoro start")) {
        reply = "⏱ Pomodoro start kar raha hoon!";
        setTimeout(() => {
            location.href = "pages/focus.html";
        }, 500);
    }

    else if (msg.includes("focus mode")) {
        reply = "🎯 Focus Mode open ho raha hai";
        setTimeout(() => {
            location.href = "pages/focus.html";
        }, 500);
    }

    /* ---------------- PLANNER ---------------- */
    else if (msg.includes("planner")) {
        reply = "📘 Study Planner open kar raha hoon";
        setTimeout(() => {
            location.href = "pages/planner.html";
        }, 500);
    }

    /* ---------------- TODO ---------------- */
    else if (msg.includes("todo")) {
        reply = "📝 To-Do List open kar raha hoon";
        setTimeout(() => {
            location.href = "pages/todo.html";
        }, 500);
    }

    /* ---------------- EXPENSE ---------------- */
    else if (msg.includes("expense")) {
        reply = "💰 Expense Tracker open kar raha hoon";
        setTimeout(() => {
            location.href = "pages/expense.html";
        }, 500);
    }

    /* ---------------- TOOLS ---------------- */
    else if (msg.includes("tool") || msg.includes("calculator")) {
        reply = "🧮 Quick Tools open kar raha hoon";
        setTimeout(() => {
            location.href = "pages/tools.html";
        }, 500);
    }

    /* ---------------- STREAK ---------------- */
    else if (msg.includes("streak")) {
        const streak = localStorage.getItem("studyzen-streak") || 0;
        reply = `🔥 Tumhara study streak: ${streak}`;
    }

    /* ---------------- 🎯 DAILY MISSION COMMAND ---------------- */
    else if (
        msg.includes("mission")
    ) {
        const mission = generateDailyMission();

        reply = `🎯 Today's Mission:\n\n${mission}`;

        // explain WHY (text)
        setTimeout(() => {
            explainMission();
        }, 600);

        // explain WHY (voice)
        setTimeout(() => {
            explainMissionWithVoice();
        }, 1400);
    }

    /* ---------------- MOTIVATION ---------------- */
    else if (msg.includes("motivate")) {
        reply = "🔥 Yaad rakh: Roz thoda padhna > kabhi na padhna. Ab shuru kar!";
    }

    /* ---------------- HELP ---------------- */
    else if (msg.includes("help") || msg.includes("command")) {
        reply = `
🤖 STUDYZEN COMMANDS 👇

• Aaj kya padhna chahiye
• Pomodoro start karo
• Focus mode open karo
• Planner kholo
• Todo kholo
• Expense dikhao
• Tools / Calculator open karo
• Mera streak kya hai
• Mission generate karo
• Aaj ka mission batao
• Motivate me
        `;
    }

    // show bot reply
    chatBox.innerHTML += `<div style="margin:6px 0;">${reply}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
}
