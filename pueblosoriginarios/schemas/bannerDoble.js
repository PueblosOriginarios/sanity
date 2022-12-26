export default {
  name: "bannerDoble",
  type: "document",
  title: "Banner Doble",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      type: "string",
      title: "Image Description",
    },
    {
      name: "content",
      type: "richTextBody",
      title: "Content",
    },
    {
      name: "subtitle",
      type: "iconTextObject",
      title: "Subtitle",
    },
    {
      name: "button",
      type: "buttonObject",
      title: "Button",
    },
    {
      name: "buttonType",
      type: "string",
      title: "Button Type",
      options: {
        list: [
          { title: "Button", value: "button" },
          { title: "Link", value: "link" },
        ],
      },
    },
    {
      name: "colorLeft",
      type: "color",
      title: "Color Left",
    },
    {
      name: "colorRight",
      type: "color",
      title: "Color Right",
    },
  ],
};
