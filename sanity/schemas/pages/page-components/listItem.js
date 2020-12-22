export default {
  title: "List Item",
  name: "listItem",
  type: "document",
  fields: [
    {
      title: "Number",
      name: "number",
      type: "number",
      description: "The number of this list item.",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Text",
      name: "text",
      type: "string",
      description: "The text of this list item",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Products",
      name: "products",
      description: "The products for this list item",
      type: "array",
      of: [{type: "reference",
            to: [
                  {type: "product"}
                ]
          }]
    }
  ]
}
