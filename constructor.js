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


