/**
 * favorito controller
 */
import { factories } from '@strapi/strapi';

export default factories.createCoreController("api::favorito.favorito", ({ strapi }) => ({
  /* */
  async create(ctx) {
    const token = await strapi.plugins["users-permissions"].services.jwt.getToken(ctx);

    /* entityService é um Método de Segurança */
    const newFavorite = await strapi.entityService.create("api::favorito.favorito", {
      data: {
        // @ts-ignore
        produtos: ctx.request.body.data.produtos,
        user: token.id,
      },
    });
    return newFavorite;
  },
  // async update(ctx) {
  //   try {
  //     // const favoriteEntity = await strapi.entityService.update("api::favorito.favorito",{ id: ctx.params.id }, ctx.request.body);
  //     console.log("favoriteEntity", favoriteEntity);
  //     return favoriteEntity;
  //   } catch (err) {
  //     return ctx.badRequest("algo de errado não está certo", { errorMessage: "Deu erro na hora de obter o id desse cara" });
  //   }
  // },
}));

/* Modelo Novo do body
{
  "data": {
    "produtos": [2],
    "user": 2
  }
}
{
  "data": {
    "produtos": [2]
  },
  user: "1"
}
*/

/* Modelo Antigo
{ 
  "input" : {
    "data" : {
      "games": [1]
    }
  }
}
*/
