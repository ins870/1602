servos.P0.setAngle(0)
I2C_LCD1602.LcdInit(24)
JoyPiAdvanced.rfidInit()
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        servos.P0.setAngle(89)
        basic.showNumber(5)
        basic.pause(1000)
        basic.showNumber(4)
        basic.pause(1000)
        basic.showNumber(3)
        basic.pause(1000)
        basic.showNumber(2)
        basic.pause(1000)
        basic.showNumber(1)
        basic.pause(1000)
        servos.P0.setAngle(0)
    } else {
        I2C_LCD1602.ShowString("NON AUTORIZZATO", 0, 1)
    }
})
