export default {
  name: "categoryReference",
  type: "object",
  title: "Referencia a categoría",
  fields: [
    {
      name: "categoryReference",
      type: "reference",
      title: "Referencia a categoría",
      to: [{ type: "categories" }],
    },
  ],
};
