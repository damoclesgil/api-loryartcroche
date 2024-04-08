module.exports = [
  "strapi::errors",
  // "strapi::security",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        directives: {
          "script-src": ["'self'", "editor.unlayer.com"],
          "frame-src": ["http://localhost:*", "'self'", "editor.unlayer.com"],
          "img-src": ["'self'", "data:", "cdn.jsdelivr.net", "strapi.io", "s3.amazonaws.com"],
        },
        // directives: {
        //   "frame-src": ["http://localhost:*", "self", "sandbox.embed.apollographql.com"],
        // },
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
