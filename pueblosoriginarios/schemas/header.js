export default {
  name: "header",
  type: "document",
  title: "Encabezado",
  fields: [
    {
      name: "logo",
      type: "imageComponent",
      title: "Logo",
    },
    {
      title: "Menu",
      name: "menu",
      type: "menu",
    },
    {
      name: "ctaButton",
      type: "buttonObject",
      title: "Boton",
    },
  ],
};
