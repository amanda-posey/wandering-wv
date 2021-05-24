'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('places', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.TEXT
      },
      content: {
        type: Sequelize.TEXT
      },
      countyName: {
        type: Sequelize.TEXT
      },
      categoryName: {
        type: Sequelize.TEXT
      },
      image: {
        type: Sequelize.TEXT
      },
      image2: {
        type: Sequelize.TEXT
      },
      image3: {
        type: Sequelize.TEXT
      },
      image4: {
        type: Sequelize.TEXT
      },
      image5: {
        type: Sequelize.TEXT
      },
      image6: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('places');
  }
};