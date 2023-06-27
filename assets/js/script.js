'use strict';

/**
 * Add event on multiple elements
 */

const addEventOnElement = function(elements, eventType, callback ){
    for(let i = 0, len = elements.length; i < len; i++){
        elements[i].addEventListener(eventType, callback)
    }
}

/**
 * navbar toggle for mobile
 */

const navbar = document.querySelector("[data-navbar]");
const navToglleBtn = document.querySelector("[data-nav-toggle-btn]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function(){
    navbar.classList.toggle("active");
    navToglleBtn.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");

}

addEventOnElement([navToglleBtn, overlay], "click", toggleNavbar)