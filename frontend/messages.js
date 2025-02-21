export var MessageKind;
(function (MessageKind) {
    MessageKind[MessageKind["Hello"] = 0] = "Hello";
    MessageKind[MessageKind["Move"] = 1] = "Move";
})(MessageKind || (MessageKind = {}));
export function stringToMessageKind(str) {
    switch (str) {
        case "Hello":
            return MessageKind.Hello;
        default:
            return null;
    }
}
export var Direction;
(function (Direction) {
    Direction[Direction["Right"] = 0] = "Right";
    Direction[Direction["Left"] = 1] = "Left";
    Direction[Direction["Up"] = 2] = "Up";
    Direction[Direction["Down"] = 3] = "Down";
})(Direction || (Direction = {}));
