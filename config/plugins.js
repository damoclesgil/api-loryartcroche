
module.exports = ({ env }) => ({
  graphql: {
    enabled: true,
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      generateArtifacts: false,
      artifacts: {
        schema: false,
        typegen: false,
      },
      apolloServer: {
        allowBatchedHttpRequests: false,
        tracing: false,
      },
    },
  },
});
