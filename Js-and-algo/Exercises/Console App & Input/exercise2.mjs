import promptSync from "prompt-sync";
const prompt = promptSync();


const questions = [
  { question: "Who is your best superhero? ", answer: "IronMan" },
  { question: "What is your dream car ?", answer: "BMW" },
  { question: "How old am I ?", answer: "26" }
]
let score = 0;

for (let i = 0; i < questions.length; i++) {
  const userInput = prompt(`${i + 1}) ${questions[i].question} `);
  const userAnswer = userInput.trim().toLowerCase();
  const correctAnswer = questions[i].answer.toLowerCase();

  if (userAnswer === correctAnswer) {
    console.log("Correct !");
    score++;
  } else {
    console.log(`Wrong "${questions[i].answer}"`);
  }
}


console.log(`\n Your finale score is ${score} / ${questions.length}`);