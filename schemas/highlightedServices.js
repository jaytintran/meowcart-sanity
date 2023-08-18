export default {
  name: 'highlightedServices',
  type: 'object',
  title: 'Highlighted Service',
  fields: [
    {
      name: 'logoIcon',
      type: 'image',
      title: 'Logo Icon',
      description: 'Select an image for the logo icon',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Enter the title of the highlighted service',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Enter a brief description of the highlighted service',
    },
  ],
}
