import { Player, drawPlayer } from "./player.js";

import {
    stringToMessageKind,
    MessageKind,
    Hello,
    Move,
    Message
} from "./messages.js";


function decodeMessage(raw_data: string): [MessageKind, object] {
    const data = JSON.parse(raw_data);
    const kind = Object.keys(data)[0];
    const body = data[kind];

    const msgkind = stringToMessageKind(kind);
    if (msgkind === null)
        throw new Error("Unknown Message Kind");

    return [msgkind, body];
}

function handleMessage(raw_data: string) {
    const [kind, body] = decodeMessage(raw_data);

    switch (kind) {

        case MessageKind.Hello:
            const hello = body as Hello;
            const player = hello.player;

            console.log(hello);

            setInterval(() => drawPlayer(player), 50);

            break;

        case MessageKind.Move:
            throw "Unimplemented";
            const move = body as Move;
            break;

        default:
            throw "Unreachable";

    }

}


window.onload = _event => {
    const ws = new WebSocket("ws://127.0.0.1:8000/ws");

    //ws.onopen      = _event => ws.send("foo");

    ws.onmessage = msg => {
        handleMessage(msg.data);
    }

    window.onclose = _event => ws.close();



}
