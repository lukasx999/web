import { Player } from "./player.js";

export enum MessageKind {
    PlayerUpdate,
    PlayerJoin,
    PlayerLeave,
}

export function stringToMessageKind(str: string): MessageKind | null {
    switch (str) {
        case "PlayerUpdate":
            return MessageKind.PlayerUpdate;
        case "PlayerJoin":
            return MessageKind.PlayerJoin;
        case "PlayerLeave":
            return MessageKind.PlayerLeave;
        default:
            return null;
    }
}

export interface Message<T> {
    kind: string,
    body: T
}

export interface PlayerUpdate {
    id: number,
    player: Player,
}

export interface PlayerJoin {
    id: number,
    player: Player,
}

export interface PlayerLeave {
    id: number,
}
