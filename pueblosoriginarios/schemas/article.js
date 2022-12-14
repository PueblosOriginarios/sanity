export default {
  name: "article",
  type: "document",
  title: "Article",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "imageHeader",
      type: "imageComponent",
      title: "Image Header",
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
      name: "ArticleBuilder",
      type: "array",
      title: "Components",
      of: [
        {
          type: "imageComponent",
        },
        {
          type: "textBlock",
        },
        {
          type: "dualSectionArray",
        },
      ],
    },
    {
      name: "otherTitle",
      type: "string",
      title: "Subtitle",
    },
    {
      name: "articleReferences",
      type: "array",
      title: "Otros Visitantes",
      of: [{ type: "articleReference" }],
    },
    {
      name: "articleCard",
      type: "articleCard",
      title: "Article Card",
    },
  ],
};
