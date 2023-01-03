export default {
  name: "historia",
  type: "document",
  title: "Historia",
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
      name: "tipoHistoria",
      type: "string",
      title: "Historia",
      options: {
        list: [
          { title: "Guaraní", value: "guarani" },
          { title: "Chané", value: "chane" },
        ],
      },
    },
    {
      name: "HistoriaBuilder",
      type: "array",
      title: "Componentes Historia",
      of: [
        {
          type: "dualSectionArray",
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
