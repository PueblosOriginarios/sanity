export default {
  name: "youtube",
  type: "object",
  title: "YouTube Video o Imagen sola",
  fields: [
    {
      name: "titulo",
      type: "string",
      title: "Titulo Video",
    },
    {
      name: "url",
      type: "url",
      title: "Enlace",
    },
    {
      name: "image",
      type: "imageComponent",
      title: "Imagen",
    },
    {
      name: "imageDescription",
      type: "string",
      title: "Descripción de la imagen o del video",
    },
  ],
};
