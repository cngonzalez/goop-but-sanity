export default {
  title: "Hub Page",
  name: "hub",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      description: "The title of this page (this will show up in your browser heading and anywhere the title appears on your specified page type",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Category",
      name: "category",
      description: "The vertical that this is the hub page for.",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [
        {
          type: 'category',
        },
      ],
    },
    {
      title: 'Content', 
      name: 'content',
      type: 'array', 
      of: [{type: 'block'},
           {type: 'hr'},
           {type: 'articleDisplay'}]
    },
  ]
}
