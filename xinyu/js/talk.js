new TypeIt("#lfzxy", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("LF && ZXY")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("喜欢可爱的你，独一无二的你")
    .pause(3000)
    .delete(null, {
        delay: 500
    })
    .type("好不容易拐到手，怎会让你离开")
    .pause(3000)
    .delete(null, {
        delay: 500
    })
    .type("下面有些东西给你...")
    .pause(3000)
    .go();

new TypeIt('#talkToZXY', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();