export default {
  name: "historia",
  type: "document",
  title: "Historia",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "imageHeader",
      type: "imageComponent",
      title: "Image Header",
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
          type: "imageComponent",
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
