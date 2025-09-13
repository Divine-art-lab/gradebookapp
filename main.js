//create a function that calculates the average 
//create a function that grade's marks 

let gradeOutput = document.getElementById('grade')
let averageOutput = document.getElementById('average')
let statusOutput = document.getElementById('status')

document.querySelector('form').addEventListener('submit', (e) => {
  //prevent default behavior of the browser when submitting form
  e.preventDefault();
  
  //get user input 
  let input = document.getElementById('studentScore').value;
  //create an array to store it
  const inputValues = input.split(',');
  //work on the array 
  const scores = [];
  for (let i = 0; i < inputValues.length; i++) {
    scores.push(Number(inputValues[i]))
  }
  //get average 
  const getAverage = (scores) => {
    let average;
    let sumOfScore = 0;
    for (let i = 0; i < scores.length; i++) {
      sumOfScore += scores[i];
    }
    average = sumOfScore / scores.length;
    return average;
  }
  let average = getAverage(scores);
  
  
  //function to get grades 
  const getGrade = (studentScore) => {
    if (studentScore === 100) {
      return 'A+';
    } else if (studentScore < 100 && studentScore >= 90) {
      return 'A';
    } else if (studentScore <= 89 && studentScore >= 80) {
      return 'B';
    } else if (studentScore <= 79 && studentScore >= 70) {
      return 'C';
    } else if (studentScore <= 69 && studentScore >= 60) {
      return 'D';
    } else if (studentScore <= 59 && studentScore >= 50) {
      return 'E';
    } else if (studentScore <= 49) {
      return 'F';
    }
  }
  let grade = getGrade(Math.round(average));

  
  //function to check if the student passed or not
  const checkPass = (studentGrade) => {
    if (studentGrade === 'F') {
      return 'Failed';
    } else {
      return 'Pass';
    }
  }
  console.log(average)
  console.log(grade)
  console.log(checkPass(grade));
  
  gradeOutput.textContent = ` ${grade}`;
  averageOutput.textContent = ` ${average.toFixed(2)}`;
  statusOutput.textContent = ` ${checkPass(grade)}`;
  
  if (statusOutput.textContent === ' Failed') {
    statusOutput.style.color = 'red';
  } else {
    statusOutput.style.color = 'green';
  }
});