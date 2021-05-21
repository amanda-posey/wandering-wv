'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'places',
        'searchString',
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      )
    ]);
  },


  down(queryInterface, Sequelize) {
    // logic for reverting the changes
    return Promise.all([
      queryInterface.removeColumn('places', 'searchString')
    ]);
  },
};
