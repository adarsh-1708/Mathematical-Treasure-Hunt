let form = document.querySelector("form")
let answer = document.querySelector("input")

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (answer.value != 'e') {
        alert("Try Again .. ")
        form.reset()
    } else if (answer.value == 'e') {
        window.location.href = 'Neena Gupta.html'
    } else {
        console.log("Some other error");
    }
})