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
      name: "urlVideo",
      type: "url",
      title: "Enlace",
    },
    {
      title: "Titulo",
      name: "titleDualS",
      type: "string",
    },
    {
      title: "Texto Largo",
      name: "richTextDualS",
      type: "richTextBody",
    },
    {
      name: "imageSide",
      type: "string",
      title: "Lado de la imagen o del video",
      options: {
        list: [
          { title: "Izquierda", value: "left" },
          { title: "Derecha", value: "right" },
        ],
      },
      validation: (Rule) => Rule.required(),
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
