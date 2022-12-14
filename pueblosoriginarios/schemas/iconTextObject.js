export default {
  title: "Icon",
  type: "object",
  name: "iconTextObject",
  fields: [
    {
      name: "imageIcon",
      type: "image",
      title: "Icon",
      options: {
        hotspot: true,
      },
    },
    {
      name: "label",
      type: "string",
      title: "Label",
    },
    {
      name: "description",
      type: "string",
      title: "Description",
    },
    {
      name: "link",
      type: "url",
      title: "Link",
    },
  ],
};
