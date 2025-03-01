//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li`;
}


const stepsHtml = steps.map(listTemplate);// use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join();// set the innerHTML


const grades = ['A', 'B', 'A'];

function getGPA(grade) {
    if (grade === 'A') return 4;
    else if (grade === 'B') return 3;
    else if (grade === 'C') return 2;
    else return 1;
}

const gpas = grades.map(getGPA);
const allGPApoints = gpas.reduce( (total,currentItem) => total + currentItem);
const overallGPA = allGPApoints/gpas.length;

const technicallyFruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const smallFruits = technicallyFruits.filter((short) => short.length < 6);

const numbers = [12, 34, 21, 54];
const luckyNumber = 21;
const whereNumber = numbers.indexOf(luckyNumber);