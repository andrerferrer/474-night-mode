// 1. ALWAYS
// select the element
// const button = document.querySelector('#toggle-btn');
const button = document.getElementById('toggle-btn');

// 2. add event listener
// button.addEventListener('event', 'callback')
button.addEventListener('click', (event) => {
    // 3. implement the callback (and do the magic)
    // change the color of the body
    // selecting the element
    const body = document.querySelector('body');
    body.classList.toggle('bg-dark');
});