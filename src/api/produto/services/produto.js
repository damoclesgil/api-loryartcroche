'use strict';

/**
 * produto service
 */
// @ts-ignore
const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::produto.produto');