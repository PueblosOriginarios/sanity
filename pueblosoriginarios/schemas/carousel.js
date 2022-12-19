export default {
  name: "carousel",
  type: "document",
  title: "Carousel",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "images",
      type: "array",
      title: "Images",
      hotspotL: true,
      of: [{ type: "image" }],
    },
  ],
};
