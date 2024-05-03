/**
 * This file was automatically generated by Strapi.
 * Any modifications made will be discarded.
 */
import strapiCloud from "@strapi/plugin-cloud/strapi-admin";
import graphql from "@strapi/plugin-graphql/strapi-admin";
import colorPicker from "@strapi/plugin-color-picker/strapi-admin";
import { renderAdmin } from "@strapi/strapi/admin";

import customisations from "../../src/admin/app.tsx";

renderAdmin(document.getElementById("strapi"), {
  customisations,

  plugins: {
    "strapi-cloud": strapiCloud,
    graphql: graphql,
    "color-picker": colorPicker,
  },
});
