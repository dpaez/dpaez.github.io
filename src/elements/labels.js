/* eslint no-unused-vars: ["error", {"args": "none"}] */
const html = require('choo/html');

const createLi = (item) => {

    return html`
    <li class='dib mr1 mb2'>
        <a href='#' class='f6 link dim ba ph3 pv2 mb2 dib light-purple'>${item}</a>
    </li>`;
};

const createLiAlt = (item) => {
    return html`
     <li class='dib mr1 mb2'>
        <a href='#' class='f6 link dim ba ph3 pv2 mb2 dib purple'>${item}</a>
    </li>`;
};

const labels = (state, prev, send) => {
    const skills = state.skills.primary;
    const altSkills = state.skills.secondary;
    return html`
    <ul class='list pa0'>
        ${skills.map((skill) => createLi(skill.title))}
        ${altSkills.map((skill) => createLiAlt(skill.title))}
    </ul>`;
};

// labels list
module.exports = labels;
