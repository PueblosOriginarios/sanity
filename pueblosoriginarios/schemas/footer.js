export default {
  name: "footer",
  type: "document",
  title: "Pie de página",
  fields: [
    {
      name: "email",
      type: "string",
      title: "Correo",
    },

    {
      name: "logo",
      type: "array",
      title: "Logos",
      of: [
        {
          type: "imageComponent",
          title: "Logo",
        },
       
      ],
    },

  ],
};
