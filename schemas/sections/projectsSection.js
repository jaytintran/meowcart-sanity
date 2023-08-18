export default {
  name: 'projectsSection',
  type: 'document',
  title: 'LV1: Projects Section',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
      description: 'Enter the heading for this section',
      initialValue: 'Our projects', // Set a placeholder value
    },
    {
      name: 'projects',
      type: 'array',
      title: 'Projects',
      of: [{type: 'project'}], // Use the "project" sub-schema
    },
  ],
}
