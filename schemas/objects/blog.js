export default {
  name: 'blog',
  type: 'object',
  title: 'Blog',
  fields: [
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{type: 'string'}],
      description: 'Select or enter tags for the blog',
    },
    {
      name: 'date',
      type: 'date',
      title: 'Date',
      description: 'Select the date for the blog',
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
      description: 'Enter the heading for the blog',
    },
    {
      name: 'shortDescription',
      type: 'text',
      title: 'Short Description',
      description: 'Enter a short description for the blog',
    },
    {
      name: 'link',
      type: 'url',
      title: 'Link',
      description: 'Enter the link URL for the blog',
    },
    {
      name: 'backgroundImage',
      type: 'image',
      title: 'Background Image',
      description: 'Select a background image for the blog',
      options: {
        hotspot: true,
      },
    },
  ],
}
