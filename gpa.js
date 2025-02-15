function getGrades(inputSelector) {
    // get grades from the input box
    const grades = document.querySelector(inputSelector).value;
    // split them into an array (String.split(','))
    const gradesArray = grades.split(',');
    // clean up any extra spaces, and make the grades all uppercase. (Array.map())
    const finalGradeArray = gradesArray.map((grade) => grade.trim().toUpperCase());
    // return grades
    return finalGradeArray;
  }
  
  function lookupGrade(grade) {
    // converts the letter grade to it's GPA point value and returns it
    if (grade === 'A') return 4;
    else if (grade === 'B') return 3;
    else if (grade === 'C') return 2;
    else return 1;
  }
  
  function calculateGpa(grades) {
    // gets a list of grades passed in
    // convert the letter grades to gpa points
    const gpas = grades.map((grade) => lookupGrade(grade));
    // calculates the GPA
    const allGPApoints = gpas.reduce( (total,currentItem) => total + currentItem);
    // return the GPA
    return Math.round((allGPApoints/gpas.length) * 100) / 100;
  }
  
  function outputGpa(gpa, selector) {
    // takes a gpa value and displays it in the HTML in the element identified by the selector
    document.querySelector(selector).innerText = gpa;
  }
  
  function clickHandler() {
      // when the button in our html is clicked:
    // get the grades entered into the input
    const grades = getGrades("#grades");
    // calculate the gpa from the grades entered
    const calculated = calculateGpa(grades);
    // display the gpa
    outputGpa(calculated, "#output");
  }

  
document.querySelector("#submitButton").addEventListener("click", clickHandler);