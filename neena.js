let form = document.querySelector("form")
let answer = document.querySelector("input")

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (answer.value != 0) {
        alert("Try Again .. ")
        form.reset()
    } else if (answer.value == 0) {
        window.location.href = 'John Nash.html'
    } else {
        console.log("Some other error");
    }
})