export var MessageKind;
(function (MessageKind) {
    MessageKind[MessageKind["PlayerUpdate"] = 0] = "PlayerUpdate";
    MessageKind[MessageKind["PlayerJoin"] = 1] = "PlayerJoin";
    MessageKind[MessageKind["PlayerLeave"] = 2] = "PlayerLeave";
})(MessageKind || (MessageKind = {}));
export function stringToMessageKind(str) {
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
