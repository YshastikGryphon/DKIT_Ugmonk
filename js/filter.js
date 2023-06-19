let button_radio = document.querySelectorAll('.products__filter-label');

let filter = document.querySelector('.products__list');

    button_radio.forEach(function(the_button) {
        the_button.addEventListener('click', 
        function(e) {

            const path = e.currentTarget.dataset.path;

            the_button.classList.toggle ('products__filter-label--active');

            filter.classList.toggle(path);
        })
    })