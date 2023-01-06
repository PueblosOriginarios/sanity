export default {
    name: "bibiliografia",
    type: "document",
    title: "Bibliografía",
    fields: [
      {
        name: "title",
        type: "string",
        title: "Titulo",
      },
     {
        name: "bibliografia",
        type: "array",
        title: "Bibliografía",
        of: [
          {
            type: "object", fields: [
                {type: "string", name: "title",  title: "Titulo"},
                {type: "string", name: "author",  title: "Autor"},
                {type: "richTextBody", name: "richTextBody",  title: "Bloque de Texto"},
                {type: "categoryReference", name: "categoryReference",  title: "Categoría"},
                {type: "reference", name: "reference",  title: "PDF", to: {type: "pdf"}},

            ]
          },
         
        ],
      },
    ],
  };
  