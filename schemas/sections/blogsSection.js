export default {
  name: 'blogsSection',
  type: 'document',
  title: 'LV1: Blogs Section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Enter the title for this section',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Enter a description for this section',
    },
    {
      name: 'seeAllBlogsLink',
      type: 'url',
      title: 'See All Blogs Link',
      description: 'Enter the link URL for "See all blogs" button',
    },
    {
      name: 'blogs',
      type: 'array',
      title: 'Blogs',
      of: [{type: 'blog'}], // Use the "blog" sub-schema
    },
  ],
}
