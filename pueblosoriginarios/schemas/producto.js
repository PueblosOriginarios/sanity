export default {
  name: "producto",
  type: "object",
  title: "Producto",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "icon",
      type: "image",
      title: "Icon",
    },
    {
      name: "content",
      type: "richTextBody",
      title: "Content",
    },
  ],
};
