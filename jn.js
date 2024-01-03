let form = document.querySelector("form")
let answer = document.querySelector("input")

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (answer.value != 6274) {
        alert("Try Again .. ")
        form.reset()
    } else if (answer.value == 6274) {
        window.location.href = 'JNQ2.html'
    } else {
        console.log("Some other error");
    }
})