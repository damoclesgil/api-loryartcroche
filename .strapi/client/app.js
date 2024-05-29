/**
 * This file was automatically generated by Strapi.
 * Any modifications made will be discarded.
 */
import strapiCloud from "@strapi/plugin-cloud/strapi-admin";
import colorPicker from "@strapi/plugin-color-picker/strapi-admin";
import email from "@strapi/plugin-email/strapi-admin";
import graphql from "@strapi/plugin-graphql/strapi-admin";
import usersPermissions from "@strapi/plugin-users-permissions/strapi-admin";
import { renderAdmin } from "@strapi/strapi/admin";

import customisations from "../../src/admin/app.tsx";

renderAdmin(document.getElementById("strapi"), {
  customisations,

  plugins: {
    "strapi-cloud": strapiCloud,
    "color-picker": colorPicker,
    email: email,
    graphql: graphql,
    "users-permissions": usersPermissions,
  },
});
