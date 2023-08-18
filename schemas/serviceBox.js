export default {
  name: 'servicesBox',
  type: 'object',
  title: 'Service Box',
  fields: [
    {
      name: 'icon',
      type: 'image',
      title: 'Icon',
      description: 'Optional icon for the service',
    },
    {
      name: 'text',
      type: 'string',
      title: 'Text',
      description: 'Enter the text for the service',
    },
  ],
}
