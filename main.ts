input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    radio.sendString("" + (Message))
})
input.onButtonPressed(Button.A, function () {
    if (letter > 0) {
        letter += -1
    }
})
input.onButtonPressed(Button.AB, function () {
    Message = "" + Message + text_list[letter]
})
radio.onReceivedString(function (receivedString) {
    soundExpression.soaring.play()
    basic.pause(1000)
    basic.showString("Comm received from unknown user. Accept?")
    Received_String = receivedString
})
input.onButtonPressed(Button.B, function () {
    if (letter < 41) {
        letter += 1
    }
})
input.onGesture(Gesture.Shake, function () {
    Message = ""
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showString("" + (Received_String))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("" + (Message))
})
input.onGesture(Gesture.ThreeG, function () {
    steps += 1
})
let Received_String = ""
let text_list: string[] = []
let letter = 0
let Message = ""
Message = ""
letter = 1
let steps = 0
text_list = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " ", ".", "?", "!", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
basic.forever(function () {
    basic.showNumber(steps)
})
basic.forever(function () {
    basic.showString("" + (text_list[letter]))
})
