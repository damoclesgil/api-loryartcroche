module.exports = {
  routes: [
    {
      method: "POST",
      path: "/ordem/create-payment-intent",
      handler: "create-payment-intent.createPayment",
    },
  ],
};
