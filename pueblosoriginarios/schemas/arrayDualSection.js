export default {
  name: "dualSectionArray",
  type: "object",
  title: "Dual Section",
  fields: [
    {
      name: "dualSymmetric",
      type: "reference",
      title: "Dual Symmetric",
      to: [{ type: "dualSymmetric" }],
    },
  ],
};
