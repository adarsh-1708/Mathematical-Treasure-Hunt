let form = document.querySelector("form")
let answer = document.querySelector("input")

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if ((answer.value == 55) || (answer.value == 222)) {
        window.location.href = 'Manjul Bhargava.html'

    } else if ((answer.value != 55) || (answer.value != 222)) {
        alert("Try Again .. ")
        form.reset();

    } else {
        console.log("Some other error");
    }

})