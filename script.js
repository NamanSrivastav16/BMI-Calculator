const form = document.querySelector('form')
const screen = document.querySelector('body')

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const res = document.querySelector('#results');

    if (height === '' || height <= 0 || isNaN(height)) {
        res.innerHTML = 'Please give a valid height'
    }
    else if (weight === '' || weight <= 0 || isNaN(weight)) {
        res.innerHTML = 'Please give a valid weight'
    }
    else {
        const ans = (weight / ((height * height) / 10000)).toFixed(2)
        if (ans < 18.6) {
            res.innerHTML = `<span>You are Under Weight: ${ans}</span>`
            screen.style.backgroundColor = 'Yellow'
        }
        else if (ans >= 18.6 && ans <= 24.9) {
            res.innerHTML = `<span>You are Normal Weight: ${ans}</span>`
            screen.style.backgroundColor = 'green'
        }
        else {
            res.innerHTML = `<span>You are Over Weight: ${ans}</span>`
            screen.style.backgroundColor = 'red'
        }
    }
})