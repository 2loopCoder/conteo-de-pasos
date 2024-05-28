input.onGesture(Gesture.Shake, function () {
    cantidadpasos += 1
    basic.showNumber(cantidadpasos)
    if (cantidadpasos == 10) {
        basic.showIcon(IconNames.Heart)
        basic.showString("Muy bien, continúa!")
    }
})
let cantidadpasos = 0
cantidadpasos = 0
let metaDpasos = 10
