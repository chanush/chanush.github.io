
const app = {
    pages: [],
    show: new Event('show'),
    init: function() {
        app.pages = document.querySelectorAll('.page');
        app.pages.forEach((pg) => {
            pg.addEventListener('show', app.pageShown);
        })

        document.querySelectorAll('.nav-link').forEach((link) => {
            link.addEventListener('click', app.nav);
        })
        history.replaceState({}, 'signin', '/week4/html/onepage.html#signin');
        window.addEventListener('popstate', app.poppin);
    },
    nav: function(ev) {
        ev.preventDefault();
        //ev.target - עליו התרחש האירוע
        let currentPage = ev.target.getAttribute('data-target');
        app.showActive(currentPage);
        history.pushState({}, currentPage, `#${currentPage}`);
    },
    pageShown: function(ev) {
        console.log('Page', ev.target.id, 'just shown');
    },
    poppin: function(ev) {
        console.log(location.hash);
        let hash = location.hash.replace('#', '');
        app.showActive(hash);
    },
    showActive: function(activePage) {
        document.querySelector('.active').classList.remove('active');
        document.getElementById(activePage).classList.add('active');
        document.getElementById(activePage).dispatchEvent(app.show);
    }
}
document.addEventListener('DOMContentLoaded', app.init);
