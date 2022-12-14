export default {
  name: "materiales",
  type: "document",
  title: "Materiales Didacticos",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Titulo",
    },
    {
      name: "tipoMateriales",
      type: "string",
      title: "Materiales",
      options: {
        list: [
          { title: "Guaraní", value: "guarani" },
          { title: "Chané", value: "chane" },
        ],
      },
    },
  ],
};
