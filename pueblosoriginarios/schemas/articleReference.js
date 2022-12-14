export default {
  name: "articleReference",
  type: "object",
  title: "Article Reference",
  fields: [
    {
      name: "articleReference",
      type: "reference",
      title: "Article Reference",
      to: [{ type: "article" }],
    },
  ],
};
