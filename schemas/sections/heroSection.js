export default {
  name: 'heroSection',
  type: 'document',
  title: 'LV1: Hero Section',
  fields: [
    {
      name: 'heading1',
      type: 'string',
      title: 'Heading 1',
      description: 'Main heading for the hero section',
    },
    {
      name: 'subheading',
      type: 'string',
      title: 'Subheading',
      description: 'Optional subheading or tagline',
    },
    {
      name: 'expertiseTechIcons',
      type: 'array',
      title: 'Expertise Tech Icons',
      description: 'Select the technology icons for your expertise',
      of: [
        {
          type: 'string',
          options: {
            list: [
              {title: 'React', value: 'react'},
              {title: 'Vue', value: 'vue'},
              {title: 'Angular', value: 'angular'},
              // Add more technology icons as needed
            ],
          },
        },
      ],
    },
    {
      name: 'introBox',
      type: 'object',
      title: 'Intro Box',
      fields: [
        {
          name: 'tagline',
          type: 'string',
          title: 'Tagline',
          description: 'Enter the tagline for the intro box',
          initialValue: 'No.1 Agency in Vietnam',
          options: {
            isHighlighted: true, // Highlight the field for easy editing
          },
          validation: (Rule) => Rule.required().error('Tagline is required'),
        },
        {
          name: 'subtitle',
          type: 'string',
          title: 'Subtitle',
        },
      ],
    },
    {
      name: 'backgroundImage',
      type: 'image',
      title: 'Background Image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          description: 'Caption for the background image',
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
          description: 'Image attribution or source',
        },
      ],
    },
  ],
}
