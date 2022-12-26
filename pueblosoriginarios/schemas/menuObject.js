export default {
  title: "menu",
  type: "object",
  name: "menuObject",
  fields: [
    {
      name: "nameMenu",
      type: "string",
      title: "Name Menu",
    },
    {
      name: "link",
      type: "string",
      title: "Link",
    },
    {
      name: "submenu",
      type: "submenu",
      title: "Submenu",
    },
  ],
};
