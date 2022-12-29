export default {
  name: "categoryReference",
  type: "object",
  title: "Category Reference",
  fields: [
    {
      name: "categoryReference",
      type: "reference",
      title: "Category Reference",
      to: [{ type: "categories" }],
    },
  ],
};
