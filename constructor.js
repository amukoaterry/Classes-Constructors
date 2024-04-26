// 1.)create a JavaScript class or function constructor for representing cars in their inventory 
// and another one for representing rental information. 

class Car {
    constructor(make, model, year, isAvailable) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.isAvailable = isAvailable;
    }
    toggleAvailability() {
        this.isAvailable = !this.isAvailable;
    }
}
const jeep = new Car('Range', 'Toyota', 2021, 'true')
console.log({jeep});
// Rental class
class Rental {
    constructor(car, renterName, rentalStartDate, rentalEndDate) {
        this.car = car;
        this.renterName = renterName;
        this.rentalStartDate = new Date(rentalStartDate);
        this.rentalEndDate = new Date(rentalEndDate);
    }
    calculateRentalDuration() {
        const  differenceInMilliseconds = this.rentalEndDate - this.rentalStartDate;
        const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
        return differenceInDays;
    }
}
const uber = new Rental ('Tomford', 'Mitchell', "2022-4-11", "2024-4-6")
console.log({uber});


// create two JavaScript classes: Question and Quiz.
//  The Question class will represent individual questions, 
// and the Quiz class will manage a collection of questions and the user's progress.


class Question {
    constructor(text, options, correctAnswer) {
        this.text = text;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }
    checkAnswer(userAnswer) {
        if(userAnswer != this.correctAnswer){
            return false;
        }
        return true;
    }
}
// Quiz class
class Quiz {
    constructor() {
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
    }
    addQuestion(question) {
        this.questions.push(question);
    }
    nextQuestion() {
        this.currentQuestionIndex++;
    }
    submitAnswer(userAnswer) {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    if (currentQuestion.checkAnswer(userAnswer)) {
        this.score++;
    }
    this.nextQuestion();
    }
}
const quiz = new Quiz();
 console.log({quiz});
quiz.addQuestion(new Question("Where do christians go to pray?", ["Temple", "Church", "Caves", "Mosque"], "Houses"));
quiz.addQuestion(new Question("What is the capital city of German", ["Nairobi", "Washington", "Berlin", "Cape Town"], "Kampala"));
quiz.submitAnswer("Church");
quiz.submitAnswer("Berlin");
console.log("Score: " + quiz.score);