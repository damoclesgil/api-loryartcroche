// @ts-ignore
// import Icon from "./extensions/icon.png";
import Icon from "./extensions/logo_loryart.png";
// @ts-ignore
// import Logo from "./extensions/logo.svg";
import Logo from "./extensions/logo_LoryArtCrocheColorida.png";

const config = {
  auth: {
    logo: Logo,
  },
  head: {
    favicon: Icon,
    title: "lory",
  },
  locales: ["pt-BR"],
  // locales: ["pt-BR", "en"],
  // https://github.com/strapi/strapi/blob/develop/packages/core/admin/admin/src/translations/en.json
  // https://github.com/strapi/strapi/blob/develop/packages/core/admin/admin/src/translations/pt-BR.json
  translations: {
    "pt-BR": {
      "Auth.form.welcome.title": "Seja bem vindo 😊!",
      "Auth.form.welcome.subtitle": "Entrar na sua conta",
      Users: "Userson",
      "app.components.HomePage.welcome": "Seja Bem Vindo!👋",
      "app.components.HomePage.welcome.again": "Seja Bem Vindo 👋",
      "header.actions.add-folder": "Adicionar nova pasta",
      "header.actions.add-assets": "Adicionar novos arquivos",
      "app.components.HomePage.welcomeBlock.content.again": "Seja bem vindo ao gerenciamentos de bolsas da lory art croche",
      "app.components.LeftMenu.navbrand.title": "Administração Loryartcroche",
      "app.components.LeftMenu.navbrand.workplace": "Local para cadastrar as bolsas",
      "global.content-manager": "Cadastrar Produtos",
      "content-manager.HeaderLayout.button.label-add-entry": "Cadastrar",
      "Strapi.dashboard": "Dashboard",
      "global.plugins.upload": "Adicionar Imagens",
      "Media Library": "Adicionar Imagens",
      Workpace: "Dashboard",
    },
    en: {
      "header.actions.add-folder": "Adicionar nova pasta",
      "header.actions.add-assets": "Adicionar novos arquivos",
    }
  },
  menu: {
    logo: Icon,
  },
  theme: {
    light: {
      colors: {
        primary100: "#F59C8A",
        // primary600: "#FFFFFF",
        // primary700: "#FFFFFF",
        // neutral0: "#FFFFFF",
        // neutral100: "#FFFFFF",
      },
    },
    dark: {
      colors: {
        primary100: "#030415",
        primary600: "#F59C8A",
        primary700: "#F59C8A",
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

const bootstrap = app => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
