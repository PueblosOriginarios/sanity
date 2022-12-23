export default {
  name: "cultura",
  type: "document",
  title: "Cultura",
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
