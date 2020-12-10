/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
//   global variable navigation_list 
const navigation_list = document.getElementById('navbar__list');
//   global variable all_sections 
const all_sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the navigation menu 

const navigation_builder = () => {

    let navigation_elements = '';

    all_sections.forEach(i => {

        link_id = `link_${i.id}"`;

        navigation_elements += `<li><a id="${link_id}" class="menu__link" href="#${i.id}">${i.dataset.nav}</a></li>`;

    });

    // add elements to the navigation list 
    navigation_list.innerHTML = navigation_elements;

}
navigation_builder();

// Add class 'active' to section when near top of viewport
// Set sections as active
const add_active_class_for_active_section = () => {

    all_sections.forEach(i => {

        i.classList.remove('your-active-class');

        if (Math.floor(i.getBoundingClientRect().top) < 200 && Math.floor(i.getBoundingClientRect().top) >= -200) {

            i.classList.add('your-active-class');

        }

    });

};

window.addEventListener('scroll', add_active_class_for_active_section);

// Scroll to anchor ID using scrollTO event

const scroll = (section_id) => {
    let e = document.getElementById(section_id);
    e.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'
    });
}

// Scroll to section on link click

const add_scroll_to_link = () => {

    const links_in_navigation_link = document.querySelectorAll('.navbar__menu a');

    links_in_navigation_link.forEach(a => {
        a.addEventListener('click', scroll(a.id.replace('link_', '')));
    });

};

add_scroll_to_link();



/**
 * End Main Functions
 * Begin Events
 *
*/








