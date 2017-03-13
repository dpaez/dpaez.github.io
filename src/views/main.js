const html = require('choo/html');

// elements :D

const title = require('../elements/title');
// const spearRight = require('../elements/spearRight');
// const spearLeft = require('../elements/spearLeft');
// const spearBottom = require('../elements/spearBottom');
const tagline = require('../elements/tagline');
const labels = require('../elements/labels');
const company = require('../elements/company');
const contact = require('../elements/contact');
const resume = require('../elements/resume');
const canvasBG = require('../elements/canvasBG');

const main = (state, prev, send) => {
    return html`
    <main class='avenir pa3 pa5-ns v-mid dtc'>
        <article class='center w-100 w-75-l'>
            <section class='w-100'>
                ${title(state, prev, send)}
                ${tagline(state, prev, send)}
                ${labels(state, prev, send)}
            </section>
        </article>
        <aside class='bt pt3 bw2 center w-100-ns w-75-l'>
            ${contact(state, prev, send)}
            ${resume(state, prev, send)}
        </aside>
        ${canvasBG(state, prev, send)}
    </main>`;
};

module.exports = main;
