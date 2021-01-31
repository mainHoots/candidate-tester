// Refer to the online book to access detailed instructions for this project.

// URL = https://education.launchcode.org/intro-to-professional-web-dev/assignments/candidateQuiz.html

// Welcome to your first assignment.
// Login and then fork this repl.it
// Add your code here. You can do it!

const input = require('readline-sync');

let name = input.question("Please enter your name: ");

let questionList = [
["True or false: 5000 meters = 5 kilometers ", "True"],
["(5 + 3)/2 * 10 = ? ", 40],
["Given the array, [8, Orbit, Trajectory, 45], what entry is at index 2", "Trajectory"],
["Who was the first American woman in space?", "Sally Ride"],
["What is the new minimum crew size for the International Space Station (ISS)? ", "3"]
];


// console.log(questionList[0][1])

let oneQuestion = input.question(questionList[0][0]);

let lowerCaseAnswer = questionList[0][1].toLowerCase();

if (oneQuestion.toLowerCase() === lowerCaseAnswer) {
  console.log(`"Yes, ${name}, that is correct!"`);
} else {
  console.log(`"Oh dear, ${name}, that is incorrect."`)
}