'use strict';

/**
 * ordem router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

// module.exports = createCoreRouter('api::ordem.ordem');

module.exports = createCoreRouter('api::ordem.ordem', {
  prefix: '',
  only: ['find', 'findOne'],
  except: [],
  config: {
    find: {
      auth: false,
      policies: [],
      middlewares: [],
    },
    findOne: {},
    create: {},
    update: {},
    delete: {},
  },
});

// module.exports = createCoreRouter({
//   routes: [
//     {
//       method: "GET",
//       path: "/ordem",
//       handler: "api::ordem.ordem",
//     },
//     {
//       method: "GET",
//       path: "/ordem-test",
//       handler: "ordem.ordem",
//     },
//   ],
// })
