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
      name: 'pageType',
      title: 'Page Type',
      description: 'The type of page this is.',
      type: 'reference',
      to: [
           {type: 'hub'},
           {type: 'listicle'},
      ],
    },
  ]
}
