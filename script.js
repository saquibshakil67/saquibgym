// BMI Calculator Script
function calculateBMI(event) {
    event.preventDefault();
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    if (weight > 0 && height > 0) {
        const bmi = (weight / (height * height)).toFixed(2);
        let status = '';
        if (bmi < 18.5) status = 'Underweight';
        else if (bmi < 24.9) status = 'Normal weight';
        else if (bmi < 29.9) status = 'Overweight';
        else status = 'Obese';
        document.getElementById('bmi-result').textContent = `Your BMI is ${bmi} (${status}).`;
    } else {
        document.getElementById('bmi-result').textContent = 'Please enter valid values.';
    }
}