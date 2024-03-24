let dayInput = document.getElementById('day')
let monthInput = document.getElementById('month')
let yearInput = document.getElementById('year')

let yearOutput = document.getElementById('year-output')
let monthOutput = document.getElementById('month-output')
let dayOutput = document.getElementById('days-output')

let generator = document.getElementById('continue')

let date = new Date()
let year = date.getFullYear()
let month = date.getMonth() +1
let day = date.getDate()

generator.addEventListener('click', () => {
  if(dayInput.value && monthInput.value && yearInput.value){
    if(yearInput.value > year || monthInput.value > 12 || dayInput.value > 31){
      alert('Must be available date')
    } else {
      if(monthInput.value > month){
        yearOutput.textContent = (yearInput.value - year + 1)* -1

        monthOutput.textContent = (12 - parseInt(monthInput.value) + month)
      } 

      if(dayInput.value > day){
        monthOutput.textContent = (12 - parseInt(monthInput.value) + month)

        dayOutput.textContent = (31 - parseInt(dayInput.value) + day)
      } else {
        yearOutput.textContent = (yearInput.value-year)* -1

        monthOutput.textContent = (monthInput.value-month)* -1
        
        dayOutput.textContent = (dayInput.value-day)* -1
      }
    }
  } else {
    alert('Input is empty!')
  }
})

// if(monthInput.value > month){
//   yearOutput.textContent = (yearInput.value - year + 1)* -1

//   monthOutput.textContent = (12 - parseInt(monthInput.value) + month)
// } else {
//   yearOutput.textContent = (yearInput.value-year)* -1

//   monthOutput.textContent = (monthInput.value-month)* -1
// }

