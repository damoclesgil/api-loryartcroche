module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        // useDefaults: true,
        directives: {
          "script-src": ["'self'", "editor.unlayer.com"],
          "frame-src": ["http://localhost:*", "'self'", "editor.unlayer.com",  "sandbox.embed.apollographql.com"],
          // 'connect-src': ["'self'", 'https:'],
          // 'img-src': ["'self'", 'data:', 'blob:', 'market-assets.strapi.io', 'res.cloudinary.com'],
          // 'media-src': [
          //   "'self'",
          //   'data:',
          //   'blob:',
          //   'market-assets.strapi.io',
          //   'res.cloudinary.com',
          // ],
          // upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  // { name: "strapi::body", config: { includeUnparsed: true } },
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
