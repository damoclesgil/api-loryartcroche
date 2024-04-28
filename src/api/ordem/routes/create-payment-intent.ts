export default {
  routes: [
    {
      method: "POST",
      path: "/ordem/create-payment-intent",
      handler: "create-payment-intent.createPayment",
    },
  ],
};
