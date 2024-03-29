export default {
  name: "componentbibliografia",
  type: "document",
  title: "Bibliografía Componentes",
  fields: [
    { type: "string", name: "title", title: "Titulo" },
    { type: "string", name: "author", title: "Autor" },
    {
      type: "richTextBody",
      name: "richTextBody",
      title: "Descripción de la Bibliografia",
    },
    {
      name: "link",
      type: "url",
      title: "Enlace",
    },
    {
      name: "image",
      type: "imageComponent",
      title: "Imagen de bibliografía",
      validation: (Rule) => Rule.required(),
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
