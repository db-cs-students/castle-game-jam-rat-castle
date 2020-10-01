/** 
Title: Rat Castle
Creators: Samson and Brycen
Description: You fight rats in a Castle

 */
// Setup game
scene.setTileMap(img`
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffeeeeeefffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffeeeffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffeeeefffffffffffffffffffffffeeeffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeee
    eeeeeeeeffffffffeeeeeeeeeeeeeeeeeeeefffffffffffeffffffeeeeeeeeee
    eeeeeeee44444444eeeeeeeeeeeeeeeeeeee44444444444eeeeeeeeeeeeeeeee
`)
scene.setTile(14, img`
        b b b b b b b b b b b b b b b f
        b b b b b b b b b b b b b b b f
        b b b b b b b b b b b b b b b f
        b b b b b b b b b b b b b b b f
        b b b b b b b b b b b b b b b f
        b b b b b b b b b b b b b b b f
        b b b b b b b b b b b b b b b f
        f f f f f f f f f f f f f f f f
        b b b b b b b f b b b b b b b f
        b b b b b b b f b b b b b b b f
        b b b b b b b f b b b b b b b f
        b b b b b b b f b b b b b b b f
        b b b b b b b f b b b b b b b f
        b b b b b b b f b b b b b b b f
        b b b b b b b f b b b b b b b f
        f f f f f f f f f f f f f f f f
    `, true)
scene.setTile(4, img`
        . . . 4 . . . 4 . . 4 . . . 4 4
        . 4 4 4 . 4 4 4 . 4 4 . . 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    `, true)
