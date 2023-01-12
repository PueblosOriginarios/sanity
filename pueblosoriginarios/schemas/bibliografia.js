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
    {
      name: "bibliografia",
      type: "array",
      title: "Bibliografía",
      of: [
        {
          type: "componentbibliografia",
          title: "Componentes de página Bibliografía",
        },
      ],
    },
  ],
};