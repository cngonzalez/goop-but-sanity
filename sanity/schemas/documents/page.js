export default {
  title: "Page",
  name: "page",
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
      title: "Author",
      name: "author",
      type: "reference",
      to: [{type: "person"}]
    },
    {
      title: "Hero Image",
      name: "heroImage",
      type: "image",
      description: "The hero image for this page.",
    },
    {
      title: "Route",
      name: "route",
      type: "route",
      description: "The route for this page on the frontend",
    },
    {
      title: 'Content', 
      name: 'content',
      type: 'array', 
      of: [{type: 'block'},
           {type: 'listItem'},
           {type: 'hr'},
           {type: 'listNumber'},
           {type: 'productDisplay'}]
    },
    {
      title: 'Category', 
      name: 'category',
      type: 'reference', 
      to: [{type: "category"}]
    }
  ]
}
