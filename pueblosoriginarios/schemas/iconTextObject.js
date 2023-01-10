export default {
  title: "Icon",
  type: "object",
  name: "iconTextObject",
  fields: [
    {
      name: "imageIcon",
      type: "image",
      title: "Icono",
      options: {
        hotspot: true,
      },
    },
    {
      name: "label",
      type: "string",
      title: "Etiqueta",
    },
    {
      name: "description",
      type: "string",
      title: "Descripcion",
    },
  ],
};
