IR.onReceivedIR(function () {
    basic.showNumber(8)
    basic.showString(IR.getMessage())
    basic.pause(1000)
    basic.showNumber(9)
})
basic.showNumber(0)
IR.setREC_pin(
DigitalPin.C16
)
basic.showNumber(1)
basic.pause(2000)
basic.forever(function () {
    basic.showNumber(2)
    basic.pause(2000)
    basic.showNumber(3)
    IR.simRecMessage("Y")
    basic.pause(2000)
})
