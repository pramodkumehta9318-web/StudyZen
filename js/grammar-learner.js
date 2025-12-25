console.log("Grammar Learner JS Loaded ✅");

const lessons = [
  {
    topic: "Sentence Structure",
    definition: "A sentence is a group of words that makes complete sense.",
    rule: "Subject + Verb + Object",
    examples: [
      "I eat rice.",
      "She reads books.",
      "He plays cricket.",
      "We watch TV.",
      "They like music."
    ],
    quiz: [
      {
        question: "Which sentence follows the correct basic sentence structure?",
        choices: ["Eat I rice.","I eat rice.","Rice eat I.","Eat rice I."],
        correct_index: 1,
        hint: "Think: Subject + Verb + Object"
      },
      {
        question: "Which is a complete sentence?",
        choices: ["Because hungry.","He runs fast.","When came.","Blue."],
        correct_index: 1,
        hint: "Complete sentence must have subject and verb."
      },
      {
        question: "Pick the subject in: 'She reads books.'",
        choices: ["reads","books","She","None"],
        correct_index: 2,
        hint: "Who is performing the action?"
      },
      {
        question: "Order to form basic sentence:",
        choices: ["V + S + O","S + V + O","O + S + V","S + O + V"],
        correct_index: 1,
        hint: "Who does what to whom."
      },
      {
        question: "Which is NOT a sentence?",
        choices: ["He is tall.","Walking in park.","She sings.","They study."],
        correct_index: 1,
        hint: "Check for subject + verb"
      }
    ]
  },
  {
    topic: "Present Simple Tense",
    definition: "Used for daily habits and general facts.",
    rule: "Subject + base verb (s/es for he, she, it)",
    examples: [
      "I wake up early.",
      "She goes to school.",
      "He studies daily.",
      "We speak English.",
      "They live here."
    ],
    quiz: [
      {
        question: "Which tense is used for daily routines?",
        choices: ["Past","Present Continuous","Present Simple","Future"],
        correct_index: 2,
        hint: "Daily habits/facts"
      },
      {
        question: "Choose the Present Simple sentence:",
        choices: ["I am eating.","I will eat.","I eat food.","I ate food."],
        correct_index: 2,
        hint: "No am/is/are, no did/will"
      },
      {
        question: "Add 's' for which subject?",
        choices: ["I","You","He","We"],
        correct_index: 2,
        hint: "Third person singular"
      },
      {
        question: "Which is correct?",
        choices: ["She go to school.","She goes to school.","She going to school.","She gone to school."],
        correct_index: 1,
        hint: "Third person singular"
      },
      {
        question: "Present Simple negative of 'They play football' is:",
        choices: ["They don't plays football.","They doesn't play football.","They don't play football.","They not play football."],
        correct_index: 2,
        hint: "Use don't/doesn't + base verb"
      }
    ]
  },
  {
    topic: "Present Continuous Tense",
    definition: "Used for actions happening now or around now.",
    rule: "am/is/are + verb + ing",
    examples: [
      "I am studying.",
      "She is cooking.",
      "He is playing.",
      "We are learning.",
      "They are talking."
    ],
    quiz: [
      {
        question: "Which shows Present Continuous?",
        choices: ["I study now.","I am study now.","I am studying now.","I studied now."],
        correct_index: 2,
        hint: "Look for am/is/are + verb+ing"
      },
      {
        question: "Choose correct form:",
        choices: ["She are cooking.","She is cooking.","She am cooking.","She cooking."],
        correct_index: 1,
        hint: "Third person singular uses 'is'"
      },
      {
        question: "Negative of 'He is playing' is:",
        choices: ["He not is playing.","He isn't playing.","He don't playing.","He not playing."],
        correct_index: 1,
        hint: "Use isn't/aren't for negative"
      },
      {
        question: "Use Present Continuous for:",
        choices: ["Permanent job","Habit","Action right now","Past event"],
        correct_index: 2,
        hint: "Action happening now"
      },
      {
        question: "Which is wrong?",
        choices: ["They are talk.","They are talking.","They aren't talking.","Are they talking?"],
        correct_index: 0,
        hint: "Check verb+ing form"
      }
    ]
  },
  {
    topic: "Past Simple Tense",
    definition: "Used for actions completed in the past.",
    rule: "Verb (2nd form) or verb+ed for regular verbs",
    examples: [
      "I ate food.",
      "She went home.",
      "He played well.",
      "We watched movie.",
      "They slept early."
    ],
    quiz: [
      {
        question: "Which is Past Simple?",
        choices: ["I eat rice.","I am eating rice.","I ate rice.","I will eat rice."],
        correct_index: 2,
        hint: "Completed action in past"
      },
      {
        question: "Past of 'go' is:",
        choices: ["goed","went","gone","goes"],
        correct_index: 1,
        hint: "Irregular verb"
      },
      {
        question: "Choose correct sentence:",
        choices: ["She watched movie yesterday.","She watches movie yesterday.","She watching movie yesterday.","She watch movie yesterday."],
        correct_index: 0,
        hint: "Past verbs for past time"
      },
      {
        question: "Negative past simple uses:",
        choices: ["did + not + base verb","don't + verb","not + verb+ing","hasn't + verb"],
        correct_index: 0,
        hint: "Use did not + base verb"
      },
      {
        question: "Time expression often with Past Simple?",
        choices: ["now","tomorrow","yesterday","today"],
        correct_index: 2,
        hint: "When it already happened"
      }
    ]
  },
  {
    topic: "Modal Verbs",
    definition: "Modal verbs show ability, advice, permission or duty.",
    rule: "can / should / must + base verb",
    examples: [
      "I can speak English.",
      "You should study.",
      "We must focus.",
      "He can help you.",
      "You should not worry."
    ],
    quiz: [
      {
        question: "Which modal shows ability?",
        choices: ["should","must","can","would"],
        correct_index: 2,
        hint: "Shows capability"
      },
      {
        question: "Use for advice:",
        choices: ["can","should","must","will"],
        correct_index: 1,
        hint: "A gentle suggestion"
      },
      {
        question: "Which is correct?",
        choices: ["You can to go.","You must study.","You shoulded try.","You canning do it."],
        correct_index: 1,
        hint: "Modal + base verb"
      },
      {
        question: "Negative of 'You must go' is:",
        choices: ["You must not go","You don't must go","You mustn't go","Both 1 and 3"],
        correct_index: 3,
        hint: "Both forms are acceptable"
      },
      {
        question: "Modal verbs are followed by:",
        choices: ["infinitive with to","base verb","verb+ing","past participle"],
        correct_index: 1,
        hint: "Modal + base form"
      }
    ]
  },
  // ...tum is pattern ko follow karke aur 15–20 lessons add kar sakte ho
  
];

