// ==UserScript==
// @name         Bypass EduNext Copy Paste
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Tu dong mo khoa copy paste va chuot phai tren EduNext
// @match        https://fsc-edunext.fpt.edu.vn/*
// @match        https://edunext.fpt.edu.vn/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    const events = ['copy', 'cut', 'paste', 'selectstart', 'contextmenu'];

    function enableCopy() {
        events.forEach(e => {
            document.addEventListener(e, x => x.stopPropagation(), true);
        });
    }

    enableCopy();
    window.addEventListener('DOMContentLoaded', enableCopy);
})();