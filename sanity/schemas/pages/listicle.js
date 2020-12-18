export default {
  title: "Listicle",
  name: "listicle",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      description: "The title of this page (this will show up in your browser heading and anywhere the title appears on your specified page type",
      validation: (Rule) => Rule.required(),
    },
    // {
      // title: "Categories",
      // name: "categories",
      // type: "array",
      // description: "The categories this page belongs to (this affect which hub pages it will show up on!",
      // of: [
      //   {
      //     type: "reference",
      //     to: [{type: 'category'}]
      //   },
      // ],
    // },
    // {
      // title: 'Authors',
      // name: 'authors',
      // type: 'array',
      // of: [{
      //   type: 'reference',
      //   to: [{type: 'person'}]
      //    }]
    // }
  ]
}
