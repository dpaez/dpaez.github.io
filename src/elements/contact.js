/* eslint no-unused-vars: ["error", {"args": "none"}] */
const html = require('choo/html');

const contact = (state, prev, send) => {
    const mail = state.contact.mail;
    return html`
        <a class='f6 link dim ph3 pv2 mb2 dib white bg-mid-gray' href="mailto:${mail}">Contact</a>
    `;
};

// contact element
module.exports = contact;
