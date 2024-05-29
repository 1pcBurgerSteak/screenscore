var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
const J_coords = [[100, 0], [50, 0], [50, 100], [0, 100], [0, 50]]
const B_coords = [[0, 100], [50, 100], [75, 75], [50, 50], [0, 50], [50, 50], [75, 25], [50,0], [5, 0]]
ctx.lineWidth = 10;

function draw_J(startX, startY, coords) {
    ctx.moveTo(startX, startY);  //"J" starting point
    ctx.lineTo(startX + coords[0][0], startY); // 100 , 0
    ctx.moveTo(startX + coords[1][0], startY); // 50 , 0
    ctx.lineTo(startX + coords[2][0], startY + coords[2][1]); // 50, 100
    ctx.lineTo(startX, startY + coords[3][1]); // 0, 100
    ctx.lineTo(startX, startY + coords[4][1]); // 0, 50
}

function draw_B(startX, startY, coords) {
    ctx.moveTo(startX, startY); //"B" starting point.
    ctx.lineTo(startX, startY + coords[0][1]); // 0, 100
    ctx.lineTo(startX + coords[1][0], startY + coords[1][1]); // 50, 100
    ctx.lineTo(startX + coords[2][0], startY + coords[2][1]); // 75, 75
    ctx.lineTo(startX + coords[3][0], startY + coords[3][1]); // 50, 50
    ctx.lineTo(startX, startY + coords[4][1]); // 0, 50
    ctx.lineTo(startX + coords[5][0], startY + coords[5][1]); // 50, 50
    ctx.lineTo(startX + coords[6][0], startY + coords[6][1]); // 75, 25
    ctx.lineTo(startX + coords[7][0], startY); // 50, 0
    ctx.lineTo(startX - coords[8][0], startY); // -5, 0
}

draw_J(100, 100, J_coords);
draw_B(220, 100, B_coords);
draw_B(325, 100, B_coords);
ctx.stroke();