let index = 0;

// UI binding aur quiz logic same jaisa maine pehle diya tha


/* UI elements */
const topicEl = () => document.getElementById("topic");
const defEl = () => document.getElementById("definition");
const ruleEl = () => document.getElementById("rule");
const examplesEl = () => document.getElementById("examples");

const startQuizBtn = document.getElementById("startQuizBtn");
const nextLessonBtn = document.getElementById("nextLessonBtn");
const quizArea = document.getElementById("quizArea");
const questionBox = document.getElementById("questionBox");
const choicesBox = document.getElementById("choicesBox");
const hintText = document.getElementById("hintText");
const quizFooter = document.getElementById("quizFooter");
const scoreText = document.getElementById("scoreText");
const proceedBtn = document.getElementById("proceedBtn");
const retryBtn = document.getElementById("retryBtn");

function loadLesson() {
    const lesson = lessons[index];
    topicEl().innerText = lesson.topic;
    defEl().innerText = "📌 Definition: " + lesson.definition;
    ruleEl().innerText = "📘 Rule: " + lesson.rule;

    examplesEl().innerHTML = "";
    lesson.examples.forEach(example => {
        const li = document.createElement("li");
        li.innerText = "✔️ " + example;
        examplesEl().appendChild(li);
    });

    // Hide quiz area on lesson load
    quizArea.style.display = "none";
    quizFooter.style.display = "none";
    hintText.style.display = "none";
    scoreText.innerText = "";
}

function nextLesson() {
    index++;
    if (index >= lessons.length) {
        index = 0;
        alert("🎉 You completed all lessons! Starting again from first lesson.");
    }
    loadLesson();
}

/* --- QUIZ LOGIC --- */
let currentQuiz = null;
let qIndex = 0;
let score = 0;
let quizActive = false;

function startQuizForCurrentLesson() {
    currentQuiz = lessons[index].quiz || [];
    if (!currentQuiz.length) {
        alert("No quiz available for this lesson.");
        return;
    }
    qIndex = 0;
    score = 0;
    quizActive = true;
    quizArea.style.display = "block";
    quizFooter.style.display = "none";
    hintText.style.display = "none";
    renderQuizQuestion();
}

function renderQuizQuestion() {
    const q = currentQuiz[qIndex];
    questionBox.innerText = `${qIndex + 1}. ${q.question}`;
    choicesBox.innerHTML = "";
    hintText.style.display = "none";

    q.choices.forEach((c, i) => {
        const btn = document.createElement("button");
        btn.className = "choice-btn";
        btn.innerText = c;
        btn.dataset.index = i;
        btn.onclick = () => handleChoice(i);
        choicesBox.appendChild(btn);
    });
}

function handleChoice(selected) {
    if (!quizActive) return;
    const q = currentQuiz[qIndex];
    // disable all buttons
    const btns = choicesBox.querySelectorAll("button");
    btns.forEach(b => b.disabled = true);

    // mark correct/incorrect
    const correctIndex = q.correct_index;
    btns.forEach(b => {
        const idx = Number(b.dataset.index);
        if (idx === correctIndex) b.classList.add("choice-correct");
        if (idx === selected && idx !== correctIndex) b.classList.add("choice-wrong");
    });

    if (selected === correctIndex) {
        score++;
    } else {
        // show hint when wrong
        hintText.innerText = "Hint: " + q.hint;
        hintText.style.display = "block";
    }

    // move to next question after short delay
    setTimeout(() => {
        qIndex++;
        if (qIndex < currentQuiz.length) {
            renderQuizQuestion();
        } else {
            finishQuiz();
        }
    }, 900);
}

function finishQuiz() {
    quizActive = false;
    // show results
    scoreText.innerText = `You scored ${score} / ${currentQuiz.length}`;
    quizFooter.style.display = "flex";
    proceedBtn.onclick = () => {
        // proceed to next lesson and hide quiz
        nextLesson();
    };
    retryBtn.onclick = () => {
        startQuizForCurrentLesson();
    };
}

/* event listeners */
startQuizBtn.addEventListener("click", () => {
    startQuizForCurrentLesson();
});
/* nextLessonBtn already wired inline to skip */

loadLesson();
