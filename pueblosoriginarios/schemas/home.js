export default {
  name: "home",
  type: "document",
  title: "Página de inicio",
  fields: [
    {
      name: "HomeBuilder",
      type: "array",
      title: "Constructor Página de inicio",
      of: [
        {
          type: "textBlock",
        },
        {
          name: "bannerDoble",
          type: "reference",
          title: "Banner Doble",
          to: [{ type: "bannerDoble" }],
        },
        {
          name: "dualSymmetric",
          type: "reference",
          title: "Simetrico Dual",
          to: [{ type: "dualSymmetric" }],
        },
        {
          name: "dualAsymmetric",
          type: "reference",
          title: "Asimetrico Dual",
          to: [{ type: "dualAsymmetric" }],
        },
        {
          name: "carousel",
          type: "reference",
          title: "Carrusel",
          to: [{ type: "carousel" }],
        },
      ],
    },
  ],
};
