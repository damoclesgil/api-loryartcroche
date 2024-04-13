import type { Schema, Attribute } from "@strapi/strapi";

export interface ComponentsProdutoComponentColor extends Schema.Component {
  collectionName: "components_cores_component_colors";
  info: {
    displayName: "Color";
    icon: "paint";
    description: "";
  };
  attributes: {
    nomeDaCor: Attribute.Enumeration<["Rosa", "Azul", "Vermelho", "Branco", "Laranja", "Verde"]>;
    produto_referentes: Attribute.Relation<"components-produto.component-color", "oneToMany", "api::produto.produto">;
    cor: Attribute.String & Attribute.CustomField<"plugin::color-picker.color">;
  };
}

declare module "@strapi/types" {
  export module Shared {
    export interface Components {
      "components-produto.component-color": ComponentsProdutoComponentColor;
    }
  }
}
