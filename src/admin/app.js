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
  locales: ["pt-BR"],
  translations: {
    'ptBR': {
      "Auth.form.welcome.title": "Seja bem vindo a Dâmocles Gil!",
      "Auth.form.welcome.subtitle": "Entrar na sua conta",
      Users: "Userson",
      "app.components.LeftMenu.navbrand.title": "Dâmocles Gil Dashboard",
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
