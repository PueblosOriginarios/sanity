export default {
  name: "eventos",
  type: "document",
  title: "Eventos",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Titulo",
    },
    {
      name: "tipoEventos",
      type: "string",
      title: "eventos",
      options: {
        list: [
          { title: "Guaraní", value: "guarani" },
          { title: "Chané", value: "chane" },
        ],
      },
    },
    {
      name: "iconEvento",
      type: "iconTextObject",
      title: "Información del evento",
    },
    {
      title: "Ubicación del Evento",
      name: "shortText",
      type: "string",
    },
    {
      name: "contenidoEvento",
      type: "richTextBody",
      title: "Contenido del evento",
    },
  ],
};
