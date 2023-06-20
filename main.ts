radio.setTransmitPower(7);
basic.forever(function () {
    let data = {
        x: Math.floor((input.acceleration(Dimension.X) + 1024) / 8),
        y: Math.floor((input.acceleration(Dimension.Y) + 1024) / 8),
        a: input.buttonIsPressed(Button.A) ? 1 : 0,
        b: input.buttonIsPressed(Button.B) ? 1 : 0,
        l: input.logoIsPressed() ? 1 : 0
    };

    data.y > 0

    let sendData =
        String.fromCharCode(data.x) +
        String.fromCharCode(data.y) +
        data.a +
        data.b +
        data.l;

    //    console.log(sendData);
    radio.sendString(sendData);

    console.log(data.x)
});

