export default {
  name: 'project',
  type: 'object',
  title: 'LV2: Project',
  fields: [
    {
      name: 'brandSample',
      type: 'image',
      title: 'Brand Sample Hero Image',
      description: 'Select a hero image representing the brand sample',
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
      description: 'Enter the heading for the project',
    },
    {
      name: 'link',
      type: 'url',
      title: 'Link',
      description: 'Enter the link URL for the brand/business/client',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Enter a short description for the project',
    },
    {
      name: 'exploreButtonLink',
      type: 'url',
      title: 'Explore Button Link',
      description: 'Enter the link URL for the "Explore" button',
    },
  ],
}
