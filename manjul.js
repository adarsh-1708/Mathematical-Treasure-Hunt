let form = document.querySelector("form")
let answer = document.querySelector("input")

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (answer.value != 120) {
        alert("Try Again .. ")
        form.reset()
    } else if (answer.value == 120) {
        window.location.href = 'Leonardh Eular.html'
    } else {
        console.log("Some other error");
    }
})