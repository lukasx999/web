import { stringToMessageKind, MessageKind } from "./messages.js";
const ws = new WebSocket("ws://127.0.0.1:8000/ws");
const players = new Map();
function handleMessage(raw_data) {
    const message = JSON.parse(raw_data);
    const body = message.body;
    const kind = stringToMessageKind(message.kind);
    if (kind === null)
        throw new Error("Unknown Message Kind");
    console.log(message);
    switch (kind) {
        case MessageKind.PlayerUpdate:
            {
                const data = body;
                console.log(data);
            }
            break;
        case MessageKind.PlayerJoin:
            {
                const data = body;
                console.log(`Player ${data.id} has joined`);
                players.set(data.id, data.player);
            }
            break;
        case MessageKind.PlayerLeave:
            {
                const data = body;
                console.log(`Player ${data.id} has left`);
                players.delete(data.id);
            }
            break;
        default:
            throw "Unreachable";
    }
}
window.onload = () => {
    const btn_disconnect = document.getElementById("disconnect");
    btn_disconnect.onclick = () => {
        console.log("Disconnecting...");
        ws.close();
    };
    ws.onmessage = msg => {
        handleMessage(msg.data);
    };
    //ws.onopen = _event => ws.send("foo");
    window.onclose = () => ws.close();
};
