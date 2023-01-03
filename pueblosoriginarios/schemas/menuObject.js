export default {
  title: "menu",
  type: "object",
  name: "menuObject",
  fields: [
    {
      name: "nameMenu",
      type: "string",
      title: "Nombre Menu",
    },
    {
      name: "link",
      type: "string",
      title: "Enlace",
    },
    {
      name: "submenu",
      type: "submenu",
      title: "Submenu",
    },
  ],
};
