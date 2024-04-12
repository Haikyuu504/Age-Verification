function ageSubmit() {
  const ageInput = document.getElementById("ageInput");
  const ageSubmit = document.getElementById("ageSubmit");
  const ageResult = document.getElementById("ageResult")
  const age = parseInt(ageInput.value);

  if(age <= 17){
    ageResult.textContent = "You Need To Be 18+ To Enter This Site"
  }
  else if(age >= 100){
    ageResult.textContent = "You Are TOO OLD!!!"
  }
  else if(age >= 18){
    ageResult.textContent = "You Are Old Enough"
  }
  else {
    ageResult.textContent = "You Need To Type Your Age!!"
  }
}
  