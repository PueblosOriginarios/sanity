export default {
  name: "dualSymmetric",
  type: "document",
  title: "Dual Symmetric",
  fields: [
    {
      name: "imageDualS",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
    },
    {
      title: "Youtube Video",
      name: "youtubeVideo",
      type: "youtube",
    },
    {
      title: "Title",
      name: "titleDualS",
      type: "string",
    },
    {
      title: "Body",
      name: "richTextDualS",
      type: "richTextBody",
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
      title: "Profile",
      name: "iconObject",
      type: "iconTextObject",
    },
    {
      title: "Short text",
      name: "shortText",
      type: "string",
    },
    {
      title: "Button",
      name: "button",
      type: "buttonObject",
    },
    {
      title: "Background Color",
      name: "backgroundColor",
      type: "color",
    },
  ],
};
