export default {
  name: "header",
  type: "document",
  title: "Header Schema",
  fields: [
    {
      name: "logo",
      type: "imageComponent",
      title: "Logo Desktop",
    },
    {
      name: "logoMobile",
      type: "imageComponent",
      title: "Logo Mobile",
    },
    {
      title: "Menu",
      name: "menu",
      type: "menu",
    },
    {
      name: "ctaButton",
      type: "buttonObject",
      title: "Button",
    },
  ],
};
