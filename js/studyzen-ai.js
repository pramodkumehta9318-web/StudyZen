const aiMessages = document.getElementById("aiMessages");
const aiInput = document.getElementById("aiInput");

function sendAI() {
    const text = aiInput.value.trim();
    if (!text) return;

    addMsg(text, "user");
    aiInput.value = "";

    setTimeout(() => {
        aiReply(text.toLowerCase());
    }, 400);
}

function addMsg(text, type) {
    const div = document.createElement("div");
    div.style.margin = "6px 0";
    div.style.textAlign = type === "user" ? "right" : "left";
    div.innerText = text;
    aiMessages.appendChild(div);
    aiMessages.scrollTop = aiMessages.scrollHeight;
}

function aiReply(msg) {

    let reply = "🤖 Samajh nahi aaya. Help likho commands ke liye.";

    // ---------- STUDY SUGGESTIONS ----------
    if (msg.includes("aaj") && msg.includes("padhna")) {
        reply = "📚 Aaj Maths revise karo + Science numericals. Pomodoro use karo 🔥";
    }

    // ---------- POMODORO CONTROL ----------
    else if (msg.includes("pomodoro start")) {
        reply = "⏱ Pomodoro start kar diya!";
        window.location.href = "pages/focus.html";
    }

    else if (msg.includes("focus mode")) {
        reply = "🎯 Focus Mode open kar raha hoon";
        window.location.href = "pages/focus.html";
    }

    // ---------- STREAK ----------
    else if (msg.includes("streak")) {
        const streak = localStorage.getItem("studyzen-streak") || 0;
        reply = `🔥 Tumhara study streak: ${streak} sessions`;
    }

    // ---------- PLANNER ----------
    else if (msg.includes("planner")) {
        reply = "📘 Study Planner open kar raha hoon";
        window.location.href = "pages/planner.html";
    }

    // ---------- TODO ----------
    else if (msg.includes("todo")) {
        reply = "📝 To-Do list open kar raha hoon";
        window.location.href = "pages/todo.html";
    }

    // ---------- EXPENSE ----------
    else if (msg.includes("expense")) {
        reply = "💰 Expense Tracker open kar raha hoon";
        window.location.href = "pages/expense.html";
    }

    // ---------- TOOLS ----------
    else if (msg.includes("tools") || msg.includes("calculator")) {
        reply = "🧮 Quick Tools open kar raha hoon";
        window.location.href = "pages/tools.html";
    }

    // ---------- MOTIVATION ----------
    else if (msg.includes("motivate")) {
        reply = "🚀 Aaj padhna = kal jeetna. Ab shuru karo!";
    }

    // ---------- HELP ----------
    else if (msg.includes("help") || msg.includes("commands")) {
        reply = `
Commands you can use 👇
• Aaj kya padhna chahiye
• Pomodoro start karo
• Focus mode open karo
• Mera streak kya hai
• Planner kholo
• Todo kholo
• Expense dikhao
• Calculator open karo
• Motivate me
        `;
    }

    addMsg(reply, "bot");
}
