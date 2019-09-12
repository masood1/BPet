"use strict";
var dataProvider = require("../data/pets.js");
var pet = require("../db/pet");
/**
 * Operations on /pets
 */
module.exports = {
  /**
   * summary: List all pets
   * description:
   * parameters: limit
   * produces:
   * responses: 200, default
   */
  get: function listPets(req, res, next) {
    /**
     * Get the data for response 200
     * For response `default` status 200 is used.
     */
    var status = 200;
  },
  /**
   * summary: Create a pet
   * description:
   * parameters:
   * produces:
   * responses: 201, default
   */
  post: function createPets(req, res, next) {
    /**
     * Get the data for response 201
     * For response `default` status 200 is used.
     */
    var status = 201;

    pet.addPet(req.data).then(
      res => {
        res.send(status);
      },
      rej => {
        res.send(501);
      }
    );
  }
};
