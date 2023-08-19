export default {
  name: 'clientsSection',
  type: 'document',
  title: 'LV1: Clients Section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Enter the title for this section',
    },
    {
      name: 'clients',
      type: 'array',
      title: 'Clients',
      of: [{type: 'client'}], // Use the "client" sub-schema
    },
  ],
}
