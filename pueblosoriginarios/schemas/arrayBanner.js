export default {
  name: "sectionBanner",
  type: "object",
  title: "Banner Double",
  fields: [
    {
      name: "banner",
      type: "reference",
      title: "Banner Double",
      to: [{ type: "bannerDoble" }],
    },
  ],
};
