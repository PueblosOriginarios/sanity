export default {
  name: "vigentes",
  type: "document",
  title: "Vigentes",
  preview: {
    select: {
      title: "richTextVigentes",
      media: "title"
    },
    prepare(selection) {
      return{
        title: selection.title[0].children[0].text.slice(0,20),
        media: selection.media
      }
    }
  },
  fields: [
    {
      name: "titleVigentes",
      type: "image",
      title: "Title",
    },
    {
      name: "richTextVigentes",
      type: "richTextBody",
      title: "Content",
    },
    {
      name: "button",
      type: "buttonObject",
      title: "Button",
    },
    {
      name: "cards",
      type: "array",
      title: "Cards",
      of: [{ type: "cardReference" }],
    },
  ],
};
