let increase = 0
let Coah = sprites.create(img`
    ....ffffff.........ccc..
    ....ff22ccf.......cc4f..
    .....ffccccfff...cc44f..
    ....cc24442222cccc442f..
    ...c9b4422222222cc422f..
    ..c999b2222222222222fc..
    .c2b99111b222222222c22c.
    c222b111992222ccccccc22f
    f222222222222c222ccfffff
    .f2222222222442222f.....
    ..ff2222222cf442222f....
    ....ffffffffff442222c...
    .........f2cfffc2222c...
    .........fcc2ffffffff...
    ..........fc2ffff.......
    ...........fffff........
    `, SpriteKind.Player)
scene.setBackgroundColor(9)
for (let index = 0; index < 10; index++) {
    pause(200)
    Coah.x += 1 + increase
    pause(200)
    Coah.y += -2 - increase
    pause(200)
    Coah.x += -3 - increase
    pause(200)
    Coah.y += 4 + increase
    increase += 4
}
