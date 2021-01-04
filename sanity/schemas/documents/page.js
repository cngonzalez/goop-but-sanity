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
      title: "Authors",
      name: "authors",
      type: "array",
      of: [{type: "reference",
            to: [{type: "person"}]}
      ]
    },
    {
      title: 'Featured Article',
      name: 'featuredArticle',
      description: 'Toggle to feature this article on hub pages and elsewhere.',
      type: 'boolean',
    },
    {
      title: 'Category', 
      name: 'category',
      type: 'reference', 
      to: [{type: "category"}]
    },
    {
      title: "Hero Image",
      name: "heroImage",
      type: "image",
      description: "The hero image for this page.",
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
  ]
}
