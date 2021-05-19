module.exports = {
    up: async (queryInterface, Sequelize) => {
       /**
       * Add seed commands here.
       *name: DataTypes.STRING,
        conference: DataTypes.STRING,
        founded: DataTypes.INTEGER,
        location: DataTypes.STRING,
        championships: DataTypes.INTEGER,
        website: DataTypes.STRING
       */
        await queryInterface.bulkInsert('county', [
          {
            county: 'Barbour',
          },
          {
            county: 'Berkeley'
          },
          {
            county: 'Boone'
          },
          {
            county: 'Braxton'
          },
          {
            county: 'Brooke'
          },
          {
            county: 'Cabell'
          },
          {
            county: 'Calhoun'
          },
          {
            county: 'Clay'
          },
          {
            county: 'Doddridge'
          },
          {
            county: 'Fayette'
          },
          {
            county: 'Gilmer'
          },
          {
            county: 'Grant'
          },
          {
            county: 'Greenbrier'
          },
          {
            county: 'Hancock'
          },
          {
            county: 'Hardy'
          },
          {
            county: 'Harrison'
          },
          {
            county: 'Jackson'
          },
          {
            county: 'Jefferson'
          },
          {
            county: 'Kanawha'
          },
          {
            county: 'Lewis'
          },
          {
            county: 'Lincoln'
          },
          {
            county: 'Logan'
          },
          {
            county: 'Marion'
          },
          {
            county: 'Marshall'
          },
          {
            county: 'Mason'
          },
          {
            county: 'McDowell'
          },
          {
            county: 'Mercer'
          },
          {
            county: 'Mineral'
          },
          {
            county: 'Mingo'
          },
          {
            county: 'Monongalia'
          },
          {
            county: 'Monroe'
          },
          {
            county: 'Morgan'
          },
          {
            county: 'Nicholas'
          },
          {
            county: 'Ohio'
          },
          {
            county: 'Pendleton'
          },
          {
            county: 'Pleasants'
          },
          {
            county: 'Pocahontas'
          },
          {
            county: 'Preston'
          },
          {
            county: 'Putnam'
          },
          {
            county: 'Raleigh'
          },
          {
            county: 'Randolph'
          },
          {
            county: 'Ritchie'
          },
          {
            county: 'Roane'
          },
          {
            county: 'Summers'
          },
          {
            county: 'Taylor'
          },
          {
            county: 'Tucker'
          },
          {
            county: 'Tyler'
          },
          {
            county: 'Upshur'
          },
          {
            county: 'Wayne'
          },
          {
            county: 'Webster'
          },
          {
            county: 'Wetzel'
          },
          {
            county: 'Wirt'
          },
          {
            county: 'Wood'
          },
          {
            county: 'Wyoming'
          }

        ], {});
      },
    
      down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         */
        await queryInterface.bulkDelete('county', null, {});
      }
    };