import { Player } from "./player.js";

export enum MessageKind {
    Hello,
    Move,
}

export function stringToMessageKind(str: string): MessageKind | null {
    switch (str) {
        case "Hello":
            return MessageKind.Hello;
        default:
            return null;
    }
}

export interface Message {}

export interface Hello extends Message {
    player: Player,
}

export enum Direction {
    Right,
    Left,
    Up,
    Down
}

export interface Move extends Message {
    direction: Direction,
}
