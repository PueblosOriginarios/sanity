export default {
  name: "residentes",
  type: "document",
  title: "Residentes",
  preview: {
    select: {
      title: "banner.title",
    },
  },
  fields: [
    {
      name: "banner",
      type: "banner",
      title: "Banner",
    },
    {
      name: "moduloResidentes",
      type: "moduloResidentes",
      title: "Residentes",
    },
    {
      name: "quotes",
      type: "quotes",
      title: "Quotes",
    },
    {
      name: "productos",
      type: "array",
      title: "Productos",
      of: [{ type: "producto" }],
    },
    {
      name: "bannerDoble",
      type: "bannerDoble",
      title: "Banner Doble",
    },
  ],
};
