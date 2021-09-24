import {RpgModule, RpgServer, RpgPlayer, RpgServerEngine, Control} from '@rpgjs/server'
import { SampleMap } from './maps/samplemap'
import databaseList from './database'

let serverEngine

@RpgModule<RpgServer>({
    maps: [
        SampleMap,
    ],
    database: databaseList,
    player: {
        onConnected(player: RpgPlayer) {
            player.setHitbox(20, 16)
            player.setGraphic('male1_2')
            if (!serverEngine.globalConfig.startMap) {
                player.changeMap('medieval')
            }
            player.setActor(databaseList.Hero)
        },

        onInput(player: RpgPlayer, { input }) {
        }
    },
    engine: {
        onStart(engine: RpgServerEngine) {
            serverEngine = engine
        }
    }
})
export default class RpgServerModule {}
