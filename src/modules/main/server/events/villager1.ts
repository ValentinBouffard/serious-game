import { RpgEvent, EventData, RpgPlayer, Move } from '@rpgjs/server'
import { Key } from '../database/items/key';

@EventData({
    name: 'EV-1',
    hitbox: {
        width: 32,
        height: 16
    }
})
export class Villager1Event extends RpgEvent {
    onInit() {
        this.setGraphic('male12')
    }
    async onAction(player: RpgPlayer) {
        if (player.getVariable('HAS_TALK_TO_MANAGER')) {
            let texts = [
                'Oh, you are saying that the factory tried to offer you a bribery ?',
                'We will drive an investigation, this information is valuable to us',
                'Congatulation for your first time !'
            ]
            for (let msg of texts) {
                await player.showText(msg, {
                    talkWith: this
                })
            }
            return
        }
        let texts = [
            'Welcome Inspector !',
            'This is your first day today 🌈',
            'You have to drive an inspection in a toy\'s factory.'
        ]
        for (let msg of texts) {
            await player.showText(msg, {
                talkWith: this
            })
        }
        player.setVariable('ASK_BROTHER', true)
    }
}
