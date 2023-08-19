export default {
  name: 'contactSection',
  type: 'document',
  title: 'LV1: Contact Section',
  fields: [
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
      description: 'Enter the subtitle for this section',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Enter the title for this section',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'socialMediaLinks',
      type: 'array',
      title: 'Social Media Links',
      of: [{type: 'socialMediaLink'}], // Use the "socialMediaLink" sub-schema
    },
  ],
}
