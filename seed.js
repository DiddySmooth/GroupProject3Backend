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
    await queryInterface.bulkInsert('products', [
     {
        name: "RTX 2080",
        description: "big fast",
        image: "https://i.imgur.com/mOlfFAb.jpg",
        price: 3499,
        createdAt: new Date(),
        updatedAt: new Date()
     },
    ])

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
      }
    }
};