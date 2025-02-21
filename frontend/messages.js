export var MessageKind;
(function (MessageKind) {
    MessageKind[MessageKind["PlayerUpdate"] = 0] = "PlayerUpdate";
})(MessageKind || (MessageKind = {}));
export function stringToMessageKind(str) {
    switch (str) {
        case "PlayerUpdate":
            return MessageKind.PlayerUpdate;
        default:
            return null;
    }
}
