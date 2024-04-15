"use strict";

/**
 * ordem controller
 */

// @ts-ignore
const stripe = require("stripe")(process.env.STRIPE_KEY);
// @ts-ignore
const { createCoreController } = require("@strapi/strapi").factories;
// const orderTemplate = require("../../../config/email-templates/order");
// const orderTemplate = require("../../../config/email-templates/order");

const subject = "Ordem em Lory Art Crochê";

const text = `
  Olá <%= user.username %>, obrigado por comprar em Lory Art Crochê!
  Follow the info of your order:

  Card Information:

  Card brand: <%= payment.card_brand %>
  Card number: **** **** **** <%= payment.card_last4 %>

  Total: <%= payment.total %>

  Produtos:

  <% _.forEach(produtos, function(produto) { %>
    <%= produto.nome %> - Price: $<%= Number(produto.preco).toFixed(2) %>
  <% }); %>
`;

const html = `
  <p>Hi <%= user.username %>, thanks for buying at Lory Art Crochê!</p>
  <p>Follow the info of your order:</p>

  <h3>Card Information</h3>

  <ul>
    <li><strong>Card brand:</strong> <%= payment.card_brand %></li>
    <li><strong>Card number:</strong> **** **** **** <%= payment.card_last4 %></li>
  </ul>

  <h3>Total: <%= payment.total %></h3>

  <hr />

  <h3>Produtos</h3>

  <ul>
    <% _.forEach(produtos, function(produto) { %>
			<li><a href="http://localhost:3000/produto/<%= produto.slug %>"><%= produto.nome %></a> - Price: <strong>$<%= Number(produto.preco).toFixed(2) %></strong></li>
		<% }); %>
  </ul>
`;

const emailTemplate = {
  subject,
  text,
  html,
};

const cartProductIds = async cart => {
  return await cart.map(product => ({
    id: product.id,
  }));
};

const cartItems = async cart => {
  let products = [];

  await Promise.all(
    cart?.map(async product => {
      const validatedproduct = await strapi.entityService.findOne("api::produto.produto", product.id);

      if (validatedproduct) {
        products.push(validatedproduct);
      }
    })
  );

  return products;
};

const calculateTotalPrice = async products => {
  const amount = await products.reduce((acc, product) => {
    return acc + Number(product.preco);
  }, 0);

  // 518.39123 * 100 === 51839;
  return Number((amount * 100).toFixed(0));
};

module.exports = createCoreController("api::ordem.ordem", ({ strapi }) => ({
  async create(ctx) {
    // pegar as informações do frontend
    const { cart, paymentIntentId, paymentMethod } = ctx.request.body.data;

    // const userInfo = await strapi.plugins['users-permissions'].services.user.fetchAuthenticatedUser(userId);
    // console.log(userInfo)

    const cartProductsIds = await cartProductIds(cart);

    const produtos = await cartItems(cartProductsIds);

    console.log(produtos)
    /*
    [
  {
    id: 1,
    nome: 'Bolsinha top',
    slug: 'bolsinha-top',
    descricao: ';SDJFKVASHDFASDFHKJ',
    preco: 211.53,
    createdAt: '2024-04-05T21:05:09.416Z',
    updatedAt: '2024-04-08T13:17:49.829Z'
  }
]
    */

    const total_in_cents = await calculateTotalPrice(produtos);

    let paymentInfo;
    if (total_in_cents !== 0) {
      try {
        paymentInfo = await stripe.paymentMethods.retrieve(paymentMethod);
      } catch (err) {
        ctx.response.status = 402;
        return { error: err.message };
      }
    }
    const userInfo = ctx.state.user;
    // salvar no banco
    const entry = {
      total_in_cents,
      payment_intent_id: paymentIntentId,
      card_brand: paymentInfo?.card?.brand,
      card_last4: paymentInfo?.card?.last4,
      user: userInfo,
      produtos,
    };

    const createOrdemPagamento = await strapi.entityService.create("api::ordem.ordem", {
      data: {
        ...entry,
      },
    });

    const emailTemplate2 = {
      subject: "Welcome <%= user.email %>",
      text: `Welcome to mywebsite.fr! `,
      html: `sadfas <%= payment.total %>
      `,
      // <ul>
      //   <% _.forEach(produtos, function(produto) { %>
      //     <li><a href="http://localhost:3000/produto/<%= produto.slug %>"><%= produto.nome %></a> - Price: <strong>$<%= Number(produto.preco).toFixed(2) %></strong></li>
      //   <% }); %>
      // </ul>
    };

    // await strapi.plugins["email"].services.email.sendTemplatedEmail(
    await strapi.plugins["email-designer"].services.email.sendTemplatedEmail(
      {
        to: userInfo.email,
        from: "no-reply@loryartcorche.com.br",
      },
      {
        templateReferenceId: 1,
      },
      // emailTemplate2,
      {
        user: userInfo,
        payment: {
          total: `${total_in_cents / 100}`,
          card_brand: entry.card_brand,
          card_last4: entry.card_last4,
        },
        produtos,
      }
    );

    // enviar um email da compra para o usuário
    const sanitizedResults = await this.sanitizeOutput(createOrdemPagamento, ctx);
    return sanitizedResults;
  },
}));
