let form = document.querySelector("form")
let answer = document.querySelector("input")

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (answer.value != 1) {
        alert("Try Again .. ")
        form.reset()
    } else if (answer.value == 1) {
        window.location.href = 'Vashishtha Narayan Singh.html'
    } else {
        console.log("Some other error");
    }
})