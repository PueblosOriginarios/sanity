export default {
  name: "quotes",
  type: "object",
  title: "Quotes",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "quoteCards",
      type: "array",
      title: "Quote Cards",
      of: [{ type: "quoteCard" }],
    },
  ],
};
