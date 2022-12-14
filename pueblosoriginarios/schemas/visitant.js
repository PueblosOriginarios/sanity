export default {
  name: "visitant",
  type: "document",
  title: "Visitant Schema",
  fields: [
    {
      name: "heroVisitant",
      type: "heroBg",
      title: "Hero con Background",
    },
    {
      name: "VisitantBuilder",
      type: "array",
      title: "Components Visitant",
      of: [
        {
          type: "sectionBanner",
        },
        {
          type: "booleanArticle",
        },
      ],
    },
  ],
};
