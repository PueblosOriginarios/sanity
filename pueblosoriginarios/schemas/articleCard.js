export default {
  name: "articleCard",
  type: "object",
  title: "Article Card",
  fields: [
    {
      name: "artists",
      type: "iconTextObject",
      title: "Artists",
    },
    {
      name: "content",
      type: "richTextBody",
      title: "Card Content",
    },
  ],
};
