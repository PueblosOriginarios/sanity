export default {
  name: "article",
  type: "document",
  title: "Articulo-Noticia",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Titulo",
    },
    {
      name: "imageHeader",
      type: "imageComponent",
      title: "Imagen Cabecera",
    },
    {
      name: "tipoArticuloNoticia",
      type: "string",
      title: "Tipo Artículo",
      options: {
        list: [
          { title: "Guaraní", value: "guarani" },
          { title: "Chané", value: "chane" },
        ],
      },
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
      },
    },
    {
      name: "richText",
      type: "richTextBody",
      title: "Contenido",
    },
    {
      name: "ArticleBuilder",
      type: "array",
      title: "Componentes",
      of: [
        {
          type: "carousel",
        },
        {
          type: "textBlock",
        },
        {
          type: "dualSectionArray",
        },
        {
          type: "youtube",
        },
        {
          title: "Dual Asimetrico",
          type: "reference",
          to: [{ type: "dualAsymmetric" }],
        },
      ],
    },
  ],
};
