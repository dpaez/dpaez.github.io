const html = require('choo/html');
const dt = require('delaunay-triangulate');
const width = require('dom-helpers/query/width');
const height = require('dom-helpers/query/height');
let points;
let cells;
let context;


function getRandomInt(min, max) {
    return Math.random() * (max - min) + min;
}

const internals = {};

// canvas manipulation - dalaunay stuff below
const initCanvas = function initCanvas(canvas, dots) {
    canvas = canvas || window.getElementById('canvasBG');
    // Initialize triangulation
    points = new Array(dots);
    canvas.width = width(document.getElementById('body-container'));
    canvas.height = height(document.getElementById('body-container'));
    for (let i = 0; i < dots; ++i) {
        // points[i] = [Math.random(), Math.random()];
        points[i] = [getRandomInt(0, canvas.width), getRandomInt(0, canvas.height)];
    }
    cells = dt(points);

    context = canvas.getContext('2d');

    context.globalCompositeOperation = 'multiply';
    context.lineJoin = 'round';
    context.lineWidth = 1;

    context.setTransform(
        1, 0,
        0, 1,
        0, 0
    );
    context.shadowOffsetX = 5;
    context.shadowOffsetY = 5;
    context.shadowBlur = 5;
    context.strokeStyle = context.shadowColor = 'rgba(106, 136, 169, 0.1)';
    for (let i = 0; i < cells.length; ++i) {
        const cell = cells[i];
        context.beginPath();
        context.moveTo(points[cell[0]][0], points[cell[0]][1]);
        for (let j = 1; j < cell.length; ++j) {
            context.lineTo(points[cell[j]][0], points[cell[j]][1]);
        }
        context.closePath();
        context.stroke();
    }
};

function draw(el, dots) {
    internals.dots = dots;
    window.addEventListener('resize', () => window.requestAnimationFrame(() => initCanvas(el, dots)));
    window.requestAnimationFrame(() => initCanvas(el, dots));
}

const canvasBG = (state, prev, send) => {
    return html`
        <canvas id="canvasBG" onload=${(el) => draw(el, state.dots) }></canvas>
    `;
};

// canvas background element
module.exports = canvasBG;
