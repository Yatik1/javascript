
const form = document.querySelector("form")

// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit' , function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    
    const results = document.querySelector("#results")

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
      } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
      } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;
      }

    const rtext = document.createElement("span")
    if(results<18.6){
        rtext.innerHTML="You are Underweight"
    } else if(18.6<=results<=24.9) {
        rtext.innerHTML="You are in Normal Range"
    } else if(results>24.9) {
        rtext.innerHTML="You are Overweight"
    }
    results.appendChild(rtext)
})