radio.onReceivedNumber(function (receivedNumber) {
    Wind_direction = receivedNumber
    if (Wind_direction < 45 || Wind_direction > 315) {
        basic.showString("North")
    } else if (Wind_direction >= 45 && Wind_direction <= 135) {
        basic.showString("East")
    } else if (Wind_direction >= 136 && Wind_direction <= 224) {
        basic.showString("South")
    } else if (Wind_direction >= 225 && Wind_direction <= 314) {
        basic.showString("West")
    } else {
        basic.showIcon(IconNames.No)
    }
})
let Wind_direction = 0
basic.showString("Compass Receiver")
radio.setGroup(1)
