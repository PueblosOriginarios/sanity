export default {
  name: "quoteCard",
  type: "object",
  title: "Quote Card",
  preview: {
    select: {
      title: "quote",
    },
  },
  fields: [
    {
      name: "quote",
      type: "richTextBody",
      title: "Quote",
    },
    {
      name: "authorImage",
      type: "image",
      title: "Author Image",
    },
    {
      name: "author",
      type: "richTextBody",
      title: "Author",
    },
  ],
};
