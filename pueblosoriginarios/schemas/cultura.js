export default {
  name: "cultura",
  type: "document",
  title: "Cultura",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Titulo",
    },
    {
      name: "imageHeader",
      type: "imageComponent",
      title: "Imagen Cabecera",
    },
    {
      name: "tipoCultura",
      type: "string",
      title: "Cultura",
      options: {
        list: [
          { title: "Guaraní", value: "guarani" },
          { title: "Chané", value: "chane" },
        ],
      },
    },
    {
      name: "CulturaBuilder",
      type: "array",
      title: "Componentes Cultura",
      of: [
        {
          type: "dualSectionArray",
        },
        {
          title: "Dual Asimetrico",
          type: "reference",
          to: [{ type: "dualAsymmetric" }],
        },
        {
          type: "carousel",
        },
        {
          type: "textBlock",
        },
        {
          type: "youtube",
        },
      ],
    },
  ],
};
