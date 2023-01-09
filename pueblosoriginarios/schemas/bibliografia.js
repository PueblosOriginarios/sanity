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
            type: "componentbibliografia",
            title: "Componentes de página Bibliografía",
          },
         
        ],
      },
    ],
  };
  