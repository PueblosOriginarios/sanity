export default {
  name: "dualAsymmetric",
  type: "document",
  title: "Dual Asymmetric",
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
      name: "imageSide",
      type: "string",
      title: "Image Side",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Right", value: "right" },
        ],
      },
    },
    {
      name: "description",
      type: "string",
      title: "Description",
    },
    {
      name: "richTextDualA",
      type: "richTextBody",
      title: "Content",
    },
    {
      name: "button",
      type: "buttonObject",
      title: "Button",
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
