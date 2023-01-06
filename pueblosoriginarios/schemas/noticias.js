export default {
  name: "noticias",
  type: "document",
  title: "Noticias",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Titulo",
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
  ],
};
