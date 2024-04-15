'use strict';

/**
 * favorito service
 */
// @ts-ignore
const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::favorito.favorito');
