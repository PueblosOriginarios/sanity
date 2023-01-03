export default {
  name: "banner",
  type: "document",
  title: "Banner",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Titulo",
    },
    {
      name: "image",
      type: "image",
      title: "Imagen",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      type: "string",
      title: "Descripcion",
    },
    {
      name: "color",
      type: "color",
      title: "Lista de Colores",
    },
  ],
};
