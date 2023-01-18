export default {
  title: "Bloque de texto",
  type: "object",
  name: "textBlock",
  fields: [
    {
      name: "subTitle",
      type: "string",
      title: "Subtitulo",
    },
    {
      name: "richText",
      type: "richTextBody",
      title: "Contenido Visto",
    },
    {
      name: "richTextOculto",
      type: "richTextBody",
      title: "Contenido Oculto",
    },
  ],
};
