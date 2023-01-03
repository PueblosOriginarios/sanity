export default {
  name: "carousel",
  type: "document",
  title: "Carrusel",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Titulo",
    },
    {
      name: "images",
      type: "array",
      title: "Imagenes",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
};
