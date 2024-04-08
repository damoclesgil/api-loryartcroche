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

module.exports = {
  subject,
  text,
  html,
};
