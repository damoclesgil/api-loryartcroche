// @ts-ignore
const stripe = require("stripe")(process.env.STRIPE_KEY);

module.exports = {
  async createPayment(ctx, next) {
    const { cart } = ctx.request.body;

    let produtos = [];

    await Promise.all(
      cart?.map(async produto => {
        const validatedProduct = await strapi.entityService.findOne("api::produto.produto", produto.id);

        if (validatedProduct) {
          produtos.push(validatedProduct);
        }
      })
    );

    if (!produtos.length) {
      ctx.response.status = 404;
      return {
        error: "Produto não válido!",
      };
    }

    const total = produtos.reduce((acc, produto) => {
      return acc + Number(produto.preco);
    }, 0);

    if (total === 0) {
      return {
        freeProducts: true,
      };
    }
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: total * 100,
        // currency: "usd",
        currency: "brl",
        metadata: {
          integration_check: "accept_a_payment",
        },
        // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
        automatic_payment_methods: {
          enabled: true,
        },
      });
      return paymentIntent;
    } catch (err) {
      return {
        error: err.raw.message,
      };
    }
  },
};
