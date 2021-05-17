const db = require('./models');

function addNewPost() {
    db.place.create({
        title: 'Blackwater Falls State Park',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia tincidunt ante, at egestas lacus tincidunt sit amet. Nulla pretium eros sed malesuada cursus. Integer leo turpis, tempus lobortis dui ut, viverra dignissim ante. Sed eleifend dolor lacus, nec placerat sem venenatis sed. Mauris ac odio non orci ultrices fermentum at bibendum ex. Mauris aliquam dui in tristique condimentum. Aenean nec lobortis diam.',
        countyName: 'Tucker',
        categoryName: 'Family-friendly',
        image: ''
    })
    .then(newPost => {
        console.log(newPost);
    })
    .catch(err => {
        console.log(err);
    })
}

//addNewPost()

function fetchPlaces() {
    db.place.findAll()
    .then(places => {
        console.log(places);
    })
}

fetchPlaces();