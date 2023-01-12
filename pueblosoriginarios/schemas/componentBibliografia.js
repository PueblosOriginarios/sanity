export default {
    name: "componentbibliografia",
    type: "object",
    title: "Bibliografía Componentes",
    fields: [
      { type: "string", name: "title", title: "Titulo" },
      { type: "string", name: "author", title: "Autor" },
      { type: "richTextBody", name: "richTextBody", title: "Bloque de Texto" },
      {
        type: "categoryReference",
        name: "categoryReferenceBibliografia",
        title: "Categoría",
      },
      {
        type: "reference",
        name: "referenceBibliografia",
        title: "PDF",
        to: { type: "pdf" },
      },
    ],
  };