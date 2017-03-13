/* eslint no-unused-vars: ["error", {"args": "none"}] */
const html = require('choo/html');

const company = (state, prev, send) => {
    const companyData = state.company;
    return html`
    <span class='dib'>
        <a class='gray lh-copy link' href="${companyData.link}">${companyData.name} > ${companyData.role}</a>
    </span>
    `;
};

// company element
module.exports = company;
