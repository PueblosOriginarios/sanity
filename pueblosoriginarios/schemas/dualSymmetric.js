export default {
  name: "dualSymmetric",
  type: "document",
  title: "Simetrico Dual",
  fields: [
    {
      name: "imageDualS",
      type: "image",
      title: "Imagen",
      options: {
        hotspot: true,
      },
    },
    {
      title: "Youtube Video",
      name: "youtubeVideo",
      type: "youtube",
    },
    {
      title: "Titulo",
      name: "titleDualS",
      type: "string",
    },
    {
      title: "Cuerpo",
      name: "richTextDualS",
      type: "richTextBody",
    },
    {
      name: "imageSide",
      type: "string",
      title: "Lado Imagen",
      options: {
        list: [
          { title: "Izquiera", value: "left" },
          { title: "Derecho", value: "right" },
        ],
      },
    },
    {
      title: "Información Icono",
      name: "iconObject",
      type: "iconTextObject",
    },
    {
      title: "Texto Corto",
      name: "shortText",
      type: "string",
    },
    {
      title: "Boton",
      name: "button",
      type: "buttonObject",
    },
    {
      title: "Color de Fondo",
      name: "backgroundColor",
      type: "color",
    },
  ],
};
