import type { Schema, Attribute } from "@strapi/strapi";

export interface ComponentsProdutoComponentColor extends Schema.Component {
  collectionName: "components_cores_component_colors";
  info: {
    displayName: "Color";
    icon: "paint";
    description: "";
  };
  attributes: {
    cor: Attribute.Enumeration<["Rosa", "Azul", "Vermelho", "Branco", "Laranja", "Verde"]>;
    produtoReferente: Attribute.Relation<"components-produto.component-color", "oneToOne", "api::produto.produto">;
  };
}

declare module "@strapi/types" {
  export module Shared {
    export interface Components {
      "components-produto.component-color": ComponentsProdutoComponentColor;
    }
  }
}
