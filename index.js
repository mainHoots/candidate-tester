// Refer to the online book to access detailed instructions for this project.

// URL = https://education.launchcode.org/intro-to-professional-web-dev/assignments/candidateQuiz.html

// Welcome to your first assignment.
// Login and then fork this repl.it
// Add your code here. You can do it!

const input = require('readline-sync');

let name = input.question("Please enter your name: ");

console.log(`Candidate Name: ${name}`);

let quizQuestionsAnswers = [
  
  ["1) True or false: 5000 meters = 5 kilometers ", "True"],
  ["2) (5 + 3)/2 * 10 = ? ", 40],
  ["3) Given the array, [8, Orbit, Trajectory, 45], what entry is at index 2? ", "Trajectory"],
  ["4) Who was the first American woman in space? ", "Sally Ride"],
  ["5) What is the new minimum crew size for the International Space Station (ISS)? ", "3"],

];

let candidateAnswers = [];

let candidateLowerAnswer = [];

let quizAnswers = [];

let questionCount = quizQuestionsAnswers.length;

let correctAnswerCount = 0;

let results = [];

// console.log(quizQuestionsAnswers);

// console.log(quizQuestionsAnswers.length);

// console.table(quizQuestionsAnswers);

for (i = 0; i < quizQuestionsAnswers.length; i++) {
  
  candidateAnswers[i] = input.question(quizQuestionsAnswers[i]);
  candidateLowerAnswer.push(candidateAnswers[i].toLowerCase());
  quizAnswers.push(quizQuestionsAnswers[i].join().toLowerCase());
  if (candidateLowerAnswer[i] === quizAnswers[i]) {
    
    correctAnswerCount++;
  
  };

};

for (i = 0; i < quizQuestionsAnswers.length; i++) {
  results.push(quizQuestionsAnswers[i].join());
};

let overallGrade = (correctAnswerCount) / (questionCount) * 100;

console.log(`>>> Overall Grade: ${overallGrade}% (${correctAnswerCount} of ${questionCount} responses correct) <<<`)

if (overallGrade >= 80) {
  console.log(">>> Status: PASSED <<<");
} else {
  console.log(">>> Status: FAILED <<<");
};

console.log(results);

// console.log(quizAnswers);

// console.log(quizQuestionsAnswers[0][1])

// console.log(oneQuestion);

// let lowerCaseAnswer = quizQuestionsAnswers[0][1].toLowerCase();

// if (oneQuestion.toLowerCase() === lowerCaseAnswer) {
//   console.log(`"Yes, ${name}, that is correct!"`);
// } else {
//   console.log(`"Oh dear, ${name}, that is incorrect."`)
// }

