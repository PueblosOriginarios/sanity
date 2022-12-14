export default {
  name: "home",
  type: "document",
  title: "Home Schema",
  fields: [
    {
      name: "HomeBuilder",
      type: "array",
      title: "Home Builder",
      of: [
        {
          name: "banner",
          type: "reference",
          title: "Banner",
          to: [{ type: "banner" }],
        },
        {
          name: "bannerDoble",
          type: "reference",
          title: "Banner Doble",
          to: [{ type: "bannerDoble" }],
        },
        {
          name: "hero",
          type: "reference",
          title: "Hero",
          to: [{ type: "hero" }],
        },
        {
          name: "dualSymmetric",
          type: "reference",
          title: "Dual Symmetric",
          to: [{ type: "dualSymmetric" }],
        },
        {
          name: "dualAsymmetric",
          type: "reference",
          title: "Dual Asymmetric",
          to: [{ type: "dualAsymmetric" }],
        },
        {
          name: "vigentes",
          type: "reference",
          title: "Vigentes",
          to: [{ type: "vigentes" }],
        },
      ],
    },
  ],
};
