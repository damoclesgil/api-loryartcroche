import Icon from "./extensions/icon.png";
import Logo from "./extensions/logo.svg";

const config = {
  auth: {
    logo: Logo,
  },
  head: {
    favicon: Icon,
    title: 'lory'
  },
  locales: ["pt-BR", "en"],
  // https://github.com/strapi/strapi/blob/develop/packages/core/admin/admin/src/translations/en.json
  // https://github.com/strapi/strapi/blob/develop/packages/core/admin/admin/src/translations/pt-BR.json
  translations: {
    'pt-BR': {
      "Auth.form.welcome.title": "Seja bem vindo 😊!",
      "Auth.form.welcome.subtitle": "Entrar na sua conta",
      Users: "Userson",
      "app.components.LeftMenu.navbrand.title": "Administração Loryartcroche",
      "app.components.LeftMenu.navbrand.workplace": "Local para cadastrar as bolsas",
      "global.content-manager": "Cadastrar Produtos",
      "content-manager.HeaderLayout.button.label-add-entry": "Cadastrar",
      "Strapi.dashboard": "Dashboard",
      "global.plugins.upload": "Adicionar Imagens",
      "Media Library": "Adicionar Imagens",
      "Workpace": "Dashboard",
    },
  },
  menu: {
    logo: Icon,
  },
  theme: {
    light: {},
    dark: {
      colors: {
        primary100: "#030415",
        primary600: "#f231a5",
        primary700: "#f231a5",
        neutral0: "#0d102f",
        neutral100: "#030415",
      },
    },
  },
  tutorials: false,
  notifications: {
    releases: false,
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
