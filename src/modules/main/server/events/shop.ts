import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'
import {PenguinsItem} from '../database/items/PenguinsItem';
import webpack from "webpack";
import {LionsItem} from "../database/items/LionsItem";
import {PlatyItem} from "../database/items/PlatyItem";

@EventData({
    name: 'shop',
    hitbox: {
        width: 32,
        height: 16
    }
})
export class ShopEvent extends RpgEvent {
    onInit() {
        this.setGraphic('male4_1')
    }
    async onAction(player: RpgPlayer) {
        await player.callShop([ PenguinsItem, LionsItem, PlatyItem ])
    }
}
