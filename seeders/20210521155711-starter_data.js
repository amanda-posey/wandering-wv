'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('places', [{
      title: 'Blackwater Falls State Park',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia tincidunt ante, at egestas lacus tincidunt sit amet. Nulla pretium eros sed malesuada cursus. Integer leo turpis, tempus lobortis dui ut, viverra dignissim ante. Sed eleifend dolor lacus, nec placerat sem venenatis sed. Mauris ac odio non orci ultrices fermentum at bibendum ex. Mauris aliquam dui in tristique condimentum. Aenean nec lobortis diam.',
      countyName: 'Tucker',
      categoryName: 'Family-friendly',
      image: 'https://res.cloudinary.com/dw4srrlry/image/upload/v1621614036/blackwaterfalls_nmusgn.jpg',
      image2: 'https://res.cloudinary.com/dw4srrlry/image/upload/v1621735388/bwf2_ava9gt.jpg',
      image3: 'https://res.cloudinary.com/dw4srrlry/image/upload/v1621735384/bwf3_bcnq6l.jpg',
      image4: 'https://res.cloudinary.com/dw4srrlry/image/upload/v1621735383/bwf4_m3230j.jpg',
      image5: 'https://res.cloudinary.com/dw4srrlry/image/upload/v1621735387/bwf5_r5p5pf.jpg',
      image6: 'https://res.cloudinary.com/dw4srrlry/image/upload/v1621735387/bwf6_b13d8y.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
      searchString: 'blackwater+falls+state+park'
      },
      {
        title: 'Mason Dixon Historical Park',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia tincidunt ante, at egestas lacus tincidunt sit amet. Nulla pretium eros sed malesuada cursus. Integer leo turpis, tempus lobortis dui ut, viverra dignissim ante. Sed eleifend dolor lacus, nec placerat sem venenatis sed. Mauris ac odio non orci ultrices fermentum at bibendum ex. Mauris aliquam dui in tristique condimentum. Aenean nec lobortis diam.',
        countyName: 'Monongalia',
        categoryName: 'Family-friendly',
        image: 'https://res.cloudinary.com/dw4srrlry/image/upload/v1621614443/fairytrail1_tj5eyu.jpg',
        image2: 'https://res.cloudinary.com/dw4srrlry/image/upload/v1621736091/ft2_zngeko.jpg',
        image3: 'https://res.cloudinary.com/dw4srrlry/image/upload/v1621736091/ft3_ljwznp.jpg',
        image4: 'https://res.cloudinary.com/dw4srrlry/image/upload/v1621736093/ft4_qhclcr.jpg',
        image5: 'https://res.cloudinary.com/dw4srrlry/image/upload/v1621736093/ft5_f9hdnh.jpg',
        image6: 'https://res.cloudinary.com/dw4srrlry/image/upload/v1621736094/ft6_poufuk.jpg',
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
          image2: 'https://res.cloudinary.com/dw4srrlry/image/upload/v1621736541/hrsp2_rmzpah.jpg',
          image3: 'https://res.cloudinary.com/dw4srrlry/image/upload/v1621736540/hrsp3_h53ewg.jpg',
          image4: 'https://res.cloudinary.com/dw4srrlry/image/upload/v1621736546/hrsp4_y6sckn.jpg',
          image5: 'https://res.cloudinary.com/dw4srrlry/image/upload/v1621736548/hrsp5_cdqjyp.jpg',
          image6: 'https://res.cloudinary.com/dw4srrlry/image/upload/v1621736548/hrsp6_lnfxue.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
          searchString: 'holly+river+state+park'
          },
          {
            title: 'New River Gorge Park',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia tincidunt ante, at egestas lacus tincidunt sit amet. Nulla pretium eros sed malesuada cursus. Integer leo turpis, tempus lobortis dui ut, viverra dignissim ante. Sed eleifend dolor lacus, nec placerat sem venenatis sed. Mauris ac odio non orci ultrices fermentum at bibendum ex. Mauris aliquam dui in tristique condimentum. Aenean nec lobortis diam.',
            countyName: 'Fayette',
            categoryName: 'Family-friendly',
            image: 'https://res.cloudinary.com/dw4srrlry/image/upload/v1621815898/nrg_r0oevf.jpg',
            image2: 'https://res.cloudinary.com/dw4srrlry/image/upload/v1621815902/nrg2_h1barz.jpg',
            image3: 'https://res.cloudinary.com/dw4srrlry/image/upload/v1621815898/nrg3_ghyzsc.jpg',
            image4: 'https://res.cloudinary.com/dw4srrlry/image/upload/v1621815916/nrg4_txae46.jpg',
            image5: 'https://res.cloudinary.com/dw4srrlry/image/upload/v1621815926/nrg5_mfqhuu.jpg',
            image6: 'https://res.cloudinary.com/dw4srrlry/image/upload/v1621815896/nrg6_enfyq0.jpg',
            createdAt: new Date(),
            updatedAt: new Date(),
            searchString: 'new+river+gorge+park'
            },
            {
              title: 'Trans Allegheny Lunatic Asylum',
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia tincidunt ante, at egestas lacus tincidunt sit amet. Nulla pretium eros sed malesuada cursus. Integer leo turpis, tempus lobortis dui ut, viverra dignissim ante. Sed eleifend dolor lacus, nec placerat sem venenatis sed. Mauris ac odio non orci ultrices fermentum at bibendum ex. Mauris aliquam dui in tristique condimentum. Aenean nec lobortis diam.',
              countyName: 'Lewis',
              categoryName: 'Family-friendly',
              image: 'https://res.cloudinary.com/dw4srrlry/image/upload/v1621816613/tala_xupt01.jpg',
              image2: 'https://res.cloudinary.com/dw4srrlry/image/upload/v1621816612/tala2_b9mtih.jpg',
              image3: 'https://res.cloudinary.com/dw4srrlry/image/upload/v1621816614/tala3_jnt0s1.jpg',
              image4: 'https://res.cloudinary.com/dw4srrlry/image/upload/v1621816612/tala4_sttpub.jpg',
              image5: 'https://res.cloudinary.com/dw4srrlry/image/upload/v1621816615/tala5_tccfjq.jpg',
              image6: 'https://res.cloudinary.com/dw4srrlry/image/upload/v1621816615/tala6_l6oe4j.jpg',
              createdAt: new Date(),
              updatedAt: new Date(),
              searchString: 'trans+allegheny+lunatic+asylum'
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
