import { RpgEvent, EventData, RpgPlayer, Move } from '@rpgjs/server'

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
        if (player.getVariable('HAS_TALK_TO_MANAGER') && player.gold != 1000 &&  player.getVariable('GAIN_GOLD')) {
            let texts = [
                '😍: Hey Inspector !',
                '😍: It seems that the inspection went well for you 🐧',
                '😍: We received informations leading us to believe that you\'ve accepted a bribery',
                '😍: We also know that you went to buy something with it',
                '😍: In conclusion we are going to stop working with you 🚨',
            ]
            for (let msg of texts) {
                await player.showText(msg, {
                    talkWith: this
                })
            }
            await player.showText("❌ GAME OVER: YOU FAILED THE BRIBERY EXERCISE", {fullWidth: true, position: 'middle', typewriterEffect: true, autoClose: true
            });
            return;
        }
        else if (player.getVariable('HAS_TALK_TO_MANAGER')) {
            let texts = [
                '😍: Oh, you are saying that the factory tried to offer you a bribery ?',
                '😍: We will drive an investigation, this information is valuable to us',
                '😍: Congatulation for your first time !'
            ]
            for (let msg of texts) {
                await player.showText(msg, {
                    talkWith: this
                })
            }
            await player.showText("✅ CONGRATULATIONS: YOU SUCCEED THE BRIBERY EXERCISE", {fullWidth: true, position: 'middle', typewriterEffect: true, autoClose: true
            });
            return;
        }
        let texts = [
            '😍: Welcome Inspector !',
            '😍: This is your first day today 🌈',
            '😍: You have to drive an inspection in a toy\'s factory.',
            '😍: Come back to me when you are done with it 👍'
        ]
        for (let msg of texts) {
            await player.showText(msg, {
                talkWith: this
            })
        }
        player.setVariable('ASK_BROTHER', true)
    }
}
