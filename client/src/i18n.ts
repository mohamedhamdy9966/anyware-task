import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to Anyware Software Dashboard",
      login: "Login",
      logout: "Logout",
      dashboard: "Dashboard",
      announcements: "Announcements",
      quizzes: "Quizzes",
      schedule: "Schedule",
      grades: "Grades",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
