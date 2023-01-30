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
      name: "submenu",
      type: "submenu",
      title: "Submenu",
    },
  ],
};
