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
      name: "link",
      type: "url",
      title: "Enlace",
      
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
      type: "string",
      title: "Contenido del evento",
      validation: (Rule) => Rule.max(200).error("Máximo de 200 caracteres permitido"),
    },
  ],
};
