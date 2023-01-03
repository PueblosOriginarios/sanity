export default {
  name: "cardNoticias",
  type: "object",
  title: "Article Card",
  fields: [
    {
      name: "noticias",
      type: "iconTextObject",
      title: "Información",
    },
    {
      name: "content",
      type: "richTextBody",
      title: "Card Content",
    },
  ],
};
