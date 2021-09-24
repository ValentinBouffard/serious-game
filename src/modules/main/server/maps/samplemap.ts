import { RpgMap, MapData } from '@rpgjs/server'
import { NpcEvent } from '../events/npc'
import { ShopEvent } from '../events/shop'
import { Villager1Event } from '../events/villager1';
import { Villager2Event } from '../events/villager2';
// import { ChestEvent } from '../events/chest';

@MapData({
    id: 'medieval',
    file: require('./tmx/samplemap.tmx'),
    name: 'Town',
    events: [
        Villager1Event,
        Villager2Event,
        NpcEvent({
            name: 'EV-2',
            text: 'The factory is after the bridge',
            graphic: 'female13',
            moveRandom: true
        }),
        NpcEvent({
            name: 'EV-3',
            text: 'Hey Inspector, you are close the factory !',
            graphic: 'female19',
            moveRandom: true
        }),
        ShopEvent,
    ],
    sounds: ['town']
})
export class SampleMap extends RpgMap {
}
