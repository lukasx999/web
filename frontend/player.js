function movePlayer(player, key) {
    const player_step = 0.001;
    switch (key) {
        case 'ArrowLeft':
        case 'a':
        case 'h':
            player.x -= player_step;
            break;
        case 'ArrowRight':
        case 'd':
        case 'l':
            player.x += player_step;
            break;
        case 'ArrowUp':
        case 'w':
        case 'k':
            player.y -= player_step;
            break;
        case 'ArrowDown':
        case 's':
        case 'j':
            player.y += player_step;
            break;
        default:
            break;
    }
}
export function drawPlayer(player) {
    const canvas = document.getElementById("game");
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    window.addEventListener("keydown", event => movePlayer(player, event.key));
    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    ctx.arc(player.x * width, player.y * height, player.size * 100, 0, 2 * Math.PI);
    ctx.fillStyle = player.color;
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.stroke();
}
