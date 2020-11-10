function setBattleShips (n: number) {
    while (n > 0) {
        x1 = randint(0, 4)
        y1 = randint(0, 4)
        if (data[x1][y1] != 1) {
            data[x1][y1] = 1
            n += -1
        }
    }
}
function showArray () {
    basic.clearScreen()
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            if (data[y][x] == 3) {
                led.plot(x, y)
            }
            if (data[y][x] == 2) {
                led.plotBrightness(x, y, 64)
            }
        }
    }
    led.plotBrightness(dotx, doty, 128)
}
input.onButtonPressed(Button.A, function () {
    shoot()
})
function shoot () {
    if (data[doty][dotx] == 0) {
        data[doty][dotx] = 2
    }
    if (data[doty][dotx] == 1) {
        data[doty][dotx] = 3
    }
}
input.onButtonPressed(Button.AB, function () {
    started = 1
})
input.onButtonPressed(Button.B, function () {
    shoot()
})
let n = 0
let y1 = 0
let x1 = 0
let started = 0
let doty = 0
let dotx = 0
let data: number[][] = []
// data[0][1]
data = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
setBattleShips(5)
led.setBrightness(255)
dotx = 0
doty = 0
started = 0
basic.forever(function () {
    if (started == 1) {
        if (input.acceleration(Dimension.X) < -250) {
            if (dotx > 0) {
                dotx += -1
            }
        }
        if (input.acceleration(Dimension.X) > 250) {
            if (dotx < 4) {
                dotx += 1
            }
        }
        if (input.acceleration(Dimension.Y) < -250) {
            if (doty > 0) {
                doty += -1
            }
        }
        if (input.acceleration(Dimension.Y) > 250) {
            if (doty < 4) {
                doty += 1
            }
        }
        basic.pause(200)
        showArray()
    }
})
