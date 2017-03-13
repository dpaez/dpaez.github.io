/* eslint no-unused-vars: ["error", {"args": "none"}] */
const html = require('choo/html');

const resume = (state, prev, send) => {
    const link = state.resume;
    return html`
        <a class='f6 link dim ph3 pv2 mb2 dib white bg-mid-gray' href="${link}">Résumé</a>
    `;
};

// resume element
module.exports = resume;
