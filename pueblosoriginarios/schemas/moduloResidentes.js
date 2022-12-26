export default {
  name: "moduloResidentes",
  type: "object",
  title: "Residentes",
  fields: [
    {
      name: "content",
      type: "richTextBody",
      title: "Content",
    },
    {
      name: "logos",
      type: "array",
      title: "Logos",
      of: [{ type: "image" }],
    },
  ],
};
