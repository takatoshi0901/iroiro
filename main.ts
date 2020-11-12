let temp = 0
input.onButtonPressed(Button.A, function () {
    temp = input.temperature()
    if (20 < temp) {
        basic.showString("HOT")
    } else {
        basic.showString("COLD")
    }
    basic.showString("" + (temp))
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showString("UP")
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showString("DOWN")
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (randint(1, 6)))
})
