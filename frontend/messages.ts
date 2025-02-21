import { Player } from "./player.js";

export enum MessageKind {
    PlayerUpdate,
}

export function stringToMessageKind(str: string): MessageKind | null {
    switch (str) {
        case "PlayerUpdate":
            return MessageKind.PlayerUpdate;
        default:
            return null;
    }
}

export interface PlayerUpdate {
    player: Player,
}
