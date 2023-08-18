export default {
  name: 'clientsPartnerBrands',
  type: 'document',
  title: 'LV2: Clients & Partner Brands',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Enter the title for this section',
    },
    {
      name: 'brands',
      type: 'array',
      title: 'Brands',
      of: [{type: 'brand'}], // Use the new "brand" sub-schema
    },
  ],
}
