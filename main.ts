input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.North)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
})
input.onGesture(Gesture.Shake, function () {
    music.play(music.stringPlayable("C5 C5 C5 C5 C5 C5 C5 C5 ", 120), music.PlaybackMode.UntilDone)
})
loops.everyInterval(500, function () {
    let ضوء: game.LedSprite = null
    ضوء.change(LedSpriteProperty.X, 1)
})
