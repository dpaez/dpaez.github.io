/* eslint no-unused-vars: ["error", {"args": "none"}] */
const html = require('choo/html');

const tagline = (state, prev, send) => {
    const paragraph = state.tagline;
    return html`
    <p class='f4 lh-copy measure-wide'>${paragraph}</p>`;
};

module.exports = tagline;
