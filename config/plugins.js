module.exports = ({ env }) => ({
  graphql: {
    enabled: true,
    config: {
      playgroundAlways: false,
      // endpoint: "/graphql",
      // shadowCRUD: true,
      // depthLimit: 7,
      // amountLimit: 100,
      // generateArtifacts: false,
      // artifacts: {
      //   schema: false,
      //   typegen: false,
      // },
      // apolloServer: {
      //   allowBatchedHttpRequests: false,
      //   tracing: false,
      // },
    },
  },
  "apollo-sandbox": {

    // enables the plugin only in development mode
    // if you also want to use it in production, set this to true
    // keep in mind that graphql playground has to be enabled
    enabled: false,
    // enabled: process.env.NODE_ENV === "production" ? false : true,
    // endpoint: "https://tunneled-strapi.com/graphql"
    // endpoint: "http://localhost:1337/graphql",
    // endpoint: "https://tunneled-strapi.com/graphql", // OPTIONAL - endpoint has to be accessible from the browser
  },
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: "localhost",
        port: 1025,
        ignoreTLS: true,
      },
    },
  },
});
