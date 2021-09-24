
import { Spritesheet, Animation, Direction, RpgClient, RpgModule } from '@rpgjs/client'
import {Characters, MainCharacters} from "./characters/characters";
import {Images} from "./images";
import {Animations} from "./animations";

@Spritesheet({
    images: {
        '[A]Dirt_pipo': require('./assets/[A]Dirt_pipo.png'),
        '[A]Flower_pipo': require('./assets/[A]Flower_pipo.png'),
        '[A]Grass_pipo': require('./assets/[A]Grass_pipo.png'),
        '[A]Wall-Up_pipo': require('./assets/[A]Wall-Up_pipo.png'),
        '[A]WaterFall_pipo': require('./assets/[A]WaterFall_pipo.png'),
        '[A]Water_pipo': require('./assets/[A]Water_pipo.png'),
        '[Base]BaseChip_pipo': require('./assets/[Base]BaseChip_pipo.png')
    }
})
export class Tilesets {

}
@RpgModule<RpgClient>({
    spritesheets: [
        Tilesets,
        Characters,
        MainCharacters,
        Images,
        Animations
    ]
})
export default class RpgClientEngine {}
