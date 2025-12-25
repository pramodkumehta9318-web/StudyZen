export const lessons = [
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
        { question: "Which sentence follows correct S+V+O?", choices: ["Eat I rice.","I eat rice.","Rice eat I.","Eat rice I."], correct_index:1, hint:"Think: Subject + Verb + Object" },
        { question: "Pick the subject in: 'She reads books.'", choices:["reads","books","She","None"], correct_index:2, hint:"Who performs the action?" },
        { question: "Which is NOT a sentence?", choices:["He is tall.","Walking in park.","She sings.","They study."], correct_index:1, hint:"Check for subject + verb" },
        { question: "Complete sentence requires?", choices:["Only verbs","Only nouns","Subject + verb","Only adjectives"], correct_index:2, hint:"Needs subject + action" },
        { question: "Order of basic sentence?", choices:["V + S + O","S + V + O","O + S + V","S + O + V"], correct_index:1, hint:"Who does what to whom" }
      ]
    },
    {
      topic: "Parts of Speech",
      definition: "Parts of speech are categories that classify words according to their function in a sentence.",
      rule: "There are 8 main parts: Noun, Pronoun, Verb, Adjective, Adverb, Preposition, Conjunction, Interjection",
      examples: [
        "Noun: Cat, School, Happiness",
        "Pronoun: He, She, They",
        "Verb: Run, Eat, Speak",
        "Adjective: Beautiful, Tall, Happy",
        "Adverb: Quickly, Very, Well",
        "Preposition: In, On, Under",
        "Conjunction: And, But, Or",
        "Interjection: Wow!, Oh!, Alas!"
      ],
      quiz: [
        { question: "Identify the noun in: 'The dog barked loudly.'", choices: ["barked","dog","loudly","The"], correct_index:1, hint:"A noun is a person, place, thing, or idea." },
        { question: "Choose the pronoun in: 'She is my friend.'", choices: ["She","friend","is","my"], correct_index:0, hint:"Pronouns replace nouns." },
        { question: "Which word is a verb: 'He quickly ran to school.'", choices: ["quickly","ran","school","He"], correct_index:1, hint:"Verb shows an action or state." },
        { question: "Pick the adjective: 'The tall man is kind.'", choices: ["man","tall","kind","is"], correct_index:1, hint:"Adjectives describe nouns." },
        { question: "Find the adverb: 'She sings beautifully.'", choices: ["She","sings","beautifully","None"], correct_index:2, hint:"Adverbs describe verbs, adjectives, or other adverbs." }
      ]
    },
    {
      topic: "Noun",
      definition: "A noun is a word used to name a person, place, thing, or idea.",
      rule: "Nouns can be common, proper, abstract, collective, or countable/uncountable.",
      examples: [
        "Common: book, city, dog",
        "Proper: India, Ram, Everest",
        "Abstract: love, freedom, happiness",
        "Collective: team, family, flock",
        "Countable: apple, chair; Uncountable: water, sugar"
      ],
      quiz: [
        { question: "Which is a proper noun?", choices:["city","apple","India","team"], correct_index:2, hint:"Names of specific people/places" },
        { question: "Pick the abstract noun:", choices:["dog","freedom","table","school"], correct_index:1, hint:"Cannot be touched or seen" },
        { question: "Collective noun in: 'A herd of cows'", choices:["herd","cows","A","of"], correct_index:0, hint:"A group name" },
        { question: "Countable noun example?", choices:["water","chair","milk","sugar"], correct_index:1, hint:"Can be counted" },
        { question: "Uncountable noun example?", choices:["apple","book","sugar","pen"], correct_index:2, hint:"Cannot be counted" }
      ]
    },
    {
      topic: "Pronoun",
      definition: "A pronoun is a word used in place of a noun to avoid repetition.",
      rule: "Types: Personal, Possessive, Reflexive, Demonstrative, Interrogative, Relative, Indefinite.",
      examples: [
        "Personal: I, You, He, She",
        "Possessive: My, Your, His, Her",
        "Reflexive: Myself, Yourself, Himself",
        "Demonstrative: This, That, These, Those",
        "Interrogative: Who, Which, What"
      ],
      quiz: [
        { question: "Identify the personal pronoun: 'He is my brother.'", choices:["He","brother","my","is"], correct_index:0, hint:"Pronouns representing people" },
        { question: "Pick the possessive pronoun: 'This is her book.'", choices:["This","her","book","is"], correct_index:1, hint:"Shows ownership" },
        { question: "Reflexive pronoun in: 'I did it myself.'", choices:["I","it","myself","did"], correct_index:2, hint:"Refers back to the subject" },
        { question: "Demonstrative pronoun: 'These are apples.'", choices:["These","are","apples","None"], correct_index:0, hint:"Points to things" },
        { question: "Interrogative pronoun: 'Who is coming?'", choices:["Who","is","coming","None"], correct_index:0, hint:"Used to ask questions" }
      ]
    },
    {
      topic: "Verb",
      definition: "A verb expresses an action, occurrence, or state of being.",
      rule: "Types: Action, Linking, Helping, Modal; Tenses: Present, Past, Future.",
      examples: [
        "Action: run, write, sing",
        "Linking: is, am, are, become",
        "Helping: have, has, had, will",
        "Modal: can, may, must",
        "Example sentence: 'She runs fast.'"
      ],
      quiz: [
        { question: "Identify the action verb: 'He writes letters.'", choices:["He","writes","letters","None"], correct_index:1, hint:"Shows action" },
        { question: "Linking verb in: 'She is happy.'", choices:["She","is","happy","None"], correct_index:1, hint:"Connects subject with description" },
        { question: "Helping verb in: 'I have eaten.'", choices:["I","have","eaten","None"], correct_index:1, hint:"Helps main verb" },
        { question: "Modal verb: 'You must study.'", choices:["You","must","study","None"], correct_index:1, hint:"Shows necessity/possibility" },
        { question: "Which sentence has a verb?", choices:["Quickly runs","The cat","Beautiful girl","None"], correct_index:0, hint:"Look for action or state" }
      ]
    },
    {
      topic: "Adjective",
      definition: "An adjective describes or modifies a noun or pronoun.",
      rule: "Adjectives answer: What kind? Which one? How many? How much?",
      examples: [
        "Beautiful girl",
        "Tall building",
        "Many books",
        "Red apple",
        "Happy children"
      ],
      quiz: [
        { question: "Pick the adjective: 'The red car is fast.'", choices:["red","car","fast","is"], correct_index:0, hint:"Describes a noun" },
        { question: "Which answers 'How many?': 'Three cats'", choices:["Three","cats","none","all"], correct_index:0, hint:"Number or quantity" },
        { question: "Choose the adjective: 'A beautiful garden'", choices:["A","beautiful","garden","none"], correct_index:1, hint:"Describes noun" },
        { question: "Identify adjective in: 'He is a good boy.'", choices:["He","is","good","boy"], correct_index:2, hint:"Describes boy" },
        { question: "Pick correct adjective: 'She wore a _____ dress.'", choices:["quick","red","run","happy"], correct_index:1, hint:"Describes noun" }
      ]
    },
    {
      topic: "Adverb",
      definition: "An adverb modifies a verb, adjective, or another adverb, describing manner, time, place, frequency, or degree.",
      rule: "Adverbs often end with -ly but not always.",
      examples: [
        "She runs quickly.",
        "He is very tall.",
        "They arrived yesterday.",
        "I will go there.",
        "She sings beautifully."
      ],
      quiz: [
        { question: "Identify the adverb: 'She sings beautifully.'", choices:["She","sings","beautifully","None"], correct_index:2, hint:"Describes how action is done" },
        { question: "Adverb of time: 'He came yesterday.'", choices:["He","came","yesterday","None"], correct_index:2, hint:"When something happens" },
        { question: "Adverb of place: 'They are outside.'", choices:["They","are","outside","None"], correct_index:2, hint:"Where action happens" },
        { question: "Adverb of degree: 'She is very happy.'", choices:["She","very","happy","is"], correct_index:1, hint:"Shows intensity" },
        { question: "Choose adverb modifying verb: 'He runs fast.'", choices:["He","runs","fast","None"], correct_index:2, hint:"How does he run?" }
      ]
    },
    {
      topic: "Preposition",
      definition: "A preposition shows the relationship between a noun/pronoun and other words in a sentence.",
      rule: "Prepositions indicate time, place, direction, cause, manner, etc.",
      examples: [
        "In the room",
        "On the table",
        "Under the bed",
        "Before the meeting",
        "After the game"
      ],
      quiz: [
        { question: "Pick the preposition: 'The book is on the table.'", choices:["book","is","on","table"], correct_index:2, hint:"Shows relation/location" },
        { question: "Which shows time: 'We met before lunch.'", choices:["We","met","before","lunch"], correct_index:2, hint:"Indicates time" },
        { question: "Preposition in: 'He sat under the tree.'", choices:["He","sat","under","tree"], correct_index:2, hint:"Shows place" },
        { question: "Pick correct preposition: 'I go ___ school.'", choices:["to","in","on","at"], correct_index:0, hint:"Direction or place" },
        { question: "Identify preposition: 'She stayed after class.'", choices:["She","stayed","after","class"], correct_index:2, hint:"Shows time" }
      ]
    },
    {
      topic: "Conjunction",
      definition: "A conjunction connects words, phrases, or clauses.",
      rule: "Common types: Coordinating (and, but, or), Subordinating (because, although), Correlative (either…or).",
      examples: [
        "I like tea and coffee.",
        "She is tired but happy.",
        "We can go now or later.",
        "I stayed home because it rained.",
        "Either you come or I will go."
      ],
      quiz: [
        { question: "Identify the conjunction: 'I like tea and coffee.'", choices:["I","like","and","tea"], correct_index:2, hint:"Connects words/phrases" },
        { question: "Pick subordinating conjunction: 'I stayed home because it rained.'", choices:["I","stayed","because","rained"], correct_index:2, hint:"Connects dependent clause" },
        { question: "Correlative conjunction: 'Either you come or I will go.'", choices:["Either...or","you","come","go"], correct_index:0, hint:"Pairs of conjunctions" },
        { question: "Which is coordinating: 'She is happy but tired.'", choices:["She","happy","but","tired"], correct_index:2, hint:"Jo equal words/clauses ko join kare" },
        { question: "Choose correct conjunction: 'We can play ___ we can study.'", choices:["and","or","but","because"], correct_index:1, hint:"Shows alternative" }
      ]
    },
    {
      topic: "Interjection",
      definition: "An interjection expresses sudden feeling or emotion.",
      rule: "It is usually followed by an exclamation mark.",
      examples: [
        "Wow! That’s amazing.",
        "Oh! I forgot my book.",
        "Alas! He failed the exam.",
        "Hurray! We won the match.",
        "Ouch! That hurts."
      ],
      quiz: [
        { question: "Identify the interjection: 'Wow! That’s amazing.'", choices:["Wow","That","amazing","None"], correct_index:0, hint:"Expresses emotion" },
        { question: "Pick interjection in: 'Ouch! That hurts.'", choices:["Ouch","That","hurts","None"], correct_index:0, hint:"Shows sudden feeling" },
        { question: "Choose interjection: 'Hurray! We won.'", choices:["Hurray","We","won","None"], correct_index:0, hint:"Exclamation" },
        { question: "Which shows surprise: 'Oh! I forgot.'", choices:["Oh","I","forgot","None"], correct_index:0, hint:"Sudden emotion" },
        { question: "Interjection in: 'Alas! He failed.'", choices:["Alas","He","failed","None"], correct_index:0, hint:"Expresses regret" }
      ]
    },
    {
      topic: "Tenses",
      definition: "Tense tells us the time of an action or event in a sentence.",
      rule: "Main types: Present, Past, Future. Each has Simple, Continuous, Perfect, Perfect Continuous forms.",
      examples: [
        "Present Simple: I eat rice.",
        "Present Continuous: I am eating rice.",
        "Present Perfect: I have eaten rice.",
        "Present Perfect Continuous: I have been eating rice.",
        "Past Simple: I ate rice.",
        "Past Continuous: I was eating rice.",
        "Past Perfect: I had eaten rice.",
        "Past Perfect Continuous: I had been eating rice.",
        "Future Simple: I will eat rice.",
        "Future Continuous: I will be eating rice.",
        "Future Perfect: I will have eaten rice.",
        "Future Perfect Continuous: I will have been eating rice."
      ],
      quiz: [
        { question: "Which tense shows a habitual action?", choices:["Present Continuous","Present Simple","Past Continuous","Future Perfect"], correct_index:1, hint:"Daily routines or facts" },
        { question: "Identify the Past Continuous tense: 'He was reading a book.'", choices:["He reads","He read","He was reading","He will read"], correct_index:2, hint:"Action ongoing in past" },
        { question: "Which tense is used for completed action in the past?", choices:["Past Perfect","Past Continuous","Present Perfect","Future Simple"], correct_index:0, hint:"Use 'had + past participle'" },
        { question: "Choose the Future Perfect tense: 'By tomorrow, I will have finished the work.'", choices:["I finish","I will finish","I have finished","I will have finished"], correct_index:3, hint:"Action completed in future before another time" },
        { question: "Present Perfect Continuous example:", choices:["I eat rice","I am eating rice","I have been eating rice","I ate rice"], correct_index:2, hint:"Use 'have/has been + verb-ing'" }
      ]
    }
  ];
  