info.setScore(0)
info.setLife(3)
// Setup character
let average_joe = sprites.create(img`
    ...........eeeeeee..............
    ..........eeeeeeeee.............
    ..........eeeeedddd.............
    ..........eeeeddddd.............
    ..........eededfddf.............
    ..........eeddddddd.............
    ..........eeddddddd.............
    ..........eeedddffd.......111111
    ...........eddddddd.......111111
    ............dddddd........11....
    ..........1111111111ddddddddd...
    ..........1111111111ddddddddd...
    ..........1111111111......dd....
    ..........dd111111..............
    ..........dd111111..............
    ..........dd111111..............
    ..........dd111111..............
    ..........dd111111..............
    ..........dd111111..............
    ..........dd111111..............
    .........ddd888888..............
    .........ddd888888..............
    .........ddd888.88..............
    ............888.88..............
    ............888.88..............
    ............888.88..............
    ............888.88..............
    ............888.88..............
    ............888.88..............
    ............888.88..............
    ............eee.eee.............
    ............eeeeeeee............
`)
controller.moveSprite(average_joe, 90, 0)
average_joe.setPosition(15, 190)
scene.cameraFollowSprite(average_joe)
controller.A.onEvent(ControllerButtonEvent.Pressed, function on_event_pressed() {
    average_joe.vy = -150
})
average_joe.ay = 250
average_joe.setKind(SpriteKind.Player)
// Make gun
controller.B.onEvent(ControllerButtonEvent.Pressed, function on_event_pressed2() {
    let projectile = sprites.createProjectileFromSprite(img`
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ......................................................111.......
        .....................................................11111......
        .....................................................11111......
        .....................................................11111......
        ......................................................111.......
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
    `, average_joe, 200, 0)
})
// Make enemies
let rat = sprites.create(img`
    ................................
    ................................
    ................................
    .......eeeee.......eeee.........
    ......eeeeeee.....eeeeee........
    ......eeeeeee.....eeeeee........
    ......eeeeeee.....eeeeee........
    ......eeeeeee..eeeeeeeee........
    .......eeeeeeeeeeeeeeeee........
    ........eeeeeeeeeeeeeeee........
    ..........eeeeeeeeeeee..........
    ..........efeeeefeeee...........
    ..........efeeeefeeee...........
    .....eeddddddddddddee...........
    ......eddddddddddddee...........
    ........ddddddddddde............
    .........dddddddddd.............
    ..........eedddde...............
    .........eedddddeee.............
    ........eeeddddddeeee...........
    .......e.edddddddde.ee..........
    ......e..edddddddde..e.....e....
    .....ee..edddddddde..e..eeee....
    ....ee...edddddddde..e.ee.......
    ....e....edddddddeee...e........
    .........eeeeeeeee..eeee........
    ..........eee.eeee..............
    ..........eee.eeee..............
    ..........eee.eeee..............
    .........eeee.eeeee.............
    ........eeeee..eeee.............
    ........eeeee..eeee.............
`)
rat.setPosition(300, 190)
rat.setKind(SpriteKind.Enemy)
rat.ay = 150
let rat2 = sprites.create(img`
    ................................
    ................................
    ................................
    .......eeeee.......eeee.........
    ......eeeeeee.....eeeeee........
    ......eeeeeee.....eeeeee........
    ......eeeeeee.....eeeeee........
    ......eeeeeee..eeeeeeeee........
    .......eeeeeeeeeeeeeeeee........
    ........eeeeeeeeeeeeeeee........
    ..........eeeeeeeeeeee..........
    ..........efeeeefeeee...........
    ..........efeeeefeeee...........
    .....eeddddddddddddee...........
    ......eddddddddddddee...........
    ........ddddddddddde............
    .........dddddddddd.............
    ..........eedddde...............
    .........eedddddeee.............
    ........eeeddddddeeee...........
    .......e.edddddddde.ee..........
    ......e..edddddddde..e.....e....
    .....ee..edddddddde..e..eeee....
    ....ee...edddddddde..e.ee.......
    ....e....edddddddeee...e........
    .........eeeeeeeee..eeee........
    ..........eee.eeee..............
    ..........eee.eeee..............
    ..........eee.eeee..............
    .........eeee.eeeee.............
    ........eeeee..eeee.............
    ........eeeee..eeee.............
`)
rat2.setPosition(400, 190)
rat2.setKind(SpriteKind.Enemy)
rat2.ay = 150
let rat3 = sprites.create(img`
    ................................
    ................................
    ................................
    .......eeeee.......eeee.........
    ......eeeeeee.....eeeeee........
    ......eeeeeee.....eeeeee........
    ......eeeeeee.....eeeeee........
    ......eeeeeee..eeeeeeeee........
    .......eeeeeeeeeeeeeeeee........
    ........eeeeeeeeeeeeeeee........
    ..........eeeeeeeeeeee..........
    ..........efeeeefeeee...........
    ..........efeeeefeeee...........
    .....eeddddddddddddee...........
    ......eddddddddddddee...........
    ........ddddddddddde............
    .........dddddddddd.............
    ..........eedddde...............
    .........eedddddeee.............
    ........eeeddddddeeee...........
    .......e.edddddddde.ee..........
    ......e..edddddddde..e.....e....
    .....ee..edddddddde..e..eeee....
    ....ee...edddddddde..e.ee.......
    ....e....edddddddeee...e........
    .........eeeeeeeee..eeee........
    ..........eee.eeee..............
    ..........eee.eeee..............
    ..........eee.eeee..............
    .........eeee.eeeee.............
    ........eeeee..eeee.............
    ........eeeee..eeee.............
`)
rat3.setPosition(500, 190)
rat3.setKind(SpriteKind.Enemy)
rat3.ay = 150
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function on_overlap(sprite: Sprite, otherSprite: Sprite) {
    sprite.destroy()
    otherSprite.destroy()
    info.changeScoreBy(1)
})
// Make lava work
scene.onHitTile(SpriteKind.Player, 4, function on_hit_tile(sprite: Sprite) {
    info.changeLifeBy(-1)
})
// Make rats kill joe
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function on_overlap2(sprite: Sprite, otherSprite: Sprite) {
    info.changeLifeBy(-1)
})
// Make giant rat
let giant_rat = sprites.create(img`
    ....................eeee.........eeeeeee........................
    .................eeeeeeeee......eeeeeeeee.......................
    ................eeeeeeeeeee.....eeeeeeeee.......................
    ................eeeeeeeeeee.....eeeeeeeee.......................
    ................eeeeeeeeeee.....eeeeeeeee.......................
    .................eeeeeeeeee......eeeeeeee.......................
    .................eeeeeeeeeeeeeeeeeeeeeeee.......................
    ..................eeeeeeeeeeeeeeeeeeeeeee.......................
    ..................eeeeeeeeeeeeeeeeeeeeee........................
    ....................eeeeefeeeeeefeeeeee.........................
    ......................eeeefeeeefeeeeeee.........................
    ......................eeeeefeefeeeeeeee.........................
    ......................eeeffeeeeffeeeeee.........................
    .......................eeffeeeeffeeeeee.........................
    .......................eeeeeeeeeeeeeeee.........................
    .................eeedddddddddddddddddee.........................
    ..................eeddddddddddddddddde..........................
    ...................edddddf1f1f1fddddd...........................
    ....................dddd1f1f1f1f1dd.............................
    ......................dd1f1f1f1f1d..............................
    .....................eeeeeeeeeeeeeeeeee.........................
    ..................eeeeeeeddddddddddeeeeeee......................
    ................eeeeeeeeddddddddddddeeeeeeee....................
    ...............eeeeeeeedddddddddddddeeeeeeeeee..................
    .............eeeeeeeeedddddddddddddddeeeeeeeeee.................
    ............eeeeeeeeedddddddddddddddddeeeeeeeeeee...............
    ...........eeeeeeeeedddddddddddddddddddeeeeeeeeeee..............
    ..........eeeeeeeeeedddddddddddddddddddeeeeeeeeeeee.............
    .........eeeeeeeeeeeddddddddddddddddddddeeeeeeeeeee.............
    ........eeeeeeeeeeedddddddddddddddddddddeeeeeeeeeeee............
    .......eeeeeeeeeeeeddddddddddddddddddddddeeeeeeeeeee............
    .......eeeeeeeeeeedddddddddddddddddddddddeeeeeeeeeeee...........
    ......eeeeeeeeeeeeddddddddddddddddddddddddeeeeeeeeeee...........
    .....eeeeeeeeeeeedddddddddddddddddddddddddeeeeeeeeeeee..........
    .....eeeeeeeeeeeeddddddddddddddddddddddddddeeeeeeeeeee..........
    ....eeeeeeeeeeeedddddddddddddddddddddddddddeeeeeeeeeee..........
    ....eeeeeeeeeeeedddddddddddddddddddddddddddeeeeeeeeeee..........
    ....eeeeeeeeeeeedddddddddddddddddddddddddddeeeeeeeeeee..........
    ....eeeeeeeeeeeedddddddddddddddddddddddddddeeeeeeeeeeee.........
    ....eeeeeeeeeeedddddddddddddddddddddddddddde.eeeeeeeeee.........
    ....eeeeeeeeeeedddddddddddddddddddddddddddde.eeeeeeeeee.........
    ....eeeeeeeeeeedddddddddddddddddddddddddddde.eeeeeeeeee.........
    .....eeeeeeee.edddddddddddddddddddddddddddde.eeeeeeeeee.........
    .....eeeeeeee.eeddddddddddddddddddddddddddde..eeeeeeeeee........
    .....eeeeeee...eedddddddddddddddddddddddddde..eeeeeeeeee........
    ......eeeeee.....eddddddddddddddddddddddddee...eeeeeeeee........
    .......eeee.....eeeddddddddddddddddddddddeee...eeeeeeeee........
    .................eeeddddddddddddddddddddeee.....eeeeeeee........
    .................eeeeeddddddddddddddddeeeee......eeeeeee........
    ..................eeeeeeeedddddddddddeeeeee......eeeeee.........
    ..................eeeeeeeeeeeeeeeeeeeeeeee.......eeeee..........
    ..................eeeeeeeee......eeeeeeeee......................
    ..................eeeeeeeee......eeeeeeeee......................
    ..................eeeeeeeee......eeeeeeeee......................
    ..................eeeeeeeee......eeeeeeeee......................
    ..................eeeeeeeee......eeeeeeeee......................
    ..................eeeeeeeee......eeeeeeeee......................
    .................eeeeeeeeee......eeeeeeeeee.....................
    .................eeeeeeeeee......eeeeeeeeeee....................
    ................eeeeeeeeeee......eeeeeeeeeeee...................
    ...............eeeeeeeeeee........eeeeeeeeeee...................
    ..............eeeeeeeeeeee........eeeeeeeeeeee..................
    .............eeeeeeeeeeeee.........eeeeeeeeeeeee................
    ............eeeeeeeeeeeee...........eeeeeeeeeeee................
`)
giant_rat.setPosition(1000, 160)
let fireball = sprites.createProjectileFromSprite(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . 4 4 . . . . . . .
    . . . . . . 4 4 4 4 . . . . . .
    . . . . . . 4 4 4 4 . . . . . .
    . . . . . . 4 4 4 4 . . . . . .
    . . . . . . . 4 4 . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, giant_rat, 100, 0)
sprites.onDestroyed(SpriteKind.Projectile, function on_destroyed(sprite: Sprite) {
    let projectile = sprites.createProjectileFromSprite(img`
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ..4444..........................................................
        .444444.........................................................
        44444444........................................................
        44444444........................................................
        44444444........................................................
        44444444........................................................
        .444444.........................................................
        ..4444..........................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
    `, giant_rat, -100, 50)
})
giant_rat.setKind(SpriteKind.Enemy)
// Make fireballs kill joe
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function on_overlap3(sprite: Sprite, otherSprite: Sprite) {
    info.changeLifeBy(-1)
})
sprites.onDestroyed(SpriteKind.Player, function on_destroyed2(sprite: Sprite) {
    average_joe.setPosition(15, 190)
})
