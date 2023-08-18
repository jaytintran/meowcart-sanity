export default {
  name: 'visionStatementSection',
  type: 'document',
  title: 'LV1: Vision Statement',
  fields: [
    {
      name: 'iconLogo',
      type: 'image',
      title: 'Icon Logo',
      description: 'Select an icon logo for the section',
    },
    {
      name: 'paragraph',
      type: 'array',
      title: 'Paragraph',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Bold', value: 'bold'},
            {title: 'Italic', value: 'italic'},
            {title: 'Small', value: 'small'},
            {title: 'Medium', value: 'medium'},
            {title: 'Large', value: 'large'},
          ],
          lists: [],
        },
      ],
      description: 'Enter the styled paragraph for the section',
    },
    {
      name: 'backgroundImage',
      type: 'image',
      title: 'Background Image',
      description: 'Select a background image for the section',
      options: {
        hotspot: true,
      },
    },
  ],
}
