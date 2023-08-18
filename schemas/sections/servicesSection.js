export default {
  name: 'servicesSection',
  type: 'document',
  title: 'LV1: Services Section',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
      description: 'Enter the heading for this section',
    },
    {
      name: 'services',
      type: 'array',
      title: 'Highlighted Services',
      of: [{type: 'highlightedServices'}],
    },
    {
      name: 'leftColumn',
      type: 'object',
      title: 'Left Column',
      fields: [
        {
          name: 'heading',
          type: 'string',
          title: 'Heading',
          description: 'Enter the heading for this section',
        },
        {
          name: 'title',
          type: 'string',
          title: 'Title',
          description: 'Enter the title for the left column',
          initialValue: 'Migration', // Set a placeholder value
        },
        {
          name: 'description',
          type: 'text',
          title: 'Extra Description', // Add the new field for extra description
          description: 'Enter extra description for the services section',
          initialValue: 'We’ve created a photonic processor...',
        },
        {
          name: 'services',
          type: 'array',
          title: 'Services',
          of: [{type: 'servicesBox'}], // Use the "servicesBox" subschema
        },
        {
          name: 'seeAllServicesLink',
          type: 'url',
          title: 'See All Services Link',
          description: 'Enter the link for "See all services" button',
        },
      ],
    },
    {
      name: 'rightColumn',
      type: 'object',
      title: 'Right Column',
      fields: [
        {
          name: 'photos',
          type: 'array',
          title: 'Photos for Slider',
          of: [{type: 'image'}], // Define a new schema type for images
        },
      ],
    },
  ],
}
