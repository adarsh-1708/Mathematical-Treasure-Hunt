let form = document.querySelector("form")
let answer = document.querySelector("input")

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (answer.value != 8) {
        alert("Try Again .. ")
        form.reset()
    } else if (answer.value == 8) {
        window.location.href = 'Carl Fedrick.html'
    } else {
        console.log("Some other error");
    }
})