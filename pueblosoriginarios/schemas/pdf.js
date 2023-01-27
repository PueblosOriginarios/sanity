import categories from "./categories";

export default {
  name: "pdf",
  type: "document",
  title: "Materiales Didácticos PDF",
  fields: [
    {
      name: "categoryReferences",
      type: "array",
      title: "Categorias",
      of: [{ type: "categoryReference" }],
    },
    {
      name: "title",
      type: "string",
      title: "Titulo",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "tipoPdf",
      type: "string",
      title: "Tipo PDF",
      options: {
        list: [
          { title: "Guaraní", value: "guarani" },
          { title: "Chané", value: "chane" },
          { title: "Ambos", value: "ambos" },
        ],
      },
    },
    {
      name: "image",
      type: "image",
      title: "Imagen",
      options: {
        hotspot: true,
      },
    },
    {
      name: "link",
      type: "url",
      title: "Enlace",
    },
    {
      name: "shortDescription",
      type: "richTextBody",
      title: "Descripción Corta",
    },
    {
      name: "description",
      type: "richTextBody",
      title: "Descripcion",
    },
    {
      name: "centeredText",
      type: "richTextBody",
      title: "Texto Centrado",
    },
  ],
};
