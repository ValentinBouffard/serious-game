import {Direction, EventData, Move, RpgEvent, RpgPlayer} from '@rpgjs/server'

@EventData({
    name: 'EV-4',
    hitbox: {
        width: 32,
        height: 16
    }
})
export class Villager2Event extends RpgEvent {
    onInit() {
        this.speed = 2
        this.frequency = 300
        this.setGraphic('male17')
        this.infiniteMoveRoute([  Move.up(2), Move.down(2), Move.left(30),Move.right(30)])
    }
    async onAction(player: RpgPlayer) {
        if (player.getVariable('HAS_TALK_TO_MANAGER') && player.gold != 1000 &&  player.getVariable('GAIN_GOLD')) {
            let texts = [
                '👺: Hey Inspector 🥰',
                '👺: I noticed that you already spent the money I gave you earlier...',
            ]
            for (let msg of texts) {
                await player.showText(msg, {
                    talkWith: this
                })
            }
            return;
        }

        let texts = [
            '👺: Morning Inspector !',
            '👺: I\'m the boss of the factory ',
            '👺: Here is a gift for you.'
        ]
        for (let msg of texts) {
            await player.showText(msg, {
                talkWith: this
            })
        }
        const choice = await player.showChoices('', [
            { value: true, text: '🕵️‍: Thanks for the red bag' },
            { value: false, text: '🕵️‍: No thank you, I will mention it to my manager' }
        ], {
            talkWith: this
        })
        if (choice && choice.value) {
            await player.showText('👺: Here is 1000 RMB then!', {
                talkWith: this
            })
            player.gold += 1000
            player.setVariable('GAIN_GOLD', true)
        }
        else {
            await player.showText('👺: Too bad for you!', {
                talkWith: this
            })
        }

        player.setVariable('HAS_TALK_TO_MANAGER', true);
    }
}
