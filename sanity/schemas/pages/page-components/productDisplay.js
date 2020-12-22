export default {
  title: "Product Display",
  name: "productDisplay",
  type: "document",
  fields: [
    {
      title: "Product",
      name: "product",
      type: "reference",
      to: [
        {
          type: "product"
        }
      ]
    },
    {
      title: "Size",
      name: "size",
      type: "string",
      list: ["large", "small"]
    },
    {
      title: "Product fields to include",
      name: "productFields",
      type: "array",
      of: [{type: "string"}],
      list: ["name", "description", "price", "manufacturer"]
    }
  ],
  initialValue: {
      productFields: ["name", "price", "manufacturer"]
  }
}
