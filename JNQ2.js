let form = document.querySelector("form")
let answer = document.querySelector("input")

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if ((answer.value == "East") || (answer.value == "east")) {
        window.location.href = 'George Cantor.html'

    } else if ((answer.value != "East") || (answer.value != "east")) {
        alert("Try Again .. ")
        form.reset();

    } else {
        console.log("Some other error");
    }

})