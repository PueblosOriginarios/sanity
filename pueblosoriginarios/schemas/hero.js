export default {
  name: "hero",
  type: "document",
  title: "Hero",
  fields: [
    {
      name: "imageHero",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
    },
    {
      title: "Title",
      name: "titleHero",
      type: "string",
    },
    {
      title: "Body Hero",
      name: "richTextHero",
      type: "richTextBody",
    },
    {
      title: "Social Media",
      name: "socialNetworks",
      type: "boolean",
    },
  ],
};
