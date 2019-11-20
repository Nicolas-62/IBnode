// javascript 6

class Person{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    hello(){
        return `Hello ${this.name}, I'm ${this.age} years old`;
    }
}
person1 = new Person("nico", "25");
console.log(person1.hello());

const now = moment();
const numOfDaysThisMonth = moment(now).daysInMonth();
const mothsList = moment.months();
const selectedDay = moment().date(13).format("MMM Do YY");
console.log(now.format('dd'));
console.log(`Jour du mois selectionné : ${selectedDay}`);