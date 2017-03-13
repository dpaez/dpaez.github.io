/* eslint no-unused-vars: ["error", {"args": "none"}] */
const html = require('choo/html');
const company = require('./company');

function glitchMe(el) {
    el.addEventListener('webkitAnimationEnd', () => {
        let randTime = 1000;
        el.style.animation = 'none';
        setTimeout(() => {
            randTime = Math.floor(Math.random() * 5000);
            el.style.animation = '';
        }, randTime);
    });
}

const title = (state, prev, send) => {
    return html`
        <header class="dt mw6">
            <div class="dtc v-mid">
                <img src="https://pbs.twimg.com/profile_images/799493028348129280/FKiV5x49.jpg" class="br3 ba b--black-10 h4 w4" alt="dk, also known as deka, avatar picture">
            </div>
            <div class="dtc v-mid pl3">
                <h2 class="f2-ns" onload=${ glitchMe }>${state.name}</h2>
                ${company(state, prev, send)}
            </div>
        </header>
    `;
};

// Title element
module.exports = title;


