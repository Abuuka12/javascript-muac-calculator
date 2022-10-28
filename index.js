const weight = document.getElementById('weight')
const height = document.getElementById('height')
const btn = document.getElementById('Btn')
const result = document.getElementById('result')



btn.addEventListener('click', bmi)

function bmi() {
    const patient_weight = weight.value;
    const patient_height = height.value;
    if (patient_weight === "" || isNaN(patient_weight))
        result.innerHTML = "Provide a valid number!";
    else if (patient_height === "" || isNaN(patient_height))
        result.innerHTML = "Provide a valid Weight!";
    else if (patient_weight >= 10 && patient_height >= 70) {
        result.innerHTML = 'normal'
    } else if (patient_weight <= 10 && patient_height <= 70) {
        result.innerHTML = 'you are malnourished'
    }
}