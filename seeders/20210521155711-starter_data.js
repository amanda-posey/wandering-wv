'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('places', [{
      title: 'Blackwater Falls State Park',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia tincidunt ante, at egestas lacus tincidunt sit amet. Nulla pretium eros sed malesuada cursus. Integer leo turpis, tempus lobortis dui ut, viverra dignissim ante. Sed eleifend dolor lacus, nec placerat sem venenatis sed. Mauris ac odio non orci ultrices fermentum at bibendum ex. Mauris aliquam dui in tristique condimentum. Aenean nec lobortis diam.',
      countyName: 'Tucker',
      categoryName: 'Family-friendly',
      image: 'https://res.cloudinary.com/dw4srrlry/image/upload/v1621614036/blackwaterfalls_nmusgn.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
      searchString: 'blackwater+falls+state+park'
      },
      {
        title: 'Fairy Trail at Mason Dixon Park',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia tincidunt ante, at egestas lacus tincidunt sit amet. Nulla pretium eros sed malesuada cursus. Integer leo turpis, tempus lobortis dui ut, viverra dignissim ante. Sed eleifend dolor lacus, nec placerat sem venenatis sed. Mauris ac odio non orci ultrices fermentum at bibendum ex. Mauris aliquam dui in tristique condimentum. Aenean nec lobortis diam.',
        countyName: 'Monongalia',
        categoryName: 'Family-friendly',
        image: 'https://res.cloudinary.com/dw4srrlry/image/upload/v1621614443/fairytrail1_tj5eyu.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        searchString: 'mason+dixon+historical'
        },
        {
          title: 'Holly River State Park',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia tincidunt ante, at egestas lacus tincidunt sit amet. Nulla pretium eros sed malesuada cursus. Integer leo turpis, tempus lobortis dui ut, viverra dignissim ante. Sed eleifend dolor lacus, nec placerat sem venenatis sed. Mauris ac odio non orci ultrices fermentum at bibendum ex. Mauris aliquam dui in tristique condimentum. Aenean nec lobortis diam.',
          countyName: 'Webster',
          categoryName: 'Family-friendly',
          image: 'https://res.cloudinary.com/dw4srrlry/image/upload/v1621614430/hrsp_h9qsia.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
          searchString: 'holly+river+state+park'
          }
      ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
