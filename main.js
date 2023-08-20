var weight, height, measure, bmi, error, temp1, temp2, age, birthYearInput, birthYear, currentYear;
function calculate() 
{
  weight = document.getElementById("weight").value;
  height = document.getElementById("height").value;
  error = "Please enter some values";
  height -= 100;
  temp1=weight-5;
  temp2=weight-5+10;
  birthYearInput = document.getElementById('birth-year');
  birthYear = Number(birthYearInput.value);
  currentYear = new Date().getFullYear();
  age = currentYear - birthYear;
    if(age>18)
  {
  if (temp1<=height && temp2>=height  ) 
{
    measure =  "you are normal , You are able to donate blood";
  } 
else if (temp1 > height)
 {
    measure = "You are underweight,Unable to donate blood";
 }
 else if (height > temp2) 
{
    measure = "You are Overweight ,unable to donate the blood";
 } 
    }
  else{
    measure = age+"you are less than 18 years old"
  }
 if (weight === 0 ) 
{
    document.getElementById("results").innerHTML = error;
 }
 else if (height === 0)
{
    document.getElementById("results").innerHTML = error;
 }
  else if (height === 0)
{
    document.getElementById("results").innerHTML = error;
 }
 else {

    document.getElementById("results").innerHTML = measure;
  }
  if (weight < 0 && height < 0 && age <0) {
    document.getElementById("results").innerHTML = "Negative Values not Allowed";
 }
}
