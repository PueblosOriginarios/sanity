export default {
    name: "lengua",
    type: "document",
    title: "Lengua",
    fields: [
      {
        name: "title",
        type: "string",
        title: "Title",
      },
      {
        name: "imageHeader",
        type: "imageComponent",
        title: "Image Header",
      },
      {
        name: "tipoLengua",
        type: "string",
        title: "Lengua",
        options: {
          list: [
            { title: "Guaraní", value: "guarani" },
            { title: "Chané", value: "chane" },
          ],
        },
      },
      {
        name: "LenguaBuilder",
        type: "array",
        title: "Componentes Lengua",
        of: [
          {
            type: "dualSectionArray",
          },
          {
            title: "Dual Asimetrico",
            type: "reference",
            to: [{ type: "dualAsymmetric" }],
          },
          {
            type: "carousel",
          },
          {
            type: "textBlock",
          },
          {
            type: "youtube",
          },
        ],
      },
    ],
}