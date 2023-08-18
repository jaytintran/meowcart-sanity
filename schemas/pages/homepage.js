export default {
  name: 'homepage',
  type: 'document',
  title: 'LV0: Homepage ↓',
  fields: [
    {
      name: 'heroSection',
      type: 'heroSection', // Reference the "Hero" schema
      title: 'Hero Section',
    },
    {
      name: 'clientsPartnerBrands',
      type: 'clientsPartnerBrands', // Reference the "Clients & Partner Brands" schema
      title: 'Clients & Partner Brands Section',
    },
    {name: 'servicesSection', type: 'servicesSection', title: 'Services Section'},
    {
      name: 'visionStatementSection',
      type: 'visionStatementSection',
      title: 'Vision Statement Section',
    },
  ],
}
