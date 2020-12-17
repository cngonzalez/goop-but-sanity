export default {
  title: "Article",
  name: "article",
  type: "document",
  fields: [
    {
      title: "Body",
      name: "body",
      type: "string",
    },
    {
      title: 'Authors',
         name: 'authors',
         type: 'array',
         of: [{
           type: 'reference',
           to: [{type: 'person'}]
         }]
    }
  ]
}
