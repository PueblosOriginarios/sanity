export default {
  name: "banner",
  type: "document",
  title: "Banner",
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
      title: "Description",
    },
    {
      name: "color",
      type: "color",
      title: "Color List",
    },
  ],
};
