export default {
  name: "dualAsymmetric",
  type: "document",
  title: "Asimetrico Dual",
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
      name: "imageSide",
      type: "string",
      title: "Lado imagen",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Right", value: "right" },
        ],
      },
    },
    {
      name: "urlAudio",
      type: "file",
      title: "Audio",
    },
    {
      name: "description",
      type: "string",
      title: "Descripcion",
    },
    {
      name: "richTextDualA",
      type: "richTextBody",
      title: "Contenido",
    },
    {
      name: "button",
      type: "buttonObject",
      title: "Boton",
    },
    {
      name: "colorLeft",
      type: "color",
      title: "Color Izquierdo",
    },
    {
      name: "colorRight",
      type: "color",
      title: "Color Derecho",
    },
  ],
};
