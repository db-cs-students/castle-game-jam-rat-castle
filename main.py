"""
Title: Rat Castle
Creators: Samson and Brycen
Description: You fight rats in a Castle
"""
#Setup game
scene.set_tile_map(img("""
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffeeeefffffffffffffffffffffffffffffffffeeefffffffffffeee
    fffffffffffffffffffffffffffffffffffffffeeefffffffffffffffffffeee
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeee
    eeeeeeee44444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
"""))
scene.set_tile(14,
    img("""
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
    """),
    True)
scene.set_tile(4,
    img("""
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
    """),
    )
#Setup character
average_joe = sprites.create(img("""
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
"""))
controller.move_sprite(average_joe)
average_joe.set_position(15, 105)
scene.camera_follow_sprite(average_joe)
def on_event_pressed():
    average_joe.set_velocity(0, -75)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_event_pressed)
average_joe.ay = 100