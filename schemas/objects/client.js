export default {
  name: 'client',
  type: 'object',
  title: 'Client',
  fields: [
    {
      name: 'photo',
      type: 'image',
      title: 'Photo',
      description: 'Select a photo of the client',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: "Enter the client's name",
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
      description: "Enter the company's name",
    },
    {
      name: 'testimonial',
      type: 'text',
      title: 'Testimonial',
      description: 'Enter the client testimonial',
    },
  ],
}
