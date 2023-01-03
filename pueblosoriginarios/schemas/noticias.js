export default {
  name: "noticias",
  type: "document",
  title: "Noticias",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "tipoNoticias",
      type: "string",
      title: "Noticias",
      options: {
        list: [
          { title: "Guaraní", value: "guarani" },
          { title: "Chané", value: "chane" },
        ],
      },
    },
    {
      name: "subTitle",
      type: "string",
      title: "SubTitulo",
    },
    {
      name: "noticiasBuilder",
      type: "array",
      title: "Componentes noticias",
      of: [
        {
          type: "textBlock",
        },
        {
          type: "booleanNoticias",
        },
      ],
    },
  ],
};
