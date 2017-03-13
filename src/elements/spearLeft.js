/* eslint no-unused-vars: ["error", {"args": "none"}] */
const html = require('choo/html');

const spearLeft = (state, prev, send) => {
    return html`
    <div class="spear-left fl h-100 bg-silver spear-left w1">
    </div>`;
};

// spear element
module.exports = spearLeft;

