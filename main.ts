/** 
Title: Rat Castle
Creators: Samson and Brycen
Description: You fight rats in a Castle

 */
// Setup game
scene.setTileMap(img`
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffeeeefffffffffffffffffffffffffffffffffeeefffffffffffeee
    fffffffffffffffffffffffffffffffffffffffeeefffffffffffffffffffeee
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeee
    eeeeeeee44444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
`)
scene.setTile(14, img`
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
    `, true)
scene.setTile(4, img`
        . . . 4 . . . 4 . . 4 . . . 4 4
        . 4 4 4 . 4 4 4 . 4 4 . . 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 2 4 4
        4 4 4 4 4 4 4 5 4 4 4 4 4 2 2 4
        4 4 4 4 4 4 4 4 5 5 4 4 4 4 2 4
        4 4 4 5 5 5 4 4 4 5 5 4 4 4 2 4
        4 4 5 5 4 5 4 4 4 4 5 5 4 4 4 2
        4 5 4 4 4 5 5 4 4 4 4 5 5 4 4 4
        4 4 4 4 4 4 5 5 5 5 5 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 5 4 4 4 4 4
        2 2 4 4 4 4 4 4 4 4 5 5 4 4 4 4
        4 2 2 4 4 4 4 4 4 4 4 5 5 5 5 4
        4 4 4 2 2 2 2 4 4 4 4 4 4 4 4 4
        4 5 4 4 4 4 4 2 4 4 4 4 4 4 4 4
        4 4 5 5 4 4 4 2 2 2 4 4 4 4 4 4
        4 4 4 4 5 5 5 4 4 2 2 4 4 4 4 4
    `)
// Setup character
let average_joe = sprites.create(img`
    . . . . . e e e e e . . . . . .
    . . . . e e e e e e . . . . . .
    . . . . e e d d d d . . . . . .
    . . . . e d d f d f . . . . . .
    . . . . e d d d d d . . . . . .
    . . . . . e d d d d . . . f f f
    . . . . . . d d d . . . . f . .
    . . . . 1 1 1 1 1 1 1 d d d . .
    . . . . 1 1 1 1 1 1 . . . . . .
    . . . . d 1 1 1 1 1 . . . . . .
    . . . . d 1 1 1 1 1 . . . . . .
    . . . . d 1 1 1 1 1 . . . . . .
    . . . . . 8 8 8 8 8 . . . . . .
    . . . . . 8 8 . 8 8 . . . . . .
    . . . . . 8 8 . 8 8 . . . . . .
    . . . . . e e . e e e . . . . .
`)
controller.moveSprite(average_joe)
average_joe.setPosition(15, 105)
scene.cameraFollowSprite(average_joe)
controller.A.onEvent(ControllerButtonEvent.Pressed, function on_event_pressed() {
    average_joe.setVelocity(0, -75)
})
average_joe.ay = 100
