const display = document.getElementById("display");
const past1 = document.getElementById("past1");

function appendToDisplay(input) {
    if (display.value == "Error") {
        display.value = ""
    }
    display.value += input
}

function clearDisplay() {
    display.value = ""
}

function equalDisplay() {
    if (past1.innerHTML != "") {
        past1.innerHTML += "<br> <hr>" + display.value
    } else {
        past1.innerHTML += "<hr>" + display.value
    }
    try {
        display.value = eval(display.value)
        past1.innerHTML += " = " + display.value
    }
    catch(error) {
        display.value = "Error"
    }
}