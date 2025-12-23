function speak(text) {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-IN";
    speechSynthesis.cancel();
    speechSynthesis.speak(u);
}

function explainMissionWithVoice() {
    const risk = calculateRisk();
    
    speak(` hey student Your current mission failure risk is ${risk} percent. Please complete today's mission.otherwise go to hell `);
}
