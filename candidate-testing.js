const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space?\n";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["1) Who was the first American woman in space?", "2) True or false: 5 kilometer == 5000 meters?", "3) (5+3)/2*10=?", "4) Given the array [8, 'Orbit','Trajectory',45], what entry is at index 2?", "5) What is the minimum crew size for the ISS?"];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [questions];
function askForName() {
  const input = require('readline-sync');
  candidateName = input.question('Enter Your Name:')

  // TODO 1.1b: Ask for candidate's name //

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

  ;

  for (let i = 0; i < questions.length; i++) {
    
    candidateAnswers[i] = input.question(questions[i]);
   
  }



}

function gradeQuiz(candidateAnswers) {
  let grade = 0
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  /*console.log(`Correct Answers:${correctAnswers}
Candidate Answers:${candidateAnswers}`);*/
let numCorrect = 0;

  console.log("Candidate Name:", candidateName)

  for (let i = 0; i < correctAnswers.length; i++) {
    console.log(questions[i]);
    console.log("Correct Answer:", correctAnswers[i]);
    console.log("Your Answer:", candidateAnswers[i]);
    console.log("\n");
  

// for (i=0; i<correctAnswers.length;i++) 

if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
  numCorrect++;
} 
} 
  

    grade = (numCorrect / questions.length) * 100;
if (grade < 80) {
    console.log(`Status:FAILED `)
  } else {
    console.log(`Status:PASSED `);
  }
console.log(`Overall Grade: ${grade}% (${numCorrect} of ${questions.length} responses correct)`)
  return grade;
}

function runProgram() {
  askForName()


  // TODO 1.1b: Ask for candidate's name //



  // TODO 1.1c: Ask for candidate's name //



  console.log("Hello,", candidateName)

  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};