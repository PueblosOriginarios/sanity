export default {
    name: "componentbibliografia",
    type: "document",
    title: "Bibliografía Componentes",
    fields: [
      { type: "string", name: "title", title: "Titulo" },
      { type: "string", name: "author", title: "Autor" },
      { type: "richTextBody", name: "richTextBody", title: "Bloque de Texto" },
      {
        type: "reference",
        name: "referenceBibliografia",
        title: "PDF",
        to: { type: "pdf" },
      },
      {
        name: "filtroBilbliografia",
        type: "string",
        title: "Pueblo",
        options: {
          list: [
            { title: "Guaraní", value: "guarani" },
            { title: "Chané", value: "chane" },
            { title: "Ambos", value: "ambos" },
          ],
        },
      },
    ],
  };