export default {
  name: 'brand',
  type: 'object',
  title: 'Brand',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'Enter the name of the brand',
    },
    {
      name: 'logoIcon',
      type: 'image',
      title: 'Logo Icon',
      description: 'Select a logo icon image for the brand',
    },
  ],
}
