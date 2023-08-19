export default {
  name: 'socialMediaLink',
  type: 'object',
  title: 'Social Media Link',
  fields: [
    {
      name: 'platform',
      type: 'string',
      title: 'Platform',
      description: 'Enter the social media platform (e.g., Facebook, Twitter)',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'url',
      type: 'url',
      title: 'URL',
      description: 'Enter the social media URL',
      validation: (Rule) => Rule.required(),
    },
  ],
}
