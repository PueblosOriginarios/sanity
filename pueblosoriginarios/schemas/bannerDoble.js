export default {
  name: "bannerDoble",
  type: "document",
  title: "Banner Doble",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Titulo",
    },
    {
      name: "image",
      type: "image",
      title: "Imagen",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      type: "string",
      title: "Descripcion de la Imagen",
    },
    {
      name: "content",
      type: "richTextBody",
      title: "Contenido",
    },
    {
      name: "subtitle",
      type: "iconTextObject",
      title: "Subtitulo",
    },
    {
      name: "button",
      type: "buttonObject",
      title: "Boton",
    },
    {
      name: "buttonType",
      type: "string",
      title: "Tipo de Boton",
      options: {
        list: [
          { title: "Boton", value: "button" },
          { title: "Enlace", value: "link" },
        ],
      },
    },
    {
      name: "colorLeft",
      type: "color",
      title: "Color Izquierdo",
    },
    {
      name: "colorRight",
      type: "color",
      title: "Color Derecho",
    },
  ],
};
