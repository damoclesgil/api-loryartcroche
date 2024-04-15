/**
 * This file was automatically generated by Strapi.
 * Any modifications made will be discarded.
 */
import apolloSandbox from "@creazy231/strapi-plugin-apollo-sandbox/strapi-admin";
import strapiCloud from "@strapi/plugin-cloud/strapi-admin";
import colorPicker from "@strapi/plugin-color-picker/strapi-admin";
import graphql from "@strapi/plugin-graphql/strapi-admin";
import i18N from "@strapi/plugin-i18n/strapi-admin";
import usersPermissions from "@strapi/plugin-users-permissions/strapi-admin";
import emailDesigner from "strapi-plugin-email-designer/strapi-admin";
import { renderAdmin } from "@strapi/strapi/admin";

import customisations from "../../src/admin/app.ts";

renderAdmin(document.getElementById("strapi"), {
  customisations,

  plugins: {
    "apollo-sandbox": apolloSandbox,
    "strapi-cloud": strapiCloud,
    "color-picker": colorPicker,
    graphql: graphql,
    i18n: i18N,
    "users-permissions": usersPermissions,
    "email-designer": emailDesigner,
  },
});
