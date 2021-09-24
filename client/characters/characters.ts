import {Spritesheet, Presets, Direction, Animation} from '@rpgjs/client'

const { RMSpritesheet } = Presets

@Spritesheet({
    images: {
        female13: require('./assets/Female 13-2.png'),
        female19: require('./assets/Female 19-3.png'),
        male4_1: require('./assets/Male 04-1.png'),
        male12: require('./assets/Male 12-2.png'),
        male17: require('./assets/Male 17-2.png'),
    },
    width: 96,
    height: 128,
    framesHeight: 4,
    framesWidth: 3,
    textures: {
        [Animation.Stand]: {
            animations: direction => [
                [{ time: 0, frameX: 0, frameY: frameY(direction), scale: [1.2, 1.2] }]
            ]
        },
        [Animation.Walk]:  {
            animations: direction => [
                [
                    { time: 0, frameX: 0, frameY: frameY(direction) , scale: [1.2, 1.2]},
                    { time: 4, frameX: 1, frameY: frameY(direction) , scale: [1.2, 1.2]},
                    { time: 8, frameX: 2, frameY: frameY(direction) , scale: [1.2, 1.2]},
                ]
            ]
        }
    }
})
export class Characters { }

const frameY = direction => {
    return {
        [Direction.Down]: 0,
        [Direction.Left]: 1,
        [Direction.Right]: 2,
        [Direction.Up]: 3
    }[direction]
}

@Spritesheet({
    images: {
        male1_1: require('./assets/Male 01-1.png'),
        male1_2: require('./assets/Male 01-2.png')
    },
    width: 256,
    height: 10,
    framesHeight: 2,
    framesWidth: 2,
    textures: {
        [Animation.Stand]: {
            animations: direction => [
                [{ time: 0, frameX: 0, frameY: frameY(direction) }]
            ]
        },
        [Animation.Walk]:  {
            animations: direction => [
                [
                    { time: 1, frameX: 0, frameY: frameY(direction) },
                    { time: 2, frameX: 1, frameY: frameY(direction) },
                    { time: 3, frameX: 2, frameY: frameY(direction) },
                    { time: 4, frameX: 3, frameY: frameY(direction) }
                ]
            ]
        }
    }
})
export class MainCharacters { }
