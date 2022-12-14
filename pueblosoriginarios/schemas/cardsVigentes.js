export default {
  name: "cardsVigentes",
  type: "document",
  title: "Cards Vigentes",
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
      name: "content",
      type: "richTextBody",
      title: "Content",
    },
    {
      name: "link",
      type: "url",
      title: "Link",
    },
  ],
};
