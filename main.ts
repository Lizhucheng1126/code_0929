let A = 0
input.onButtonPressed(Button.A, function () {
    A = randint(80, 100)
    basic.showNumber(A)
    if (A >= 90) {
        basic.showString("A+")
    }
    if (A <= 89 && A >= 85) {
        basic.showString("A")
    }
    if (A <= 84 && A >= 80) {
        basic.showString("A-")
    }
})
