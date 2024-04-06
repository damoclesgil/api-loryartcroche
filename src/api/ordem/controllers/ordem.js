"use strict";

/**
 * ordem controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::ordem.ordem", ({ strapi }) => ({
  async create(ctx) {
    console.log(ctx.body);
    return "a";
  },
}));
