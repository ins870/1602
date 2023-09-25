I2C_LCD1602.LcdInit(39)
basic.forever(function () {
    I2C_LCD1602.ShowString("Hello", 0, 0)
    I2C_LCD1602.ShowString("Hello", 0, 1)
})
