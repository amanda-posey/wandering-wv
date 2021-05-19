'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('counties', [
      {
        name: 'Barbour',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Berkeley',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Boone',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Braxton',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brooke',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cabell',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Calhoun',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Clay',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Doddridge',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Fayette',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gilmer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Grant',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Greenbrier',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hancock',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hardy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Harrison',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jackson',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jefferson',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kanawha',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lewis',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lincoln',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Logan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Marion',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Marshall',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mason',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'McDowell',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mercer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mineral',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mingo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Monongalia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Monroe',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Morgan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nicholas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ohio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pendleton',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pleasants',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pocahontas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Preston',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Putnam',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Raleigh',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Randolph',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ritchie',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Roane',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Summers',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Taylor',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tucker',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tyler',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Upshur',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Wayne',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Webster',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Wetzel',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Wirt',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Wood',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Wyoming',
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example: */
     await queryInterface.bulkDelete('counties', null, {});
    
  }
};
