import { RpgModule, RpgClient } from '@rpgjs/client'
import { MedievalTilesets } from './maps/medieval'
import Characters from './characters'
import { Images } from './images'
import { Animations } from './animations'
import {Musics} from "./sounds";

@RpgModule<RpgClient>({
    spritesheets: [
        MedievalTilesets,
        ...Characters,
        Images,
        Animations
    ],
    sounds: [
        Musics
    ]
})
export default class RpgClientEngine {}
