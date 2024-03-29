export default {
  name: "bibliografia",
  type: "document",
  title: "Bibliografía",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Titulo",
    },
    {
      name: "imageHeader",
      type: "imageComponent",
      title: "Image Header",
    },
    {
      name: "tipoBibliografia",
      type: "string",
      title: "Tipo de Bibliografia",
      options: {
        list: [
          { title: "Guaraní", value: "guarani" },
          { title: "Chané", value: "chane" },
        ],
      },
    },
  ],
};