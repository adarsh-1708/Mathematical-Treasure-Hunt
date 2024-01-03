let form = document.querySelector("form")
let answer = document.querySelector("input")

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (answer.value != 1729) {
        alert("Try Again .. ")
        form.reset()
    } else if (answer.value == 1729) {
        window.location.href = 'ram1.html'
    } else {
        console.log("Some other error");
    }
})